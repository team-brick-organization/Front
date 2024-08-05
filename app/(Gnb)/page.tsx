'use client'

import getSocials from '@/apis/getSocials'
import { Footer, MainPageCardList, MainPageTopButtonGroup } from '@/components'
import MainPageMobileCardList from '@/components/MainPageCards/MainPageMobileCardList'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Home() {
  const [socialsData, setSocialsData] = useState<ISocials[]>()

  useEffect(() => {
    const fetchSocials = async () => {
      const response = await getSocials({
        orderBy: 'popularity',
        offset: 0,
        limit: 7,
      })

      if (!response.ok) {
        console.error('Failed to fetch socials')
        return
      }

      const data: IGetSocials = await response.json()
      setSocialsData(data.socials)
    }

    fetchSocials()
  }, [])

  return (
    <>
      <div className="flex flex-col gap-160pxr max599:gap-60pxr">
        <Image
          src="/images/svgs/banner.svg"
          alt="배너이미지"
          className="mx-auto"
          objectFit="cover"
          width={3000}
          height={400}
        />
        <MainPageTopButtonGroup />
        <section className="max599Min480:px-0pxr mx-auto w-full max-w-1160pxr px-20pxr">
          <div className="max599Min480:hidden flex flex-col gap-40pxr">
            <div className="flex flex-row items-center justify-between max599:hidden">
              <h1 className="text-gray-10 font-headline-03">
                이번주 인기 모임
              </h1>
              <Link
                href="/socials?sort=popularity"
                className="text-gray-08 font-body-02"
              >
                더보기
              </Link>
            </div>
            <MainPageCardList socialsData={socialsData} />
          </div>
          <MainPageMobileCardList socialsData={socialsData} />
        </section>
      </div>
      <div className="mt-300pxr">
        <Footer />
      </div>
    </>
  )
}

export default Home
