'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit2, Trash2, Eye, MapPin, Clock, DollarSign } from 'lucide-react'
import { MOCK_PROVIDERS } from '@/lib/mock-data'

export default function HostListingsPage() {
  const host = MOCK_PROVIDERS[0]
  const [listings, setListings] = useState(
    host.activities.map((actName, idx) => ({
      id: `act_${idx + 1}`,
      title: actName,
      category: idx % 2 === 0 ? 'Social & Movies' : 'City Tours & Coffee',
      rate: host.hourlyRate + idx * 50,
      active: true,
      views: 140 + idx * 22,
      bookingsCount: 8 + idx * 3,
    }))
  )

  const toggleListing = (id: string) => {
    setListings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700 }}>Host Listings & Activity Offerings</h2>
          <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 14 }}>
            Manage your companion services, hourly rates, and active profile categories
          </p>
        </div>

        <button
          style={{
            padding: '10px 18px',
            borderRadius: 14,
            border: 'none',
            background: 'var(--primary)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 4px 14px color-mix(in oklch, var(--primary) 35%, transparent)',
          }}
        >
          <Plus size={16} /> Create Listing
        </button>
      </div>

      {/* Listings Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {listings.map((item) => (
          <div
            key={item.id}
            className="app-card"
            style={{
              padding: 22,
              borderRadius: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: item.active ? 1 : 0.65,
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'color-mix(in oklch, var(--primary) 12%, transparent)',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </span>

                <button
                  onClick={() => toggleListing(item.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 999,
                    border: '1px solid var(--border)',
                    background: item.active ? 'color-mix(in oklch, var(--primary) 15%, transparent)' : 'var(--background)',
                    color: item.active ? 'var(--primary)' : 'var(--muted-foreground)',
                    fontSize: 11,
                    fontWeight: 650,
                    cursor: 'pointer',
                  }}
                >
                  {item.active ? 'Active' : 'Paused'}
                </button>
              </div>

              <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 650 }}>{item.title}</h3>

              <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 16 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Eye size={14} /> {item.views} views
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={14} /> {item.bookingsCount} completed
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid var(--border)',
                paddingTop: 14,
              }}
            >
              <div>
                <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'block' }}>Base Rate</span>
                <span style={{ fontSize: 18, fontWeight: 800 }}>₹{item.rate}/hr</span>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  style={{
                    padding: 8,
                    borderRadius: 10,
                    border: '1px solid var(--border)',
                    background: 'var(--background)',
                    color: 'var(--foreground)',
                    cursor: 'pointer',
                  }}
                >
                  <Edit2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
