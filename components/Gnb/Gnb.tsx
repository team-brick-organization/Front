'use client'

import { Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import {
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import { Button, Search, Sidemenu } from '@/components'
import getSignOut from '@/apis/getSignOut'
import useUserStore from '@/stores/useUserStore'
import { usePathname } from 'next/navigation'
import logo from '@/public/images/svgs/logo.svg'
import Image from 'next/image'
import useScrollLock from '@/hooks/useScrollLock'

/**
 * GNB컴포넌트
 *@todo 링크 등록, 디자인, 로고넣기, 유저정보불러와서 넣어주기, API나오면 주석해제, 훅수정하기
 */

function Gnb() {
  const {
    accessToken,
    setAccessToken,
    name,
    setName,
    setEmail,
    profileImageUrl,
    setProfileImageUrl,
  } = useUserStore()
  const { onSearch, setOnSearch } = useSearchStore()
  const [sideMenu, setSideMenu] = useState(false)
  useScrollLock(onSearch)

  const path = usePathname()
  const pathArray = path.split('/')
  const onlyLogo = !(
    path.includes('password-find') ||
    path.includes('signup') ||
    path.includes('signin') ||
    path.includes('registration') ||
    pathArray[pathArray.length - 1] === 'edit'
  )
  const isFloatingButtonInvisible =
    path.includes('password-find') ||
    path.includes('signup') ||
    path.includes('signin') ||
    path.includes('mypage') ||
    path.includes('registration')
  const opacityClassName = onSearch ? 'opacity-0 pointer-events-none' : ''

  const menus = [
    {
      name: '모집 중',
      link: '/socials',
      pathName: path === '/liked' || path === '/socials?type=imminent',
    },
    {
      name: '모집 마감',
      link: '/socials?type=imminent',
      pathName: path === '/socials' || path === '/liked',
    },
    {
      name: '찜한 소셜',
      link: '/liked',
      pathName: path === '/socials?type=imminent' || path === '/socials',
    },
  ]

  const handleOpenSideMenu = () => {
    setSideMenu(true)
  }

  const handleOnSearch = () => {
    setOnSearch(true)
  }

  const handleClickOutside = () => {
    setOnSearch(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOnSearch(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setOnSearch])

  return (
    <div className="relative w-full px-20pxr">
      <main
        className={`${opacityClassName} mx-auto h-70pxr w-full max-w-1180pxr`}
      >
        <div className="flex h-full flex-row items-center justify-between">
          <div className="flex w-full max-w-370pxr flex-row items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="로고이미지" width={84} height={30} />
            </Link>
            {onlyLogo && (
              <section className="flex flex-row justify-between gap-24pxr mb:hidden">
                {menus.map((menu, index) => (
                  <Link href={menu.link} key={`menu-${index + 0}`}>
                    <button
                      type="button"
                      className={`${menu.pathName ? 'text-gray-06' : 'text-gray-10'} text-nowrap font-title-04 tb:font-title-02`}
                    >
                      {menu.name}
                    </button>
                  </Link>
                ))}
              </section>
            )}
          </div>
          {onlyLogo && (
            <div className="hidden flex-row gap-16pxr mb:flex">
              <button title="검색" type="button" onClick={handleOnSearch}>
                <MagnifyingGlassIcon width="30" height="30" />
              </button>
              <button title="메뉴" type="button" onClick={handleOpenSideMenu}>
                <HamburgerMenuIcon width="24" height="24" />
              </button>
            </div>
          )}
          {onlyLogo && (
            <div className="flex flex-row items-center gap-24pxr mb:hidden">
              <button title="검색" type="button" onClick={handleOnSearch}>
                <MagnifyingGlassIcon width="30" height="30" />
              </button>
              <Link href="/registration">
                <Button
                  size="S"
                  className="cursor-pointer text-nowrap rounded-[0.625rem] bg-gray-10 px-20pxr py-6pxr text-gray-01 font-title-02"
                >
                  등록하기
                </Button>
              </Link>
              {name ? (
                <Avatar
                  fallback={
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04 text-gray-10">
                      {name.charAt(0)}
                    </div>
                  }
                  src={profileImageUrl}
                  className="w-36 h-36 rounded-full"
                />
              ) : (
                <Link href="/signin">
                  <button
                    type="button"
                    className="text-nowrap text-gray-10 font-title-04 tb:font-title-02"
                  >
                    로그인
                  </button>
                </Link>
              )}
              {accessToken && ( // 추후에 지워야함
                <button
                  type="button"
                  className="text-nowrap text-gray-10 font-title-04 tb:font-title-02"
                  onClick={async () => {
                    await getSignOut({ accessToken })
                    setAccessToken('')
                    setName('')
                    setEmail('')
                    setProfileImageUrl('')
                  }}
                >
                  로그아웃
                </button>
              )}
            </div>
          )}
        </div>
      </main>
      <div className="absolute top-0pxr z-50 -translate-x-[20px]">
        {onSearch ? (
          <>
            <Search />
            <div
              onClick={handleClickOutside}
              className="relative h-screen w-screen"
            >
              <div
                className="absolute left-0pxr top-70pxr w-full cursor-default bg-black opacity-30"
                style={{ height: 'calc(100% - 70px)' }}
              />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <Sidemenu isOpen={sideMenu} setIsOpen={setSideMenu} />
      {!isFloatingButtonInvisible && (
        <Link href="/registration">
          <Button
            size="FAB"
            className="fixed bottom-40pxr right-20pxr z-10 hidden items-center justify-center mb:flex"
          >
            <PlusIcon width={24} height={24} />
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Gnb
