'use client'

import { GatheringCard } from '@/components'
import useCardListSort from '@/hooks/useCardListSort'

interface Data {
  id: number
  userName: string
  userProfileImg: string
  img: string
  tags: string[]
  title: string
  place: string
  liked: boolean
  current: number
  max: number
}

interface CardListProps {
  data: Data[]
}
/**
 * 카드 리스트 컴포넌트
 * @param param0 데이터 배열
 */

function CardList({ data }: CardListProps) {
  const sortedData = useCardListSort(data, 4)

  return (
    <div className="flex flex-col gap-40pxr">
      {sortedData?.map((item1, index1) => (
        <div key={`${index1 + 0}`} className="flex flex-row gap-20pxr">
          {item1.map((item2, index2) => (
            <GatheringCard data={item2} key={`${index2 + 0}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CardList
