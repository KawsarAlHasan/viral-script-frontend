// layouts/GuestLayout.tsx
import React, { ReactNode } from 'react'

const GuestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>👥 Guest Navbar</nav>
      <main>{children}</main>
    </div>
  )
}

export default GuestLayout
