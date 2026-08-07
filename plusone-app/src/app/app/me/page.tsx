'use client'

import { motion } from 'framer-motion'
import {
  UserCircle,
  Wallet,
  Settings,
  Bell,
  ShieldCheck,
  Star,
  LogOut,
  ChevronRight,
  LifeBuoy
} from 'lucide-react'
import { MOCK_USER } from '@/lib/mock-data'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const menuItems = [
  { icon: Wallet, label: 'Wallet & Payments', color: 'var(--primary)' },
  { icon: ShieldCheck, label: 'Verification', color: 'var(--accent)' },
  { icon: Star, label: 'Reviews', color: 'oklch(0.7 0.15 70)' },
  { icon: Bell, label: 'Notifications', color: 'var(--foreground)' },
  { icon: Settings, label: 'Settings', color: 'var(--muted-foreground)' },
  { icon: LifeBuoy, label: 'Help & Support', color: 'var(--muted-foreground)' },
]

export default function MePage() {
  const router = useRouter()
  const user = MOCK_USER

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="app-container" style={{ maxWidth: 640 }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--secondary)', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 600, color: 'var(--secondary-foreground)' }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 520, margin: '0 0 4px', letterSpacing: '-.02em' }}>{user.name}</h1>
            <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>{user.email}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="app-card" style={{ padding: 0, overflow: 'hidden', marginBottom: 24 }}>
          {menuItems.map((item, idx) => (
            <button 
              key={item.label}
              style={{ 
                width: '100%', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'transparent', border: 'none', borderBottom: idx < menuItems.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <item.icon size={20} style={{ color: item.color }} />
                <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--foreground)' }}>{item.label}</span>
              </div>
              <ChevronRight size={18} style={{ color: 'var(--muted-foreground)' }} />
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <button 
          onClick={handleLogout}
          style={{ width: '100%', padding: 18, borderRadius: 16, border: '1px solid color-mix(in oklch, var(--destructive) 30%, transparent)', background: 'color-mix(in oklch, var(--destructive) 5%, transparent)', color: 'var(--destructive)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
        >
          <LogOut size={18} /> Log out
        </button>
      </Reveal>
    </div>
  )
}
