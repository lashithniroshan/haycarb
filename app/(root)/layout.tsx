import React from 'react'
import Head from 'next/head';

const layout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return (
     <>
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/icons/fav/favicon.ico" />
        {/* For modern browsers */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/* Apple Touch Icon for iOS devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        {/* Web App Manifest for PWAs */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Optional: Set a title for your site */}
        <title>Haycarb PLC | Annual Report 2024/25</title>
      </Head>
      <main className="max-w-full overflow-x-hidden">
        {children}
      </main>
    </>

  )
}

export default layout