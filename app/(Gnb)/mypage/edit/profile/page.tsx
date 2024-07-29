'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import gobackIcon from '@/public/images/svgs/goback.svg'
import dropdownIcon from '@/public/images/svgs/dropdown.svg'
import { ManagingMyInfo, Portal, ProfileImageChangeModal } from '@/components'
import usePortal from '@/hooks/usePortal'
import Image from 'next/image'
import Link from 'next/link'

function EditProfile() {
  const router = useRouter()
  const pathname = usePathname()
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="w-full">
      <div className="relative">
        <div className="hidden items-center mb:flex mb:justify-between mb:px-0pxr mb:pb-10pxr mb:pt-12pxr">
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
          <div className="flex items-center gap-4pxr">
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
          </div>
          <div className="w-26pxr" />
          {isDropdownOpen && (
            <div className="absolute -left-20pxr top-full z-30 h-250pxr w-screen bg-gray-02 shadow-lg transition-all duration-300 ease-in-out">
              <div className="mt-40pxr rounded-lg bg-gray-02">
                <div className="mb-40pxr ml-20pxr">
                  <Link href="/mypage/edit/profile">
                    <span
                      className={`cursor-pointer font-headline-02 ${pathname === '/mypage/edit/profile' ? 'text-gray-10' : 'text-gray-06'}`}
                    >
                      내 정보 관리
                    </span>
                  </Link>
                </div>
                <div className="ml-20pxr">
                  <Link href="/mypage/edit/account">
                    <span
                      className={`cursor-pointer font-headline-02 ${pathname === '/mypage/edit/account' ? 'text-gray-10' : 'text-gray-06'}`}
                    >
                      계정 설정
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full pb-165pxr pt-80pxr mb:pl-0pxr mb:pr-0pxr tb:pl-16pxr tb:pr-20pxr">
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
