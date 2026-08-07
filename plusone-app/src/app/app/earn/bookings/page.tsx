'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import { MOCK_BOOKINGS } from '@/lib/mock-data'

export default function HostBookingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700 }}>Host Bookings Schedule</h2>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
          Upcoming confirmed activities and completed companion sessions
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {MOCK_BOOKINGS.map((booking) => (
          <div
            key={booking.id}
            className="app-card"
            style={{
              padding: 24,
              borderRadius: 22,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 650 }}>{booking.title}</h3>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 999,
                    background: 'color-mix(in oklch, var(--primary) 12%, transparent)',
                    color: 'var(--primary)',
                  }}
                >
                  {booking.category}
                </span>
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 8 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={14} style={{ color: 'var(--primary)' }} /> {booking.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={14} style={{ color: 'var(--accent)' }} /> {booking.startTime} - {booking.endTime}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--primary)' }}>
                <ShieldCheck size={14} /> Meeting point: {booking.meetingPoint}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Payout Amount</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>₹{booking.price}</div>
              </div>

              <button
                style={{
                  padding: '10px 16px',
                  borderRadius: 14,
                  border: '1px solid var(--border)',
                  background: 'var(--secondary)',
                  color: 'var(--foreground)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <MessageSquare size={15} /> Message Guest
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
