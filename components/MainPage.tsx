import Image from 'next/image'
import Link from 'next/link'
import MainPageTopButtonGroup from './MainPageTopButtonGroup'
import MainPageCardList from './MainPageCards/MainPageCardList'
import MainPageMobileCardList from './MainPageCards/MainPageMobileCardList'
import Footer from './Footer'

interface IMainPageProps {
  socialsData?: ISocials[]
}

function MainPage({ socialsData }: IMainPageProps) {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src="/images/svgs/banner.svg"
          alt="배너이미지"
          className="mx-auto"
          objectFit="cover"
          width={2880}
          height={600}
          priority
        />
        <div className="mt-80pxr max599:hidden">
          <MainPageTopButtonGroup />
        </div>
        <section className="max599Min480:px-0pxr mx-auto mt-100pxr w-full max-w-1160pxr px-20pxr max599:mt-40pxr">
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
      <div className="mt-400pxr">
        <Footer />
      </div>
    </>
  )
}

export default MainPage
