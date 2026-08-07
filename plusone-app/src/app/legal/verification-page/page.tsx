import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, CheckCircle2, Camera, Phone, FileText } from "lucide-react";

export const metadata: Metadata = { 
  title: "Verification Guide", 
  description: "Guide to identity verification on PlusOne." 
};

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ width: 25, height: 25 }}>
      <path d="M8.2 21.8c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l4 4c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-1.5-1.5" />
      <path d="M23.8 10.2c3.2 3.2 3.2 8.4 0 11.6s-8.4 3.2-11.6 0l-4-4c-3.2-3.2-3.2-8.4 0-11.6s8.4-3.2 11.6 0l1.5 1.5" />
    </svg>
  )
}

export default function VerificationPage() {
  return (
    <div className="app-page">
      <header className="app-nav">
        <Link href="/" className="brand" aria-label="PlusOne home">
          <LogoMark />
          <span>plusone</span>
        </Link>
        <div className="nav-actions">
          <Link href="/app/safety" style={{ color: 'var(--muted-foreground)', fontSize: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={14} /> Back to Safety
          </Link>
        </div>
      </header>

      <div className="app-container-mid">
        <div className="page-header">
          <div className="page-kicker">
            <span><Shield size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'baseline' }} /> Trust & Safety</span>
            <span>Guide</span>
          </div>
          <h1>Identity <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Verification.</em></h1>
          <p>How verification works on PlusOne and why it matters.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
          {/* Left Col */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 520, letterSpacing: '-.03em', marginBottom: 20 }}>Verification Levels</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { level: "Phone Verified", icon: Phone, desc: "Your phone number has been confirmed via OTP. This is the basic level.", color: "var(--primary)", bg: "oklch(0.76 0.07 300 / 0.1)" },
                { level: "ID Verified", icon: FileText, desc: "Government-issued ID has been verified. We check your identity document.", color: "var(--accent-foreground)", bg: "oklch(0.65 0.15 55 / 0.1)" },
                { level: "Selfie Verified", icon: Camera, desc: "Selfie with liveness detection completed. This is our highest verification level.", color: "var(--accent)", bg: "oklch(0.78 0.07 150 / 0.1)" },
              ].map((v) => (
                <div key={v.level} className="app-card" style={{ padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: v.bg, display: 'grid', placeItems: 'center' }}>
                      <v.icon size={12} style={{ color: v.color }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{v.level}</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 12, lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 520, letterSpacing: '-.03em', marginBottom: 20 }}>Why Verify?</h2>
            <div className="app-card-flat" style={{ padding: 24 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  "Build trust with potential guests", 
                  "Display verification badges on your profile", 
                  "Access higher booking volumes", 
                  "Qualify for our Top Host programme", 
                  "Weighs positively in search rankings", 
                  "Required for payouts above a certain threshold"
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 24, padding: 16, borderRadius: 12, border: '1px solid var(--border)', background: 'var(--background)' }}>
                <p style={{ margin: 0, color: 'var(--muted-foreground)', fontSize: 11, lineHeight: 1.6 }}>
                  Your ID documents are processed by our secure verification partners. We do not store ID images on our servers. Verification data is encrypted and handled in compliance with applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 64, padding: 24, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ color: 'var(--muted-foreground)', fontSize: 11 }}>© {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
}
