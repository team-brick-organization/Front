'use client'

import {
  GatheringCardList,
  Pagination,
  Search,
  SortButtons,
} from '@/components'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import logo from '@/public/images/svgs/logo.svg'
import Link from 'next/link'
import useSearchStore from '@/stores/useSearchStore'
import getSocials from '@/apis/getSocials'
import { notify } from '@/components/ToastMessageTrigger'

const LIMIT = 24

function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { searchValue } = useSearchStore()
  const [sort, setSort] = useState<'popularity' | 'latest'>('latest')
  const [socialsData, setSocialsData] = useState<IGetSocials>({
    currentPage: 1,
    totalPages: 1,
    totalElement: 0,
    socials: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [previousSearchValue, setPreviousSearchValue] = useState<string>('')
  const [sliceSearchValue, setSliceSearchValue] = useState<string>('')

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handleSort = useCallback(
    (newSort: 'popularity' | 'latest') => {
      setSort(newSort)
      router.push(
        `/search?sort=${newSort}&q=${encodeURIComponent(searchValue)}`,
      )
    },
    [router, searchValue],
  )

  const fetchSocials = useCallback(async () => {
    try {
      if (searchValue === previousSearchValue) {
        return
      }
      const response = await getSocials({
        orderBy: sort === 'popularity' ? 'popularity' : undefined,
        offset: currentPage - 1,
        limit: LIMIT,
        name: searchValue,
      })

      if (!response.ok) {
        throw new Error('Failed to fetch socials')
      }

      const data: IGetSocials = await response.json()
      setSocialsData({
        currentPage: data.currentPage + 1,
        totalPages: data.totalPages,
        totalElement: data.totalElement,
        socials: data.socials,
      })
      setPreviousSearchValue(searchValue)
    } catch (error) {
      notify('모임을 불러오는데 실패했습니다.', 'error')
      console.error('Failed to fetch socials:', error)
    }
  }, [currentPage, previousSearchValue, searchValue, sort])

  useEffect(() => {
    const value = decodeURIComponent(searchParams.get('q') || '')
    const searchParam = value.length > 7 ? `${value.slice(0, 7)}...` : value
    setSliceSearchValue(searchParam)
    fetchSocials()
  }, [searchParams, fetchSocials])

  return (
    <div className="relative">
      <Search />
      <div className="mx-auto flex h-70pxr max-w-1220pxr flex-row items-center justify-normal px-20pxr">
        <Link href="/">
          <Image
            className="hidden md:block"
            src={logo}
            alt="로고이미지"
            width={84}
            height={30}
          />
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-1220pxr flex-col gap-26pxr px-20pxr">
          <section className="flex flex-col gap-40pxr pt-85pxr">
            <div className="flex w-fit flex-row items-center gap-8pxr">
              <h1 className="text-gray-10 font-headline-03">
                {sliceSearchValue}
              </h1>
              <p className="text-gray-06 font-headline-02">검색결과</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-10 font-title-04">
                총 {socialsData.totalElement}개
              </p>
              <SortButtons
                sort={sort}
                onClickLatest={() => handleSort('latest')}
                onClickPopularity={() => handleSort('popularity')}
              />
            </div>
          </section>
          <GatheringCardList socialsData={socialsData.socials} />
        </div>
      </div>
      <div className="mx-auto w-fit pb-160pxr pt-80pxr">
        <Pagination
          currentPage={socialsData.currentPage}
          totalPages={socialsData.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default SearchPage
