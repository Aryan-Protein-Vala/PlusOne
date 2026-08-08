'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Search, Send, ArrowLeft } from 'lucide-react'
import { applyToPlanReal } from '@/app/marketplace/actions'

type Plan = {
  id: string
  activity: string
  location: string
  start_time: string
  budget: number
  currency: string
  description?: string
}

export default function MarketplaceClient({ plans, error }: { plans: Plan[]; error: string | null }) {
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<Plan | null>(null)
  const [note, setNote] = useState('')
  const visible = plans.filter((p) =>
    `${p.activity} ${p.location}`.toLowerCase().includes(q.toLowerCase()),
  )

  async function apply(f: FormData) {
    if (!selected) return
    const r = await applyToPlanReal(selected.id, Number(f.get('rate')), String(f.get('message') || ''))
    setNote('error' in r ? r.error : 'Application sent — they will get back to you!')
    if (!('error' in r)) setSelected(null)
  }

  return (
    <div>
      {/* F3: contextual back-link so "find someone" users can return to explore */}
      <div style={{ marginBottom: 16 }}>
        <Link
          href="/app/explore"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}
        >
          <ArrowLeft size={14} /> Back to Explore
        </Link>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: '0 0 5px', fontSize: 24, fontWeight: 650 }}>Plans nearby</h2>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
          Find open plans and earn by joining people across India.
        </p>
      </div>

      <div style={{ position: 'relative', marginBottom: 22 }}>
        <Search size={16} style={{ position: 'absolute', left: 14, top: 14, color: 'var(--muted-foreground)' }} />
        <input
          className="app-input"
          style={{ paddingLeft: 40 }}
          placeholder="Search activities or cities"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {note && <p style={{ color: 'var(--primary)', fontSize: 13, marginBottom: 16 }}>{note}</p>}

      {error ? (
        <div className="app-card" style={{ padding: 24, color: 'var(--destructive)' }}>{error}</div>
      ) : visible.length === 0 ? (
        <div className="app-card" style={{ padding: 28, color: 'var(--muted-foreground)' }}>
          No open plans match your search yet. Be the chaos — post a plan and let someone find you.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
          {visible.map((p) => (
            <article className="app-card" key={p.id} style={{ padding: 20 }}>
              <span className="app-badge app-badge-primary">Open plan</span>
              <h3 style={{ margin: '14px 0 8px', fontSize: 18 }}>{p.activity}</h3>
              <p style={{ color: 'var(--muted-foreground)', fontSize: 13 }}>
                {p.description || 'Someone is looking for a PlusOne for this plan.'}
              </p>
              <div style={{ display: 'grid', gap: 8, color: 'var(--muted-foreground)', fontSize: 13, margin: '16px 0' }}>
                <span><MapPin size={14} /> {p.location}</span>
                <span><Calendar size={14} /> {new Date(p.start_time).toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                <strong>₹{Number(p.budget).toLocaleString('en-IN')}</strong>
                <button className="app-btn app-btn-primary" onClick={() => setSelected(p)}>
                  <Send size={14} /> Apply
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selected && (
        <div className="app-modal-backdrop" onClick={() => setSelected(null)}>
          <form
            className="app-card"
            onClick={(e) => e.stopPropagation()}
            action={apply}
            style={{ width: 'min(460px, 92vw)', padding: 24, display: 'grid', gap: 12 }}
          >
            <h3 style={{ margin: 0 }}>Apply to {selected.activity}</h3>
            <input className="app-input" name="rate" type="number" min="1" placeholder="Your charge (₹)" required />
            <textarea
              className="app-input"
              name="message"
              placeholder="Tell them why you are a good PlusOne"
              minLength={5}
              required
            />
            <button className="app-btn app-btn-primary" type="submit">
              Send application
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
