'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import useScrollLock from '@/hooks/useScrollLock'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import CustomBadge from '../CustomBadge/CustomBadge'

/**
 * 돋보기 아이콘 눌렀을시 뜨는 검색창
 */

function Search() {
  const { searchValue, setSearchValue } = useSearchStore()
  const [recentSearch, setRecentSearch] = useState<string[]>([])
  const [isFolded, setIsFolded] = useState(true)
  const path = usePathname()
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  useScrollLock(!isFolded)

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleUnFold = () => {
    setIsFolded(false)
  }

  const handleFold = () => {
    setIsFolded(true)
  }

  const handleDeleteSearchItem = ({
    searchItems,
    index,
  }: {
    searchItems: string[]
    index: number
  }) => {
    const updatedSearches = searchItems.filter((_, i) => {
      return i !== index
    })
    setRecentSearch(updatedSearches)
    localStorage.setItem('recentSearch', JSON.stringify(updatedSearches))
  }

  const handleSearch = () => {
    if (searchValue) {
      let updatedSearches = [...recentSearch]
      if (recentSearch[0] !== searchValue) {
        updatedSearches.unshift(searchValue)
        if (updatedSearches.length > 7) {
          updatedSearches = updatedSearches.slice(0, 7)
        }
        localStorage.setItem('recentSearch', JSON.stringify(updatedSearches))
        setIsFolded(true)
      }
      router.push(`/search/${encodeURIComponent(searchValue)}`)
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleRemoveRecents = () => {
    setRecentSearch([])
    localStorage.removeItem('recentSearch')
  }

  useEffect(() => {
    const item = localStorage.getItem('recentSearch')
    if (item) {
      setRecentSearch(JSON.parse(item))
    }

    const handleDocumentClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsFolded(true)
      }
    }

    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleFold)
    }
  }, [path, setSearchValue])

  useEffect(() => {
    if (path.split('/')[1] === 'search' && path.split('/')[2]) {
      const searchParam = decodeURIComponent(path.split('/')[2])
      setSearchValue(searchParam)
    }
  }, [path, setSearchValue])

  return (
    <>
      <div
        ref={searchRef}
        className="absolute left-1/2 top-0pxr z-50 h-fit w-full max-w-540pxr -translate-x-1/2 transform rounded-b-[.625rem] bg-white opacity-100"
      >
        <div className="flex flex-col">
          <section className="p-15pxr">
            <TextField.Root
              value={searchValue}
              onChange={handleOnchange}
              onKeyDown={onKeyDown}
              variant="soft"
              color="gray"
              className="h-40pxr w-full rounded-[.3125rem] border-[#DDDEE0] bg-[#F9FAFC] outline-none ring-1 ring-[#DDDEE0] focus:ring-black"
              placeholder="관심사, 태그, 지역명을 검색해 보세요."
              onFocus={handleUnFold}
            >
              <TextField.Slot />
              <TextField.Slot>
                <MagnifyingGlassIcon
                  width="24"
                  height="24"
                  onClick={handleSearch}
                  className="cursor-pointer"
                />
              </TextField.Slot>
            </TextField.Root>
          </section>
          <section
            className={`${isFolded ? 'hidden' : ''} z-50 flex h-full w-full flex-col gap-24pxr p-24pxr`}
          >
            <div className="flex flex-row items-center gap-16pxr">
              <h3 className="font-title-02">최근 검색어</h3>
              <button
                className="text-10pxr text-zinc-200"
                onClick={handleRemoveRecents}
                type="button"
              >
                전체 삭제
              </button>
            </div>

            <div className="inline-flex flex-wrap gap-5pxr">
              {recentSearch.map((item, index) => (
                <Link
                  href={`/search/${encodeURIComponent(item)}`}
                  key={`recent-${1 + index}`}
                >
                  <CustomBadge
                    onCrossClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleDeleteSearchItem({
                        searchItems: recentSearch,
                        index,
                      })
                    }}
                    type="search"
                  >
                    {item.length > 7 ? `${item.slice(0, 7)}...` : item}
                  </CustomBadge>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      {!isFolded && path.includes('search') && (
        <>
          <div onClick={handleFold} className="aboslute h-full w-full">
            <div
              className="absolute left-0pxr top-70pxr z-10 w-full cursor-default bg-black opacity-30"
              style={{ height: 'calc(100% - 70px)' }}
            />
          </div>
          <div className="absolute left-0pxr top-0pxr h-70pxr w-full bg-white" />
        </>
      )}
    </>
  )
}

export default Search
