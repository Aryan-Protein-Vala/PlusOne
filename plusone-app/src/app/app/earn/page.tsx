import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function EarnDashboardPage() {
  const s = await createClient()
  const { data: { user } } = await s.auth.getUser()
  let listings: any[] = []
  let bookings: any[] = []

  if (user) {
    const l = await s
      .from('provider_listings')
      .select('id,title,city,hourly_rate,status')
      .eq('host_id', user.id)
      .order('created_at', { ascending: false })
    listings = l.data || []

    const b = await s
      .from('bookings')
      .select('id,status,amount,currency')
      .eq('host_id', user.id)
      .order('created_at', { ascending: false })
      .limit(10)
    bookings = b.data || []
  }

  const completed = bookings
    .filter((b) => b.status === 'completed')
    .reduce((n, b) => n + Number(b.amount), 0)

  return (
    <div>
      {/* E1 fixed: no h1 here — the layout already has one ("Hang out & cash out.") */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 15 }}>
          Manage your listings, requests, and earnings all in one place.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 28 }}>
        {[
          ['Completed earnings', `₹${completed.toLocaleString('en-IN')}`],
          ['Active listings', String(listings.filter((l) => l.status === 'published').length)],
          ['Total requests', String(bookings.length)],
        ].map(([label, value]) => (
          <div className="app-card" key={label} style={{ padding: 20 }}>
            <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{label}</span>
            <strong style={{ display: 'block', fontSize: 26, marginTop: 8 }}>{value}</strong>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 28 }}>
        <Link href="/app/earn/listings" className="app-card" style={{ padding: 18, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Create an offer</span>
          <ArrowRight size={16} style={{ color: 'var(--muted-foreground)' }} />
        </Link>
        <Link href="/app/earn/marketplace" className="app-card" style={{ padding: 18, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Browse open plans</span>
          <ArrowRight size={16} style={{ color: 'var(--muted-foreground)' }} />
        </Link>
      </div>

      {/* Recent listings */}
      <div className="app-card" style={{ padding: 22 }}>
        <h2 style={{ margin: '0 0 16px', fontSize: 18 }}>Your recent offers</h2>
        {listings.length === 0 ? (
          <p style={{ color: 'var(--muted-foreground)' }}>
            Create your first offer to start earning.
          </p>
        ) : (
          listings.slice(0, 5).map((l) => (
            <div
              key={l.id}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px solid var(--border)' }}
            >
              <span>
                {l.title}
                <small style={{ display: 'block', color: 'var(--muted-foreground)' }}>
                  {l.city} · {l.status}
                </small>
              </span>
              <strong>₹{Number(l.hourly_rate).toLocaleString('en-IN')}/hr</strong>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
