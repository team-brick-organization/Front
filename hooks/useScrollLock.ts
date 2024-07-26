'use client'

import { useEffect } from 'react'

function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : 'unset'
  }, [isLocked])

  return null
}

export default useScrollLock
