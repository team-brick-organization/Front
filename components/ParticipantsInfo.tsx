import React from 'react'
import { NestingAvatar, PeopleCounter } from '@/components'
import { CheckCircledIcon } from '@radix-ui/react-icons'

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
    <div className="flex flex-col gap-14pxr">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8pxr">
          <p className="text-gray-10 font-body-02">
            모임 정원 {participantsCurrentCount}명
          </p>
          <NestingAvatar
            config={participantProfileImagesConfig}
            displayLimit={4}
          />
        </div>
        {participantsCurrentCount >= participantsMinCount && (
          <div className="flex items-center gap-4pxr">
            <CheckCircledIcon className="h-18pxr w-18pxr" />
            <p className="text-gray-10 font-body-02">개설확정</p>
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
