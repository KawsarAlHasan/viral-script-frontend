'use client'

import { usePathname } from 'next/navigation'
import Navbar from './_components/Navbar'


export default function NavbarWrapper() {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')
  const isLogin = pathname.startsWith('/login')
  const isSignup = pathname.startsWith('/signup')
  const isPayment = pathname.startsWith('/payment')
  const isPricing = pathname.startsWith('/pricing')

  if (isDashboard || isSignup || isLogin || isPayment || isPricing) return null

  return <Navbar />
}