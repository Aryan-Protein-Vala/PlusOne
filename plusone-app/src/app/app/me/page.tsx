import { createClient } from '@/lib/supabase/server'
import ProfileClient from './ProfileClient'
import { logout } from '@/app/auth/actions'

export const dynamic = 'force-dynamic'

export default async function MePage() {
  const s = await createClient()
  const { data: { user } } = await s.auth.getUser()
  const { data: profile } = user
    ? await s
        .from('profiles')
        .select('name,email,phone,city,country_code,bio,avatar_url,is_verified,trust_score,availability_status')
        .eq('id', user.id)
        .maybeSingle()
    : { data: null }

  return (
    <div className="app-container" style={{ maxWidth: 960, margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 650 }}>Your Profile</h1>
        <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>Your PlusOne identity, editable whenever you want.</p>
      </div>

      <div className="me-layout-grid">
        {/* Left: Edit Form */}
        <ProfileClient profile={profile || { email: user?.email }} />

        {/* Right: Security & Meta */}
        <div style={{ display: 'grid', gap: 20, width: '100%' }}>
          {/* Card 1: Visual Identity & Trust */}
          <div className="app-card" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
            {/* Corner Verification Stamp */}
            {profile?.is_verified && (
              <span className="app-badge app-badge-accent" style={{ position: 'absolute', top: 16, right: 16 }}>
                Verified
              </span>
            )}
            
            {/* Avatar Circle */}
            <div className="app-avatar" style={{ width: 72, height: 72, fontSize: 22, background: 'var(--primary)', color: 'var(--primary-foreground)', marginBottom: 16, fontWeight: 700 }}>
              {(profile?.name || user?.email || 'U').substring(0, 2).toUpperCase()}
            </div>

            <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 600 }}>{profile?.name || 'Your Profile'}</h3>
            <p style={{ margin: '0 0 20px', color: 'var(--muted-foreground)', fontSize: 13 }}>{profile?.city || 'India'}</p>

            {/* Trust Index Meter */}
            <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: 20, textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 8, fontFamily: 'var(--font-geist-mono), monospace' }}>
                <span>Trust Score</span>
                <span>{profile?.trust_score || 0}%</span>
              </div>
              <div style={{ height: 6, width: '100%', background: 'var(--border)', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
                <div style={{ height: '100%', width: `${profile?.trust_score || 0}%`, background: 'var(--accent)', borderRadius: 3 }} />
              </div>
              <small style={{ color: 'var(--muted-foreground)', fontSize: 12 }}>
                {profile?.trust_score && profile.trust_score > 80 
                  ? 'Excellent rating. High activity safety ranking.' 
                  : 'Complete your profile details to increase your safety rating.'}
              </small>
            </div>
          </div>

          {/* Card 2: Account Details */}
          <div className="app-card" style={{ padding: 24, display: 'grid', gap: 14 }}>
            <h4 style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 600 }}>Account Details</h4>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Email Address</span>
              <strong style={{ fontSize: 13 }}>{profile?.email || user?.email}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Status</span>
              <strong style={{ fontSize: 13, color: profile?.is_verified ? 'var(--accent)' : 'var(--muted-foreground)' }}>
                {profile?.is_verified ? 'Active & Verified' : 'Standard Account'}
              </strong>
            </div>

            <form action={logout} style={{ marginTop: 8 }}>
              <button className="app-btn app-btn-outline" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                Log out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
