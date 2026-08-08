'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  MessageCircle,
  Plus,
  UserCircle2,
  BadgeIndianRupee,
  X,
  Search,
  CalendarDays,
  Sparkles
} from 'lucide-react'
import { createPlan } from '@/app/plans/actions'

const navItems = [
  { icon: Compass, label: 'Explore', href: '/app/explore' },
  { icon: null, label: 'Create', href: '#create', isCreate: true }, // Placeholder for Create Action
  { icon: BadgeIndianRupee, label: 'Earn', href: '/app/earn' },
  { icon: MessageCircle, label: 'Chats', href: '/app/chats' },
  { icon: UserCircle2, label: 'Me', href: '/app/me' },
]

export default function UnifiedAppNav() {
  const pathname = usePathname()
  const [createOpen, setCreateOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [createError, setCreateError] = useState('')

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setCreateError('')
    try {
      const formData = new FormData(e.currentTarget)
      const result = await createPlan(formData)
      if ('error' in result) {
        setCreateError(result.error || 'Could not post your plan.')
      } else {
        setCreateOpen(false)
        e.currentTarget.reset()
      }
    } catch {
      setCreateError('Could not post your plan. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--card)] border-t border-[var(--border)] md:hidden">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            if (item.isCreate) {
              return (
                <button
                  key="create"
                  onClick={() => setCreateOpen(true)}
                  className="flex flex-col items-center justify-center w-12 h-12 -mt-6 rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform active:scale-95"
                >
                  <Plus size={24} />
                </button>
              )
            }
            
            const isActive = pathname.startsWith(item.href)
            const Icon = item.icon!
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${
                  isActive ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-[240px] bg-[var(--card)] border-r border-[var(--border)] z-40 p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-12">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-[var(--foreground)]" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
            <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
          </svg>
          plusone
        </Link>

        <div className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            if (item.isCreate) return null
            const isActive = pathname.startsWith(item.href)
            const Icon = item.icon!
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-[oklch(0.76_0.07_300/0.1)] text-[var(--primary)] font-semibold' 
                    : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] font-medium'
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <button 
          onClick={() => setCreateOpen(true)}
          className="mt-auto w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold shadow-lg hover:-translate-y-1 transition-transform"
        >
          <Plus size={20} /> Create
        </button>
      </nav>

      {/* Global Create Sheet/Modal */}
      <AnimatePresence>
        {createOpen && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setCreateOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-md bg-[var(--card)] rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--border)] bg-[var(--card)]">
                <div>
                  <h2 className="text-xl font-semibold m-0">Find someone</h2>
                  <p className="text-xs text-[var(--muted-foreground)] m-0 mt-1">Post a plan and let someone join you.</p>
                  <Link href="/app/earn" onClick={() => setCreateOpen(false)} className="text-xs text-[var(--primary)] no-underline inline-block mt-2">Want to earn instead? → Earn money</Link>
                </div>
                <button onClick={() => setCreateOpen(false)} className="w-8 h-8 grid place-items-center rounded-full bg-[var(--muted)] text-[var(--foreground)] border-none cursor-pointer">
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--foreground)] mb-1">Activity</label>
                      <input name="activity" required placeholder="e.g. Watch Interstellar" className="app-input w-full" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--foreground)] mb-1">Location</label>
                      <input name="location" required placeholder="e.g. PVR Saket" className="app-input w-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--foreground)] mb-1">Date</label>
                      <input type="date" name="date" required className="app-input w-full" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--foreground)] mb-1">Time</label>
                      <input type="time" name="time" required className="app-input w-full" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--foreground)] mb-1">What are you offering? (₹)</label>
                      <input type="number" name="budget" required placeholder="800" className="app-input w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--foreground)] mb-1">Details</label>
                    <textarea name="description" placeholder="Looking for someone who enjoys sci-fi..." className="app-input w-full min-h-[80px] resize-y" />
                  </div>

                  {createError && <p className="text-xs text-red-600 m-0" role="alert">{createError}</p>}
                  <button type="submit" disabled={submitting} className="app-btn app-btn-primary mt-2">
                    {submitting ? 'Posting...' : 'Post Plan'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
