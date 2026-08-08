'use client'

import { useState } from 'react'
import { createBooking } from '@/app/marketplace/actions'

export default function BookingClient({ listingId, hourlyRate }: { listingId: string; hourlyRate: number }) {
  const [message, setMessage] = useState('')
  async function submit(formData: FormData) {
    const result = await createBooking(listingId, String(formData.get('startsAt')), String(formData.get('endsAt')), String(formData.get('location') || ''))
    setMessage('error' in result ? (result.error || 'Could not request this plan.') : 'Request sent. You will see it in My plans.')
  }
  return <form action={submit} className="app-card" style={{ padding: 22, display: 'grid', gap: 12 }}>
    <h2 style={{ margin: 0, fontSize: 20 }}>Book this PlusOne</h2>
    <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 13 }}>₹{hourlyRate.toLocaleString('en-IN')}/hour · final payment happens after confirmation.</p>
    <label style={{ fontSize: 12 }}>Start<input className="app-input w-full" name="startsAt" type="datetime-local" required /></label>
    <label style={{ fontSize: 12 }}>End<input className="app-input w-full" name="endsAt" type="datetime-local" required /></label>
    <label style={{ fontSize: 12 }}>Meeting place<input className="app-input w-full" name="location" placeholder="Public place in the listed city" required /></label>
    {message && <p role="status" style={{ margin: 0, color: message.startsWith('Request') ? 'var(--accent-foreground)' : 'var(--destructive)', fontSize: 13 }}>{message}</p>}
    <button className="app-btn app-btn-primary" type="submit">Request this PlusOne</button>
  </form>
}
