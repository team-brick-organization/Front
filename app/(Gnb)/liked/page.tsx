'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
import { GatheringCardList, Pagination, SortButtons } from '@/components/index'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import curlyArrowImage from '@/public/images/svgs/curlyArrow.svg'
import doodleImage from '@/public/images/svgs/doodle.svg'
import pinImage from '@/public/images/pngs/pin.png'
import getSocials from '@/apis/getSocials'
import chevronDownIcon from '@/public/images/svgs/chevronDown.svg'

function LikedSocialsListPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [socialsData, setSocialsData] = useState<GetSocialsType>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<'popularity' | 'latest'>(
    searchParams.get('sort') === 'popularity' ? 'popularity' : 'latest',
  )
  const [filter, setFilter] = useState(() => {
    const type = searchParams.get('type')
    if (type === 'closed') {
      return '모집 마감'
    }

    if (type === 'recruiting') {
      return '모집 중'
    }

    return '전체'
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleClickPopularity = () => {
    setSort('popularity')
    router.push(`/liked?sort=popularity`)
  }
  const handleClickLatest = () => {
    setSort('latest')
    router.push(`/liked`)
  }

  const titleText = '찜한 모임'

  const filterButtons = ['전체', '모집 중', '모집 마감']

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
    const fetchSocials = async () => {
      const response = await getSocials({
        orderBy: sort === 'popularity' ? 'popularity' : undefined,
      })

      if (!response.ok) {
        console.error('Failed to fetch socials')
        return
      }

      const data = await response.json()
      setSocialsData(data)
    }

    fetchSocials()
  }, [sort])

  return (
    <div className="flex w-full flex-col items-center gap-80pxr px-20pxr pb-160pxr pt-40pxr">
      <div className="flex w-full max-w-1180pxr flex-col">
        <Banner titleText={titleText} />
        <h1 className="mt-80pxr text-gray-10 font-headline-03 mb:mt-60pxr max862Min480:mt-60pxr">
          {titleText}
        </h1>
        <div className="mt-40pxr flex justify-between">
          <FilterButtonList
            filter={filter}
            setFilter={setFilter}
            filterButtons={filterButtons}
            sort={sort}
          />
          <FilterDropDown
            filter={filter}
            setFilter={setFilter}
            filterButtons={filterButtons}
            sort={sort}
          />
          <SortButtons
            sort={sort}
            onClickLatest={handleClickLatest}
            onClickPopularity={handleClickPopularity}
          />
        </div>
        <div className="mt-24pxr w-full">
          <GatheringCardList data={socialsData} />
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

function Banner({ titleText }: { titleText: string }) {
  const description = '찜한 모임을 보면 내가 좋아하는 것을 알 수 있어요'

  const bannerImage = pinImage

  return (
    <div className="relative flex h-200pxr w-full max-w-1180pxr overflow-hidden rounded-[0.625rem] border border-gray-04 bg-gray-01 mb:bg-primary max862Min480:bg-primary">
      <div className="absolute bottom-0pxr left-0pxr right-0pxr top-0pxr hidden h-200pxr w-440pxr opacity-[0.2] mb:block max862Min480:block">
        <Image src={doodleImage} width={409} height={200} alt="doodle image" />
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
  )
}

function FilterDropDown({
  filter,
  setFilter,
  filterButtons,
  sort,
}: {
  filter: string
  setFilter: (filter: string) => void
  filterButtons: string[]
  sort: 'popularity' | 'latest'
}) {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="relative hidden max400:block">
      <button
        className="flex items-center"
        type="button"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span className="px-13pxr py-2pxr text-gray-08 font-title-02">
          {filter}
        </span>
        <Image
          className={
            isDropdownOpen
              ? 'transition-transform duration-300 ease-in-out'
              : 'rotate-180 transform transition-transform duration-300 ease-in-out'
          }
          src={chevronDownIcon}
          width={26}
          height={26}
          alt="chevron down icon"
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0pxr top-32pxr z-10 w-78pxr rounded-[0.3125rem] border border-gray-04 bg-white">
          {filterButtons.map((button, index) => (
            <>
              <li key={button}>
                <button
                  className={`w-full py-4pxr text-gray-06 font-title-02 ${button === filter ? '!text-gray-08' : ''}`}
                  type="button"
                  onClick={() => {
                    if (button === '전체') {
                      setFilter('전체')
                      router.push(
                        `/liked${sort === 'latest' ? '' : `?sort=${sort}`}`,
                      )
                      return
                    }

                    if (button === '모집 중') {
                      setFilter('모집 중')
                      router.push(
                        `/liked?type=recruiting${sort === 'latest' ? '' : `&sort=${sort}`}`,
                      )
                      return
                    }

                    if (button === '모집 마감') {
                      setFilter('모집 마감')
                      router.push(
                        `/liked?type=closed${sort === 'latest' ? '' : `&sort=${sort}`}`,
                      )
                    }
                  }}
                >
                  {button}
                </button>
              </li>
              {index !== filterButtons.length - 1 && (
                <div className="h-1pxr w-77pxr bg-gray-04" />
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  )
}

function FilterButtonList({
  filterButtons,
  filter,
  setFilter,
  sort,
}: {
  filterButtons: string[]
  filter: string
  setFilter: (filter: string) => void
  sort: 'popularity' | 'latest'
}) {
  const router = useRouter()
  return (
    <ul className="flex items-center gap-8pxr max400:hidden">
      {filterButtons.map((button) => (
        <li key={button}>
          <button
            className={`rounded-[0.3125rem] bg-gray-03 px-14pxr py-3pxr text-gray-06 font-title-02 ${button === filter ? 'bg-gray-06 !text-gray-01' : ''}`}
            type="button"
            onClick={() => {
              if (button === '전체') {
                setFilter('전체')
                router.push(`/liked${sort === 'latest' ? '' : `?sort=${sort}`}`)
                return
              }

              if (button === '모집 중') {
                setFilter('모집 중')
                router.push(
                  `/liked?type=recruiting${sort === 'latest' ? '' : `&sort=${sort}`}`,
                )
                return
              }

              if (button === '모집 마감') {
                setFilter('모집 마감')
                router.push(
                  `/liked?type=closed${sort === 'latest' ? '' : `&sort=${sort}`}`,
                )
              }
            }}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  )
}
