'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, EyeOff, Mail, Lock, User, Phone, MapPin, AlertCircle } from 'lucide-react'
import { signup } from '../actions'

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 32, height: 32 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // State to hold form values across steps
  const [formDataState, setFormDataState] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step === 1) { 
      setStep(2)
      return 
    }
    
    setLoading(true)
    setError(null)
    
    // Construct FormData manually from state to ensure all fields are present
    const formData = new FormData()
    formData.append('fullName', formDataState.fullName)
    formData.append('email', formDataState.email)
    formData.append('phone', formDataState.phone)
    formData.append('city', formDataState.city)
    formData.append('password', formDataState.password)
    formData.append('role', 'customer')
    
    try {
      const res = await signup(formData)
      if (res?.error) {
        setError(res.error)
        setStep(1) // Go back so they can fix things if needed
      }
    } catch (err) {
      setError("An unexpected error occurred.")
      setStep(1)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: '40px 0' }}>
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
          <span className="status-dot" /> Step {step} of 2
        </div>

        <h1 style={{ margin: '14px 0 0', fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520 }}>
          Get <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>started.</em>
        </h1>
        <p style={{ margin: '14px 0 36px', color: 'var(--muted-foreground)', fontSize: 15, lineHeight: 1.6 }}>
          {step === 1 ? 'Tell us a little about yourself.' : 'Secure your account.'}
        </p>

        {error && (
          <div style={{ padding: 16, background: 'var(--destructive)', color: '#fff', borderRadius: 12, marginBottom: 24, fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {step === 1 ? (
            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label className="app-label" htmlFor="fullName"><User size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />Full name</label>
                <input id="fullName" name="fullName" value={formDataState.fullName} onChange={handleChange} className="app-input" type="text" placeholder="Aryan Kapoor" required />
              </div>
              <div>
                <label className="app-label" htmlFor="email"><Mail size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />Email</label>
                <input id="email" name="email" value={formDataState.email} onChange={handleChange} className="app-input" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="app-label" htmlFor="phone"><Phone size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />Phone</label>
                <input id="phone" name="phone" value={formDataState.phone} onChange={handleChange} className="app-input" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div>
                <label className="app-label" htmlFor="city"><MapPin size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />City</label>
                <input id="city" name="city" value={formDataState.city} onChange={handleChange} className="app-input" type="text" placeholder="Mumbai" required />
              </div>
            </motion.div>
          ) : (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label className="app-label" htmlFor="password"><Lock size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />Create a password</label>
                <div style={{ position: 'relative' }}>
                  <input id="password" name="password" value={formDataState.password} onChange={handleChange} className="app-input" type={showPassword ? 'text' : 'password'} placeholder="••••••••" required minLength={8} style={{ paddingRight: 42 }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p style={{ margin: '6px 0 0', color: 'var(--muted-foreground)', font: '10px var(--font-geist-mono), monospace' }}>
                  At least 8 characters
                </p>
              </div>

              <div style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 14, background: 'var(--card)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  By creating an account, you agree to our <Link href="/legal/terms" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link> and <Link href="/legal/privacy" style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>. PlusOne is a social activity marketplace — sexual services are strictly prohibited.
                </p>
              </div>
            </motion.div>
          )}

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {step === 2 && (
              <button type="button" className="app-btn app-btn-outline" onClick={() => setStep(1)} style={{ flex: 0 }}>
                Back
              </button>
            )}
            <button type="submit" className="app-btn app-btn-primary" disabled={loading} style={{ flex: 1, opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Creating account...' : step === 1 ? <>Continue <ArrowRight size={15} /></> : <>Create account <ArrowRight size={15} /></>}
            </button>
          </div>
        </form>

        <p style={{ marginTop: 24, textAlign: 'center', color: 'var(--muted-foreground)', fontSize: 12 }}>
          Already have an account? <Link href="/auth/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Log in</Link>
        </p>
      </motion.div>
    </div>
  )
}
