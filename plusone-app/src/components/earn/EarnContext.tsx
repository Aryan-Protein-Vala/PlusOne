'use client'

import React, { createContext, useContext, useState } from 'react'
import { Plan, PlanApplication } from '@/lib/types'
import { MOCK_PLANS, MOCK_PLAN_APPLICATIONS } from '@/lib/mock-data'

interface EarnContextType {
  isAvailable: boolean
  setIsAvailable: (val: boolean) => void
  toggleAvailable: () => void
  applications: PlanApplication[]
  applyToPlan: (plan: Plan) => void
  activeLiveMatch: Plan | null
  dismissLiveMatch: () => void
}

const EarnContext = createContext<EarnContextType | undefined>(undefined)

export function EarnProvider({ children }: { children: React.ReactNode }) {
  const [isAvailable, setIsAvailable] = useState<boolean>(true)
  const [applications, setApplications] = useState<PlanApplication[]>(MOCK_PLAN_APPLICATIONS)
  const [dismissedMatchIds, setDismissedMatchIds] = useState<string[]>([])

  // Find active live match plan that hasn't been applied to or dismissed
  const activeLiveMatch = isAvailable
    ? MOCK_PLANS.find(
        (p) =>
          p.status === 'live_match' &&
          !dismissedMatchIds.includes(p.id) &&
          !applications.some((app) => app.plan_id === p.id)
      ) || null
    : null

  const toggleAvailable = () => setIsAvailable((prev) => !prev)

  const applyToPlan = (plan: Plan) => {
    // Prevent duplicate applications
    if (applications.some((app) => app.plan_id === plan.id)) return

    const newApp: PlanApplication = {
      id: `app_${Date.now()}`,
      plan_id: plan.id,
      host_id: 'prv_001',
      applied_at: new Date().toISOString(),
      status: 'pending',
      plan: { ...plan, status: 'marketplace' },
    }
    setApplications((prev) => [newApp, ...prev])
  }

  const dismissLiveMatch = () => {
    if (activeLiveMatch) {
      setDismissedMatchIds((prev) => [...prev, activeLiveMatch.id])
    }
  }

  return (
    <EarnContext.Provider
      value={{
        isAvailable,
        setIsAvailable,
        toggleAvailable,
        applications,
        applyToPlan,
        activeLiveMatch,
        dismissLiveMatch,
      }}
    >
      {children}
    </EarnContext.Provider>
  )
}

export function useEarn() {
  const context = useContext(EarnContext)
  if (!context) {
    throw new Error('useEarn must be used within an EarnProvider')
  }
  return context
}
