import { getMyBookings } from '@/lib/marketplace'
import BookingsClient from './BookingsClient'

export default async function HostBookingsPage() {
  const bookings = await getMyBookings()
  return <BookingsClient bookings={bookings} />
}
