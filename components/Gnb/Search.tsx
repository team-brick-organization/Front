import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { KeyboardEvent, useEffect, useState } from 'react'
import useSearchStore from '@/stores/useSearchStore'

/**
 * 돋보기 아이콘 눌렀을시 뜨는 검색창
 * @todo 검색 했을시 몇개까지 기록 남길지, 검색하는 함수 넣기
 */

function Search() {
  const { searchValue, setSearchValue } = useSearchStore()
  const [recentSearch, setRecentSearch] = useState<string[]>([])

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = () => {
    if (searchValue) {
      /* 나중에 검색하는 함수 넣기 */

      let updatedSearches = [...recentSearch]
      if (searchValue.length > 5) {
        const value = `${searchValue.slice(0, 5)}...`
        updatedSearches.unshift(value)
      } else {
        updatedSearches.unshift(searchValue)
      }

      if (updatedSearches.length > 5) {
        updatedSearches = updatedSearches.slice(0, 5)
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
    <main className="absolute left-1/2 top-0pxr z-10 h-268pxr w-540pxr -translate-x-1/2 transform rounded-b-[10px] bg-slate-50 opacity-100">
      <div className="flex flex-col">
        <section className="p-16pxr">
          <TextField.Root
            value={searchValue}
            onChange={handleOnchange}
            onKeyDown={onKeyDown}
            variant="soft"
            className="h-40pxr w-full rounded-none bg-transparent outline-none focus:border-b-2 focus:border-black"
            placeholder="관심사, 태그, 지역명을 검색해 보세요."
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
        <section className="flex h-full w-full flex-col gap-24pxr p-24pxr">
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

          <div className="flex flex-row gap-5pxr">
            {recentSearch.map((item, index) => (
              <p className="" key={`recent-${1 + index}`}>
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
export default Search
