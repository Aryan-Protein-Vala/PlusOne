'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, XCircle, MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { useEarn } from '@/components/earn/EarnContext'
import Link from 'next/link'

export default function ApplicationsPage() {
  const { applications } = useEarn()
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all')

  const filteredApps = applications.filter((app) => (filter === 'all' ? true : app.status === filter))

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return (
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'color-mix(in oklch, var(--primary) 15%, transparent)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <CheckCircle2 size={14} /> Won & Accepted
          </span>
        )
      case 'rejected':
        return (
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'color-mix(in oklch, var(--destructive) 15%, transparent)',
              color: 'var(--destructive)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <XCircle size={14} /> Not Selected
          </span>
        )
      default:
        return (
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'color-mix(in oklch, var(--accent) 15%, transparent)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Clock size={14} /> Awaiting Customer Selection
          </span>
        )
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {/* Title & Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700 }}>Your Submitted Applications</h2>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
            Track the status of your 1-click plan applications
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {(['all', 'pending', 'accepted', 'rejected'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: filter === tab ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: filter === tab ? 'color-mix(in oklch, var(--primary) 12%, transparent)' : 'transparent',
                color: filter === tab ? 'var(--primary)' : 'var(--muted-foreground)',
                fontSize: 13,
                fontWeight: filter === tab ? 650 : 500,
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      {filteredApps.length === 0 ? (
        <div
          className="app-card"
          style={{
            padding: 48,
            borderRadius: 24,
            textAlign: 'center',
            color: 'var(--muted-foreground)',
          }}
        >
          <Clock size={40} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
          <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 600, color: 'var(--foreground)' }}>No applications found</h3>
          <p style={{ margin: '0 0 20px', fontSize: 14 }}>Explore the marketplace feed to apply for customer plans with 1 click.</p>
          <Link href="/app/earn/marketplace" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '10px 20px',
                borderRadius: 12,
                border: 'none',
                background: 'var(--primary)',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Go to Marketplace Feed
            </button>
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="app-card"
              style={{
                padding: 24,
                borderRadius: 22,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 650 }}>{app.plan?.activity_title || 'Plan Application'}</h3>
                  {app.plan?.category && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: 999,
                        background: 'var(--secondary)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      {app.plan.category}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'var(--muted-foreground)' }}>
                  {app.plan?.location && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={14} style={{ color: 'var(--primary)' }} /> {app.plan.location}
                    </span>
                  )}
                  {app.plan?.date_time && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Calendar size={14} style={{ color: 'var(--accent)' }} /> {app.plan.date_time}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Fixed Budget</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>₹{app.plan?.budget || 0}</div>
                </div>

                <div>{getStatusBadge(app.status)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
