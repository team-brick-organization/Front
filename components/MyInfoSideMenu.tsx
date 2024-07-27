'use client'

import getSignOut from '@/apis/getSignOut'
import useUserStore from '@/stores/useUserStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MyInfoSideMenu() {
  const { accessToken, setAccessToken } = useUserStore()
  const pathname = usePathname()

  return (
    <div className="flex-start mt-80pxr flex h-314pxr w-full max-w-180pxr flex-col mb:hidden">
      <div className="flex-start mb-12pxr">
        <Link href="/mypage/edit/profile">
          <span
            className={`cursor-pointer font-title-04 ${pathname === '/mypage/edit/profile' ? 'text-gray-10' : 'text-gray-06'}`}
          >
            내 정보 관리
          </span>
        </Link>
      </div>
      <div className="flex-start mb-12pxr">
        <Link href="/mypage/edit/account">
          <span
            className={`cursor-pointer font-title-04 ${pathname === '/mypage/edit/account' ? 'text-gray-10' : 'text-gray-06'}`}
          >
            계정 설정
          </span>
        </Link>
      </div>
      <div
        onClick={async () => {
          await getSignOut({ accessToken })
          setAccessToken('')
        }}
        className="mt-200pxr cursor-pointer text-gray-10 font-title-04"
      >
        로그아웃
      </div>
    </div>
  )
}

export default MyInfoSideMenu
