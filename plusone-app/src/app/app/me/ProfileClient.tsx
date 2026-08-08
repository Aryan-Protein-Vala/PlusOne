'use client'

import { useState } from 'react'
import { updateProfile } from '@/app/profile/actions'

export default function ProfileClient({ profile }: { profile: { name?: string; phone?: string; city?: string; bio?: string; email?: string } }) {
  const [message, setMessage] = useState('')
  async function submit(formData: FormData) {
    const result = await updateProfile(formData)
    setMessage('error' in result ? (result.error || 'Unable to save profile.') : 'Profile saved.')
  }
  return <form action={submit} className="app-card" style={{ padding: 24, display: 'grid', gap: 14 }}>
    <div><label className="text-xs">Name</label><input className="app-input w-full" name="name" defaultValue={profile.name || ''} required minLength={2} /></div>
    <div><label className="text-xs">Phone</label><input className="app-input w-full" name="phone" defaultValue={profile.phone || ''} placeholder="+91 98765 43210" /></div>
    <div><label className="text-xs">City</label><input className="app-input w-full" name="city" defaultValue={profile.city || ''} required placeholder="Mumbai" /></div>
    <div><label className="text-xs">Bio</label><textarea className="app-input w-full" name="bio" defaultValue={profile.bio || ''} maxLength={500} placeholder="Tell people what you are usually down for." /></div>
    {message && <p style={{ margin: 0, color: message === 'Profile saved.' ? 'var(--accent-foreground)' : 'var(--destructive)', fontSize: 13 }}>{message}</p>}
    <button className="app-btn app-btn-primary" type="submit">Save changes</button>
  </form>
}
