'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react'
import { login } from '../actions'
import { createClient } from '@/lib/supabase/client'

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 32, height: 32 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    try {
      const res = await login(formData)
      if (res?.error) {
        setError(res.error)
      }
    } catch (err) {
      setError("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const redirectUrl = `${window.location.origin}/auth/callback`
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl
      }
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="app-page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: 'min(420px, calc(100% - 48px))' }}
      >
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--foreground)', textDecoration: 'none', fontWeight: 700, fontSize: 17, letterSpacing: '-.04em' }}>
            <LogoMark />
            <span>plusone</span>
          </Link>
        </div>

        <div className="status-pill" style={{ marginBottom: 20 }}>
          <span className="status-dot" /> Welcome back
        </div>

        <h1 style={{ margin: '14px 0 0', fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520 }}>
          Log <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>in.</em>
        </h1>
        <p style={{ margin: '14px 0 36px', color: 'var(--muted-foreground)', fontSize: 15, lineHeight: 1.6 }}>
          Pick up where you left off.
        </p>

        {error && (
          <div style={{ padding: 16, background: 'var(--destructive)', color: '#fff', borderRadius: 12, marginBottom: 24, fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label className="app-label" htmlFor="email">
              <Mail size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              Email
            </label>
            <input
              id="email"
              name="email"
              className="app-input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="app-label" htmlFor="password">
              <Lock size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                name="password"
                className="app-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                style={{ paddingRight: 42 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="app-btn app-btn-primary"
            disabled={loading}
            style={{ marginTop: 8, width: '100%', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Signing in...' : <>Sign in <ArrowRight size={15} /></>}
          </button>
        </form>

        {/* Google sign-in commented out temporarily
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 11, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="app-btn app-btn-outline"
          style={{ width: '100%', gap: 10, justifyContent: 'center', display: 'flex', alignItems: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
        */}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <Link href="/auth/register" style={{ color: 'var(--primary)', fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
            Create account
          </Link>
          <a href="#" style={{ color: 'var(--muted-foreground)', fontSize: 12, textDecoration: 'none' }}>
            Forgot password?
          </a>
        </div>

        <p style={{ marginTop: 32, textAlign: 'center', color: 'var(--muted-foreground)', font: '9px var(--font-geist-mono), monospace' }}>
          By signing in you agree to our <Link href="/legal/terms" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Terms</Link> and <Link href="/legal/privacy" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Privacy Policy</Link>
        </p>
      </motion.div>
    </div>
  )
}
