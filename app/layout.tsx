import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decibel Dashboard — Perp DEX Analytics",
  description:
    "Real-time stats, announcements, and AI analysis for Decibel Protocol — fully onchain perp DEX on Aptos.",
  openGraph: {
    title: "Decibel Dashboard",
    description: "TVL, volume, announcements & AI analysis for Decibel Protocol",
    images: ["/og.png"],
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
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Syne:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
