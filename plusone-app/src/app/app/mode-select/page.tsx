'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Compass, Plus, Wallet, ArrowRight } from 'lucide-react'

export default function ModeSelectPage() {
  const modes = [
    {
      title: 'Find someone',
      description: 'Explore live plans and see what verified people are up for.',
      icon: Compass,
      href: '/app/explore',
      color: 'var(--accent)'
    },
    {
      title: 'Create a plan',
      description: 'Post what you want to do and let nearby hosts apply to join you.',
      icon: Plus,
      href: '/app/dashboard?action=create',
      color: 'var(--primary)'
    },
    {
      title: 'Host & Earn',
      description: 'Apply to open plans, get booked, and make money hanging out.',
      icon: Wallet,
      href: '/hosts/dashboard',
      color: 'oklch(0.65 0.15 55)'
    }
  ]

  return (
    <div className="app-page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: '40px 24px', background: 'var(--background)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: 'min(500px, 100%)' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ margin: '0 0 12px', fontSize: 36, fontWeight: 520, letterSpacing: '-.04em' }}>Welcome to <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>PlusOne.</em></h1>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 16 }}>What would you like to do today?</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link 
                href={mode.href} 
                className="app-card" 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: 20, 
                  textDecoration: 'none', color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `color-mix(in oklch, ${mode.color} 12%, transparent)`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <mode.icon size={24} style={{ color: mode.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 600, letterSpacing: '-.02em' }}>{mode.title}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{mode.description}</p>
                </div>
                <ArrowRight size={20} style={{ color: 'var(--muted-foreground)' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
