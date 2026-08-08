import { createClient } from '@/lib/supabase/server'

export type Listing = {
  id: string
  host_id: string
  title: string
  description: string
  category: string
  city: string
  country_code: string
  timezone: string
  hourly_rate: number
  currency: string
  status: 'draft' | 'published' | 'paused' | 'archived'
  created_at: string
}

export async function getPublishedListings(options?: { city?: string; category?: string }) {
  const supabase = await createClient()
  let query = supabase
    .from('provider_listings')
    .select('id, host_id, title, description, category, city, country_code, timezone, hourly_rate, currency, status, created_at')
    .eq('country_code', 'IN')
    .eq('currency', 'INR')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(50)

  if (options?.city) query = query.ilike('city', `%${options.city}%`)
  if (options?.category) query = query.eq('category', options.category)

  const { data, error } = await query
  if (error) {
    console.error('Unable to load published listings:', error.message)
    return []
  }
  return (data || []) as Listing[]
}

export async function getMyListingsResult() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { data: [] as Listing[], error: 'Please log in to see your offers.' }

  const { data, error } = await supabase
    .from('provider_listings')
    .select('id, host_id, title, description, category, city, country_code, timezone, hourly_rate, currency, status, created_at')
    .eq('host_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Unable to load your offers:', error.message)
    return { data: [] as Listing[], error: error.message }
  }
  return { data: (data || []) as Listing[], error: null }
}

export async function getMyListings() {
  const result = await getMyListingsResult()
  return result.data
}

export async function getMyBookings() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('bookings')
    .select('id, listing_id, customer_id, host_id, starts_at, ends_at, location, amount, currency, platform_fee, provider_payout, status, payment_status, created_at')
    .or(`customer_id.eq.${user.id},host_id.eq.${user.id}`)
    .order('starts_at', { ascending: true })

  if (error) {
    console.error('Unable to load your bookings:', error.message)
    return []
  }
  return data || []
}
