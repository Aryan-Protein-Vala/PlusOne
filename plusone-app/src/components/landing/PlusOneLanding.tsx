'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Heart,
  Menu,
  MessageCircle,
  MoreHorizontal,
  MoveUpRight,
  Sparkles,
  Ticket,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For people who want to earn', href: '#for-hosts' },
  { label: 'Explore', href: '#explore' },
]

const activities = [
  { icon: CalendarDays, label: 'Sunday reset', meta: 'Mumbai · 8 spots', accent: 'blue' },
  { icon: Ticket, label: 'Open-air cinema', meta: 'Delhi · 14 spots', accent: 'green' },
  { icon: Compass, label: 'Sunrise hike', meta: 'Bangalore · 6 spots', accent: 'blue' },
  { icon: Heart, label: 'Ceramics & coffee', meta: 'Pune · 10 spots', accent: 'green' },
]

const categories = ['Movies', 'Coffee', 'Study', 'Outdoors', 'Gaming', 'Travel']

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

function PhoneMockup() {
  const [active, setActive] = useState(0)
  const current = activities[active]
  return (
    <motion.div
      className="phone-shell"
      initial={{ opacity: 0, y: 38, rotate: 5 }}
      animate={{ opacity: 1, y: 0, rotate: 3 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, y: -8 }}
    >
      <div className="phone-camera" />
      <div className="phone-screen">
        <div className="phone-topbar">
          <span>9:41</span>
          <span className="phone-signal">● ● ●</span>
        </div>
        <div className="phone-header">
          <div>
            <p className="eyebrow">Thursday, May 23</p>
            <h3>Skip the small talk.</h3>
          </div>
          <span className="phone-avatar"><UserRound size={15} /></span>
        </div>
        <div className="phone-search"><Compass size={14} /> <span>What are you into?</span><ChevronDown size={14} /></div>
        <div className="phone-tabs">
          {['For you', 'Nearby'].map((tab, index) => (
            <button key={tab} type="button" className={active === index ? 'active' : ''} onClick={() => setActive(index)}>{tab}</button>
          ))}
        </div>
        <motion.div className="phone-feature" layout>
          <div className={`phone-feature-icon ${current.accent}`}><current.icon size={20} /></div>
          <div className="phone-feature-copy"><span>Suggested for you</span><strong>{current.label}</strong><small>{current.meta}</small></div>
          <ArrowRight size={16} />
        </motion.div>
        <div className="phone-list">
          {activities.slice(0, 3).map((item, index) => (
            <button className="phone-list-item" key={item.label} type="button" onClick={() => setActive(index % 2)}>
              <span className={`list-dot ${item.accent}`}><item.icon size={15} /></span>
              <span><strong>{item.label}</strong><small>{item.meta}</small></span>
              <MoreHorizontal size={15} />
            </button>
          ))}
        </div>
        <div className="phone-nav"><Compass size={17} /><CalendarDays size={17} /><LogoMark className="phone-logo-mark" /><MessageCircle size={17} /><UserRound size={17} /></div>
      </div>
    </motion.div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

function Nav({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="PlusOne home"><LogoMark /><span>plusone</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
      <div className="nav-actions">
        {isLoggedIn ? (
          <Link className="nav-cta" href="/app/explore">Open App <ArrowRight size={15} /></Link>
        ) : (
          <>
            <Link className="nav-login" href="/auth/login">Log in</Link>
            <Link className="nav-cta" href="/auth/register">Get started <ArrowRight size={15} /></Link>
          </>
        )}
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation">{navItems.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowRight size={15} /></a>)}
        {isLoggedIn ? (
          <Link href="/app/explore" onClick={() => setOpen(false)}>Open App<ArrowRight size={15} /></Link>
        ) : (
          <Link href="/auth/register" onClick={() => setOpen(false)}>Get started<ArrowRight size={15} /></Link>
        )}
      </motion.nav>}</AnimatePresence>
    </header>
  )
}

const bakchodReviews = [
  {
    quote: "Bhai, last month study sessions aur street food tours host karke ₹45,000 kama liye. PlusOne is literal cheat code for pocket money, no cap!",
    initials: "RM",
    name: "Rohan Malhotra",
    meta: "Earned ₹45k · PlusOne in Delhi NCR",
  },
  {
    quote: "Group chat waalon ne firse ghost kar diya movie ke liye. Posted on PlusOne, 10 mins me chilling buddy mil gayi! Best app ever BC 🔥",
    initials: "AV",
    name: "Ananya Verma",
    meta: "Found PlusOne in 10 mins · Bangalore",
  },
  {
    quote: "Weekend pe akela bore ho raha tha. Hosted a gaming & chai session, ₹1,200 bhi ban gaye aur solid dost bhi mil gaye!",
    initials: "AP",
    name: "Aarav Patel",
    meta: "Earned ₹1,200/day · PlusOne in Mumbai",
  },
  {
    quote: "Concert jaana tha but single ticket pe weird lagta. Found a companion on PlusOne within 1 hour. Vibe matching top tier thi 💯",
    initials: "PS",
    name: "Priya Sharma",
    meta: "Went to Concert · Pune",
  },
  {
    quote: "Coding grindset chal raha tha, needed a study partner. PlusOne pe mast companion mila, plus pocket money sorted!",
    initials: "VK",
    name: "Vikram Kapoor",
    meta: "Earned ₹28k/month · Hyderabad",
  },
]

function ReviewCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bakchodReviews.length)
    }, 2500) // Fast state rotation (2.5s)
    return () => clearInterval(timer)
  }, [])

  const current = bakchodReviews[index]

  return (
    <section className="section-wrap quote-section" style={{ minHeight: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Reveal>
        <div className="quote-mark" style={{ marginBottom: 8 }}>&ldquo;</div>
        
        <div style={{ position: 'relative', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 840 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <blockquote style={{ margin: '0 auto 24px', minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {current.quote}
              </blockquote>
              <div className="quote-credit">
                <span className="credit-avatar">{current.initials}</span>
                <span>
                  {current.name} <small>{current.meta}</small>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fast switching carousel controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 36 }}>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + bakchodReviews.length) % bakchodReviews.length)}
            aria-label="Previous review"
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: 34,
              height: 34,
              display: 'grid',
              placeItems: 'center',
              color: 'var(--muted-foreground)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {bakchodReviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  borderRadius: 99,
                  background: i === index ? 'var(--primary)' : 'var(--border)',
                  border: 0,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % bakchodReviews.length)}
            aria-label="Next review"
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: 34,
              height: 34,
              display: 'grid',
              placeItems: 'center',
              color: 'var(--muted-foreground)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </Reveal>
    </section>
  )
}

export default function PlusOneLanding({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const [notice, setNotice] = useState('')
  const { scrollY } = useScroll()
  const heroShift = useTransform(scrollY, [0, 700], [0, 90])
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.94])
  const showNotice = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 2800) }
  return (
    <main id="top" className="plusone-page">
      <ScrollProgress />
      <Nav isLoggedIn={isLoggedIn} />
      <section className="hero section-wrap">
        <div className="hero-copy">
          <Reveal><div className="status-pill"><span className="status-dot" /> The social app for real life</div></Reveal>
          <Reveal delay={0.08}><h1>Ditch the screen.<br /><em>Get a plus one.</em></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-lede">Stop waiting for your flaky friends to agree. Meet verified people for coffee, study sessions, or hikes — or host them yourself and earn cold hard cash.</p></Reveal>
          {!isLoggedIn && (
            <Reveal delay={0.24}>
              <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Link className="button button-primary" href="/auth/login?redirect=/app/explore" style={{ textDecoration: 'none' }}>Find your PlusOne <ArrowRight size={16} /></Link>
                <span style={{ fontSize: 11, color: 'var(--muted-foreground)', fontWeight: 600, fontFamily: 'var(--font-geist-mono), monospace' }}>OR</span>
                <Link className="button button-secondary" href="/auth/login?redirect=/app/earn" style={{ textDecoration: 'none', margin: 0 }}>Earn money <ArrowUpRight size={16} /></Link>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.32}><div className="hero-proof"><div className="proof-avatars"><span>AV</span><span>RS</span><span>PK</span><span>+</span></div><p><strong>12,000+</strong> curious people are already in.</p></div></Reveal>
        </div>
        <motion.div className="hero-art" style={{ y: heroShift, scale: heroScale }}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="artifact-label label-one">01 / discover</div><div className="artifact-label label-two">human scale / 2025</div><PhoneMockup /><div className="floating-note"><Sparkles size={15} /><span>Good things<br /><strong>happen together.</strong></span></div></motion.div>
      </section>

      <div className="activity-marquee" aria-label="Popular activities"><div className="marquee-track">{[...activities, ...activities].map((item, index) => <div className="marquee-item" key={`${item.label}-${index}`}><span className={`marquee-icon ${item.accent}`}><item.icon size={15} /></span><span>{item.label}</span><i>·</i><small>{item.meta}</small></div>)}</div></div>

      <section id="how-it-works" className="section-wrap intro-section"><Reveal className="section-kicker"><span>01</span><span>No flakes. Just real vibes.</span></Reveal><Reveal><h2>Your friends are busy.<br /><span style={{ color: 'var(--primary)' }}>We aren&apos;t.</span></h2></Reveal><Reveal><p className="intro-copy">Stop begging your group chat to hang out. Get a verified plus one for movies, gaming, or dining, and never do cool stuff alone again.</p></Reveal><div className="rule-grid"><Reveal delay={0.05}><div><span className="big-number">01</span><h3>Pick your vibe</h3><p>Browse real, verified plans. No dating app matches or awkward talking phases — just raw activities.</p></div></Reveal><Reveal delay={0.12}><div><span className="big-number">02</span><h3>Show up &amp; hang out</h3><p>Meet up safely in public spots. Do the activity, chat, split the bill, or get hosted.</p></div></Reveal><Reveal delay={0.19}><div><span className="big-number">03</span><h3>Hang out &amp; cash out</h3><p>Post your own activity, set your price, and get paid to study, eat, or watch movies.</p></div></Reveal></div></section>

      <section id="for-hosts" className="section-wrap split-section"><div className="section-copy"><Reveal className="section-kicker"><span>02</span><span>The ultimate side hustle</span></Reveal><Reveal><h2>Get paid to<br /><em>just exist.</em></h2></Reveal><Reveal><p style={{ marginTop: '28px' }}>Need a study partner? Hosting a street food tour? Put it on PlusOne, set your hosting fee, and earn up to ₹45,000/month doing what you were already going to do.</p></Reveal><Reveal><Link className="button button-secondary" href="/app/earn">Earn with PlusOne <MoveUpRight size={16} /></Link></Reveal></div><Reveal className="host-art"><div className="grid-paper"><div className="paper-top"><span>PLUSONE / FIELD NOTES</span><span>NO. 0048</span></div><div className="paper-title">A good plan<br /><span>leaves room.</span></div><div className="hand-line line-a" /><div className="hand-line line-b" /><div className="paper-stamp"><Zap size={15} /><span>Easiest<br />₹45k<br />ever</span></div><div className="paper-footer"><span>earning guide</span><ArrowRight size={15} /><span>2025—∞</span></div></div></Reveal></section>

      <section id="explore" className="section-wrap explore-section"><Reveal className="section-kicker"><span>03</span><span>Explore your next</span></Reveal><Reveal><div className="explore-heading"><h2>What&apos;s the<br /><em>vibe today?</em></h2><p>A little bit of everything. A lot more of what feels right.</p></div></Reveal><Reveal><div className="category-grid">{categories.map((category, index) => <button key={category} type="button" onClick={() => showNotice(`${category} plans are coming soon.`)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{category}</strong><ArrowUpRight size={17} /></button>)}</div></Reveal></section>

      <section className="section-wrap stats-section" aria-label="Why PlusOne works"><Reveal><article className="stat"><div className="stat-topline"><span className="stat-index">01</span><span className="stat-dot" /></div><strong>48%</strong><p>of people say making new friends is harder than it used to be.</p><span className="stat-note">The gap is real.</span></article></Reveal><Reveal delay={0.12}><article className="stat"><div className="stat-topline"><span className="stat-index">02</span><span className="stat-dot" /></div><strong>3×</strong><p>more likely to keep a plan when someone else is counting on you.</p><span className="stat-note">A little accountability helps.</span></article></Reveal><Reveal delay={0.24}><article className="stat"><div className="stat-topline"><span className="stat-index">03</span><span className="stat-dot" /></div><strong>100%</strong><p>better when you stop waiting for the perfect moment.</p><span className="stat-note">Start with a maybe.</span></article></Reveal></section>

      <ReviewCarousel />

      <section id="cta" className="section-wrap cta-section"><div className="cta-orbit" /><Reveal><div className="status-pill"><span className="status-dot" /> Coming soon to your city</div><h2>Stop being lonely.<br /><em>Secure your spot.</em></h2><p>Get early access to verified companions and hefty hosting side-hustles in your city.</p>
        {isLoggedIn ? (
          <Link className="button button-primary" href="/app/explore" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>Open App <ArrowRight size={16} /></Link>
        ) : (
          <Link className="button button-primary" href="/auth/register" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>Get started <ArrowRight size={16} /></Link>
        )}
      </Reveal></section>

      <footer id="footer" className="site-footer section-wrap">
        <div className="footer-top">
          <a href="#top" className="brand"><LogoMark /><span>plusone</span></a>
          <div className="footer-links">
            <a href="#how-it-works">About</a>
            <Link href="/app/earn">Earning</Link>
            <a href="#explore">Explore</a>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
          </div>
          <div className="footer-note">Built for the<br /><span>in-between.</span></div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 PlusOne Technologies Pvt. Ltd.</span>
          <span>Made with intention in India + everywhere</span>
          <a href="#top">Back to top <ArrowDown size={14} className="rotate-180" /></a>
        </div>
      </footer>
      <AnimatePresence>{notice && <motion.div className="toast" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }}><Check size={16} /> {notice}</motion.div>}</AnimatePresence>
    </main>
  )
}
