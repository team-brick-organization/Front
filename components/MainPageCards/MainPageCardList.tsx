import MainPageCard from './MainPageCard'

interface MainPageCardListProps {
  socialsData?: ISocials[]
}

function MainPageCardList({ socialsData }: MainPageCardListProps) {
  if (!socialsData) return null

  const formattedData = Array.from(
    { length: Math.ceil(socialsData.length / 2) },
    (_, i) => socialsData.slice(i * 2, i * 2 + 2),
  )

  const layouts = [
    ['basis-2/3', 'basis-1/3'],
    ['basis-1/3', 'basis-2/3'],
    ['basis-2/3', 'basis-1/3'],
  ]

  return (
    <ul className="flex flex-col gap-20pxr max599:hidden">
      {formattedData.slice(0, 3).map((pair, index) => (
        <section key={`${index + 0}`} className="flex flex-row gap-16pxr">
          {pair.map((item, i) => (
            <li key={`${i + 0}`} className={layouts[index % layouts.length][i]}>
              <MainPageCard data={item} />
            </li>
          ))}
        </section>
      ))}
    </ul>
  )
}

export default MainPageCardList
