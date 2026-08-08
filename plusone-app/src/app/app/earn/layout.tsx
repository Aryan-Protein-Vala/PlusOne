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
import { EarnProvider } from '@/components/earn/EarnContext'
import { StatusToggle } from '@/components/earn/StatusToggle'

function HeaderSection() {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 18 }}>
        <div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 700, margin: '0 0 6px', letterSpacing: '-0.03em' }}>Hang out &amp; cash out.</h1>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 15 }}>Get paid to hang out, study, or grab coffee. Pocket money sorted, zero corporate BS.</p>
        </div>
      </div>
      <StatusToggle />
    </div>
  )
}

function SubNavBar() {
  const pathname = usePathname()

  const tabs = [
    { label: 'Home', href: '/app/earn', icon: LayoutDashboard },
    { label: 'My offers', href: '/app/earn/listings', icon: Layers },
    { label: 'People looking', href: '/app/earn/marketplace', icon: Store },
    { label: 'My requests', href: '/app/earn/applications', icon: FileCheck2 },
    { label: 'My plans', href: '/app/earn/bookings', icon: CalendarCheck },
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
