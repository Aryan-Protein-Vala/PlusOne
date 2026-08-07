'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarDays,
  ChevronDown,
  Compass,
  Heart,
  MoreHorizontal,
  Ticket,
  UserRound,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const activities = [
  { icon: CalendarDays, label: 'Sunday reset', meta: 'Mumbai · 8 spots', accent: 'var(--primary)', bg: 'oklch(0.76 0.07 300 / 0.1)' },
  { icon: Ticket, label: 'Open-air cinema', meta: 'Delhi · 14 spots', accent: 'var(--accent)', bg: 'oklch(0.78 0.07 150 / 0.1)' },
  { icon: Compass, label: 'Sunrise hike', meta: 'Bangalore · 6 spots', accent: 'var(--primary)', bg: 'oklch(0.76 0.07 300 / 0.1)' },
  { icon: Heart, label: 'Ceramics & coffee', meta: 'Pune · 10 spots', accent: 'var(--accent-foreground)', bg: 'oklch(0.65 0.15 55 / 0.1)' },
]

export default function ExplorePage() {
  const [active, setActive] = useState(0)
  const current = activities[active]

  return (
    <div className="app-container" style={{ maxWidth: 480, margin: '0 auto', padding: '40px 24px' }}>
      
      {/* Header (Mimicking phone mock) */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '.05em', textTransform: 'uppercase', fontFamily: 'var(--font-geist-mono), monospace' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </p>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 520, letterSpacing: '-.04em' }}>Find your people.</h1>
        </div>
        <Link href="/app/dashboard" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--foreground)' }}>
          <UserRound size={18} />
        </Link>
      </motion.div>

      {/* Search Bar */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: 24, position: 'relative' }}>
        <button style={{ width: '100%', padding: '16px 20px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted-foreground)' }}>
            <Compass size={18} />
            <span style={{ fontSize: 15, fontWeight: 500 }}>What are you into?</span>
          </div>
          <ChevronDown size={18} style={{ color: 'var(--muted-foreground)' }} />
        </button>
      </motion.div>

      {/* Tabs */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'flex', gap: 24, marginBottom: 24, borderBottom: '1px solid var(--border)' }}>
        {['For you', 'Nearby'].map((tab, idx) => (
          <button 
            key={tab} 
            onClick={() => setActive(idx === 0 ? 0 : 2)}
            style={{ 
              background: 'none', border: 'none', padding: '0 0 12px 0', fontSize: 15, fontWeight: 500, cursor: 'pointer',
              color: active === (idx === 0 ? 0 : 2) || active === (idx === 0 ? 1 : 3) ? 'var(--foreground)' : 'var(--muted-foreground)',
              borderBottom: active === (idx === 0 ? 0 : 2) || active === (idx === 0 ? 1 : 3) ? '2px solid var(--foreground)' : '2px solid transparent',
              marginBottom: -1
            }}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Suggested Feature Card */}
      <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: 24 }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: current.bg, display: 'grid', placeItems: 'center' }}>
              <current.icon size={22} style={{ color: current.accent }} />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: 11, color: 'var(--muted-foreground)', fontWeight: 600, letterSpacing: '.02em', textTransform: 'uppercase', marginBottom: 2 }}>
                <Sparkles size={10} style={{ display: 'inline', marginRight: 4, color: 'var(--primary)' }} />
                Suggested for you
              </span>
              <strong style={{ display: 'block', fontSize: 16, fontWeight: 520, letterSpacing: '-.02em', marginBottom: 2 }}>{current.label}</strong>
              <small style={{ color: 'var(--muted-foreground)', fontSize: 12 }}>{current.meta}</small>
            </div>
          </div>
          <ArrowRight size={20} style={{ color: 'var(--muted-foreground)' }} />
        </div>
      </motion.div>

      {/* List */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {activities.map((item, index) => (
          <button 
            key={item.label} 
            onClick={() => setActive(index)}
            style={{ 
              width: '100%', padding: 16, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
              borderColor: active === index ? 'var(--primary)' : 'var(--border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: item.bg, display: 'grid', placeItems: 'center' }}>
                <item.icon size={16} style={{ color: item.accent }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', fontSize: 15, fontWeight: 520, letterSpacing: '-.01em', marginBottom: 2 }}>{item.label}</strong>
                <small style={{ color: 'var(--muted-foreground)', fontSize: 12 }}>{item.meta}</small>
              </div>
            </div>
            <MoreHorizontal size={20} style={{ color: 'var(--muted-foreground)' }} />
          </button>
        ))}
      </motion.div>
    </div>
  )
}
