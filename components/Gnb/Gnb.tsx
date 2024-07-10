'use client'

import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import { Search } from '@/components'

/**
 * GNB컴포넌트
 *@todo 링크 등록, 디자인, 로고넣기
 */

function Gnb() {
  const { onSearch, setOnSearch } = useSearchStore()
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
          <div className="flex w-full max-w-454pxr flex-row items-center gap-46pxr">
            <Link href="/">
              <div className="h-30pxr w-100pxr bg-slate-600" />
            </Link>
            <section className="flex flex-row gap-24pxr">
              <Link href="/my">
                <p className="font-16pxr">크루</p>
              </Link>
              <Link href="/my">
                <p className="font-16pxr">소셜</p>
              </Link>
              <Link href="/my">
                <p className="font-16pxr">나의 찜</p>
              </Link>
            </section>
          </div>
          <div className="flex flex-row items-center gap-16pxr">
            <div>
              <MagnifyingGlassIcon
                width="24"
                height="24"
                onClick={handleOnSearch}
              />
            </div>
            <Link href="/등록하기">
              <Button className="h-32pxr w-77pxr rounded-full bg-slate-500">
                등록하기
              </Button>
            </Link>
            <Link href="/login">
              <p className="font-16pxr">로그인</p>
            </Link>
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
