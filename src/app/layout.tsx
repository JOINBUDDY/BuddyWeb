import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "./components/Navbar";

/*
|--------------------------------------------------------------------------
| Viewport (mobile optimization)
|--------------------------------------------------------------------------
*/

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0B0C",
};


/*
|--------------------------------------------------------------------------
| Global Metadata (SEO, icons, social, PWA)
|--------------------------------------------------------------------------
*/

export const metadata: Metadata = {
  metadataBase: new URL("https://ticketbuddy.org"),

  title: {
    default: "BUDDY — Ticket Buying Copilot",
    template: "%s — BUDDY",
  },

  description:
    "BUDDY is a ticket buying copilot that helps individuals and groups find the best seats faster. Discover, evaluate, and choose tickets with confidence on the sites you already use.",

  applicationName: "BUDDY",

  generator: "Next.js",

  keywords: [
    "BUDDY",
    "ticket buying copilot",
    "find the best seats",
    "ticket assistant",
    "ticket browser extension",
    "concert tickets",
    "sports tickets",
    "event tickets",
  ],

  authors: [
    {
      name: "BUDDY",
      url: "https://ticketbuddy.org",
    },
  ],

  creator: "BUDDY",
  publisher: "BUDDY",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Icons (must exist directly in /public)
  |--------------------------------------------------------------------------
  */

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  /*
  |--------------------------------------------------------------------------
  | OpenGraph (Discord, iMessage, Slack, Facebook)
  |--------------------------------------------------------------------------
  */

  openGraph: {
    title: "BUDDY — Ticket Buying Copilot",

    description:
      "Find the best seats with BUDDY. Your copilot for discovering and evaluating tickets for individuals and groups on the sites you already use.",

    url: "https://ticketbuddy.org",

    siteName: "BUDDY",

    images: [
      {
        url: "/buddy.jpg",
        width: 1200,
        height: 630,
        alt: "BUDDY — Ticket Buying Copilot",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  /*
  |--------------------------------------------------------------------------
  | Twitter / X
  |--------------------------------------------------------------------------
  */

  twitter: {
    card: "summary_large_image",

    title: "BUDDY — Ticket Buying Copilot",

    description:
      "Find the best seats with BUDDY. Your intelligent ticket buying copilot.",

    images: ["/buddy.jpg"],

    creator: "@BUDDY",
  },
};


/*
|--------------------------------------------------------------------------
| Root Layout
|--------------------------------------------------------------------------
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
