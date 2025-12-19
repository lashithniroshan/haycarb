import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSelector from "components/FooterSelector";
import AccessibilityScript from "components/AccessibilityScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haycarb PLC | Annual Report 2024/25",
  description: "Haycarb PLC Annual Report 2024/25 - Driving sustainability and innovation in activated carbon solutions.",
  icons: {
    icon: [
      { url: '/icons/fav/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  // manifest: '/site.webmanifest',
  openGraph: {
    siteName: 'Haycarb PLC',
    type: 'website',
    locale: 'en_US',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Accessibility Plugin Script */}
        <AccessibilityScript />
        {children}
      </body>
    </html>
  );
}
