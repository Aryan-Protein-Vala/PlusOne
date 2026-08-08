'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Pause, Play, Archive, MapPin } from 'lucide-react'
import { createListing, setListingStatus } from '@/app/marketplace/actions'

type Listing = { id: string; title: string; description: string; category: string; city: string; hourly_rate: number; currency: string; status: string }

export default function ListingsClient({ listings: initialListings, initialError }: { listings: Listing[]; initialError: string | null }) {
  const [listings, setListings] = useState(initialListings)
  const [creating, setCreating] = useState(false)
  const [message, setMessage] = useState(initialError || '')

  async function submit(formData: FormData) {
    setMessage('')
    const result = await createListing(formData)
    if ('error' in result) return setMessage(result.error)
    setCreating(false)
    setMessage('Offer published. Let the right person find you.')
    window.location.reload()
  }

  async function changeStatus(id: string, status: 'published' | 'paused' | 'archived') {
    const result = await setListingStatus(id, status)
    if ('error' in result) return setMessage(result.error)
    setListings((items) => items.map((item) => item.id === id ? { ...item, status } : item))
  }

  return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', marginBottom: 24 }}>
      <div><h2 style={{ margin: '0 0 5px', fontSize: 24, fontWeight: 650 }}>Your offers</h2><p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>What are you suspiciously good company for?</p></div>
      <button className="app-btn app-btn-primary" onClick={() => setCreating((open) => !open)}><Plus size={16} /> Create offer</button>
    </div>
    {message && <p style={{ color: 'var(--primary)', fontSize: 13, marginBottom: 16 }}>{message}</p>}
    {creating && <form action={submit} className="app-card" style={{ padding: 22, marginBottom: 22, display: 'grid', gap: 12 }}>
      <input className="app-input" name="title" placeholder="Offer title, e.g. Movie buddy in South Delhi" required minLength={3} />
      <textarea className="app-input" name="description" placeholder="What should people know before they pick you? Keep it lawful, keep it fun." required minLength={10} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}><input className="app-input" name="category" placeholder="What are you down for?" required /><input className="app-input" name="city" placeholder="City in India" required /></div>
      <input className="app-input" name="hourlyRate" type="number" min="1" step="1" placeholder="Your charge per hour (₹)" required />
      <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 12 }}>PlusOne is for lawful activities and good company — not sexual services, scams, or anything involving minors.</p>
      <button className="app-btn app-btn-primary" type="submit">Publish offer</button>
    </form>}
    {listings.length === 0 ? <div className="app-card" style={{ padding: 28, color: 'var(--muted-foreground)' }}>You have no offers yet. Put yourself on the menu and start earning.</div> : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
      {listings.map((listing) => <article key={listing.id} className="app-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 14 }}><span className="app-badge app-badge-primary">{listing.category}</span><span className="app-badge">{listing.status}</span></div>
        <h3 style={{ margin: '0 0 8px', fontSize: 18 }}>{listing.title}</h3><p style={{ color: 'var(--muted-foreground)', fontSize: 13, lineHeight: 1.5, minHeight: 42 }}>{listing.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 14, marginTop: 14 }}><span style={{ color: 'var(--muted-foreground)', fontSize: 12 }}><MapPin size={13} style={{ verticalAlign: 'middle' }} /> {listing.city}</span><strong>₹{Number(listing.hourly_rate).toLocaleString('en-IN')}/hr</strong></div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>{listing.status === 'published' ? <button className="app-btn app-btn-outline" onClick={() => changeStatus(listing.id, 'paused')}><Pause size={14} /> Pause</button> : <button className="app-btn app-btn-outline" onClick={() => changeStatus(listing.id, 'published')}><Play size={14} /> Publish</button>}<button className="app-btn app-btn-outline" onClick={() => changeStatus(listing.id, 'archived')}><Archive size={14} /> Archive</button></div>
      </article>)}
    </div>}
  </motion.div>
}
