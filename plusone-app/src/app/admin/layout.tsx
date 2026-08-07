import type { Metadata } from "next";
import Link from 'next/link'
import { LayoutDashboard, Users, CreditCard, Shield, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: "Admin Command Center",
};

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 20, height: 20 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-page" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Sidebar */}
      <aside style={{ borderRight: '1px solid var(--border)', background: 'var(--card)', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--foreground)', textDecoration: 'none', fontWeight: 700, fontSize: 16, letterSpacing: '-.04em', marginBottom: 40, padding: '0 8px' }}>
          <LogoMark />
          <span>plusone admin</span>
        </Link>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { label: 'Overview', icon: LayoutDashboard, active: true },
            { label: 'Users & Hosts', icon: Users, active: false },
            { label: 'Transactions', icon: CreditCard, active: false },
            { label: 'Moderation', icon: Shield, active: false },
            { label: 'Settings', icon: Settings, active: false },
          ].map((item) => (
            <Link key={item.label} href="#" style={{ 
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, 
              color: item.active ? 'var(--foreground)' : 'var(--muted-foreground)', 
              background: item.active ? 'oklch(0.76 0.07 300 / 0.1)' : 'transparent',
              textDecoration: 'none', fontSize: 13, fontWeight: item.active ? 600 : 500 
            }}>
              <item.icon size={15} style={{ color: item.active ? 'var(--primary)' : 'inherit' }} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', padding: '16px 12px' }}>
          <Link href="/" style={{ color: 'var(--muted-foreground)', fontSize: 12, textDecoration: 'none' }}>
            &larr; Back to site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ padding: '40px 48px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
