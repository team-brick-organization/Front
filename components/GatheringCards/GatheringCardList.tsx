'use client'

import { GatheringCard } from '@/components'
import React from 'react'

interface CardListProps {
  socialsData: ISocials[]
}

/**
 * 카드 리스트 컴포넌트
 * @param data 데이터 배열
 */

function GatheringCardList({ socialsData }: CardListProps) {
  return (
    <div className="grid w-full grid-cols-4 gap-x-20pxr gap-y-40pxr mb:grid-cols-2 mb:gap-x-10pxr mb:gap-y-32pxr tb:gap-x-16pxr max420:!grid-cols-1 max700Min480:!grid-cols-2 max900Min480:grid-cols-3">
      {socialsData.map((item) => (
        <GatheringCard data={item} key={item.id} />
      ))}
    </div>
  )
}

export default GatheringCardList
