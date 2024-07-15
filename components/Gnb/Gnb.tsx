'use client'

import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
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
    <div className="relative w-full bg-gray-200">
      <main
        className={`${opacityClassName} mx-auto h-72pxr w-full max-w-1180pxr`}
      >
        <div className="flex h-full flex-row items-center justify-between">
          <div className="flex w-full max-w-370pxr flex-row items-center gap-60pxr">
            <Link href="/">
              <div className="h-30pxr w-100pxr bg-slate-600" />
            </Link>
            <section className="flex flex-row gap-24pxr">
              <Link href="/my">
                <button type="button" className="text-[#1E1F20] font-title-04">
                  모집중
                </button>
              </Link>
              <Link href="/my">
                <button type="button" className="text-[#1E1F20] font-title-04">
                  모집마감
                </button>
              </Link>
              <Link href="/my">
                <button type="button" className="text-[#1E1F20] font-title-04">
                  찜한 소셜
                </button>
              </Link>
            </section>
          </div>
          <div className="flex flex-row items-center gap-16pxr">
            <button type="button" onClick={handleOnSearch}>
              <MagnifyingGlassIcon width="30" height="30" />
            </button>
            <Link href="/등록하기">
              <Button className="cursor-pointer rounded-full bg-slate-500 font-title-02">
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
              <button type="button" className="text-[#1E1F20] font-title-04">
                로그인
              </button>
            </Link>
            {/* )} */}
          </div>
        </div>
      </main>
      <div className="absolute top-0pxr">
        {onSearch ? (
          <>
            <Search />
            <div
              onClick={handleClickOutside}
              className="relative h-screen w-screen cursor-default bg-black opacity-30"
            />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Gnb
