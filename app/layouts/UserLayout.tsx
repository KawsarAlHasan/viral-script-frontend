// layouts/UserLayout.tsx
import React, { ReactNode } from 'react'

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>👤 User Navbar</nav>
      <main>{children}</main>
    </div>
  )
}

export default UserLayout
