'use client'

import { ChevronRightIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import useUserStore from '@/stores/useUserStore'
import getSignOut from '@/apis/getSignOut'
import useScrollLock from '@/hooks/useScrollLock'
import { usePathname, useSearchParams } from 'next/navigation'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useEffect } from 'react'
import useUserDataStore from '@/stores/useUserDataStore'

interface SidemenuProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Sidemenu({ isOpen = false, setIsOpen }: SidemenuProps) {
  const { accessToken, setAccessToken } = useUserStore()
  const { userData } = useUserDataStore()
  const path = usePathname()
  const searchParams = useSearchParams()
  const windowWidth = useWindowWidth()

  useScrollLock(isOpen)

  useEffect(() => {
    const openSideMenuWidth = windowWidth !== null && windowWidth <= 700

    if (!openSideMenuWidth) {
      setIsOpen(false)
    }
  }, [setIsOpen, windowWidth])

  const menus = [
    {
      name: '모집 중',
      link: '/socials',
      isActive:
        path === '/liked' ||
        (path === '/socials' && searchParams.get('type') === 'closed'),
    },
    {
      name: '모집 마감',
      link: '/socials?type=closed',
      isActive:
        (path === '/socials' && searchParams.get('type') !== 'closed') ||
        path === '/liked',
    },
    {
      name: '찜한 소셜',
      link: '/liked',
      isActive:
        (path === '/socials' && searchParams.get('type') === 'closed') ||
        path === '/socials',
    },
  ]

  const handleOnClose = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`${isOpen ? '' : 'translate-x-full'} fixed left-0pxr top-0pxr z-50 hidden h-screen w-full bg-gray-01 transition-transform duration-300 ease-in-out mb:block max700Min480:!left-0pxr max700Min480:!block`}
    >
      <section className="left-0pxr top-0pxr flex h-70pxr w-full flex-row items-center justify-between bg-gray-02 px-20pxr">
        <div className="flex flex-row items-center gap-16pxr">
          {accessToken && (
            <Avatar
              src={userData.profileImageUrl}
              fallback={userData.name.slice(0, 1)}
              className="rounded-full"
            />
          )}
          <div className="item-center flex flex-row gap-4pxr">
            {accessToken ? (
              <Link href="/mypage">
                <button type="button" onClick={handleOnClose}>
                  <p className="text-gray-10 font-title-04">{userData.name}</p>
                </button>
              </Link>
            ) : (
              <Link href="/signin">
                <button type="button" onClick={handleOnClose}>
                  <p className="text-gray-10 font-title-04">로그인</p>
                </button>
              </Link>
            )}

            <Link href="/mypage">
              <ChevronRightIcon width={26} height={26} />
            </Link>
          </div>
        </div>
        <button
          title="사이드바 닫기 버튼"
          type="button"
          onClick={handleOnClose}
        >
          <Cross2Icon width={30} height={30} />
        </button>
      </section>
      <section className="flex flex-col gap-40pxr px-20pxr pt-40pxr">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            className={`${menu.isActive ? 'text-gray-06' : 'text-gray-10'} text-left font-headline-02`}
            key={`menu-${index + 0}`}
            onClick={() => setIsOpen(false)}
          >
            {menu.name}
          </Link>
        ))}
      </section>
      {accessToken && (
        <button
          type="button"
          className="mt-400pxr px-20pxr text-left text-gray-10 font-headline-02"
          onClick={async () => {
            await getSignOut({ accessToken })
            setAccessToken('')
          }}
        >
          로그아웃
        </button>
      )}
    </div>
  )
}
export default Sidemenu
