'use client'

import { useState } from 'react'
import { CalendarCheck, MapPin, Clock, Check, X } from 'lucide-react'
import { respondToBooking } from '@/app/marketplace/actions'

type Booking = { id: string; starts_at: string; ends_at: string; location: string; amount: number; currency: string; status: string; host_id: string; customer_id: string }

export default function BookingsClient({ bookings: initialBookings }: { bookings: Booking[] }) {
  const [bookings, setBookings] = useState(initialBookings)
  const [message, setMessage] = useState('')
  async function respond(id: string, status: 'accepted' | 'declined') {
    const result = await respondToBooking(id, status)
    if ('error' in result) return setMessage(result.error)
    setBookings((items) => items.map((item) => item.id === id ? { ...item, status } : item))
  }
  return <div><div style={{ marginBottom: 24 }}><h2 style={{ margin: '0 0 5px', fontSize: 24, fontWeight: 650 }}>Bookings</h2><p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>Manage your requests and upcoming plans.</p></div>{message && <p style={{ color: 'var(--destructive)', fontSize: 13 }}>{message}</p>}{bookings.length === 0 ? <div className="app-card" style={{ padding: 28, color: 'var(--muted-foreground)' }}>Your real booking requests will appear here.</div> : <div style={{ display: 'grid', gap: 14 }}>{bookings.map((booking) => <article className="app-card" key={booking.id} style={{ padding: 20, display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}><div><span className="app-badge app-badge-primary">{booking.status}</span><h3 style={{ margin: '12px 0 10px', fontSize: 17 }}><CalendarCheck size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Booking request</h3><div style={{ color: 'var(--muted-foreground)', fontSize: 13, display: 'grid', gap: 6 }}><span><Clock size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />{new Date(booking.starts_at).toLocaleString('en-IN')}</span><span><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />{booking.location}</span></div></div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}><strong>₹{Number(booking.amount).toLocaleString('en-IN')}</strong>{booking.status === 'requested' && <div style={{ display: 'flex', gap: 8 }}><button className="app-btn app-btn-primary" onClick={() => respond(booking.id, 'accepted')}><Check size={14} /> Accept</button><button className="app-btn app-btn-outline" onClick={() => respond(booking.id, 'declined')}><X size={14} /> Decline</button></div>}</div></article>)}</div>}</div>
}
