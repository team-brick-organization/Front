'use client'

import { CrewReviewWriteModal, Portal } from '@/components'
import usePortal from '@/hooks/usePortal'

export default function Home() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  return (
    <div>
      <button onClick={() => setIsPortalOpen(true)} type="button">
        Open Modal
      </button>
      <Portal
        isPortalOpen={isPortalOpen}
        handleOutsideClick={handleOutsideClick}
        portalRef={portalRef}
      >
        <CrewReviewWriteModal />
      </Portal>
    </div>
  )
}
