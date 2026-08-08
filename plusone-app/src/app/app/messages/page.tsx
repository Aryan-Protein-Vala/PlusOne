import { createClient } from '@/lib/supabase/server'
import MessagesClient from './MessagesClient'

export const dynamic = 'force-dynamic'

export default async function MessagesPage() {
  const s = await createClient()
  const { data: { user } } = await s.auth.getUser()
  
  if (!user) {
    return (
      <div className="app-container" style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ margin: '0 0 6px', fontSize: 32 }}>Messages</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>Please log in to view your messages.</p>
      </div>
    )
  }

  const { data: conversations } = await s
    .from('conversations')
    .select(`
      id,
      booking_id,
      created_at,
      bookings!inner(
        id,
        location,
        starts_at,
        customer_id,
        host_id,
        status,
        customer:profiles!bookings_customer_id_fkey(name, avatar_url),
        host:profiles!bookings_host_id_fkey(name, avatar_url)
      )
    `)
    .or(`bookings.customer_id.eq.${user.id},bookings.host_id.eq.${user.id}`)
    .order('created_at', { ascending: false })

  return (
    <div className="app-container" style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: 32, fontWeight: 650 }}>Messages</h1>
        <p style={{ margin: 0, color: 'var(--muted-foreground)' }}>
          Conversations open automatically after a booking connection.
        </p>
      </div>

      <MessagesClient 
        initialConversations={(conversations || []) as any[]} 
        currentUserId={user.id} 
      />
    </div>
  )
}
