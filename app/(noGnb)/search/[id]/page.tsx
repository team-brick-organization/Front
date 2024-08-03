'use client'

import { Pagination, Search, SortButtons } from '@/components'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import logo from '@/public/images/svgs/logo.svg'
import Link from 'next/link'
import useSearchStore from '@/stores/useSearchStore'
import mockSocialProps from '@/components/Gnb/moc'

/** search 페이지
 * @todo api 나오면 총 개수 넣어주기, 인기순 최신순 정렬 넣어주기,  페이지네이션 적용
 */

function SearchPage() {
  const { searchValue } = useSearchStore()
  const [sort, setSort] = useState<'popularity' | 'latest'>('latest')
  const { id } = useParams()
  const value = decodeURIComponent(Array.isArray(id) ? id[0] : id)
  const searchParam = value.length > 7 ? `${value.slice(0, 7)}...` : value
  const data = mockSocialProps // searchValue 인자로 넣어줘야함

  console.log(searchValue) // 린트 방지 console.log() 나중에 api에 넣으면서 지워야함

  const handleClickPopularity = () => {
    setSort('popularity')
  }
  const handleClickLatest = () => {
    setSort('latest')
  }

  useEffect(() => {
    if (sort === 'popularity') {
      data.sort((a, b) => {
        return (
          b.participantCount.currentPeople - a.participantCount.currentPeople
        )
      })
    } else if (sort === 'latest') {
      data.sort((a, b) => {
        return (
          new Date(b.gatheringDate).getTime() -
          new Date(a.gatheringDate).getTime()
        )
      })
    }
  }, [sort, data])

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
            <div className="flex w-fit flex-row gap-8pxr">
              <h1 className="text-gray-10 font-headline-03">{searchParam}</h1>
              <p className="text-gray-06 font-headline-02">검색결과</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              {/* 총 개수 넣어줘야함 */}
              <p className="text-gray-10 font-title-04">총 {11}개</p>
              <SortButtons
                sort={sort}
                onClickLatest={handleClickLatest}
                onClickPopularity={handleClickPopularity}
              />
            </div>
          </section>
          {/* <GatheringCardList data={data} /> */}
        </div>
      </div>
      <div className="mx-auto w-fit pb-160pxr pt-80pxr">
        <Pagination currentPage={1} totalPages={12} onPageChange={() => {}} />
      </div>
    </div>
  )
}

export default SearchPage
