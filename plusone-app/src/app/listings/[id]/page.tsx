import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import BookingClient from './BookingClient'

export const dynamic = 'force-dynamic'

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: listing } = await supabase.from('provider_listings').select('id,host_id,title,description,category,city,hourly_rate,currency,status').eq('id', id).eq('country_code', 'IN').eq('currency', 'INR').eq('status', 'published').maybeSingle()
  if (!listing) notFound()
  const { data: profile } = await supabase.from('profiles').select('id,name,city,bio,avatar_url,is_verified,trust_score').eq('id', listing.host_id).maybeSingle()
  return <div className="app-container" style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}><Link href="/app/explore" style={{ color: 'var(--primary)', fontSize: 13 }}>← Back to Explore</Link><div className="listing-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(280px, .8fr)', gap: 22, marginTop: 18 }}><article className="app-card" style={{ padding: 28 }}><span className="app-badge app-badge-primary">{listing.category}</span><h1 style={{ margin: '16px 0 8px', fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: 1 }}>{listing.title}</h1><p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{listing.description}</p><div style={{ display: 'flex', gap: 18, color: 'var(--muted-foreground)', fontSize: 13, marginTop: 24 }}><span>{listing.city}, India</span><strong style={{ color: 'var(--foreground)' }}>₹{Number(listing.hourly_rate).toLocaleString('en-IN')}/hr</strong></div><div style={{ borderTop: '1px solid var(--border)', marginTop: 24, paddingTop: 20 }}><strong>{profile?.name || 'PlusOne Partner'}</strong><p style={{ margin: '5px 0 0', color: 'var(--muted-foreground)', fontSize: 13 }}>{profile?.bio || 'Ready to make your plan better.'} {profile?.is_verified ? '· Verified' : ''}</p></div></article><BookingClient listingId={listing.id} hourlyRate={Number(listing.hourly_rate)} /></div></div>
}
