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
      <div className="flex flex-col gap-160pxr max599:gap-60pxr">
        <Image
          src="/images/avifs/banner.avif"
          alt="배너이미지"
          className="mx-auto"
          objectFit="cover"
          width={2000}
          height={450}
          priority
          blurDataURL="/images/avifs/bannerBlur.avif"
          placeholder="blur"
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

export default MainPage
