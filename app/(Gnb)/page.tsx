import { Footer, MainPageCardList, MainPageTopButtonGroup } from '@/components'
import mockSocialProps from '@/components/Gnb/moc'
import MainPageMobileCardList from '@/components/MainPageCards/MainPageMobileCardList'
import Image from 'next/image'
import Link from 'next/link'

function Home() {
  return (
    <>
      <div className="flex flex-col gap-160pxr max599:gap-60pxr">
        <Image
          src="/images/svgs/banner.svg"
          alt="배너이미지"
          className="mx-auto"
          style={{ objectFit: 'cover' }}
          width={3000}
          height={400}
        />
        <MainPageTopButtonGroup />
        <section className="max599Min480:px-0pxr mx-auto w-full max-w-1160pxr px-20pxr">
          <div className="max599Min480:hidden flex flex-col gap-40pxr">
            <div className="flex flex-row justify-between max599:hidden">
              <h1 className="text-gray-10 font-headline-03">
                이번주 인기 모임
              </h1>
              <Link href="/socials" className="text-gray-08 font-body-02">
                더보기
              </Link>
            </div>
            <MainPageCardList data={mockSocialProps} />
          </div>
          <MainPageMobileCardList data={mockSocialProps} />
        </section>
      </div>
      <div className="mt-300pxr">
        <Footer />
      </div>
    </>
  )
}

export default Home
