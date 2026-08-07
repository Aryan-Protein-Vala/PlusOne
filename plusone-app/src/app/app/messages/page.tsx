'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Search, Send } from 'lucide-react'
import { MOCK_CONVERSATIONS } from '@/lib/mock-data'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export default function MessagesPage() {
  const conversations = MOCK_CONVERSATIONS
  const [activeId, setActiveId] = useState(conversations[0]?.bookingId || '')
  const [message, setMessage] = useState('')
  const active = conversations.find((c) => c.bookingId === activeId)

  const mockMessages = [
    { id: '1', sender: 'them', text: 'Hey! Are we still on for the movie tonight?', time: '2:30 PM' },
    { id: '2', sender: 'you', text: 'Yes! I was thinking PVR Phoenix at 7pm?', time: '2:32 PM' },
    { id: '3', sender: 'them', text: "That works perfectly. I'll be there 10 minutes early.", time: '2:33 PM' },
    { id: '4', sender: 'you', text: 'Great, see you there! 🎬', time: '2:35 PM' },
  ]

  return (
    <div className="app-container" style={{ paddingBottom: 0 }}>
      <Reveal>
        <div className="page-header" style={{ marginBottom: 24 }}>
          <div className="page-kicker"><span>messages</span><span>Stay connected</span></div>
          <h1>Your <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>chats.</em></h1>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 0, border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', minHeight: 560, background: 'var(--card)' }}>
          {/* Sidebar */}
          <div style={{ borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'relative' }}>
                <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
                <input className="app-input" placeholder="Search messages..." style={{ paddingLeft: 34, fontSize: 12 }} />
              </div>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              {conversations.map((conv) => (
                <button
                  key={conv.bookingId}
                  onClick={() => setActiveId(conv.bookingId)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    width: '100%',
                    padding: '14px 16px',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    background: activeId === conv.bookingId ? 'oklch(0.76 0.07 300 / 0.06)' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background .15s',
                  }}
                >
                  <div className="app-avatar" style={{ width: 38, height: 38, flexShrink: 0 }}>
                    {conv.provider.avatar ? (
                      <img src={conv.provider.avatar} alt={conv.provider.name} />
                    ) : (
                      conv.provider.name.charAt(0)
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-.02em' }}>{conv.provider.name}</strong>
                      <span style={{ fontSize: 9, color: 'var(--muted-foreground)', fontFamily: 'var(--font-geist-mono), monospace' }}>2:35pm</span>
                    </div>
                    <p style={{ margin: '3px 0 0', fontSize: 11, color: 'var(--muted-foreground)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {conv.lastMessage.content}
                    </p>
                  </div>
                  {conv.unreadCount > 0 && (
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 9, fontWeight: 700, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      {conv.unreadCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {active ? (
              <>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="app-avatar" style={{ width: 34, height: 34 }}>
                    {active.provider.avatar ? (
                      <img src={active.provider.avatar} alt={active.provider.name} />
                    ) : (
                      active.provider.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, fontWeight: 500 }}>{active.provider.name}</strong>
                    <p style={{ margin: 0, fontSize: 10, color: 'var(--muted-foreground)' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginRight: 5 }} />
                      Online
                    </p>
                  </div>
                </div>

                <div style={{ flex: 1, padding: 20, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {mockMessages.map((msg) => (
                    <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'you' ? 'flex-end' : 'flex-start' }}>
                      <div style={{
                        maxWidth: '70%',
                        padding: '10px 14px',
                        borderRadius: msg.sender === 'you' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                        background: msg.sender === 'you' ? 'var(--primary)' : 'var(--background)',
                        color: msg.sender === 'you' ? 'var(--primary-foreground)' : 'var(--foreground)',
                        border: msg.sender === 'you' ? 'none' : '1px solid var(--border)',
                        fontSize: 13,
                        lineHeight: 1.5,
                      }}>
                        {msg.text}
                        <div style={{ marginTop: 4, fontSize: 9, opacity: 0.6, textAlign: 'right', fontFamily: 'var(--font-geist-mono), monospace' }}>
                          {msg.time} {msg.sender === 'you' && <Check size={10} style={{ display: 'inline', marginLeft: 3 }} />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input
                    className="app-input"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ flex: 1, fontSize: 13 }}
                  />
                  <button className="app-btn app-btn-primary app-btn-sm" style={{ borderRadius: 10, padding: '10px 14px' }}>
                    <Send size={15} />
                  </button>
                </div>
              </>
            ) : (
              <div style={{ flex: 1, display: 'grid', placeItems: 'center', color: 'var(--muted-foreground)', fontSize: 13 }}>
                Select a conversation to start chatting
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
