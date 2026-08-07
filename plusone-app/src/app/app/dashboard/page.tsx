'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Plus,
  Sparkles,
  Check,
  ChevronRight,
  IndianRupee,
  Activity,
} from 'lucide-react'
import { MOCK_USER, MOCK_BOOKINGS } from '@/lib/mock-data'
import { createPlan } from '@/app/plans/actions'
import { useSearchParams } from 'next/navigation'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function CreatePlanWidget({ initiallyOpen }: { initiallyOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setLoading(true)
    const formData = new FormData(formRef.current)
    try {
      await createPlan(formData)
      setSuccess(true)
      setTimeout(() => {
        setIsOpen(false)
        setSuccess(false)
        formRef.current?.reset()
      }, 2000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-card" style={{ padding: 0, overflow: 'hidden', marginBottom: 40, border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border)' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 24, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'oklch(0.76 0.07 300 / 0.1)', display: 'grid', placeItems: 'center' }}>
              <Plus size={16} style={{ color: 'var(--primary)' }} />
            </div>
            <strong style={{ fontSize: 18, fontWeight: 520, letterSpacing: '-.03em', color: 'var(--foreground)' }}>Create a Plan</strong>
          </div>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 13, marginLeft: 38 }}>
            Post what you want to do. Nearby hosts will apply to join you.
          </p>
        </div>
        <ChevronRight size={20} style={{ color: 'var(--muted-foreground)', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s ease' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 24px 24px', marginLeft: 38 }}>
              {success ? (
                <div style={{ padding: 24, background: 'oklch(0.78 0.07 150 / 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Check size={20} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>Plan posted successfully! Hosts nearby are being notified.</span>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label className="app-label">Activity</label>
                      <input name="activity" required placeholder="e.g. Watch Interstellar" className="app-input" />
                    </div>
                    <div>
                      <label className="app-label">Location</label>
                      <input name="location" required placeholder="e.g. PVR Saket, Delhi" className="app-input" />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                    <div>
                      <label className="app-label">Date</label>
                      <input type="date" name="date" required className="app-input" />
                    </div>
                    <div>
                      <label className="app-label">Time</label>
                      <input type="time" name="time" required className="app-input" />
                    </div>
                    <div>
                      <label className="app-label">Your charge (₹)</label>
                      <input type="number" name="budget" required placeholder="800" className="app-input" />
                    </div>
                  </div>

                  <div>
                    <label className="app-label">Details</label>
                    <textarea name="description" placeholder="Looking for someone who enjoys sci-fi..." className="app-input" style={{ minHeight: 80, resize: 'vertical' }} />
                  </div>

                  <button type="submit" disabled={loading} className="app-btn app-btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                    {loading ? 'Posting...' : 'Post Plan'} <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const initiallyOpen = searchParams.get('action') === 'create'
  const user = MOCK_USER
  const bookings = MOCK_BOOKINGS.slice(0, 2) // We'll mix mock bookings and a mock 'open plan'

  return (
    <div className="app-container">
      <Reveal>
        <div className="page-header">
          <div className="page-kicker"><span>dashboard</span><span>Welcome back</span></div>
          <h1>Hey, <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>{user.name.split(' ')[0]}.</em></h1>
          <p>Here&apos;s what&apos;s happening with your plans.</p>
        </div>
      </Reveal>

      {/* Create Plan Widget */}
      <Reveal delay={0.08}>
        <CreatePlanWidget initiallyOpen={initiallyOpen} />
      </Reveal>

      {/* Your Posted Plans */}
      <Reveal delay={0.12}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 520, letterSpacing: '-.04em', margin: 0 }}>Your active plans</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          {/* Mock Open Plan with applicants */}
          <div className="app-card" style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', border: '1px solid oklch(0.76 0.07 300 / 0.4)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'oklch(0.76 0.07 300 / 0.12)', display: 'grid', placeItems: 'center', color: 'var(--primary)' }}>
              <Activity size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <strong style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-.02em' }}>Coffee & Study Session</strong>
                <span className="app-badge app-badge-primary">Receiving Apps</span>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 4, color: 'var(--muted-foreground)', fontSize: 11 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />Blue Tokai, BKC</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><IndianRupee size={10} />500 Budget</span>
              </div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>3 Applicants</span>
              <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>Review now &rarr;</span>
            </div>
          </div>

          {/* Confirmed Bookings */}
          {bookings.map((booking, i) => (
            <div key={booking.id} className="app-card" style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'oklch(0.78 0.07 150 / 0.12)', display: 'grid', placeItems: 'center', color: 'oklch(0.45 0.07 150)' }}>
                <CalendarDays size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-.02em' }}>{booking.title}</strong>
                  <span className="app-badge app-badge-accent">Confirmed</span>
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 4, color: 'var(--muted-foreground)', fontSize: 11 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />{booking.location}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Clock size={10} />{booking.duration}h</span>
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--muted-foreground)' }} />
            </div>
          ))}
        </div>
      </Reveal>

      {/* Browse (Fallback to traditional marketplace) */}
      <Reveal delay={0.24}>
        <div className="app-card-flat" style={{ textAlign: 'center', padding: 48 }}>
          <Sparkles size={20} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: 22, fontWeight: 520, letterSpacing: '-.04em', margin: '0 0 10px' }}>Don't know what you want to do?</h3>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.6, maxWidth: 340, margin: '0 auto 24px' }}>
            Browse verified companions and see what they are up for.
          </p>
          <Link href="/#explore" className="app-btn app-btn-outline" style={{ display: 'inline-flex' }}>
            Explore Hosts <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
