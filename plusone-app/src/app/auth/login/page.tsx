'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react'
import { login } from '../actions'

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

  return (
    <div className="app-page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: 'min(420px, calc(100% - 48px))' }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--foreground)', textDecoration: 'none', fontWeight: 700, fontSize: 17, letterSpacing: '-.04em', marginBottom: 48 }}>
          <LogoMark />
          <span>plusone</span>
        </Link>

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
