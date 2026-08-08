'use client'

import { useEffect, useState } from 'react'
import { getAvailability, updateAvailability } from '@/app/plans/actions'
import { motion } from 'framer-motion'

export function StatusToggle() {
  const [status, setStatus] = useState<'free_now' | 'available_today' | 'busy' | 'offline'>('offline')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getAvailability().then(setStatus).catch(() => setError('Could not load your availability.'))
  }, [])

  const handleStatusChange = async (newStatus: typeof status) => {
    setLoading(true)
    setError('')
    const previous = status
    setStatus(newStatus)
    try {
      const result = await updateAvailability(newStatus)
      if ('error' in result && result.error) { setStatus(previous); setError(result.error) }
    } catch { setStatus(previous); setError('Could not save your availability.') } finally { setLoading(false) }
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
      {error && <p style={{ margin: '0 0 12px', color: 'var(--destructive)', fontSize: 12 }}>{error}</p>}
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
