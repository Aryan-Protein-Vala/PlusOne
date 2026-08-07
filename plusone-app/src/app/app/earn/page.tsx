'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Star, Layers, TrendingUp, ArrowUpRight, Clock, CheckCircle } from 'lucide-react'
import { MOCK_PROVIDERS, MOCK_BOOKINGS } from '@/lib/mock-data'
import Link from 'next/link'

export default function EarnDashboardPage() {
  const host = MOCK_PROVIDERS[0] // Riya Sharma

  const stats = [
    { label: 'Monthly Revenue', value: `₹${host.totalEarnings.toLocaleString()}`, icon: DollarSign, color: 'var(--primary)', growth: '+18.4%' },
    { label: 'Host Rating', value: `${host.ratings.overall}`, icon: Star, color: 'var(--accent)', growth: `${host.ratings.count} reviews` },
    { label: 'Active Listings', value: `${host.activities.length}`, icon: Layers, color: 'oklch(0.6 0.15 250)', growth: '3 categories' },
    { label: 'Response Speed', value: host.responseTime, icon: Clock, color: 'oklch(0.6 0.15 320)', growth: `${host.responseRate}% rate` },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {/* Stats Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="app-card"
              style={{
                padding: 20,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: 'var(--muted-foreground)', fontWeight: 500 }}>{stat.label}</span>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `color-mix(in oklch, ${stat.color} 15%, transparent)`,
                    display: 'grid',
                    placeItems: 'center',
                    color: stat.color,
                  }}
                >
                  <Icon size={18} />
                </div>
              </div>

              <div>
                <div style={{ fontSize: 24, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: stat.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <TrendingUp size={12} /> {stat.growth}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Action Banner */}
      <div
        className="app-card"
        style={{
          padding: '24px 28px',
          borderRadius: 24,
          marginBottom: 32,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 650 }}>Explore Open Plans in Marketplace</h3>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
            Apply instantly to nearby fixed-budget plan requests with one click.
          </p>
        </div>
        <Link href="/app/earn/marketplace" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '12px 22px',
              borderRadius: 14,
              border: 'none',
              background: 'var(--primary)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 14px color-mix(in oklch, var(--primary) 40%, transparent)',
            }}
          >
            View Open Feed <ArrowUpRight size={16} />
          </button>
        </Link>
      </div>

      {/* Recent Activity Feed */}
      <div className="app-card" style={{ padding: 24, borderRadius: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 650 }}>Recent Activity</h3>
          <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Last 7 days</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {MOCK_BOOKINGS.map((booking) => (
            <div
              key={booking.id}
              className="app-list-item"
              style={{
                padding: '16px 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--foreground)',
                  }}
                >
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: 15, fontWeight: 600 }}>{booking.title}</h4>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)' }}>
                    {booking.location} • {booking.startTime}
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 4 }}>+₹{booking.price}</div>
                <span
                  className={`app-badge ${booking.status === 'completed' ? 'app-badge-primary' : 'app-badge-secondary'}`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
