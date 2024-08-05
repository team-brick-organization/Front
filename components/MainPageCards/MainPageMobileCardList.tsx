import MainPageMobileCard from './MainPageMobileCard'
import WeeklyMoreButton from '../WeeklyMoreButton'

interface MainPageMobileCardListProps {
  socialsData?: ISocials[]
}

function MainPageMobileCardList({ socialsData }: MainPageMobileCardListProps) {
  return (
    <ul className="hidden w-full gap-x-16pxr gap-y-24pxr max599:grid max599:!grid-cols-2 max392:!grid-cols-1">
      <li>
        <WeeklyMoreButton />
      </li>
      {socialsData?.slice(0, 7).map((item, i) => (
        <li key={`${i + 0}`}>
          <MainPageMobileCard key={`${i + 0}`} data={item} />
        </li>
      ))}
    </ul>
  )
}
export default MainPageMobileCardList
