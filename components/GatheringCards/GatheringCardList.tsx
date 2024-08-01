'use client'

import { GatheringCard } from '@/components'
import React from 'react'

interface CardListProps {
  data: GetSocialsType
}

/**
 * 카드 리스트 컴포넌트
 * @param data 데이터 배열
 */

function GatheringCardList({ data }: CardListProps) {
  return (
    <div className="grid w-full grid-cols-4 gap-x-20pxr gap-y-40pxr mb:grid-cols-2 mb:gap-x-10pxr mb:gap-y-32pxr tb:gap-x-16pxr max420:!grid-cols-1 max700Min480:!grid-cols-2 max900Min480:grid-cols-3">
      {data.map((item, index) => (
        <GatheringCard data={item} key={`${index + 0}`} />
      ))}
    </div>
  )
}

export default GatheringCardList
