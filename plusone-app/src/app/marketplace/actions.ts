'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

const INDIA_COUNTRY = 'IN'
const INDIA_CURRENCY = 'INR'

type ActionResult = { success: true } | { error: string }

async function currentUser() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) return { supabase, user: null }

  // Auto-repair profile if it is missing
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', data.user.id)
    .maybeSingle()

  if (!profile && !profileError) {
    const email = data.user.email || ''
    const fullName = data.user.user_metadata?.full_name || email.split('@')[0] || 'User'
    await supabase.from('profiles').insert({
      id: data.user.id,
      email,
      name: fullName,
      role: 'host', // Marked as host to allow listing creation
      country_code: 'IN',
      preferred_currency: 'INR',
    })
  }

  return { supabase, user: data.user }
}

function text(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : ''
}

function positiveNumber(value: FormDataEntryValue | null) {
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? number : null
}

export async function loadPublishedListings(city?: string, category?: string) {
  const { supabase } = await currentUser()
  let query = supabase
    .from('provider_listings')
    .select('id, host_id, title, description, category, city, country_code, timezone, hourly_rate, currency, status, created_at')
    .eq('country_code', INDIA_COUNTRY)
    .eq('currency', INDIA_CURRENCY)
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(50)

  if (city?.trim()) query = query.ilike('city', `%${city.trim()}%`)
  if (category?.trim()) query = query.eq('category', category.trim())
  const { data, error } = await query
  return { data: data || [], error: error?.message || null }
}

export async function loadMyListings() {
  const { supabase, user } = await currentUser()
  if (!user) return { data: [], error: 'Please log in.' }
  const { data, error } = await supabase.from('provider_listings')
    .select('id, host_id, title, description, category, city, country_code, timezone, hourly_rate, currency, status, created_at')
    .eq('host_id', user.id).order('created_at', { ascending: false })
  return { data: data || [], error: error?.message || null }
}

export async function loadMyBookings() {
  const { supabase, user } = await currentUser()
  if (!user) return { data: [], error: 'Please log in.' }
  const { data, error } = await supabase.from('bookings')
    .select('id, listing_id, customer_id, host_id, starts_at, ends_at, location, amount, currency, platform_fee, provider_payout, status, payment_status, created_at')
    .or(`customer_id.eq.${user.id},host_id.eq.${user.id}`).order('starts_at', { ascending: true })
  return { data: data || [], error: error?.message || null }
}

export async function createListing(formData: FormData): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before creating a listing.' }

  const title = text(formData.get('title'))
  const description = text(formData.get('description'))
  const category = text(formData.get('category'))
  const city = text(formData.get('city'))
  const hourlyRate = positiveNumber(formData.get('hourlyRate'))

  if (title.length < 3 || description.length < 10 || !category || !city || !hourlyRate) {
    return { error: 'Please complete every listing field with valid information.' }
  }

  const { error } = await supabase.from('provider_listings').insert({
    host_id: user.id,
    title,
    description,
    category,
    city,
    country_code: INDIA_COUNTRY,
    timezone: 'Asia/Kolkata',
    hourly_rate: hourlyRate,
    currency: INDIA_CURRENCY,
    status: 'published',
  })

  if (error) return { error: error.message }
  revalidatePath('/app/earn')
  revalidatePath('/app/explore')
  return { success: true }
}

export async function updateListing(listingId: string, formData: FormData): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before editing a listing.' }
  if (!listingId) return { error: 'Listing not found.' }

  const title = text(formData.get('title'))
  const description = text(formData.get('description'))
  const category = text(formData.get('category'))
  const city = text(formData.get('city'))
  const hourlyRate = positiveNumber(formData.get('hourlyRate'))

  if (title.length < 3 || description.length < 10 || !category || !city || !hourlyRate) {
    return { error: 'Please complete every listing field with valid information.' }
  }

  const { error } = await supabase
    .from('provider_listings')
    .update({ title, description, category, city, hourly_rate: hourlyRate, updated_at: new Date().toISOString() })
    .eq('id', listingId)
    .eq('host_id', user.id)

  if (error) return { error: error.message }
  revalidatePath('/app/earn')
  revalidatePath('/app/explore')
  return { success: true }
}

export async function setListingStatus(listingId: string, status: 'published' | 'paused' | 'archived'): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before changing a listing.' }

  const { error } = await supabase
    .from('provider_listings')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', listingId)
    .eq('host_id', user.id)

  if (error) return { error: error.message }
  revalidatePath('/app/earn')
  revalidatePath('/app/explore')
  return { success: true }
}

export async function createBooking(listingId: string, startsAt: string, endsAt: string, location: string): Promise<ActionResult & { bookingId?: string }> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before requesting a booking.' }
  if (!listingId || !startsAt || !endsAt || !location.trim()) return { error: 'Please provide the activity time and meeting location.' }

  const { data: listing, error: listingError } = await supabase
    .from('provider_listings')
    .select('host_id, hourly_rate, currency')
    .eq('id', listingId)
    .eq('status', 'published')
    .single()

  if (listingError || !listing) return { error: 'This listing is no longer available.' }
  if (listing.host_id === user.id) return { error: 'You cannot book your own listing.' }

  const start = new Date(startsAt)
  const end = new Date(endsAt)
  const hours = (end.getTime() - start.getTime()) / 3_600_000
  if (!Number.isFinite(hours) || hours <= 0 || hours > 24) return { error: 'Please choose a valid duration of up to 24 hours.' }

  const amount = Math.round(Number(listing.hourly_rate) * hours * 100) / 100
  const platformFee = Math.round(amount * 0.15 * 100) / 100
  const { data: booking, error } = await supabase.from('bookings').insert({
    listing_id: listingId,
    customer_id: user.id,
    host_id: listing.host_id,
    starts_at: start.toISOString(),
    ends_at: end.toISOString(),
    location: location.trim(),
    amount,
    currency: INDIA_CURRENCY,
    platform_fee: platformFee,
    provider_payout: amount - platformFee,
    status: 'requested',
    payment_status: 'unpaid',
  }).select('id').single()

  if (error || !booking) return { error: error?.message || 'Unable to create booking.' }
  revalidatePath('/app/earn/bookings')
  return { success: true, bookingId: booking.id }
}

export async function respondToBooking(bookingId: string, status: 'accepted' | 'declined'): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before responding to a booking.' }

  const { error } = await supabase.from('bookings').update({ status, updated_at: new Date().toISOString() })
    .eq('id', bookingId).eq('host_id', user.id).eq('status', 'requested')

  if (error) return { error: error.message }
  revalidatePath('/app/earn/bookings')
  return { success: true }
}

export async function sendMessage(conversationId: string, body: string): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before sending messages.' }
  const cleanBody = body.trim()
  if (!conversationId || !cleanBody || cleanBody.length > 5000) return { error: 'Message cannot be empty or longer than 5,000 characters.' }

  const { error } = await supabase.from('messages').insert({ conversation_id: conversationId, sender_id: user.id, body: cleanBody })
  if (error) return { error: error.message }
  revalidatePath('/app/messages')
  return { success: true }
}

export async function submitReview(bookingId: string, reviewedId: string, rating: number, comment: string): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before leaving a review.' }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return { error: 'Rating must be between 1 and 5.' }

  const { error } = await supabase.from('reviews').insert({ booking_id: bookingId, reviewer_id: user.id, reviewed_id: reviewedId, rating, comment: comment.trim() || null })
  if (error) return { error: error.message }
  revalidatePath('/app/explore')
  return { success: true }
}

export async function reportUser(reportedUserId: string | null, category: string, details: string, bookingId?: string): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before submitting a report.' }
  if (details.trim().length < 10) return { error: 'Please provide at least 10 characters describing the issue.' }

  const { error } = await supabase.from('reports').insert({ reporter_id: user.id, reported_user_id: reportedUserId, booking_id: bookingId || null, category, details: details.trim() })
  if (error) return { error: error.message }
  revalidatePath('/app/safety')
  return { success: true }
}

export async function loadOpenPlans() {
  const { supabase } = await currentUser()
  const { data, error } = await supabase.from('plans').select('id, creator_id, activity, location, start_time, budget, currency, description, status').eq('country_code', INDIA_COUNTRY).eq('currency', INDIA_CURRENCY).eq('status', 'open').order('start_time', { ascending: true }).limit(50)
  return { data: data || [], error: error?.message || null }
}

export async function applyToPlanReal(planId: string, proposedRate: number, message: string): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before applying.' }
  if (!planId || !Number.isFinite(proposedRate) || proposedRate <= 0 || message.trim().length < 5) return { error: 'Please provide a valid charge and message.' }
  const { error } = await supabase.from('plan_applications').insert({ plan_id: planId, applicant_id: user.id, proposed_rate: proposedRate, message: message.trim() })
  if (error) return { error: error.message }
  revalidatePath('/app/earn/marketplace')
  revalidatePath('/app/earn/applications')
  return { success: true }
}

export async function acceptPlanApplication(applicationId: string): Promise<ActionResult> {
  const { supabase, user } = await currentUser()
  if (!user) return { error: 'Please log in before accepting an application.' }
  const { data: application, error: applicationError } = await supabase
    .from('plan_applications')
    .select('id, plan_id, applicant_id, proposed_rate, plans!inner(id, creator_id, location, start_time, budget, currency, status)')
    .eq('id', applicationId)
    .single()
  if (applicationError || !application || (application.plans as any).creator_id !== user.id) return { error: 'You cannot accept this application.' }
  const plan = application.plans as any
  if (plan.status !== 'open') return { error: 'This plan is no longer open.' }
  const startsAt = new Date(plan.start_time)
  const endsAt = new Date(startsAt.getTime() + 60 * 60 * 1000)
  const amount = Number(application.proposed_rate || plan.budget)
  const platformFee = Math.round(amount * 0.15 * 100) / 100
  const { error: bookingError } = await supabase.from('bookings').insert({ plan_id: plan.id, customer_id: user.id, host_id: application.applicant_id, starts_at: startsAt.toISOString(), ends_at: endsAt.toISOString(), location: plan.location, amount, currency: 'INR', platform_fee: platformFee, provider_payout: amount - platformFee, status: 'accepted', payment_status: 'unpaid' })
  if (bookingError) return { error: bookingError.message }
  const { error: updateError } = await supabase.from('plan_applications').update({ status: 'accepted' }).eq('id', applicationId)
  if (updateError) return { error: updateError.message }
  await supabase.from('plans').update({ status: 'matched' }).eq('id', plan.id).eq('creator_id', user.id)
  revalidatePath('/app/earn/applications')
  revalidatePath('/app/earn/bookings')
  revalidatePath('/app/earn/marketplace')
  return { success: true }
}
