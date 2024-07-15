'use client'

import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import { Search } from '@/components'
// import useGetProfileImg from '@/hooks/useGetProfileImg'

/**
 * GNB컴포넌트
 *@todo 링크 등록, 디자인, 로고넣기, 유저정보불러와서 넣어주기, API나오면 주석해제, 훅수정하기
 */

function Gnb() {
  const { onSearch, setOnSearch } = useSearchStore()
  // const { userName, profileImg } = useGetProfileImg()

  const opacityClassName = onSearch ? 'opacity-0 pointer-events-none' : ''

  const handleOnSearch = () => {
    setOnSearch(true)
  }

  const handleClickOutside = () => {
    setOnSearch(false)
  }

  const handleSideMenuBar = () => {
    // 사이드메뉴 나오면 함수넣기
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
            <Link href="/">
              <div className="h-30pxr w-100pxr bg-slate-600" />
            </Link>
            <section className="flex flex-row justify-between gap-24pxr mb:hidden">
              <Link href="/my">
                <button
                  type="button"
                  className="text-nowrap text-[#1E1F20] font-title-04 tb:font-title-02"
                >
                  모집 중
                </button>
              </Link>
              <Link href="/my">
                <button
                  type="button"
                  className="text-nowrap text-[#1E1F20] font-title-04 tb:font-title-02"
                >
                  모집 마감
                </button>
              </Link>
              <Link href="/my">
                <button
                  type="button"
                  className="text-nowrap text-[#1E1F20] font-title-04 tb:font-title-02"
                >
                  찜한 소셜
                </button>
              </Link>
            </section>
          </div>
          <button
            type="button"
            className="hidden mb:block"
            onClick={handleSideMenuBar}
          >
            <HamburgerMenuIcon width="24" height="24" />
          </button>
          <div className="flex w-197pxr flex-row items-center gap-16pxr mb:hidden">
            <button type="button" onClick={handleOnSearch}>
              <MagnifyingGlassIcon width="30" height="30" />
            </button>
            <Link href="/등록하기">
              <Button className="cursor-pointer text-nowrap rounded-full bg-slate-500 font-title-02">
                등록하기
              </Button>
            </Link>
            {/* {userName ? (
              <Avatar
                fallback={userName.charAt(0)}
                src={profileImg}
                className="w-36 h-36 rounded-full"
              />
            ) : ( */}
            <Link href="/signin">
              <button
                type="button"
                className="text-nowrap text-[#1E1F20] font-title-04 tb:font-title-02"
              >
                로그인
              </button>
            </Link>
            {/* )} */}
          </div>
        </div>
      </main>
      <div className="absolute top-0pxr -translate-x-[80px] transform mb:-translate-x-[20px] tb:-translate-x-[20px]">
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
    </div>
  )
}

export default Gnb
