'use client'

import { Avatar, Button } from '@radix-ui/themes'
import Link from 'next/link'
import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import { Search, Sidemenu } from '@/components'
import getSignOut from '@/apis/getSignOut'
import useUserStore from '@/stores/useUserStore'
import { usePathname } from 'next/navigation'
import logo from '@/public/images/svgs/logo.svg'
import Image from 'next/image'

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
  const path = usePathname()
  const onlyLogo = !(path === '/registration' || path.includes('/edit'))
  const opacityClassName = onSearch ? 'opacity-0 pointer-events-none' : ''

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
    <div className="relative w-full px-80pxr mb:px-20pxr tb:px-20pxr">
      <main
        className={`${opacityClassName} mx-auto h-72pxr w-full max-w-1180pxr`}
      >
        <div className="flex h-full flex-row items-center justify-between">
          <div className="flex w-full max-w-370pxr flex-row items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="로고이미지" width={84} height={30} />
            </Link>
            {onlyLogo && (
              <section className="flex flex-row justify-between gap-24pxr mb:hidden">
                <Link href="/socials">
                  <button
                    type="button"
                    className={`${path === '/liked' || path === '/socials?type=imminent' ? 'text-gray-06' : 'text-gray-10'} text-nowrap font-title-04 tb:font-title-02`}
                  >
                    모집 중
                  </button>
                </Link>
                <Link href="/socials?type=imminent">
                  <button
                    type="button"
                    className={`${path === '/socials' || path === '/liked' ? 'text-gray-06' : 'text-gray-10'} text-nowrap font-title-04 tb:font-title-02`}
                  >
                    모집 마감
                  </button>
                </Link>
                <Link href="/liked">
                  <button
                    type="button"
                    className={`${path === '/socials?type=imminent' || path === '/socials' ? 'text-gray-06' : 'text-gray-10'} text-nowrap font-title-04 tb:font-title-02`}
                  >
                    찜한 소셜
                  </button>
                </Link>
              </section>
            )}
          </div>
          {onlyLogo && (
            <button
              title="메뉴"
              type="button"
              className="hidden mb:block"
              onClick={handleOpenSideMenu}
            >
              <HamburgerMenuIcon width="24" height="24" />
            </button>
          )}
          {onlyLogo && (
            <div className="flex flex-row items-center gap-24pxr mb:hidden">
              <button title="검색" type="button" onClick={handleOnSearch}>
                <MagnifyingGlassIcon width="30" height="30" />
              </button>
              <Link href="/registration">
                <Button className="cursor-pointer text-nowrap rounded-[0.625rem] bg-gray-10 px-20pxr py-6pxr text-gray-01 font-title-02">
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
      <div className="absolute top-0pxr z-50 -translate-x-[80px] transform mb:-translate-x-[20px] tb:-translate-x-[20px]">
        {onSearch ? (
          <>
            <Search />
            <div
              onClick={handleClickOutside}
              className="relative h-screen w-screen"
            >
              <div
                className="absolute left-0pxr top-72pxr w-full cursor-default bg-black opacity-30"
                style={{ height: 'calc(100% - 72px)' }}
              />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <Sidemenu isOpen={sideMenu} setIsOpen={setSideMenu} />
    </div>
  )
}

export default Gnb
