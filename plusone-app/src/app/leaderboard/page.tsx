'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Crown,
  MapPin,
  MessageSquare,
  Star,
  Trophy,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { MOCK_PROVIDERS } from '@/lib/mock-data'

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

type MetricKey = 'rating' | 'bookings' | 'earnings'

export default function LeaderboardPage() {
  const [metric, setMetric] = useState<MetricKey>('rating')
  const providers = [...MOCK_PROVIDERS]

  const sorted = providers.sort((a, b) => {
    if (metric === 'rating') return b.ratings.overall - a.ratings.overall
    if (metric === 'bookings') return b.completedActivities - a.completedActivities
    return b.totalEarnings - a.totalEarnings
  })

  const rankColors = ['oklch(0.65 0.15 55)', 'oklch(0.72 0.02 265)', 'oklch(0.6 0.12 40)']
  const rankIcons = [Crown, Trophy, Zap]

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
          <Link href="/hosts">For hosts</Link>
          <Link href="/leaderboard" style={{ color: 'var(--foreground)', fontWeight: 600 }}>Leaderboard</Link>
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" href="/auth/login">Log in</Link>
          <Link className="nav-cta" href="/auth/register">Get started <ArrowRight size={15} /></Link>
        </div>
      </header>

      <div className="app-container-mid">
        <Reveal>
          <div className="page-header">
            <div className="page-kicker"><span>leaderboard</span><span>Top companions</span></div>
            <h1>The <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>best.</em></h1>
            <p>Our highest-rated, most-booked, and top-earning companions.</p>
          </div>
        </Reveal>

        {/* Metric Tabs */}
        <Reveal delay={0.06}>
          <div className="app-tabs">
            {([
              { key: 'rating' as MetricKey, label: 'Top Rated' },
              { key: 'bookings' as MetricKey, label: 'Most Booked' },
              { key: 'earnings' as MetricKey, label: 'Top Earners' },
            ]).map((tab) => (
              <button key={tab.key} className={metric === tab.key ? 'active' : ''} onClick={() => setMetric(tab.key)}>
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Top 3 Podium */}
        <Reveal delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
            {sorted.slice(0, 3).map((provider, i) => {
              const RankIcon = rankIcons[i]
              return (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.08 }}
                >
                  <Link href={`/providers/${provider.id}`} className="app-card" style={{ textAlign: 'center', padding: 28, textDecoration: 'none', color: 'var(--foreground)', display: 'block' }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, background: `color-mix(in oklch, ${rankColors[i]} 15%, transparent)`, display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
                      <RankIcon size={11} style={{ color: rankColors[i] }} />
                    </div>
                    <div className="app-avatar" style={{ width: 56, height: 56, margin: '0 auto 12px', borderRadius: 16 }}>
                      {provider.avatar ? <img src={provider.avatar} alt={provider.name} /> : provider.name.charAt(0)}
                    </div>
                    <strong style={{ fontSize: 15, fontWeight: 520, letterSpacing: '-.03em', display: 'block' }}>{provider.name}</strong>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 4, fontSize: 11, color: 'var(--muted-foreground)' }}>
                      <MapPin size={10} />{provider.city}
                    </span>
                    <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center', gap: 12 }}>
                      <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>
                        <Star size={10} style={{ color: 'oklch(0.65 0.15 55)', display: 'inline', marginRight: 3 }} />
                        {provider.ratings.overall}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>
                        <Users size={10} style={{ display: 'inline', marginRight: 3 }} />
                        {provider.completedActivities}
                      </span>
                    </div>
                    <span className="app-badge app-badge-primary" style={{ marginTop: 12 }}>
                      #{i + 1}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Reveal>

        {/* Rest of the list */}
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sorted.slice(3).map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 + i * 0.04 }}
              >
                <Link href={`/providers/${provider.id}`} className="app-list-item" style={{ textDecoration: 'none', color: 'var(--foreground)' }}>
                  <span style={{ width: 28, textAlign: 'center', fontSize: 12, fontWeight: 600, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                    {i + 4}
                  </span>
                  <div className="app-avatar" style={{ width: 38, height: 38, flexShrink: 0 }}>
                    {provider.avatar ? <img src={provider.avatar} alt={provider.name} /> : provider.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-.02em' }}>{provider.name}</strong>
                    <div style={{ display: 'flex', gap: 12, marginTop: 3, fontSize: 11, color: 'var(--muted-foreground)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}><MapPin size={10} />{provider.city}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}><Star size={10} style={{ color: 'oklch(0.65 0.15 55)' }} />{provider.ratings.overall}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground)' }}>
                    {metric === 'rating' ? provider.ratings.overall :
                      metric === 'bookings' ? `${provider.completedActivities} plans` :
                        `₹${(provider.totalEarnings / 1000).toFixed(0)}K`}
                  </span>
                  <ArrowUpRight size={14} style={{ color: 'var(--muted-foreground)' }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
