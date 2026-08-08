import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-shell">
      {/* Minimal branded top-nav */}
      <nav className="legal-nav">
        <Link href="/" className="legal-brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          plusone
        </Link>
        <Link href="/" className="legal-home-link">
          Back to site <ArrowUpRight size={13} />
        </Link>
      </nav>

      {/* Page content */}
      <div className="legal-content">
        {children}
      </div>

      {/* Minimal footer */}
      <footer className="legal-footer">
        <span>© 2025 PlusOne Technologies Pvt. Ltd.</span>
        <span>Made with intention in India + everywhere</span>
      </footer>
    </div>
  )
}
