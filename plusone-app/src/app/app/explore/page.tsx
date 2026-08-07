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
    <div className="app-container" style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
      
      {/* Header (Mimicking phone mock on mobile, full width on desktop) */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 600, color: 'var(--primary)', letterSpacing: '.05em', textTransform: 'uppercase', fontFamily: 'var(--font-geist-mono), monospace' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </p>
          <h1 style={{ margin: 0, fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 520, letterSpacing: '-.04em' }}>Find your people.</h1>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 32 }}>
        {/* Search Bar */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ position: 'relative' }}>
          <button style={{ width: '100%', padding: '20px 24px', borderRadius: 20, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted-foreground)' }}>
              <Compass size={20} />
              <span style={{ fontSize: 16, fontWeight: 500 }}>What are you into?</span>
            </div>
            <ChevronDown size={20} style={{ color: 'var(--muted-foreground)' }} />
          </button>
        </motion.div>

        {/* Suggested Feature Card */}
        <motion.div layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--primary)', borderRadius: 20, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: current.bg, display: 'grid', placeItems: 'center' }}>
                <current.icon size={26} style={{ color: current.accent }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--muted-foreground)', fontWeight: 600, letterSpacing: '.02em', textTransform: 'uppercase', marginBottom: 4 }}>
                  <Sparkles size={12} style={{ display: 'inline', marginRight: 4, color: 'var(--primary)' }} />
                  Suggested for you
                </span>
                <strong style={{ display: 'block', fontSize: 18, fontWeight: 600, letterSpacing: '-.02em', marginBottom: 2 }}>{current.label}</strong>
                <small style={{ color: 'var(--muted-foreground)', fontSize: 13 }}>{current.meta}</small>
              </div>
            </div>
            <ArrowRight size={20} style={{ color: 'var(--muted-foreground)' }} />
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ display: 'flex', gap: 32, marginBottom: 32, borderBottom: '1px solid var(--border)' }}>
        {['For you', 'Nearby', 'This weekend'].map((tab, idx) => (
          <button 
            key={tab} 
            onClick={() => setActive(idx === 0 ? 0 : 2)}
            style={{ 
              background: 'none', border: 'none', padding: '0 0 16px 0', fontSize: 16, fontWeight: 500, cursor: 'pointer',
              color: active === (idx === 0 ? 0 : 2) || active === (idx === 0 ? 1 : 3) ? 'var(--foreground)' : 'var(--muted-foreground)',
              borderBottom: active === (idx === 0 ? 0 : 2) || active === (idx === 0 ? 1 : 3) ? '2px solid var(--foreground)' : '2px solid transparent',
              marginBottom: -1, transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Grid List */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {activities.map((item, index) => (
          <button 
            key={item.label} 
            onClick={() => setActive(index)}
            style={{ 
              width: '100%', padding: 20, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
              borderColor: active === index ? 'var(--primary)' : 'var(--border)', transition: 'all 0.2s',
              boxShadow: active === index ? '0 8px 30px rgba(0,0,0,0.04)' : 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: item.bg, display: 'grid', placeItems: 'center' }}>
                <item.icon size={22} style={{ color: item.accent }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', fontSize: 16, fontWeight: 600, letterSpacing: '-.01em', marginBottom: 4 }}>{item.label}</strong>
                <small style={{ color: 'var(--muted-foreground)', fontSize: 13 }}>{item.meta}</small>
              </div>
            </div>
            <MoreHorizontal size={20} style={{ color: 'var(--muted-foreground)' }} />
          </button>
        ))}
      </motion.div>
    </div>
  )
}
