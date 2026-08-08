'use client'

import { useState, useTransition } from 'react'
import { updateProfile } from '@/app/profile/actions'
import { User, Phone, MapPin, AlignLeft, CheckCircle2 } from 'lucide-react'

export default function ProfileClient({ profile }: { profile: { name?: string; phone?: string; city?: string; bio?: string; email?: string } }) {
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  async function submit(formData: FormData) {
    setMessage('')
    startTransition(async () => {
      const result = await updateProfile(formData)
      setMessage('error' in result ? (result.error || 'Unable to save profile.') : 'Profile saved successfully!')
    })
  }

  const isSuccess = message === 'Profile saved successfully!'

  return (
    <form action={submit} className="app-card" style={{ padding: '24px 20px', display: 'grid', gap: 18, width: '100%', boxSizing: 'border-box' }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>Public Details</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 14 }}>
        <div>
          <label className="app-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <User size={13} style={{ color: 'var(--muted-foreground)' }} /> Name
          </label>
          <input 
            className="app-input w-full" 
            name="name" 
            defaultValue={profile.name || ''} 
            required 
            minLength={2} 
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className="app-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Phone size={13} style={{ color: 'var(--muted-foreground)' }} /> Phone
          </label>
          <input 
            className="app-input w-full" 
            name="phone" 
            defaultValue={profile.phone || ''} 
            placeholder="+91 98765 43210" 
          />
        </div>
      </div>

      <div>
        <label className="app-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MapPin size={13} style={{ color: 'var(--muted-foreground)' }} /> City
        </label>
        <input 
          className="app-input w-full" 
          name="city" 
          defaultValue={profile.city || ''} 
          required 
          placeholder="Mumbai" 
        />
      </div>

      <div>
        <label className="app-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <AlignLeft size={13} style={{ color: 'var(--muted-foreground)' }} /> Bio
        </label>
        <textarea 
          className="app-input w-full" 
          name="bio" 
          defaultValue={profile.bio || ''} 
          maxLength={500} 
          style={{ minHeight: 110, resize: 'vertical' }}
          placeholder="What are you down for? E.g., 'Always up for sci-fi movies, coffee runs, and weekend hikes around Mumbai.'" 
        />
      </div>

      {message && (
        <div 
          className="app-badge" 
          style={{ 
            width: 'fit-content',
            background: isSuccess ? 'oklch(0.78 0.07 150 / 0.1)' : 'oklch(0.58 0.22 27 / 0.1)',
            color: isSuccess ? 'var(--accent)' : 'var(--destructive)',
            padding: '10px 14px',
            fontSize: 13,
            fontWeight: 500,
            borderRadius: 10
          }}
        >
          {isSuccess && <CheckCircle2 size={14} style={{ marginRight: 4 }} />}
          {message}
        </div>
      )}

      <button 
        className="app-btn app-btn-primary" 
        type="submit"
        disabled={isPending}
        style={{ width: '100%', marginTop: 6 }}
      >
        {isPending ? 'Saving changes...' : 'Save changes'}
      </button>
    </form>
  )
}
