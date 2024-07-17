'use client'

import { GatheringCard } from '@/components'
import { Social } from './MypageCards/MypageCard'

interface CardListProps {
  data: Social[]
}

/**
 * 카드 리스트 컴포넌트
 * @param data 데이터 배열
 */

function CardList({ data }: CardListProps) {
  return (
    <div className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(280px,280px))] justify-center gap-x-20pxr gap-y-40pxr px-20pxr mb:grid-cols-[repeat(auto-fit,minmax(212px,212px))] mb:gap-x-10pxr mb:gap-y-32pxr mb:px-0pxr tb:grid-cols-[repeat(auto-fit,minmax(376px,376px))] tb:gap-x-16pxr">
      {data.map((item, index) => (
        <GatheringCard data={item} key={`${index + 0}`} />
      ))}
    </div>
  )
}

export default CardList
