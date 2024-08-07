'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import useScrollLock from '@/hooks/useScrollLock'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import CustomBadge from '../CustomBadge/CustomBadge'

function Search() {
  const searchParams = useSearchParams()
  const { setSearchValue } = useSearchStore()
  const [recentSearch, setRecentSearch] = useState<string[]>([])
  const [isFolded, setIsFolded] = useState(true)
  const path = usePathname()
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  useScrollLock(!isFolded)

  const handleUnFold = () => setIsFolded(false)
  const handleFold = () => setIsFolded(true)

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleDeleteSearchItem = (index: number) => {
    const updatedSearches = recentSearch.filter((_, i) => i !== index)
    setRecentSearch(updatedSearches)
    localStorage.setItem('recentSearch', JSON.stringify(updatedSearches))
  }

  const handleSearch = () => {
    if (inputValue) {
      let updatedSearches = [
        inputValue,
        ...recentSearch.filter((item) => item !== inputValue),
      ]
      updatedSearches = updatedSearches.slice(0, 7)
      setRecentSearch(updatedSearches)
      localStorage.setItem('recentSearch', JSON.stringify(updatedSearches))
      setIsFolded(true)
      router.push(`/search?q=${encodeURIComponent(inputValue)}`)
      setSearchValue(inputValue)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  const handleRemoveRecentItems = () => {
    setRecentSearch([])
    localStorage.removeItem('recentSearch')
  }

  useEffect(() => {
    const item = localStorage.getItem('recentSearch')
    if (item) {
      setRecentSearch(JSON.parse(item))
    }
  }, [])

  useEffect(() => {
    if (searchParams.has('q') || path.includes('search')) {
      const searchParam = decodeURIComponent(searchParams.get('q') || '')
      setSearchValue(searchParam)
      setInputValue(searchParam)
    }
  }, [path, searchParams, setSearchValue])

  return (
    <>
      <div
        ref={searchRef}
        className="absolute left-1/2 top-0pxr z-50 h-fit w-full max-w-540pxr -translate-x-1/2 transform rounded-b-[.625rem] bg-white opacity-100"
      >
        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="p-15pxr">
            <TextField.Root
              value={inputValue}
              onChange={handleInputValueChange}
              variant="soft"
              color="gray"
              className="h-40pxr w-full rounded-[.3125rem] border-[#DDDEE0] bg-[#F9FAFC] outline-none ring-1 ring-[#DDDEE0] focus:ring-black"
              placeholder="관심사, 태그, 지역명을 검색해 보세요."
              onFocus={handleUnFold}
            >
              <TextField.Slot />
              <TextField.Slot>
                <button title="검색 버튼" type="submit">
                  <MagnifyingGlassIcon
                    width="24"
                    height="24"
                    className="cursor-pointer"
                  />
                </button>
              </TextField.Slot>
            </TextField.Root>
          </form>
          <section
            className={`${isFolded ? 'hidden' : ''} z-50 flex h-full w-full flex-col gap-24pxr p-24pxr`}
          >
            <div className="flex flex-row items-center gap-16pxr">
              <h3 className="font-title-02">최근 검색어</h3>
              <button
                className="text-10pxr text-zinc-200"
                onClick={handleRemoveRecentItems}
                type="button"
              >
                전체 삭제
              </button>
            </div>

            <div className="inline-flex flex-wrap gap-5pxr">
              {recentSearch.map((item, index) => (
                <Link
                  href={`/search?q=${encodeURIComponent(item)}`}
                  key={`recent-${index + 1}`}
                >
                  <CustomBadge
                    type="search"
                    onCrossClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleDeleteSearchItem(index)
                      setIsFolded(false)
                    }}
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
          <div onClick={handleFold} className="absolute h-full w-full">
            <div
              className="absolute left-0pxr top-70pxr z-10 w-full cursor-default bg-black opacity-30"
              style={{ height: 'calc(100vh - 70px)' }}
            />
          </div>
          <div className="absolute left-0pxr top-0pxr h-70pxr w-full bg-white" />
        </>
      )}
    </>
  )
}

export default Search
