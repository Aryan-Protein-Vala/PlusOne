'use client'

import React, { createContext, useContext, useState } from 'react'
import { Plan, PlanApplication } from '@/lib/types'

interface EarnContextType { isAvailable: boolean; setIsAvailable: (value: boolean) => void; toggleAvailable: () => void; applications: PlanApplication[]; applyToPlan: (plan: Plan) => void; activeLiveMatch: Plan | null; dismissLiveMatch: () => void }
const EarnContext = createContext<EarnContextType | undefined>(undefined)

export function EarnProvider({ children }: { children: React.ReactNode }) {
  const [isAvailable, setIsAvailable] = useState(false)
  const value: EarnContextType = { isAvailable, setIsAvailable, toggleAvailable: () => setIsAvailable(v => !v), applications: [], applyToPlan: () => {}, activeLiveMatch: null, dismissLiveMatch: () => {} }
  return <EarnContext.Provider value={value}>{children}</EarnContext.Provider>
}

export function useEarn() {
  const context = useContext(EarnContext)
  if (!context) throw new Error('useEarn must be used within an EarnProvider')
  return context
}
