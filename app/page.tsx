'use client'

import gobackIcon from '@/public/images/svgs/goback.svg'

import {
  Gnb,
  ManagingMyInfo,
  Portal,
  ProfileImageChangeModal,
} from '@/components'
import usePortal from '@/hooks/usePortal'
import Image from 'next/image'

export default function Home() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  return (
    <div>
      <Gnb />
      <div>
        <div className="hidden mb:flex mb:justify-between mb:px-20pxr mb:pb-10pxr mb:pt-12pxr">
          <button type="button" title="뒤로가기 버튼">
            <Image
              src={gobackIcon}
              alt="뒤로가기 아이콘"
              width={26}
              height={26}
            />
          </button>
          <h1 className="text-gray-10 font-title-04">내 정보 관리</h1>
          <div className="w-26pxr" />
        </div>
      </div>
      <div className="flex h-full w-full py-80pxr pl-20pxr pr-470pxr mb:pl-20pxr mb:pr-22pxr tb:pr-20pxr">
        <ManagingMyInfo setIsPortalOpen={setIsPortalOpen} />
      </div>

      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-full w-full max-w-580pxr bg-gray-02 mb:px-20pxr"
      >
        <ProfileImageChangeModal onClose={() => setIsPortalOpen(false)} />
      </Portal>
    </div>
  )
}
