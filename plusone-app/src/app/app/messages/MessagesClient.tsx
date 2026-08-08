'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { MessageSquare, Send, Calendar, MapPin, ChevronLeft, ShieldCheck } from 'lucide-react'

type Profile = {
  name: string
  avatar_url: string | null
}

type Booking = {
  id: string
  location: string
  starts_at: string
  customer_id: string
  host_id: string
  status: string
  customer: Profile | null
  host: Profile | null
}

type Conversation = {
  id: string
  booking_id: string
  created_at: string
  bookings: Booking
}

type Message = {
  id: string
  conversation_id: string
  sender_id: string
  content: string
  created_at: string
}

export default function MessagesClient({
  initialConversations,
  currentUserId
}: {
  initialConversations: Conversation[]
  currentUserId: string
}) {
  const [conversations] = useState<Conversation[]>(initialConversations)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [sending, setSending] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState(false)

  const supabase = createClient()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const activeConv = conversations.find(c => c.id === activeId)
  
  // Get other participant profile details
  const getPartner = (c: Conversation) => {
    if (!c.bookings) return { name: 'Unknown User', initials: 'U' }
    const isCustomer = currentUserId === c.bookings.customer_id
    const partner = isCustomer ? c.bookings.host : c.bookings.customer
    const name = partner?.name || 'User'
    const initials = name.substring(0, 2).toUpperCase()
    return { name, initials }
  }

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Load messages and subscribe to realtime channel
  useEffect(() => {
    if (!activeId) {
      setMessages([])
      return
    }

    setLoadingMessages(true)
    
    // 1. Fetch initial message history
    supabase
      .from('messages')
      .select('id, conversation_id, sender_id, content, created_at')
      .eq('conversation_id', activeId)
      .order('created_at', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) {
          setMessages(data as Message[])
        }
        setLoadingMessages(false)
      })

    // 2. Realtime WebSocket subscription
    const channel = supabase
      .channel(`conversation:${activeId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${activeId}`
        },
        (payload) => {
          const newMessage = payload.new as Message
          // Prevent duplicates in state
          setMessages(prev => {
            if (prev.some(m => m.id === newMessage.id)) return prev
            return [...prev, newMessage]
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [activeId])

  // Send message action
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim() || !activeId || sending) return

    const textToSend = inputText.trim()
    setInputText('')
    setSending(true)

    const { error } = await supabase.from('messages').insert({
      conversation_id: activeId,
      sender_id: currentUserId,
      content: textToSend
    })

    if (error) {
      console.error('Error sending message:', error)
      setInputText(textToSend) // Restore text on failure
    }
    setSending(false)
  }

  if (conversations.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', textAlign: 'center', padding: '0 20px' }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: 'var(--card)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', marginBottom: 24 }}>
          <MessageSquare size={28} style={{ color: 'var(--muted-foreground)' }} />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 650, margin: '0 0 10px', letterSpacing: '-0.03em' }}>No active chats</h2>
        <p style={{ color: 'var(--muted-foreground)', fontSize: 14, maxWidth: 360, lineHeight: 1.6, margin: '0 0 24px' }}>
          Conversations open automatically after a booking is accepted. Discover plans or post an offer to get matching!
        </p>
      </div>
    )
  }

  return (
    <div 
      className="app-card" 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: activeId ? '320px 1fr' : '1fr', 
        padding: 0, 
        height: '72vh', 
        maxHeight: 680,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        borderRadius: 18,
        background: 'var(--card)'
      }}
    >
      {/* 1. Sidebar Panel */}
      <div 
        style={{ 
          borderRight: activeId ? '1px solid var(--border)' : 'none',
          display: activeId ? 'flex' : 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          // Mobile hide/show active state logic
          width: '100%',
          '@media (max-width: 768px)': {
            display: activeId ? 'none' : 'flex'
          }
        } as any}
        className={activeId ? 'hidden md:flex' : 'flex'}
      >
        <div style={{ padding: '20px 20px 14px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 650, display: 'flex', alignItems: 'center', gap: 8 }}>
            <MessageSquare size={16} /> Messages
          </h3>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {conversations.map((c) => {
            const partner = getPartner(c)
            const isActive = c.id === activeId
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: 12,
                  borderRadius: 12,
                  border: 0,
                  background: isActive ? 'oklch(0.76 0.07 300 / 0.08)' : 'transparent',
                  color: 'inherit',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background 0.15s ease'
                }}
              >
                <div 
                  className="app-avatar" 
                  style={{ 
                    width: 40, 
                    height: 40, 
                    fontSize: 13, 
                    background: isActive ? 'var(--primary)' : 'var(--secondary)',
                    color: isActive ? 'var(--primary-foreground)' : 'var(--secondary-foreground)'
                  }}
                >
                  {partner.initials}
                </div>
                
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                    <strong style={{ fontSize: 14, fontWeight: 600, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {partner.name}
                    </strong>
                    <span 
                      style={{ 
                        fontSize: 9, 
                        fontFamily: 'var(--font-geist-mono), monospace',
                        padding: '2px 6px',
                        borderRadius: 99,
                        background: c.bookings.status === 'accepted' ? 'oklch(0.78 0.07 150 / 0.12)' : 'var(--muted)',
                        color: c.bookings.status === 'accepted' ? 'var(--accent)' : 'var(--muted-foreground)'
                      }}
                    >
                      {c.bookings.status}
                    </span>
                  </div>
                  <small style={{ color: 'var(--muted-foreground)', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={10} /> {c.bookings.location}
                  </small>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 2. Active Chat Panel */}
      {activeId && activeConv ? (
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            overflow: 'hidden',
            background: 'color-mix(in oklch, var(--card) 98%, transparent)'
          }}
        >
          {/* Header */}
          <div 
            style={{ 
              padding: '14px 20px', 
              borderBottom: '1px solid var(--border)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              background: 'var(--card)'
            }}
          >
            <button 
              onClick={() => setActiveId(null)}
              className="md:hidden"
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--muted-foreground)',
                cursor: 'pointer',
                padding: '4px 8px 4px 0',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div 
              className="app-avatar" 
              style={{ 
                width: 36, 
                height: 36, 
                fontSize: 12, 
                background: 'var(--secondary)',
                color: 'var(--secondary-foreground)'
              }}
            >
              {getPartner(activeConv).initials}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <strong style={{ fontSize: 14, fontWeight: 600, display: 'block' }}>{getPartner(activeConv).name}</strong>
              <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                <Calendar size={10} /> {new Date(activeConv.bookings.starts_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} at {activeConv.bookings.location}
              </span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-[var(--accent)] font-medium bg-[oklch(0.78_0.07_150/0.1)] px-3 py-1.5 rounded-full">
              <ShieldCheck size={12} /> Secure Chat
            </div>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {loadingMessages ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--muted-foreground)', fontSize: 13 }}>
                Loading conversation history...
              </div>
            ) : messages.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--muted-foreground)', padding: '0 32px', textAlign: 'center' }}>
                <p style={{ fontSize: 13, margin: '0 0 6px', fontWeight: 500 }}>No messages in this chat yet</p>
                <small style={{ fontSize: 11, maxWidth: 240, lineHeight: 1.5 }}>Introduce yourself! Align on coordinates and meetup details here.</small>
              </div>
            ) : (
              messages.map((m) => {
                const isMe = m.sender_id === currentUserId
                return (
                  <div 
                    key={m.id} 
                    style={{ 
                      alignSelf: isMe ? 'flex-end' : 'flex-start',
                      maxWidth: '75%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isMe ? 'flex-end' : 'flex-start'
                    }}
                  >
                    <div 
                      style={{ 
                        padding: '10px 14px', 
                        borderRadius: 14, 
                        borderTopRightRadius: isMe ? 2 : 14,
                        borderTopLeftRadius: isMe ? 14 : 2,
                        fontSize: 13,
                        lineHeight: 1.5,
                        background: isMe ? 'var(--primary)' : 'var(--background)',
                        color: isMe ? 'var(--primary-foreground)' : 'var(--foreground)',
                        border: isMe ? 'none' : '1px solid var(--border)',
                        wordBreak: 'break-word'
                      }}
                    >
                      {m.content}
                    </div>
                    <span 
                      style={{ 
                        fontSize: 9, 
                        color: 'var(--muted-foreground)', 
                        marginTop: 4, 
                        fontFamily: 'var(--font-geist-mono), monospace' 
                      }}
                    >
                      {new Date(m.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                )
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Panel */}
          <form 
            onSubmit={handleSendMessage} 
            style={{ 
              padding: '16px 20px', 
              borderTop: '1px solid var(--border)', 
              display: 'flex', 
              gap: 10,
              background: 'var(--card)'
            }}
          >
            <input 
              type="text" 
              className="app-input" 
              placeholder="Type your message..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={sending}
              style={{ flex: 1, borderRadius: 99 }}
            />
            <button 
              type="submit" 
              className="app-btn app-btn-primary" 
              disabled={!inputText.trim() || sending}
              style={{ width: 42, height: 42, padding: 0, borderRadius: '50%', flexShrink: 0 }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      ) : (
        /* Standby state on desktop */
        <div className="hidden md:flex" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--muted-foreground)', padding: 48, textAlign: 'center' }}>
          <MessageSquare size={32} style={{ opacity: 0.4, marginBottom: 14 }} />
          <p style={{ fontSize: 13, margin: 0 }}>Select a chat from the list to start messaging</p>
        </div>
      )}
    </div>
  )
}
