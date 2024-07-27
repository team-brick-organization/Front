import { MainPageCardList } from '@/components'
import mockSocialProps from '@/components/Gnb/moc'
import MainPageMobileCardList from '@/components/MainPageCards/MainPageMobileCardList'

export default function Home() {
  return (
    <div className="flex flex-col gap-160pxr">
      {/* eslint-disable-next-line react/self-closing-comp */}
      <div className="flex flex-row gap-16pxr"></div>
      <section className="mx-auto w-full max-w-1160pxr px-20pxr mb:px-0pxr">
        <div className="flex flex-col gap-40pxr mb:hidden">
          <div className="flex flex-row justify-between">
            <h1 className="text-gray-10 font-headline-03">이번주 인기 모임</h1>
            <p className="text-gray-08 font-body-02">더보기</p>
          </div>
          <MainPageCardList data={mockSocialProps} />
        </div>
        <MainPageMobileCardList data={mockSocialProps} />
      </section>
    </div>
  )
}
