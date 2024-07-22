'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { KeyboardEvent, useEffect, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'
import CustomBadge from '../CustomBadge/CustomBadge'

/**
 * 돋보기 아이콘 눌렀을시 뜨는 검색창
 * @todo 검색 했을시 몇개까지 기록 남길지, 검색하는 함수 넣기
 */

function Search() {
  const { searchValue, setSearchValue } = useSearchStore()
  const [recentSearch, setRecentSearch] = useState<string[]>([])
  const [isFolded, setIsFolded] = useState(true)

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleFold = () => {
    setIsFolded(false)
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
      /* 나중에 검색하는 함수 넣기 */

      let updatedSearches = [...recentSearch]
      if (searchValue.length > 7) {
        const value = `${searchValue.slice(0, 7)}...`
        updatedSearches.unshift(value)
      } else {
        updatedSearches.unshift(searchValue)
      }

      if (updatedSearches.length > 7) {
        updatedSearches = updatedSearches.slice(0, 7)
      }
      setRecentSearch(updatedSearches)
      localStorage.setItem('recentSearch', JSON.stringify(updatedSearches))
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
  }, [])

  return (
    <main className="absolute left-1/2 top-0pxr z-10 h-fit w-full max-w-540pxr -translate-x-1/2 transform rounded-b-[.625rem] bg-white opacity-100">
      <div className="flex flex-col">
        <section className="p-16pxr">
          <TextField.Root
            autoFocus
            value={searchValue}
            onChange={handleOnchange}
            onKeyUp={onKeyDown}
            variant="soft"
            color="gray"
            className="h-40pxr w-full rounded-[.3125rem] border-[#DDDEE0] bg-[#F9FAFC] outline-none ring-1 ring-[#DDDEE0] focus:ring-black"
            placeholder="관심사, 태그, 지역명을 검색해 보세요."
            onFocus={handleFold}
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
          className={`${isFolded ? 'hidden' : ''} flex h-full w-full flex-col gap-24pxr p-24pxr`}
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
              <CustomBadge
                onCrossClick={() => {
                  handleDeleteSearchItem({ searchItems: recentSearch, index })
                }}
                type="search"
                key={`recent-${1 + index}`}
              >
                {item}
              </CustomBadge>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Search
