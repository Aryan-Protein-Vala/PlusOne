'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function createPlan(formData: FormData) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not logged in')

  const activity = String(formData.get('activity') || '').trim()
  const location = String(formData.get('location') || '').trim()
  const budget = parseFloat(String(formData.get('budget') || ''))
  const description = String(formData.get('description') || '').trim()

  if (!activity || !location || !Number.isFinite(budget) || budget <= 0) {
    return { error: 'Please provide an activity, location, and a valid charge.' }
  }
  
  // Combine date and time for start_time
  const date = String(formData.get('date') || '')
  const time = String(formData.get('time') || '')
  const startDate = new Date(`${date}T${time}:00+05:30`)
  if (!date || !time || Number.isNaN(startDate.getTime()) || startDate.getTime() <= Date.now()) {
    return { error: 'Please choose a valid future date and time in India.' }
  }
  const start_time = startDate.toISOString()

  const { error } = await supabase.from('plans').insert({
    creator_id: user.id,
    activity,
    location,
    start_time,
    budget,
    currency: 'INR',
    country_code: 'IN',
    description,
    status: 'open'
  })

  if (error) {
    console.error('Error creating plan:', error)
    return { error: error.message }
  }

  revalidatePath('/app/explore')
  revalidatePath('/app/earn/marketplace')
  return { success: true }
}

export async function applyToPlan(planId: string, proposedRate: number, message: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not logged in')

  const { error } = await supabase.from('plan_applications').insert({
    plan_id: planId,
    applicant_id: user.id,
    proposed_rate: proposedRate,
    message: message
  })

  if (error) {
    console.error('Error applying to plan:', error)
    return { error: error.message }
  }

  revalidatePath('/hosts/dashboard')
  return { success: true }
}

export async function getAvailability(): Promise<'free_now' | 'available_today' | 'busy' | 'offline'> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return 'offline'
  const { data } = await supabase.from('profiles').select('availability_status').eq('id', user.id).maybeSingle()
  return (data?.availability_status || 'offline') as 'free_now' | 'available_today' | 'busy' | 'offline'
}

export async function updateAvailability(status: 'free_now' | 'available_today' | 'busy' | 'offline') {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not logged in')

  const { error } = await supabase.from('profiles').update({
    availability_status: status
  }).eq('id', user.id)

  if (error) {
    console.error('Error updating availability:', error)
    return { error: error.message }
  }

  revalidatePath('/hosts/dashboard')
  return { success: true }
}
