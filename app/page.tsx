'use client'

import {
  Gnb,
  ManagingMyInfo,
  Portal,
  ProfileImageChangeModal,
} from '@/components'
import usePortal from '@/hooks/usePortal'

export default function Home() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  return (
    <div>
      <Gnb />
      <ManagingMyInfo setIsPortalOpen={setIsPortalOpen} />
      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-full w-full max-w-580pxr mb:px-20pxr"
      >
        <ProfileImageChangeModal onClose={() => setIsPortalOpen(false)} />
      </Portal>
    </div>
  )
}
