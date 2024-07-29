'use client'

import mockSocialProps from '@/components/Gnb/moc'
import { GatheringCardList, Pagination, SortButtons } from '@/components/index'
import { Social } from '@/components/MypageCards/MypageCard'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import curlyArrowImage from '@/public/images/svgs/curlyArrow.svg'
import doodleImage from '@/public/images/svgs/doodle.svg'
import pinImage from '@/public/images/pngs/pin.png'

function LikedSocialsListPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [socialsData, setSocialsData] = useState<Social[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState('최신순')
  const [filter, setFilter] = useState('전체')

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const slicedSocialsData = socialsData.slice(
    (currentPage - 1) * 24,
    currentPage * 24,
  )

  const handleClickPopularity = () => {
    setSort('인기순')
  }
  const handleClickLatest = () => {
    setSort('최신순')
  }

  const titleText = '찜한 모임'

  const description = '찜한 모임을 보면 내가 좋아하는 것을 알 수 있어요'

  const bannerImage = pinImage

  const filterButtons = ['전체', '모집 중', '모집 마감']

  useEffect(() => {
    if (sort === '인기순') {
      socialsData.sort((a, b) => {
        return (
          b.participantCount.currentPeople - a.participantCount.currentPeople
        )
      })
    } else if (sort === '최신순') {
      socialsData.sort((a, b) => {
        return (
          new Date(b.gatheringDate).getTime() -
          new Date(a.gatheringDate).getTime()
        )
      })
    }
  }, [sort, socialsData])

  useEffect(() => {
    if (searchParams.get('type') === 'closed') {
      setFilter('모집 마감')
      return
    }

    if (searchParams.get('type') === 'recruiting') {
      setFilter('모집 중')
    }
  }, [searchParams])

  useEffect(() => {
    const fetchSocialsData = [
      ...mockSocialProps,
      ...mockSocialProps,
      ...mockSocialProps,
      ...mockSocialProps,
      ...mockSocialProps,
      ...mockSocialProps,
    ]

    setSocialsData(fetchSocialsData)
  }, [])

  return (
    <div className="flex w-full flex-col items-center gap-80pxr px-20pxr pb-160pxr pt-40pxr">
      <div className="flex w-full max-w-1180pxr flex-col">
        <div className="relative flex h-200pxr w-full max-w-1180pxr overflow-hidden rounded-[0.625rem] border border-gray-04 bg-gray-01 mb:bg-primary max862Min480:bg-primary">
          <div className="absolute bottom-0pxr left-0pxr right-0pxr top-0pxr hidden h-200pxr w-440pxr opacity-[0.2] mb:block max862Min480:block">
            <Image
              src={doodleImage}
              width={409}
              height={200}
              alt="doodle image"
            />
          </div>
          <Image
            className="absolute left-80pxr top-31pxr mb:hidden max862Min480:hidden"
            src={curlyArrowImage}
            width={60.224}
            height={63.025}
            alt="curly arrow image"
          />
          <div className="z-10 ml-100pxr mt-62pxr mb:ml-24pxr mb:mr-24pxr mb:mt-52pxr max862Min480:ml-24pxr max862Min480:mr-24pxr max862Min480:mt-52pxr">
            <h2 className="text-60pxr font-extrabold leading-[120%] text-black mb:text-50pxr max862Min480:text-50pxr">
              {titleText}
            </h2>
            <p className="mt-10pxr text-20pxr font-medium leading-[120%] text-black mb:text-16pxr max862Min480:mt-16pxr max862Min480:text-16pxr">
              {description}
            </p>
          </div>
          <Image
            className="absolute right-120pxr top-1/2 -translate-y-1/2 mb:hidden tb:right-80pxr max862Min480:hidden"
            src={bannerImage}
            width={160}
            height={200}
            quality={100}
            alt="pin image"
          />
        </div>
        <h1 className="mt-80pxr text-gray-10 font-headline-03 mb:mt-60pxr max862Min480:mt-60pxr">
          {titleText}
        </h1>
        <div className="mt-40pxr flex justify-between">
          <ul className="flex items-center gap-8pxr">
            {filterButtons.map((button) => (
              <li key={button}>
                <button
                  className={`rounded-[0.3125rem] bg-gray-03 px-14pxr py-3pxr text-gray-06 font-title-02 ${button === filter ? 'bg-gray-06 !text-gray-01' : ''}`}
                  type="button"
                  onClick={() => {
                    if (button === '전체') {
                      setFilter('전체')
                      router.push('/liked')
                      return
                    }

                    if (button === '모집 중') {
                      setFilter('모집 중')
                      router.push('/liked?type=recruiting')
                      return
                    }

                    if (button === '모집 마감') {
                      setFilter('모집 마감')
                      router.push('/liked?type=closed')
                    }
                  }}
                >
                  {button}
                </button>
              </li>
            ))}
          </ul>
          <SortButtons
            sort={sort}
            onClickLatest={handleClickLatest}
            onClickPopularity={handleClickPopularity}
          />
        </div>
        <div className="mt-24pxr w-full">
          <GatheringCardList data={slicedSocialsData} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={socialsData.length / 24}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default LikedSocialsListPage
