'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Bookmark,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Globe,
  Lock,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  Shield,
  ShieldCheck,
  Star,
  ThumbsUp,
  Users,
  X,
  Zap,
} from 'lucide-react'
import { MOCK_PROVIDERS, MOCK_USER } from '@/lib/mock-data'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 25, height: 25 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

type BookingStep = 'select' | 'safety' | 'confirm'

export default function ProviderProfilePage() {
  const params = useParams()
  const provider = MOCK_PROVIDERS.find((p) => p.id === params.id) || MOCK_PROVIDERS[0]
  const [activeTab, setActiveTab] = useState<'about' | 'reviews' | 'availability'>('about')
  const [bookingStep, setBookingStep] = useState<BookingStep>('select')
  const [selectedDuration, setSelectedDuration] = useState(2)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('15:00')
  const [showSafetyModal, setShowSafetyModal] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const totalPrice = provider.hourlyRate * selectedDuration
  const platformFee = Math.round(totalPrice * 0.15)
  const totalWithFee = totalPrice + platformFee

  const formatPrice = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const safetyTips = [
    'Meet in public places whenever possible',
    'Tell a trusted friend or family member where you\'re going',
    'Share your live location during the meetup',
    'Avoid transferring money outside the platform',
    'Respect boundaries and community guidelines',
    'Report suspicious behaviour immediately',
  ]

  return (
    <div className="app-page">
      {/* Nav */}
      <header className="app-nav">
        <Link href="/" className="brand" aria-label="PlusOne home">
          <LogoMark />
          <span>plusone</span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/">Explore</Link>
          <Link href="/hosts">For hosts</Link>
          <Link href="/app/dashboard">Dashboard</Link>
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" href="/auth/login">Log in</Link>
          <Link className="nav-cta" href="/auth/register">Get started <ArrowRight size={15} /></Link>
        </div>
      </header>

      <div className="app-container">
        {/* Back Button */}
        <Reveal>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--muted-foreground)', fontSize: 12, textDecoration: 'none', marginBottom: 32 }}>
            <ArrowLeft size={14} /> Back to explore
          </Link>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'start' }}>
          {/* Left: Profile */}
          <div>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 32 }}>
                <div className="app-avatar" style={{ width: 80, height: 80, borderRadius: 20, fontSize: 24 }}>
                  {provider.avatar ? <img src={provider.avatar} alt={provider.name} /> : provider.name.charAt(0)}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h1 style={{ margin: 0, fontSize: 28, fontWeight: 520, letterSpacing: '-.05em' }}>{provider.name}</h1>
                    {provider.isVerified && (
                      <span className="app-badge app-badge-accent">
                        <ShieldCheck size={10} /> Verified
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 8, color: 'var(--muted-foreground)', fontSize: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><MapPin size={12} />{provider.city}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Star size={12} style={{ color: 'oklch(0.65 0.15 55)' }} />{provider.ratings.overall} ({provider.ratings.count})</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Clock size={12} />{provider.responseTime}</span>
                  </div>
                  <p style={{ margin: '12px 0 0', color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.6, maxWidth: 500 }}>
                    {provider.bio}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stats Row */}
            <Reveal delay={0.06}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
                {[
                  { label: 'Completed', value: provider.completedActivities },
                  { label: 'Response', value: `${provider.responseRate}%` },
                  { label: 'Repeat', value: provider.repeatCustomers },
                  { label: 'Trust', value: provider.trustLevel },
                ].map((stat) => (
                  <div key={stat.label} className="metric-card" style={{ padding: 16 }}>
                    <span className="metric-label" style={{ fontSize: 9 }}>{stat.label}</span>
                    <span className="metric-value" style={{ fontSize: 22 }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Tabs */}
            <Reveal delay={0.1}>
              <div className="app-tabs">
                {(['about', 'reviews', 'availability'] as const).map((tab) => (
                  <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Tab Content */}
            <Reveal delay={0.14}>
              {activeTab === 'about' && (
                <div>
                  {/* Activities */}
                  <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.03em', margin: '0 0 14px' }}>Activities</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                    {provider.activities.map((act) => (
                      <span key={act} className="app-badge app-badge-secondary" style={{ padding: '6px 12px', fontSize: 12 }}>{act}</span>
                    ))}
                  </div>

                  {/* Languages */}
                  <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.03em', margin: '0 0 14px' }}>Languages</h3>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
                    {provider.languages.map((lang) => (
                      <span key={lang} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--muted-foreground)' }}>
                        <Globe size={12} /> {lang}
                      </span>
                    ))}
                  </div>

                  {/* Badges */}
                  <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.03em', margin: '0 0 14px' }}>Badges</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 32 }}>
                    {provider.badges.map((badge) => (
                      <div key={badge.id} className="app-card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 18 }}>{badge.icon}</span>
                        <div>
                          <strong style={{ fontSize: 12, fontWeight: 500 }}>{badge.label}</strong>
                          <p style={{ margin: '2px 0 0', fontSize: 10, color: 'var(--muted-foreground)' }}>{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Rating Summary */}
                  <div className="app-card" style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 8 }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 42, fontWeight: 520, letterSpacing: '-.06em' }}>{provider.ratings.overall}</div>
                      <div style={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 4 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < Math.floor(provider.ratings.overall) ? 'oklch(0.65 0.15 55)' : 'none'} style={{ color: 'oklch(0.65 0.15 55)' }} />
                        ))}
                      </div>
                      <span style={{ fontSize: 10, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>{provider.ratings.count} reviews</span>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {[
                        { label: 'Communication', val: provider.ratings.communication },
                        { label: 'Punctuality', val: provider.ratings.punctuality },
                        { label: 'Friendliness', val: provider.ratings.friendliness },
                      ].map((r) => (
                        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ width: 90, fontSize: 11, color: 'var(--muted-foreground)' }}>{r.label}</span>
                          <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'var(--border)' }}>
                            <div style={{ width: `${(r.val / 5) * 100}%`, height: '100%', borderRadius: 2, background: 'var(--primary)' }} />
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 500, width: 24 }}>{r.val}</span>
                        </div>
                      ))}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ width: 90, fontSize: 11, color: 'var(--muted-foreground)' }}>Would repeat</span>
                        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-foreground)' }}>{provider.ratings.wouldMeetAgain}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  {provider.reviews.map((review) => (
                    <div key={review.id} className="app-card">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <div className="app-avatar" style={{ width: 32, height: 32 }}>
                          {review.reviewerAvatar ? <img src={review.reviewerAvatar} alt={review.reviewerName} /> : review.reviewerName.charAt(0)}
                        </div>
                        <div>
                          <strong style={{ fontSize: 13, fontWeight: 500 }}>{review.reviewerName}</strong>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                            <div style={{ display: 'flex', gap: 1 }}>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={10} fill={i < review.rating.overall ? 'oklch(0.65 0.15 55)' : 'none'} style={{ color: 'oklch(0.65 0.15 55)' }} />
                              ))}
                            </div>
                            <span style={{ fontSize: 9, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                              {format(new Date(review.createdAt), 'MMM yyyy')}
                            </span>
                            {review.verified && <span className="app-badge app-badge-accent" style={{ padding: '2px 6px', fontSize: 8 }}>Verified</span>}
                          </div>
                        </div>
                      </div>
                      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'availability' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {provider.availability.map((slot) => (
                    <div key={`${slot.day}-${slot.startTime}`} className="app-list-item">
                      <span style={{ width: 90, fontSize: 13, fontWeight: 500 }}>{slot.day}</span>
                      <span style={{ flex: 1, fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                        {slot.startTime} — {slot.endTime}
                      </span>
                      <span className={`app-badge ${slot.available ? 'app-badge-accent' : 'app-badge-secondary'}`}>
                        {slot.available ? 'Available' : 'Booked'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>

          {/* Right: Booking Card */}
          <Reveal delay={0.08}>
            <div style={{ position: 'sticky', top: 80 }}>
              <div className="app-card" style={{ padding: 28 }}>
                {!bookingConfirmed ? (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                      <div>
                        <span style={{ fontSize: 28, fontWeight: 520, letterSpacing: '-.05em' }}>{formatPrice(provider.hourlyRate)}</span>
                        <span style={{ fontSize: 12, color: 'var(--muted-foreground)', marginLeft: 4 }}>/ hour</span>
                      </div>
                      <span className="app-badge app-badge-accent">
                        <Zap size={9} /> Instant book
                      </span>
                    </div>

                    {bookingStep === 'select' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div>
                          <label className="app-label"><CalendarDays size={11} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />Date</label>
                          <input className="app-input" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                        </div>
                        <div>
                          <label className="app-label"><Clock size={11} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />Time</label>
                          <input className="app-input" type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
                        </div>
                        <div>
                          <label className="app-label">Duration</label>
                          <div style={{ display: 'flex', gap: 8 }}>
                            {[1, 2, 3, 4].map((h) => (
                              <button key={h} type="button" className={`app-btn app-btn-sm ${selectedDuration === h ? 'app-btn-primary' : 'app-btn-outline'}`} onClick={() => setSelectedDuration(h)} style={{ flex: 1 }}>
                                {h}h
                              </button>
                            ))}
                          </div>
                        </div>

                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, marginTop: 4 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 6 }}>
                            <span>{formatPrice(provider.hourlyRate)} × {selectedDuration} hrs</span>
                            <span>{formatPrice(totalPrice)}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 10 }}>
                            <span>Platform fee (15%)</span>
                            <span>{formatPrice(platformFee)}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 600 }}>
                            <span>Total</span>
                            <span>{formatPrice(totalWithFee)}</span>
                          </div>
                        </div>

                        <button className="app-btn app-btn-primary" style={{ width: '100%', marginTop: 4 }} onClick={() => setBookingStep('safety')}>
                          Continue <ArrowRight size={14} />
                        </button>
                      </div>
                    )}

                    {bookingStep === 'safety' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div style={{ padding: 16, borderRadius: 14, border: '1px solid var(--border)', background: 'var(--background)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                            <Shield size={14} style={{ color: 'var(--primary)' }} />
                            <strong style={{ fontSize: 13, fontWeight: 500 }}>Safety reminder</strong>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {safetyTips.map((tip, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                <Check size={12} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                                <span style={{ fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button className="app-btn app-btn-outline app-btn-sm" onClick={() => setBookingStep('select')}>Back</button>
                          <button className="app-btn app-btn-primary" style={{ flex: 1 }} onClick={() => setBookingStep('confirm')}>
                            I understand <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    )}

                    {bookingStep === 'confirm' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div style={{ padding: 16, borderRadius: 14, border: '1px solid var(--border)', background: 'var(--background)' }}>
                          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Companion</span><strong style={{ color: 'var(--foreground)' }}>{provider.name}</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Date</span><strong style={{ color: 'var(--foreground)' }}>{selectedDate || 'Not selected'}</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Time</span><strong style={{ color: 'var(--foreground)' }}>{selectedTime}</strong></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Duration</span><strong style={{ color: 'var(--foreground)' }}>{selectedDuration} hours</strong></div>
                            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}><span>Total</span><strong style={{ color: 'var(--foreground)', fontSize: 16 }}>{formatPrice(totalWithFee)}</strong></div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button className="app-btn app-btn-outline app-btn-sm" onClick={() => setBookingStep('safety')}>Back</button>
                          <button className="app-btn app-btn-primary" style={{ flex: 1 }} onClick={() => setBookingConfirmed(true)}>
                            <Lock size={13} /> Confirm & Pay
                          </button>
                        </div>
                        <p style={{ fontSize: 9, color: 'var(--muted-foreground)', textAlign: 'center', fontFamily: 'var(--font-geist-mono), monospace' }}>
                          Payment held in escrow until activity completes
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '16px 0' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'oklch(0.78 0.07 150 / 0.15)', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
                      <Check size={24} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 520, letterSpacing: '-.03em', margin: '0 0 8px' }}>Booking confirmed!</h3>
                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 20 }}>
                      You&apos;ll receive a confirmation message from {provider.name} shortly.
                    </p>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <Link href="/app/messages" className="app-btn app-btn-primary app-btn-sm" style={{ flex: 1, display: 'inline-flex', textDecoration: 'none' }}>
                        <MessageSquare size={13} /> Open Chat
                      </Link>
                      <Link href="/app/dashboard" className="app-btn app-btn-outline app-btn-sm" style={{ flex: 1, display: 'inline-flex', textDecoration: 'none' }}>
                        Dashboard
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Meeting tip */}
              <div className="app-card-flat" style={{ marginTop: 12, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'oklch(0.76 0.07 300 / 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Shield size={12} style={{ color: 'var(--primary)' }} />
                  </div>
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--foreground)' }}>Meeting tip:</strong> Meet at a public location you both agree on. Always share your live location with a trusted contact.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
