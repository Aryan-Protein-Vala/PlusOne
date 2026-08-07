'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  
  // Route founder to admin, others to explore
  if (email === 'aryansharma24112003@gmail.com') {
    redirect('/admin')
  } else {
    redirect('/app/explore')
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string
  const phone = formData.get('phone') as string
  const city = formData.get('city') as string
  const role = (formData.get('role') as string) || 'customer'

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone: phone,
        city: city,
        role: role,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (!data.session) {
    return { error: 'Please check your email to confirm your account, or disable Email Confirmations in your Supabase dashboard.' }
  }

  revalidatePath('/', 'layout')
  
  if (email === 'aryansharma24112003@gmail.com') {
    redirect('/admin')
  } else {
    redirect('/app/explore')
  }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/auth/login')
}
