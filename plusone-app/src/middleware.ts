import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-supabase-url') || supabaseUrl.includes('placeholder')) {
    return res
  }

  let user = null
  let isAdmin = false
  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return req.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              req.cookies.set(name, value)
              res.cookies.set(name, value, options)
            })
          },
        },
      }
    )

    const { data } = await supabase.auth.getUser()
    user = data?.user ?? null
    // ONLY fetch profile role if navigating to an /admin route
    if (user && req.nextUrl.pathname.startsWith('/admin')) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle()
      isAdmin = profile?.role === 'admin'
    }
  } catch (error) {
    console.warn('Middleware Supabase auth check failed:', error)
  }

  const isProtectedRoute = req.nextUrl.pathname.startsWith('/app') || 
                           req.nextUrl.pathname.startsWith('/hosts') || 
                           req.nextUrl.pathname.startsWith('/admin')

  // Strict Admin Protection
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!user || !isAdmin) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = user ? '/app/explore' : '/auth/login'
      return NextResponse.redirect(redirectUrl)
    }
  }

  // App Shell Protection
  if (isProtectedRoute && !req.nextUrl.pathname.startsWith('/admin')) {
    if (!user) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/auth/login'
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

export const config = {
  matcher: ['/app/:path*', '/hosts/:path*', '/admin/:path*'],
}
