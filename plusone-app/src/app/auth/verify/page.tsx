'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, RefreshCw } from 'lucide-react'

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 32, height: 32 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

export default function VerifyPage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
    if (newCode.every((c) => c !== '')) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setVerified(true)
      }, 1500)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="app-page" style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: 'min(420px, calc(100% - 48px))', textAlign: 'center' }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--foreground)', textDecoration: 'none', fontWeight: 700, fontSize: 17, letterSpacing: '-.04em', marginBottom: 48 }}>
          <LogoMark />
          <span>plusone</span>
        </Link>

        {verified ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'oklch(0.78 0.07 150 / 0.15)', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
              <Check size={28} style={{ color: 'var(--accent)' }} />
            </div>
            <h1 style={{ margin: '14px 0 0', fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520 }}>
              You&apos;re <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>in.</em>
            </h1>
            <p style={{ margin: '14px 0 36px', color: 'var(--muted-foreground)', fontSize: 15, lineHeight: 1.6 }}>
              Your account is verified. Time to find your people.
            </p>
            <Link href="/app/dashboard" className="app-btn app-btn-primary" style={{ display: 'inline-flex' }}>
              Go to dashboard <ArrowRight size={15} />
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="status-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="status-dot" /> Verify your email
            </div>

            <h1 style={{ margin: '14px 0 0', fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: '.95', letterSpacing: '-.065em', fontWeight: 520 }}>
              Check your <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>inbox.</em>
            </h1>
            <p style={{ margin: '14px 0 36px', color: 'var(--muted-foreground)', fontSize: 15, lineHeight: 1.6 }}>
              We sent a 6-digit code to your email. Enter it below.
            </p>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 32 }}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el }}
                  className="app-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  style={{
                    width: 48,
                    height: 56,
                    textAlign: 'center',
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: 0,
                    padding: 0,
                    borderRadius: 12,
                  }}
                />
              ))}
            </div>

            {loading && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'var(--muted-foreground)', fontSize: 12, marginBottom: 24 }}>
                Verifying...
              </motion.p>
            )}

            <button type="button" className="app-btn app-btn-outline app-btn-sm" style={{ margin: '0 auto' }}>
              <RefreshCw size={13} /> Resend code
            </button>
          </>
        )}
      </motion.div>
    </div>
  )
}
