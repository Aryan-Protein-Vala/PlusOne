'use client'

import { useState, useRef } from 'react'
import { createBooking } from '@/app/marketplace/actions'
import { Loader2 } from 'lucide-react'

export default function BookingClient({ listingId, hourlyRate }: { listingId: string; hourlyRate: number }) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const formData = new FormData(e.currentTarget)
    const result = await createBooking(
      listingId,
      String(formData.get('startsAt')),
      String(formData.get('endsAt')),
      String(formData.get('location') || ''),
    )
    setLoading(false)
    if ('error' in result) {
      setMessage(result.error || 'Could not request this plan.')
    } else {
      setMessage('Request sent! Check My plans to track it.')
      formRef.current?.reset()
    }
  }

  const isSuccess = message.startsWith('Request sent')

  return (
    <form ref={formRef} onSubmit={submit} className="app-card" style={{ padding: 22, display: 'grid', gap: 12 }}>
      <h2 style={{ margin: 0, fontSize: 20 }}>Book this PlusOne</h2>
      <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 13 }}>
        ₹{hourlyRate.toLocaleString('en-IN')}/hour · final payment happens after confirmation.
      </p>
      <label style={{ fontSize: 12 }}>
        Start
        <input className="app-input w-full" name="startsAt" type="datetime-local" required />
      </label>
      <label style={{ fontSize: 12 }}>
        End
        <input className="app-input w-full" name="endsAt" type="datetime-local" required />
      </label>
      <label style={{ fontSize: 12 }}>
        Meeting place
        <input
          className="app-input w-full"
          name="location"
          placeholder="Public place in the listed city"
          required
        />
      </label>
      {message && (
        <p
          role="status"
          style={{
            margin: 0,
            color: isSuccess ? 'var(--accent-foreground)' : 'var(--destructive)',
            fontSize: 13,
          }}
        >
          {message}
        </p>
      )}
      <button className="app-btn app-btn-primary" type="submit" disabled={loading}>
        {loading ? <><Loader2 size={14} className="animate-spin" /> Requesting…</> : 'Request this PlusOne'}
      </button>
    </form>
  )
}
