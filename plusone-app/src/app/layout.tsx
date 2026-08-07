import type { Metadata } from "next";
import "./globals.css";

// Using system font stack as Inter is loaded from Google Fonts
// In production, add <link> to Google Fonts in <head> for best performance

export const metadata: Metadata = {
  title: {
    default: "PlusOne — Find someone for any plan.",
    template: "%s | PlusOne",
  },
  description:
    "PlusOne is a verified social activity marketplace. Find verified people to watch movies, grab coffee, explore the city, or share any activity with.",
  keywords: [
    "activity partner",
    "plus one",
    "social activities",
    "find a companion",
    "movie companion",
    "coffee buddy",
    "city exploration",
    "verified people",
  ],
  authors: [{ name: "PlusOne Technologies Pvt. Ltd." }],
  creator: "PlusOne",
  publisher: "PlusOne",
  metadataBase: new URL("https://plusone.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://plusone.app",
    siteName: "PlusOne",
    title: "PlusOne — Find someone for any plan.",
    description:
      "Find verified people to share movies, coffee, city exploration, and more. The safest activity marketplace.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlusOne — Find someone for any plan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlusOne — Find someone for any plan.",
    description:
      "Find verified people to share movies, coffee, city exploration, and more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className="font-sans antialiased min-h-screen bg-surface-999 text-white selection:bg-plus-purple-500/40 selection:text-white"
        style={{ backgroundColor: "#050508" }}
      >
        {children}
        <div id="toast-root" />
      </body>
    </html>
  );
}
