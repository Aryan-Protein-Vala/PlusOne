'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Check, 
  Zap, 
  Sparkles, 
  Search,
  Filter,
  UserCheck
} from 'lucide-react'
import { MOCK_PLANS } from '@/lib/mock-data'
import { Plan } from '@/lib/types'
import { useEarn } from '@/components/earn/EarnContext'

export default function MarketplaceFeedPage() {
  const { applications, applyToPlan } = useEarn()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter plans with status === 'marketplace' (or open for applications)
  const openPlans = MOCK_PLANS.filter((plan) => plan.status === 'marketplace' || plan.status === 'live_match')

  const categories = ['All', 'Comedy & Events', 'Sports & Fitness', 'Art & Culture', 'Social & Outdoors', 'Nightlife']

  const filteredPlans = openPlans.filter((plan) => {
    const matchesCat = selectedCategory === 'All' || plan.category === selectedCategory
    const matchesSearch =
      plan.activity_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {/* Header Banner */}
      <div
        className="app-card"
        style={{
          padding: '20px 24px',
          borderRadius: 20,
          marginBottom: 24,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: 'oklch(0.76 0.07 300 / 0.1)',
              color: 'var(--primary)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Sparkles size={22} />
          </div>
          <div>
            <h2 style={{ margin: '0 0 2px', fontSize: 18, fontWeight: 700 }}>Adaptive Fixed-Price Engine</h2>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-foreground)' }}>
              No price negotiations or counter-offers. Apply with 1-click for the exact customer set budget.
            </p>
          </div>
        </div>

        <div className="app-badge app-badge-accent" style={{ padding: '6px 14px', fontSize: 12 }}>
          Instant Matching Active
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 24 }}>
        <div
          style={{
            position: 'relative',
            flex: '1 1 240px',
          }}
        >
          <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
          <input
            type="text"
            className="app-input"
            placeholder="Search plans by title or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              paddingLeft: 40,
            }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: selectedCategory === cat ? '1px solid var(--foreground)' : '1px solid var(--border)',
                background: selectedCategory === cat ? 'var(--foreground)' : 'transparent',
                color: selectedCategory === cat ? 'var(--background)' : 'var(--muted-foreground)',
                fontSize: 13,
                fontWeight: selectedCategory === cat ? 650 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Feed Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
        {filteredPlans.map((plan) => {
          const isApplied = applications.some((app) => app.plan_id === plan.id)

          return (
            <div
              key={plan.id}
              className="app-card"
              style={{
                padding: 22,
                borderRadius: 22,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isApplied ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: 'var(--card)',
                opacity: isApplied ? 0.8 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                {/* Header Badge & Category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span
                    className="app-badge app-badge-primary"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                    }}
                  >
                    {plan.category}
                  </span>

                  {plan.is_urgent && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: 'color-mix(in oklch, var(--destructive) 15%, transparent)',
                        color: 'var(--destructive)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <Zap size={12} /> Urgent
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 650, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  {plan.activity_title}
                </h3>
                {plan.description && (
                  <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.45 }}>
                    {plan.description}
                  </p>
                )}

                {/* Location & Time Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18, fontSize: 13, color: 'var(--foreground)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{plan.location}</span>
                    {plan.distance && (
                      <span style={{ fontSize: 11, color: 'var(--muted-foreground)', background: 'var(--background)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: 6 }}>
                        {plan.distance}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Calendar size={15} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <span>{plan.date_time}</span>
                  </div>
                </div>

                {/* Customer Profile Snippet */}
                {plan.customer && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 14px',
                      borderRadius: 14,
                      background: 'var(--background)',
                      border: '1px solid var(--border)',
                      marginBottom: 18,
                    }}
                  >
                    <img
                      src={plan.customer.avatar}
                      alt={plan.customer.name}
                      style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{plan.customer.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Star size={11} style={{ fill: 'var(--accent)', color: 'var(--accent)' }} /> {plan.customer.rating} Rating
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price & Action Section */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginTop: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div>
                    <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'block', textTransform: 'uppercase' }}>
                      Fixed Customer Budget
                    </span>
                    <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--foreground)' }}>₹{plan.budget}</span>
                  </div>

                  {isApplied && (
                    <div
                      className="app-badge app-badge-accent"
                      style={{
                        padding: '4px 10px',
                        fontSize: 12,
                      }}
                    >
                      <UserCheck size={14} /> Awaiting Selection
                    </div>
                  )}
                </div>

                {/* 1-Click Apply Button */}
                <button
                  disabled={isApplied}
                  onClick={() => applyToPlan(plan)}
                  className={`app-btn ${isApplied ? 'app-btn-outline' : 'app-btn-primary'}`}
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                  }}
                >
                  {isApplied ? (
                    <>
                      <Check size={16} /> Applied for ₹{plan.budget}
                    </>
                  ) : (
                    <>Apply for ₹{plan.budget}</>
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
