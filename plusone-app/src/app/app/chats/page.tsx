'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function ChatsPage() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: 'var(--card)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
          <MessageSquare size={28} style={{ color: 'var(--muted-foreground)' }} />
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 520, margin: '0 0 12px', letterSpacing: '-.02em' }}>No Messages Yet</h1>
        <p style={{ color: 'var(--muted-foreground)', fontSize: 15, maxWidth: 320, lineHeight: 1.5 }}>
          When you connect with someone or receive a booking request, your chats will appear here.
        </p>
      </motion.div>
    </div>
  )
}
