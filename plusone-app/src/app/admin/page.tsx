'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, AlertTriangle, TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export default function AdminDashboard() {
  const formatMoney = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <div style={{ maxWidth: 1000 }}>
      <Reveal>
        <div style={{ marginBottom: 40 }}>
          <div className="status-pill" style={{ marginBottom: 16 }}>
            <span className="status-dot" style={{ background: 'var(--accent)' }} /> System Online
          </div>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '.95', letterSpacing: '-.05em', fontWeight: 520 }}>
            Welcome back, <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Aryan.</em>
          </h1>
          <p style={{ margin: '12px 0 0', color: 'var(--muted-foreground)', fontSize: 15 }}>
            Here is what is happening across PlusOne today.
          </p>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
          {[
            { label: 'Total Revenue (GMV)', value: formatMoney(1245000), trend: '+14%', icon: DollarSign, color: 'var(--primary)' },
            { label: 'Platform Fees (15%)', value: formatMoney(186750), trend: '+14%', icon: TrendingUp, color: 'var(--accent-foreground)' },
            { label: 'Active Users', value: '12,482', trend: '+8%', icon: Users, color: 'oklch(0.65 0.15 55)' },
            { label: 'Active Bookings', value: '342', trend: '+22%', icon: Activity, color: 'oklch(0.65 0.12 340)' },
          ].map((stat, i) => (
            <div key={i} className="app-card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '.05em', fontFamily: 'var(--font-geist-mono), monospace' }}>{stat.label}</span>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: `color-mix(in oklch, ${stat.color} 15%, transparent)`, display: 'grid', placeItems: 'center' }}>
                  <stat.icon size={13} style={{ color: stat.color }} />
                </div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 520, letterSpacing: '-.04em', marginBottom: 8 }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>
                <span style={{ color: 'var(--accent-foreground)', fontWeight: 600 }}>{stat.trend}</span> vs last month
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        {/* Recent Activity */}
        <Reveal delay={0.2}>
          <div className="app-card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500, letterSpacing: '-.02em' }}>Live Bookings</h3>
              <a href="#" style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}>View all <ArrowUpRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { users: 'Rohan M. → Priya K.', activity: 'Coffee', status: 'In Progress', amount: 800, time: '2 mins ago' },
                { users: 'Anjali D. → Sameer T.', activity: 'Movies', status: 'Completed', amount: 1200, time: '14 mins ago' },
                { users: 'Vikram S. → Neha R.', activity: 'Explore', status: 'Pending', amount: 1500, time: '32 mins ago' },
                { users: 'Pooja V. → Amit P.', activity: 'Study', status: 'Completed', amount: 500, time: '1 hr ago' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--border)' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{item.users}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{item.activity} · {item.time}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{formatMoney(item.amount)}</div>
                    <span className={`app-badge ${item.status === 'Completed' ? 'app-badge-accent' : item.status === 'In Progress' ? 'app-badge-primary' : 'app-badge-secondary'}`} style={{ padding: '2px 6px', fontSize: 9 }}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Action Items */}
        <Reveal delay={0.3}>
          <div className="app-card" style={{ padding: 24, background: 'var(--card)' }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500, letterSpacing: '-.02em', marginBottom: 20 }}>Needs Attention</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'oklch(0.58 0.22 27 / 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <AlertTriangle size={14} style={{ color: 'var(--destructive)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>2 Flagged Accounts</div>
                  <p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.4 }}>Suspicious activity detected by automated filters.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'oklch(0.76 0.07 300 / 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>14 Verification Requests</div>
                  <p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.4 }}>New providers waiting for ID approval.</p>
                </div>
              </div>
            </div>

            <button className="app-btn app-btn-outline" style={{ width: '100%', marginTop: 24, padding: '10px 14px' }}>
              Review queue
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
