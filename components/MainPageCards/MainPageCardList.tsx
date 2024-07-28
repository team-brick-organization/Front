import { Social } from '../MypageCards/MypageCard'
import MainPageCard from './MainPageCard'

interface MainPageCardListProps {
  data: Social[]
}

function MainPageCardList({ data }: MainPageCardListProps) {
  const formattedData = Array.from(
    { length: Math.ceil(data.length / 2) },
    (_, i) => data.slice(i * 2, i * 2 + 2),
  )

  const layouts = [
    ['basis-2/3', 'basis-1/3'],
    ['basis-1/3', 'basis-2/3'],
    ['basis-2/3', 'basis-1/3'],
  ]

  return (
    <div className="flex flex-col gap-20pxr mb:hidden">
      {formattedData.slice(0, 3).map((pair, index) => (
        <section key={`${index + 0}`} className="flex flex-row gap-16pxr">
          {pair.map((item, i) => (
            <div
              key={`${i + 0}`}
              className={layouts[index % layouts.length][i]}
            >
              <MainPageCard data={item} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}

export default MainPageCardList