'use client'

import { motion } from 'framer-motion'
import { Star, FileText, Activity } from 'lucide-react'

export function OverviewTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {/* Earnings Summary */}
      <div className="app-card" style={{ marginBottom: 24, background: 'var(--card)' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
          Overview
        </h3>
        <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-.02em', margin: '0 0 8px', color: 'var(--foreground)' }}>
          ₹82,000 <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted-foreground)' }}>earned</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <div className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Star size={20} style={{ color: 'var(--primary)' }} />
          <div style={{ fontSize: 24, fontWeight: 600, margin: '4px 0 0' }}>★★★★★</div>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>57 bookings</span>
        </div>
        <div className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FileText size={20} style={{ color: 'var(--accent)' }} />
          <div style={{ fontSize: 24, fontWeight: 600, margin: '4px 0 0' }}>12</div>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>pending requests</span>
        </div>
        <div className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Activity size={20} style={{ color: 'var(--accent-foreground)' }} />
          <div style={{ fontSize: 24, fontWeight: 600, margin: '4px 0 0' }}>3</div>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>active listings</span>
        </div>
        <div className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'oklch(0.76 0.07 300 / 0.1)', borderColor: 'var(--primary)' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary)', marginTop: 4 }} />
          <div style={{ fontSize: 18, fontWeight: 600, margin: '4px 0 0', color: 'var(--primary)' }}>Available</div>
          <span style={{ fontSize: 12, color: 'var(--primary)' }}>Today</span>
        </div>
      </div>
    </motion.div>
  )
}
