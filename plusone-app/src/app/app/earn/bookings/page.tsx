import { createClient } from '@/lib/supabase/server'
import { getMyBookings } from '@/lib/marketplace'
import BookingsClient from './BookingsClient'

export default async function HostBookingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const bookings = await getMyBookings()
  return <BookingsClient bookings={bookings} currentUserId={user?.id ?? null} />
}
