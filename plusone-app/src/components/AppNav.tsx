'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Compass,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Shield,
  UserRound,
  Wallet,
  X,
} from 'lucide-react'

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

const appNavLinks = [
  { icon: Compass, label: 'Explore', href: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', href: '/app/dashboard' },
  { icon: MessageCircle, label: 'Messages', href: '/app/messages' },
  { icon: Wallet, label: 'Wallet', href: '/app/wallet' },
  { icon: Shield, label: 'Safety', href: '/app/safety' },
]

export default function AppNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="app-nav">
      <Link href="/" className="brand" aria-label="PlusOne home">
        <LogoMark />
        <span>plusone</span>
      </Link>

      <nav className="desktop-nav" aria-label="App navigation">
        {appNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: pathname === link.href ? 'var(--foreground)' : undefined,
              fontWeight: pathname === link.href ? 600 : undefined,
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <Link
          href="/app/dashboard"
          style={{
            display: 'inline-grid',
            placeItems: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid var(--border)',
            color: 'var(--primary)',
          }}
        >
          <UserRound size={15} />
        </Link>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile app navigation"
          >
            {appNavLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <link.icon size={14} />
                  {link.label}
                </span>
                <ArrowRight size={15} />
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
