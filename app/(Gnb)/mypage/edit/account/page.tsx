'use client'

import Image from 'next/image'
import { useState } from 'react'
import PasswordResetVerifier from '@/components/PasswordResetVerifier'
import { useRouter, usePathname } from 'next/navigation'
import gobackIcon from '@/public/images/svgs/goback.svg'
import dropdownIcon from '@/public/images/svgs/dropdown.svg'
import Link from 'next/link'

function AccountPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const linkItems = [
    { href: '/mypage/edit/profile', text: '내 정보 관리' },
    { href: '/mypage/edit/account', text: '계정 설정' },
  ]

  return (
    <div className="relative mt-80pxr mb:mt-0pxr">
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
          <h1 className="text-gray-10 font-title-04">계정 설정</h1>
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
          <div className="absolute -left-20pxr top-60pxr z-30 flex h-250pxr w-screen flex-col gap-40pxr rounded-lg bg-gray-02 px-20pxr pt-40pxr shadow-lg transition-all duration-300 ease-in-out">
            {linkItems.map((item, index) => (
              <Link
                key={`${index + 0}`}
                href={item.href}
                className={`cursor-pointer font-headline-02 ${
                  pathname === item.href ? 'text-gray-10' : 'text-gray-06'
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      <PasswordResetVerifier name="김참치" email="test1@naver.com" />
      {/* 추후 변경해야합니다 */}
    </div>
  )
}

export default AccountPage
