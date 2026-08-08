'use client'

import { useState } from 'react'
import { CalendarCheck, MapPin, Clock, Check, X } from 'lucide-react'
import { respondToBooking } from '@/app/marketplace/actions'

type Booking = {
  id: string
  starts_at: string
  ends_at: string
  location: string
  amount: number
  currency: string
  status: string
  host_id: string
  customer_id: string
}

export default function BookingsClient({
  bookings: initialBookings,
  currentUserId,
}: {
  bookings: Booking[]
  currentUserId: string | null
}) {
  const [bookings, setBookings] = useState(initialBookings)
  const [message, setMessage] = useState('')

  async function respond(id: string, status: 'accepted' | 'declined') {
    const result = await respondToBooking(id, status)
    if ('error' in result) return setMessage(result.error)
    setBookings((items) => items.map((item) => item.id === id ? { ...item, status } : item))
    setMessage(status === 'accepted' ? 'Booking confirmed. Go show up.' : 'Booking declined.')
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 24, fontWeight: 650 }}>My plans</h2>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
          All your bookings — ones you&apos;re earning from and ones you&apos;ve requested.
        </p>
      </div>
      {message && <p style={{ color: 'var(--primary)', fontSize: 13, marginBottom: 16 }}>{message}</p>}
      {bookings.length === 0 ? (
        <div className="app-card" style={{ padding: 28, color: 'var(--muted-foreground)' }}>
          Your real booking requests will appear here.
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 14 }}>
          {bookings.map((booking) => {
            const isHost = currentUserId === booking.host_id
            const isRequested = booking.status === 'requested'
            return (
              <article
                className="app-card"
                key={booking.id}
                style={{ padding: 20, display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <span className="app-badge app-badge-primary">{booking.status}</span>
                    <span className="app-badge" style={{ opacity: 0.7 }}>
                      {isHost ? 'Incoming request' : 'Your request'}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 17 }}>
                    <CalendarCheck size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                    Booking
                  </h3>
                  <div style={{ color: 'var(--muted-foreground)', fontSize: 13, display: 'grid', gap: 6 }}>
                    <span>
                      <Clock size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                      {new Date(booking.starts_at).toLocaleString('en-IN')}
                    </span>
                    <span>
                      <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                      {booking.location}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
                  <strong>₹{Number(booking.amount).toLocaleString('en-IN')}</strong>
                  {/* E2 fixed: only the host can accept/decline */}
                  {isHost && isRequested && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="app-btn app-btn-primary" onClick={() => respond(booking.id, 'accepted')}>
                        <Check size={14} /> Accept
                      </button>
                      <button className="app-btn app-btn-outline" onClick={() => respond(booking.id, 'declined')}>
                        <X size={14} /> Decline
                      </button>
                    </div>
                  )}
                  {!isHost && isRequested && (
                    <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Waiting for response…</span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
