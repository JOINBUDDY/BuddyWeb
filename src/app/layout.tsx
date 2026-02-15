import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "BUDDY — Ticket Buying Copilot",
    template: "%s — BUDDY",
  },

  description:
    "BUDDY is a ticket buying copilot that helps individuals and groups find the best seats faster. Discover, evaluate, and choose tickets with confidence on the sites you already use.",

  applicationName: "BUDDY",

  metadataBase: new URL("https://ticketbuddy.org"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

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

  twitter: {
    card: "summary_large_image",
    title: "BUDDY — Ticket Buying Copilot",
    description:
      "Find the best seats with BUDDY. Your intelligent ticket buying copilot.",
    images: ["/buddy.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical for favicon and mobile */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
