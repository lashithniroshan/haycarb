import React from 'react'


const layout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return (
    <main className="max-w-full overflow-x-hidden">
        {children}
        </main>
  )
}

export default layout