'use client'

import { GatheringCard } from '@/components'

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

interface TargetObject {
  data: Data[]
  chunkSize: number
}

const sortingObject = (target: TargetObject) => {
  const result = []
  if (target.data !== undefined) {
    for (let i = 0; i < target.data.length; i += target.chunkSize) {
      result.push(target.data.slice(i, i + target.chunkSize))
    }
    return result
  }
  return undefined
}

/**
 * 카드 리스트 컴포넌트
 * @param param0 데이터 배열
 */

function CardList({ data }: CardListProps) {
  const targetObject = { data, chunkSize: 4 }
  const sortedData = sortingObject(targetObject)

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
