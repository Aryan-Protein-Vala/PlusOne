'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  IndianRupee,
  MapPin,
  MoveUpRight,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 25, height: 25 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

const steps = [
  { num: '01', title: 'Create your profile', desc: 'Set your activities, availability, hourly rate, and upload photos. Tell people what makes hanging out with you great.', icon: Users },
  { num: '02', title: 'Get verified', desc: 'Complete our multi-step verification — phone, ID, selfie. The more you verify, the more bookings you attract.', icon: Shield },
  { num: '03', title: 'Accept bookings', desc: 'People find you, pick an activity, and book. You approve, show up, and get paid. It\'s that simple.', icon: CalendarDays },
  { num: '04', title: 'Get paid', desc: 'Earnings go to your wallet automatically. Withdraw to your bank anytime. We only take a 15% platform fee.', icon: IndianRupee },
]

const perks = [
  { title: 'Set your own rates', desc: 'You decide what your time is worth. Start from ₹300/hr.' },
  { title: 'Choose your schedule', desc: 'Only available weekends? No problem. You control when you\'re bookable.' },
  { title: 'Pick your activities', desc: 'Movies, coffee, gym, study, travel — host what you enjoy.' },
  { title: 'Verified community', desc: 'Every person you meet is identity-verified. Safety first, always.' },
  { title: 'Instant payouts', desc: 'Get paid after every completed activity. No waiting.' },
  { title: 'Zero upfront cost', desc: 'No subscription, no listing fee. We earn when you earn.' },
]

export default function HostsPage() {
  const [notice, setNotice] = useState('')
  const showNotice = (msg: string) => { setNotice(msg); setTimeout(() => setNotice(''), 2800) }

  return (
    <div className="app-page">
      {/* Nav */}
      <header className="app-nav">
        <Link href="/" className="brand" aria-label="PlusOne home">
          <LogoMark />
          <span>plusone</span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/">Explore</Link>
          <Link href="/hosts" style={{ color: 'var(--foreground)', fontWeight: 600 }}>For hosts</Link>
          <Link href="/app/dashboard">Dashboard</Link>
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" href="/auth/login">Log in</Link>
          <Link className="nav-cta" href="/auth/register">Get started <ArrowRight size={15} /></Link>
        </div>
      </header>

      <div className="app-container">
        {/* Hero */}
        <Reveal>
          <div className="page-header" style={{ marginBottom: 64, maxWidth: 640 }}>
            <div className="page-kicker"><span>hosting</span><span>Turn your time into income</span></div>
            <h1>Your time is <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>valuable.</em></h1>
            <p style={{ maxWidth: 480 }}>
              Join thousands of verified companions earning money doing what they love — movies, coffee, travel, study, and more.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
              <button className="app-btn app-btn-primary" onClick={() => showNotice('You\'re on the host waitlist!')}>
                Start hosting <ArrowRight size={15} />
              </button>
              <a href="#how" className="app-btn app-btn-outline">
                How it works
              </a>
            </div>
          </div>
        </Reveal>

        {/* Earnings Preview */}
        <Reveal delay={0.06}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 80 }}>
            <div className="metric-card">
              <span className="metric-label">Avg. hourly rate</span>
              <span className="metric-value">₹700</span>
              <span className="metric-note">Set by you</span>
            </div>
            <div className="metric-card">
              <span className="metric-label">Top hosts earn</span>
              <span className="metric-value">₹40K</span>
              <span className="metric-note">Per month</span>
            </div>
            <div className="metric-card">
              <span className="metric-label">Platform fee</span>
              <span className="metric-value">15%</span>
              <span className="metric-note">You keep 85%</span>
            </div>
          </div>
        </Reveal>

        {/* How it works */}
        <div id="how">
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--muted-foreground)', font: '10px var(--font-geist-mono), monospace', letterSpacing: '.05em', textTransform: 'uppercase' }}>
              <span style={{ color: 'var(--primary)' }}>01</span>
              <span>How it works</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520, margin: '14px 0 48px' }}>
              Four steps to <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>earning.</em>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 80 }}>
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={0.12 + i * 0.06}>
                <div className="app-card" style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'oklch(0.76 0.07 300 / 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <step.icon size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <span style={{ color: 'var(--primary)', font: '10px var(--font-geist-mono), monospace' }}>{step.num}</span>
                      <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-.03em', margin: '6px 0 8px' }}>{step.title}</h3>
                      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Perks */}
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--muted-foreground)', font: '10px var(--font-geist-mono), monospace', letterSpacing: '.05em', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--primary)' }}>02</span>
            <span>Why host on PlusOne</span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520, margin: '14px 0 48px' }}>
            Built for <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>you.</em>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginBottom: 80 }}>
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={0.22 + i * 0.04}>
              <div style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--primary)', font: '10px var(--font-geist-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.03em', margin: '10px 0 6px' }}>{perk.title}</h3>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{perk.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="app-card-flat" style={{ textAlign: 'center', padding: 64, marginBottom: 40 }}>
            <Sparkles size={22} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '.95', letterSpacing: '-.06em', fontWeight: 520, margin: '0 0 14px' }}>
              Ready to <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>start?</em>
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 15, lineHeight: 1.6, maxWidth: 380, margin: '0 auto 28px' }}>
              Join our growing community of verified hosts earning on their own terms.
            </p>
            <button className="app-btn app-btn-primary app-btn-lg" onClick={() => showNotice('You\'re on the host waitlist!')}>
              Become a host <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Toast */}
      {notice && (
        <motion.div className="toast" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }}>
          <Check size={16} /> {notice}
        </motion.div>
      )}
    </div>
  )
}
