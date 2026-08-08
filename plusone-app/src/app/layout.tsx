import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f1e7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
