'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Clock, MapPin, Calendar, CheckCircle, X } from 'lucide-react'
import { useEarn } from './EarnContext'
import { useRouter } from 'next/navigation'

export function LiveMatchOverlay() {
  const { isAvailable, activeLiveMatch, applyToPlan, dismissLiveMatch } = useEarn()
  const [secondsLeft, setSecondsLeft] = useState<number>(899) // 14:59 = 899s
  const [accepted, setAccepted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!activeLiveMatch) return

    setSecondsLeft(899)
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          dismissLiveMatch()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [activeLiveMatch, dismissLiveMatch])

  if (!isAvailable || !activeLiveMatch) return null

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`
  }

  const handleAccept = () => {
    applyToPlan(activeLiveMatch)
    setAccepted(true)
    setTimeout(() => {
      setAccepted(false)
      dismissLiveMatch()
      router.push('/app/earn/applications')
    }, 1200)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="toast"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          left: 'auto',
          top: 'auto',
          transform: 'none',
          width: 'calc(100% - 48px)',
          maxWidth: 420,
          zIndex: 9999,
          padding: '20px 24px',
          display: 'block',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        {accepted ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '12px 0' }}>
            <CheckCircle size={28} style={{ color: 'var(--primary)' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Match Accepted!</h4>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)' }}>Application submitted for ₹{activeLiveMatch.budget}. Redirecting to applications...</p>
            </div>
          </div>
        ) : (
          <div>
            {/* Header Badge & Timer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div
                className="app-badge app-badge-primary"
                style={{ padding: '6px 14px' }}
              >
                <Flame size={16} />
                <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}>
                  LIVE MATCH
                </span>
              </div>

              <div
                className="app-badge app-badge-accent"
                style={{ padding: '4px 12px', fontSize: 13, fontWeight: 600 }}
              >
                <Clock size={14} />
                <span>{formatTime(secondsLeft)} remaining</span>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 650, letterSpacing: '-0.01em', color: 'var(--foreground)' }}>
                  {activeLiveMatch.activity_title}
                </h3>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: 13, color: 'var(--muted-foreground)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={14} style={{ color: 'var(--primary)' }} />
                    {activeLiveMatch.location} ({activeLiveMatch.distance})
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Calendar size={14} style={{ color: 'var(--accent)' }} />
                    {activeLiveMatch.date_time}
                  </span>
                </div>
              </div>

              {/* Fixed Budget Badge */}
              <div
                style={{
                  background: 'color-mix(in oklch, var(--primary) 12%, transparent)',
                  color: 'var(--primary)',
                  padding: '10px 16px',
                  borderRadius: 16,
                  textAlign: 'right',
                  flexShrink: 0,
                  border: '1px solid color-mix(in oklch, var(--primary) 30%, transparent)'
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Fixed Budget</div>
                <div style={{ fontSize: 20, fontWeight: 800 }}>₹{activeLiveMatch.budget}</div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button
                className="app-btn app-btn-primary"
                onClick={handleAccept}
                style={{ flex: 1, padding: '12px 20px', fontSize: 15 }}
              >
                Accept for ₹{activeLiveMatch.budget}
              </button>

              <button
                className="app-btn app-btn-secondary"
                onClick={dismissLiveMatch}
                style={{ padding: '12px 20px', fontSize: 14 }}
              >
                <X size={16} /> Skip
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
