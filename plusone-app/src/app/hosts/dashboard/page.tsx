'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  IndianRupee,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import { applyToPlan, updateAvailability } from '@/app/plans/actions'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function StatusToggle() {
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
    <div className="app-card" style={{ marginBottom: 40, padding: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 520, letterSpacing: '-.02em', margin: '0 0 16px' }}>Your Availability</h3>
      <div style={{ display: 'flex', gap: 12 }}>
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
    </div>
  )
}

function LivePlanCard({ plan }: { plan: any }) {
  const [applied, setApplied] = useState(false)
  const [applying, setApplying] = useState(false)

  const handleApply = async () => {
    setApplying(true)
    try {
      await applyToPlan(plan.id, plan.budget, "I'm nearby and would love to join!")
      setApplied(true)
    } catch (e) {
      console.error(e)
    } finally {
      setApplying(false)
    }
  }

  return (
    <div className="app-card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span className="app-badge app-badge-primary">Live Now</span>
            <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>2 km away</span>
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 520, margin: 0 }}>{plan.activity}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <strong style={{ fontSize: 16, color: 'var(--foreground)' }}>₹{plan.budget}</strong>
          <span style={{ display: 'block', fontSize: 11, color: 'var(--muted-foreground)' }}>Budget</span>
        </div>
      </div>
      
      <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
        "{plan.description}"
      </p>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--foreground)' }}>
          <MapPin size={12} style={{ color: 'var(--muted-foreground)' }} /> {plan.location}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--foreground)' }}>
          <Clock size={12} style={{ color: 'var(--muted-foreground)' }} /> {plan.time}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {applied ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '10px 14px', background: 'oklch(0.78 0.07 150 / 0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground)' }}>Application sent!</span>
          </motion.div>
        ) : (
          <motion.button 
            disabled={applying}
            onClick={handleApply}
            className="app-btn app-btn-primary" 
            style={{ width: '100%', padding: '10px 14px' }}
          >
            {applying ? 'Applying...' : 'Apply to join'}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HostDashboardPage() {
  const mockLivePlans = [
    {
      id: 'plan-1',
      activity: 'Watch Interstellar',
      description: 'Looking for someone who enjoys sci-fi and deep conversations.',
      location: 'PVR Saket, Delhi',
      time: 'Today, 7:00 PM',
      budget: 800,
    },
    {
      id: 'plan-2',
      activity: 'Coffee & Co-working',
      description: 'Need a body double to sit with me while I finish a presentation.',
      location: 'Blue Tokai, BKC',
      time: 'In 30 mins',
      budget: 500,
    }
  ]

  return (
    <div className="app-container">
      <Reveal>
        <div className="page-header">
          <div className="page-kicker"><span>host dashboard</span><span>Your business</span></div>
          <h1>Host <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Command.</em></h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <StatusToggle />
      </Reveal>

      <Reveal delay={0.2}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <Activity size={20} style={{ color: 'var(--accent)' }} />
          <h2 style={{ fontSize: 20, fontWeight: 520, letterSpacing: '-.04em', margin: 0 }}>Live Plans Nearby</h2>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted-foreground)', background: 'oklch(0.76 0.07 300 / 0.1)', padding: '2px 8px', borderRadius: 12 }}>Updating in real-time</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {mockLivePlans.map((plan) => (
            <LivePlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Reveal>
      
      <Reveal delay={0.3}>
        <div className="app-card-flat" style={{ marginTop: 40, textAlign: 'center', padding: 48 }}>
          <Sparkles size={20} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: 20, fontWeight: 520, letterSpacing: '-.04em', margin: '0 0 10px' }}>Your Profile is Live</h3>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.6, maxWidth: 340, margin: '0 auto' }}>
            Customers can also book you directly from search. Keep your availability updated to rank higher.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
