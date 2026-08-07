'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Layers, 
  Store, 
  FileCheck2, 
  CalendarCheck,
  Zap,
  Power
} from 'lucide-react'
import { EarnProvider, useEarn } from '@/components/earn/EarnContext'
import { LiveMatchOverlay } from '@/components/earn/LiveMatchOverlay'

function HeaderSection() {
  const { isAvailable, toggleAvailable } = useEarn()

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 6px', letterSpacing: '-0.02em' }}>Host Portal</h1>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 15 }}>
          Adaptive fixed-price matching & active hosting dashboard
        </p>
      </div>

      {/* 🟢 AVAILABLE NOW Toggle Button */}
      <button
        onClick={toggleAvailable}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 18px',
          borderRadius: 999,
          border: isAvailable ? '1px solid oklch(0.78 0.07 150 / 0.3)' : '1px solid var(--border)',
          background: isAvailable ? 'oklch(0.78 0.07 150 / 0.12)' : 'var(--card)',
          color: isAvailable ? 'oklch(0.45 0.07 150)' : 'var(--muted-foreground)',
          fontSize: 14,
          fontWeight: 650,
          cursor: 'pointer',
          boxShadow: isAvailable ? '0 0 20px oklch(0.78 0.07 150 / 0.15)' : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: isAvailable ? 'oklch(0.45 0.07 150)' : 'var(--destructive)',
            boxShadow: isAvailable ? '0 0 10px oklch(0.45 0.07 150)' : 'none',
          }}
        />
        <span>{isAvailable ? 'AVAILABLE NOW' : 'OFFLINE'}</span>
        <Power size={15} style={{ opacity: 0.7 }} />
      </button>
    </div>
  )
}

function SubNavBar() {
  const pathname = usePathname()

  const tabs = [
    { label: 'Dashboard', href: '/app/earn', icon: LayoutDashboard },
    { label: 'Listings', href: '/app/earn/listings', icon: Layers },
    { label: 'Marketplace Feed', href: '/app/earn/marketplace', icon: Store, badge: 'Fixed Price' },
    { label: 'Applications', href: '/app/earn/applications', icon: FileCheck2 },
    { label: 'Bookings', href: '/app/earn/bookings', icon: CalendarCheck },
  ]

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        borderBottom: '1px solid var(--border)',
        marginBottom: 28,
        overflowX: 'auto',
        paddingBottom: 2,
      }}
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.href
        const Icon = tab.icon

        return (
          <Link key={tab.href} href={tab.href} style={{ textDecoration: 'none' }}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 18px',
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
              }}
            >
              <Icon size={17} style={{ color: isActive ? 'var(--foreground)' : 'inherit' }} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className="app-badge app-badge-accent"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '2px 8px',
                  }}
                >
                  {tab.badge}
                </span>
              )}
              {isActive && (
                <motion.div
                  layoutId="earn-nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--foreground)',
                    borderRadius: 2,
                  }}
                />
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function EarnLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container" style={{ maxWidth: 960 }}>
      <LiveMatchOverlay />
      <HeaderSection />
      <SubNavBar />
      <div>{children}</div>
    </div>
  )
}

export default function EarnLayout({ children }: { children: React.ReactNode }) {
  return (
    <EarnProvider>
      <EarnLayoutInner>{children}</EarnLayoutInner>
    </EarnProvider>
  )
}
