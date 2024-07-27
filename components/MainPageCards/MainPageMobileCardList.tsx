import Image from 'next/image'
import Link from 'next/link'
import { Social } from '../MypageCards/MypageCard'
import MainPageMobileCard from './MainPageMobileCard'

interface MainPageMobileCardListProps {
  data: Social[]
}

function MainPageMobileCardList({ data }: MainPageMobileCardListProps) {
  return (
    <div className="mx-auto hidden w-full grid-cols-[repeat(auto-fit,minmax(212px,212px))] justify-center gap-x-16pxr gap-y-24pxr mb:grid">
      <Link href="/socials">
        <Image
          src="/images/svgs/weeklyPopularMore.svg"
          alt="이번주 인기 모임"
          width={212}
          height={235}
        />
      </Link>
      {data.map((item, i) => (
        <MainPageMobileCard key={`${i + 0}`} data={item} />
      ))}
    </div>
  )
}
export default MainPageMobileCardList
