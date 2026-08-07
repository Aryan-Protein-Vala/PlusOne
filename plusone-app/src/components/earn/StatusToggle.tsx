'use client'

import { useState } from 'react'
import { updateAvailability } from '@/app/plans/actions'
import { motion } from 'framer-motion'

export function StatusToggle() {
  const [status, setStatus] = useState<'free_now' | 'available_today' | 'busy' | 'offline'>('offline')
  const [loading, setLoading] = useState(false)

  const handleStatusChange = async (newStatus: typeof status) => {
    setLoading(true)
    setStatus(newStatus)
    try {
      await updateAvailability(newStatus)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const options = [
    { value: 'free_now', label: 'Free Now', color: 'var(--accent)' },
    { value: 'available_today', label: 'Available Today', color: 'var(--primary)' },
    { value: 'busy', label: 'Busy', color: 'var(--destructive)' },
    { value: 'offline', label: 'Offline', color: 'var(--muted-foreground)' },
  ] as const

  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="app-card" style={{ marginBottom: 24, padding: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 520, letterSpacing: '-.02em', margin: '0 0 16px' }}>Your Availability</h3>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {options.map(opt => (
          <button
            key={opt.value}
            disabled={loading}
            onClick={() => handleStatusChange(opt.value)}
            style={{
              padding: '10px 16px',
              borderRadius: 20,
              border: status === opt.value ? `1px solid ${opt.color}` : '1px solid var(--border)',
              background: status === opt.value ? `color-mix(in oklch, ${opt.color} 10%, transparent)` : 'transparent',
              color: status === opt.value ? opt.color : 'var(--foreground)',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: opt.color, opacity: status === opt.value ? 1 : 0.4 }} />
            {opt.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
