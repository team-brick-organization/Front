'use client'

import gobackIcon from '@/public/images/svgs/goback.svg'
import dropdownIcon from '@/public/images/svgs/dropdown.svg'
import { ManagingMyInfo, Portal, ProfileImageChangeModal } from '@/components'
import usePortal from '@/hooks/usePortal'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function EditProfile() {
  const router = useRouter()
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="w-full">
      <div className="relative">
        <div className="hidden mb:flex mb:justify-between mb:px-20pxr mb:pb-10pxr mb:pt-12pxr">
          <button type="button" title="뒤로가기 버튼">
            <Image
              src={gobackIcon}
              alt="뒤로가기 아이콘"
              width={26}
              height={26}
              className="cursor-pointer"
              onClick={() => router.replace('/mypage')}
            />
          </button>
          <h1 className="text-gray-10 font-title-04">내 정보 관리</h1>
          <Image
            src={dropdownIcon}
            alt="dropdownIcon"
            width={26}
            height={26}
            className="cursor-pointer"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen)
            }}
          />
          <div className="w-26pxr" />
          {isDropdownOpen && (
            <div className="left-0 absolute top-full z-50 h-250pxr w-full max-w-480pxr bg-gray-02 shadow-lg transition-all duration-300 ease-in-out">
              <div className="p-4 mt-40pxr rounded-lg bg-gray-02">
                <div className="py-2 ml-20pxr font-headline-02">
                  내 정보 관리
                </div>
                <div className="py-2 ml-20pxr font-headline-02">계정 설정</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full pb-165pxr pt-80pxr mb:pl-20pxr mb:pr-22pxr tb:pl-16pxr tb:pr-20pxr">
        <ManagingMyInfo setIsPortalOpen={setIsPortalOpen} />
      </div>

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
export default EditProfile
