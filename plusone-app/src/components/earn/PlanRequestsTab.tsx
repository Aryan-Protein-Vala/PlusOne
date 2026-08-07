'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, CheckCircle2 } from 'lucide-react'

const mockLivePlans = [
  { id: '1', activity: 'Movie', time: 'Saturday', budget: 800, distance: '2 km' },
  { id: '2', activity: 'Study', time: 'Today, 4 PM', budget: 500, distance: '1 km' },
  { id: '3', activity: 'Coffee', time: 'Tomorrow', budget: 600, distance: '3.5 km' },
]

export function PlanRequestsTab() {
  const [appliedPlans, setAppliedPlans] = useState<string[]>([])

  const handleApply = (id: string) => {
    setAppliedPlans(prev => [...prev, id])
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
      <div className="bg-[oklch(0.76_0.07_300/0.1)] text-[var(--primary)] px-4 py-3 rounded-xl mb-2 text-sm font-medium flex items-center justify-between">
        <span>3 nearby plans matching your activities.</span>
      </div>

      {mockLivePlans.map((plan) => (
        <div key={plan.id} className="app-card flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="app-badge app-badge-primary">NEW PLAN REQUEST</span>
              </div>
              <h3 className="text-lg font-semibold m-0">{plan.activity}</h3>
              <div className="text-sm text-[var(--muted-foreground)] mt-1">{plan.time}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">₹{plan.budget}</div>
              <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] mt-1">
                <MapPin size={12} /> {plan.distance}
              </div>
            </div>
          </div>
          
          {appliedPlans.includes(plan.id) ? (
            <div className="w-full py-2.5 bg-[color-mix(in_oklch,var(--accent)_15%,transparent)] text-[var(--accent-foreground)] rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all">
              <CheckCircle2 size={16} /> Applied
            </div>
          ) : (
            <button 
              onClick={() => handleApply(plan.id)}
              className="w-full app-btn app-btn-primary mt-1"
            >
              Apply to join
            </button>
          )}
        </div>
      ))}
    </motion.div>
  )
}
