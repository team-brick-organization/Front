import { useRef, useState } from 'react'

function usePortal() {
  const portalRef = useRef<HTMLDivElement>(null)

  const [isPortalOpen, setIsPortalOpen] = useState(false)

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (portalRef.current === e.target) setIsPortalOpen(false)
  }
  return {
    portalRef,
    isPortalOpen,
    setIsPortalOpen,
    handleOutsideClick,
  }
}

export default usePortal
