'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Banknote,
  CreditCard,
  IndianRupee,
  TrendingUp,
} from 'lucide-react'
import { MOCK_WALLET } from '@/lib/mock-data'
import { format } from 'date-fns'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export default function WalletPage() {
  const wallet = MOCK_WALLET
  const [tab, setTab] = useState<'all' | 'earn' | 'payout'>('all')

  const filtered = tab === 'all'
    ? wallet.transactions
    : wallet.transactions.filter((t) => t.type === tab)

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

  return (
    <div className="app-container-mid">
      <Reveal>
        <div className="page-header">
          <div className="page-kicker"><span>wallet</span><span>Your earnings</span></div>
          <h1>Your <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>wallet.</em></h1>
        </div>
      </Reveal>

      {/* Balance Cards */}
      <Reveal delay={0.08}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
          <div className="metric-card">
            <span className="metric-label">Available</span>
            <span className="metric-value" style={{ color: 'var(--accent-foreground)' }}>
              <IndianRupee size={22} style={{ display: 'inline', verticalAlign: 'middle' }} />
              {wallet.available.toLocaleString('en-IN')}
            </span>
            <span className="metric-note">Ready to withdraw</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Pending</span>
            <span className="metric-value" style={{ color: 'var(--primary)' }}>
              <IndianRupee size={22} style={{ display: 'inline', verticalAlign: 'middle' }} />
              {wallet.pending.toLocaleString('en-IN')}
            </span>
            <span className="metric-note">Being processed</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Total Earned</span>
            <span className="metric-value">
              <IndianRupee size={22} style={{ display: 'inline', verticalAlign: 'middle' }} />
              {wallet.balance.toLocaleString('en-IN')}
            </span>
            <span className="metric-note"><TrendingUp size={11} style={{ display: 'inline', marginRight: 4 }} />All time</span>
          </div>
        </div>
      </Reveal>

      {/* Withdraw */}
      <Reveal delay={0.1}>
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'oklch(0.78 0.07 150 / 0.12)', display: 'grid', placeItems: 'center' }}>
              <CreditCard size={18} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <strong style={{ fontSize: 13, fontWeight: 500 }}>Withdraw to bank</strong>
              <p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted-foreground)' }}>
                Transfer your available balance
              </p>
            </div>
          </div>
          <button className="app-btn app-btn-primary app-btn-sm">
            Withdraw <ArrowRight size={13} />
          </button>
        </div>
      </Reveal>

      {/* Transactions */}
      <Reveal delay={0.14}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 520, letterSpacing: '-.04em', margin: 0 }}>Transactions</h2>
        </div>

        <div className="app-tabs">
          {(['all', 'earn', 'payout'] as const).map((t) => (
            <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
              {t === 'all' ? 'All' : t === 'earn' ? 'Earnings' : 'Payouts'}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filtered.map((txn, i) => (
            <motion.div
              key={txn.id}
              className="app-list-item"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 + i * 0.04 }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10, display: 'grid', placeItems: 'center', flexShrink: 0,
                background: txn.type === 'earn' ? 'oklch(0.78 0.07 150 / 0.12)' :
                  txn.type === 'payout' ? 'oklch(0.76 0.07 300 / 0.12)' :
                    txn.type === 'bonus' ? 'oklch(0.65 0.15 55 / 0.12)' :
                      'var(--secondary)',
                color: txn.type === 'earn' ? 'oklch(0.45 0.07 150)' :
                  txn.type === 'payout' ? 'var(--primary)' :
                    txn.type === 'bonus' ? 'oklch(0.5 0.15 55)' :
                      'var(--secondary-foreground)',
              }}>
                {txn.type === 'earn' ? <ArrowDown size={16} /> :
                  txn.type === 'payout' ? <ArrowUp size={16} /> :
                    <Banknote size={16} />}
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-.02em' }}>{txn.description}</strong>
                <p style={{ margin: '2px 0 0', fontSize: 10, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                  {format(new Date(txn.createdAt), 'dd MMM yyyy')}
                </p>
              </div>
              <span style={{
                fontSize: 14, fontWeight: 600, letterSpacing: '-.02em',
                color: txn.type === 'earn' || txn.type === 'bonus' ? 'oklch(0.45 0.07 150)' : 'var(--foreground)',
              }}>
                {txn.type === 'earn' || txn.type === 'bonus' ? '+' : '-'}{formatAmount(txn.amount)}
              </span>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
