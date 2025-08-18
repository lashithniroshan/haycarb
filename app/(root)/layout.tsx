import React from 'react'
import Head from 'next/head';

const layout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return (     
      <main className="max-w-full overflow-x-hidden">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        {children}
      </main>
  )
}

export default layout