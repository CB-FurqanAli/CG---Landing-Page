'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname])

  return null
}
