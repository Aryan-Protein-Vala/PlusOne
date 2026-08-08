'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Layers, 
  Store, 
  FileCheck2, 
  CalendarCheck,
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

/**
 * Desktop: classic scrollable text tabs (unchanged).
 * Mobile: icon-pill bar where the active tab expands to show its label below the icon.
 *         All 5 icons always fit on one line — no overflow scroll needed.
 */
function SubNavBar() {
  const pathname = usePathname()

  const tabs = [
    { label: 'Home',           shortLabel: 'Home',     href: '/app/earn',              icon: LayoutDashboard },
    { label: 'My offers',      shortLabel: 'Offers',   href: '/app/earn/listings',     icon: Layers },
    { label: 'People looking', shortLabel: 'Looking',  href: '/app/earn/marketplace',  icon: Store },
    { label: 'My requests',    shortLabel: 'Requests', href: '/app/earn/applications', icon: FileCheck2 },
    { label: 'My plans',       shortLabel: 'Plans',    href: '/app/earn/bookings',     icon: CalendarCheck },
  ]

  return (
    <>
      {/* ── MOBILE NAV ─────────────────────────────────────── */}
      <div className="md:hidden" style={{ marginBottom: 28 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            borderBottom: '1px solid var(--border)',
            paddingBottom: 0,
          }}
        >
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            const Icon = tab.icon
            return (
              <Link
                key={tab.href}
                href={tab.href}
                style={{ textDecoration: 'none', flex: 1 }}
              >
                <motion.div
                  layout
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isActive ? '10px 4px 8px' : '12px 4px',
                    borderRadius: isActive ? '10px 10px 0 0' : 8,
                    background: isActive ? 'oklch(0.76 0.07 300 / 0.10)' : 'transparent',
                    transition: 'background 0.2s ease',
                    gap: 0,
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--muted-foreground)',
                      transition: 'color 0.2s ease',
                    }}
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        style={{
                          display: 'block',
                          overflow: 'hidden',
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.02em',
                          color: 'var(--primary)',
                          whiteSpace: 'nowrap',
                          lineHeight: 1,
                        }}
                      >
                        {tab.shortLabel}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active indicator underline */}
                  {isActive && (
                    <motion.div
                      layoutId="earn-mobile-indicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--primary)',
                        borderRadius: '2px 2px 0 0',
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── DESKTOP NAV (unchanged) ─────────────────────────── */}
      <div
        className="hidden md:flex"
        style={{
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
    </>
  )
}

function EarnLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container" style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
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
