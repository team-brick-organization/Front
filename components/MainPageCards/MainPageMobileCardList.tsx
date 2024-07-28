import { Social } from '../MypageCards/MypageCard'
import MainPageMobileCard from './MainPageMobileCard'
import WeeklyMoreButton from '../WeeklyMoreButton'

interface MainPageMobileCardListProps {
  data: Social[]
}

function MainPageMobileCardList({ data }: MainPageMobileCardListProps) {
  return (
    <div className="hidden w-full gap-x-16pxr gap-y-24pxr max599:grid max599:!grid-cols-2 max392:!grid-cols-1">
      <WeeklyMoreButton />
      {data.slice(0, 7).map((item, i) => (
        <MainPageMobileCard key={`${i + 0}`} data={item} />
      ))}
    </div>
  )
}
export default MainPageMobileCardList
