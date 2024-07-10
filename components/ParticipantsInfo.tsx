import React from 'react'
import { NestingAvatar, PeopleCounter } from '@/components'
import Image from 'next/image'
import checkIcon from '@/public/images/svgs/check.svg'

interface IParticipantsInfoProps {
  participantsCurrentCount: number
  participantsMaxCount: number
  participantsMinCount: number
  participantProfileImagesConfig: { imageUrl: string; fallback: string }[]
}

function ParticipantsInfo({
  participantsCurrentCount,
  participantsMaxCount,
  participantsMinCount,
  participantProfileImagesConfig,
}: IParticipantsInfoProps) {
  return (
    <div className="flex flex-col gap-24pxr pt-28pxr">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12pxr">
          <p className="font-body-02">모임 정원 {participantsCurrentCount}명</p>
          <NestingAvatar
            config={participantProfileImagesConfig}
            displayLimit={4}
          />
        </div>
        {participantsCurrentCount >= participantsMinCount && (
          <div className="flex items-center gap-4pxr">
            <Image src={checkIcon} width={20} height={20} alt="체크 아이콘" />
            <p>개설확정</p>
          </div>
        )}
      </div>
      <PeopleCounter
        max={participantsMaxCount}
        min={participantsMinCount}
        current={participantsCurrentCount}
      />
    </div>
  )
}

export default ParticipantsInfo
