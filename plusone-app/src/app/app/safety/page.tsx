'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Eye,
  Lock,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

const safetyFeatures = [
  { icon: UserCheck, title: 'Profile checks', desc: 'Verification is being rolled out. Complete your profile and never meet someone without checking their details first.', status: 'coming' },
  { icon: MapPin, title: 'Public meetups', desc: 'Meet in a busy public place, tell someone you trust, and keep your home address private.', status: 'active' },
  { icon: Phone, title: 'Emergency help', desc: 'For an immediate emergency in India, call 112. PlusOne cannot replace emergency services.', status: 'active' },
  { icon: Eye, title: 'Content checks', desc: 'New offers and plans are checked for sexual services, scams, illegal activity, and anything involving minors.', status: 'active' },
  { icon: Lock, title: 'Payments are not live yet', desc: 'Do not pay outside PlusOne. Payment and payout protection will activate only after the payment system launches.', status: 'coming' },
  { icon: Shield, title: 'Community guidelines', desc: 'PlusOne is for lawful social activities and earning through shared plans — not dating services or sexual activity.', status: 'active' },
]

const tips = [
  'Always meet in public places for your first few meetups.',
  'Share your live location with a trusted friend or family member.',
  'Never transfer money outside the PlusOne platform.',
  'Report any suspicious behavior immediately.',
  'Trust your instincts — if something feels wrong, leave.',
  'Keep your personal address private until you trust someone.',
]

export default function SafetyPage() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="app-container-mid">
      <Reveal>
        <div className="page-header">
          <div className="page-kicker"><span>safety</span><span>Your security matters</span></div>
          <h1>Safety <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>first.</em></h1>
          <p>We&apos;ve built PlusOne with safety at every level. Here&apos;s how we protect you.</p>
        </div>
      </Reveal>

      {/* Safety Score */}
      <Reveal delay={0.06}>
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'oklch(0.78 0.07 150 / 0.12)', display: 'grid', placeItems: 'center' }}>
            <ShieldCheck size={28} style={{ color: 'var(--accent)' }} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ color: 'var(--muted-foreground)', font: '10px var(--font-geist-mono), monospace', textTransform: 'uppercase', letterSpacing: '.05em' }}>Your safety score</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 520, letterSpacing: '-.04em' }}>Start here</span>
              <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>before your first plan</span>
            </div>
          </div>
          <Link href="/legal/guidelines" className="app-btn app-btn-primary app-btn-sm" style={{ display: 'inline-flex' }}>
            Read the rules <ArrowRight size={13} />
          </Link>
        </div>
      </Reveal>

      {/* Safety Features */}
      <Reveal delay={0.1}>
        <h2 style={{ fontSize: 22, fontWeight: 520, letterSpacing: '-.04em', margin: '0 0 24px' }}>How we protect you</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 48 }}>
          {safetyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="app-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.05 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'oklch(0.76 0.07 300 / 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <feature.icon size={17} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <strong style={{ fontSize: 14, fontWeight: 500 }}>{feature.title}</strong>
                    <span className={`app-badge ${feature.status === 'active' ? 'app-badge-accent' : 'app-badge-primary'}`}>
                      {feature.status === 'active' ? 'Active' : 'Coming'}
                    </span>
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* Safety Tips */}
      <Reveal delay={0.2}>
        <div className="app-card-flat" style={{ padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <AlertTriangle size={16} style={{ color: 'oklch(0.65 0.15 55)' }} />
            <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.03em', margin: 0 }}>Safety tips</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: 'oklch(0.78 0.07 150 / 0.12)', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Check size={11} style={{ color: 'var(--accent)' }} />
                </div>
                <span style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Emergency CTA */}
      <Reveal delay={0.26}>
        <div style={{ marginTop: 40, textAlign: 'center', padding: '48px 0' }}>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 12, marginBottom: 16 }}>Need immediate help?</p>
          <a href="tel:112" className="app-btn app-btn-destructive" style={{ display: 'inline-flex', textDecoration: 'none' }}>
            <Phone size={15} /> Call 112
          </a>
          <p style={{ color: 'var(--muted-foreground)', font: '9px var(--font-geist-mono), monospace', marginTop: 12 }}>
            This will alert emergency services and share your location
          </p>
        </div>
      </Reveal>
    </div>
  )
}
