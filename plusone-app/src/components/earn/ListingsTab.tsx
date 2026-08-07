'use client'

import { motion } from 'framer-motion'
import { Plus, Edit2, PauseCircle } from 'lucide-react'

const listings = [
  { id: 1, title: 'Movie Buddy', price: 700, status: 'Active' },
  { id: 2, title: 'Coffee Buddy', price: 500, status: 'Paused' },
  { id: 3, title: 'Study Partner', price: 400, status: 'Active' },
]

export function ListingsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
      {listings.map((listing) => (
        <div key={listing.id} className="app-card flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold m-0 mb-1">{listing.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[var(--foreground)]">₹{listing.price}/hr</span>
              <span className="text-muted text-xs mx-1">•</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${listing.status === 'Active' ? 'bg-[color-mix(in_oklch,var(--primary)_10%,transparent)] text-[var(--primary)]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>
                {listing.status}
              </span>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors">
            {listing.status === 'Active' ? <Edit2 size={14} /> : <PauseCircle size={14} />}
          </button>
        </div>
      ))}

      <button className="mt-2 app-card border-dashed border-[var(--border)] bg-transparent flex flex-col items-center justify-center gap-2 py-8 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)] transition-colors group cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-[var(--muted)] group-hover:bg-[var(--primary)] group-hover:text-white flex items-center justify-center transition-colors">
          <Plus size={20} />
        </div>
        <span className="text-sm font-medium">New Listing</span>
      </button>
    </motion.div>
  )
}
