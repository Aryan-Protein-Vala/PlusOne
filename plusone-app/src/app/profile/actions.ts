'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Please log in first.' }
  const name = String(formData.get('name') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const city = String(formData.get('city') || '').trim()
  const bio = String(formData.get('bio') || '').trim()
  if (name.length < 2 || !city) return { error: 'Please add your name and city.' }
  if (bio.length > 500) return { error: 'Keep your bio under 500 characters.' }
  const { error } = await supabase.from('profiles').update({ name, phone: phone || null, city, bio: bio || null, updated_at: new Date().toISOString() }).eq('id', user.id)
  if (error) return { error: error.message }
  revalidatePath('/app/me')
  revalidatePath('/app/explore')
  return { success: true }
}
