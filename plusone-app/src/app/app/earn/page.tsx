'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OverviewTab } from '@/components/earn/OverviewTab'
import { ListingsTab } from '@/components/earn/ListingsTab'
import { PlanRequestsTab } from '@/components/earn/PlanRequestsTab'
import { StatusToggle } from '@/components/earn/StatusToggle'

type Tab = 'Overview' | 'Listings' | 'Plan Requests'

export default function EarnPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview')

  const tabs: Tab[] = ['Overview', 'Listings', 'Plan Requests']

  return (
    <div className="app-container" style={{ maxWidth: 640, margin: '0 auto', padding: '0 16px 40px' }}>
      
      {/* Page Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-6 mt-4 mb-6">
        <h1 className="text-3xl font-bold m-0 tracking-tight">My Business</h1>
      </motion.div>

      {/* Status Toggle */}
      <StatusToggle />

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
