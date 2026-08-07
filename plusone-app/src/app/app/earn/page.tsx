'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OverviewTab } from '@/components/earn/OverviewTab'
import { ListingsTab } from '@/components/earn/ListingsTab'
import { PlanRequestsTab } from '@/components/earn/PlanRequestsTab'

type Tab = 'Overview' | 'Listings' | 'Plan Requests'

export default function EarnPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview')
  const [availableNow, setAvailableNow] = useState(false)

  const tabs: Tab[] = ['Overview', 'Listings', 'Plan Requests']

  return (
    <div className="app-container" style={{ maxWidth: 640, margin: '0 auto', padding: '0 16px 40px' }}>
      
      {/* 🟢 AVAILABLE NOW Toggle */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="pt-6 pb-4 sticky top-0 bg-[var(--background)] z-20">
        <button 
          onClick={() => setAvailableNow(!availableNow)}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all ${
            availableNow 
              ? 'bg-[var(--foreground)] text-[var(--background)] shadow-[0_8px_30px_rgba(0,0,0,0.12)]' 
              : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)]'
          }`}
        >
          <span className={`w-3 h-3 rounded-full ${availableNow ? 'bg-[#10b981] shadow-[0_0_12px_#10b981]' : 'bg-[var(--muted-foreground)]'}`} />
          AVAILABLE NOW
        </button>
      </motion.div>

      {/* Page Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 mb-6">
        <h1 className="text-3xl font-bold m-0 tracking-tight">My Business</h1>
      </motion.div>

      {/* Scrollable Horizontal Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab 
                ? 'bg-[var(--foreground)] text-[var(--background)]' 
                : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'Overview' && <OverviewTab key="overview" />}
        {activeTab === 'Listings' && <ListingsTab key="listings" />}
        {activeTab === 'Plan Requests' && <PlanRequestsTab key="requests" />}
      </AnimatePresence>

    </div>
  )
}
