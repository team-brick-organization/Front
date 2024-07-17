'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */

import {
  FavoriteButton,
  IconLabel,
  ParticipantsInfo,
  TagBadgeList,
} from '@/components'
import { UploadIcon } from '@radix-ui/react-icons'
import locationIcon from '@/public/images/svgs/location.svg'
import calendarIcon from '@/public/images/svgs/calendar.svg'
import cardIcon from '@/public/images/svgs/card.svg'
import formatDate from '@/utils/formatDate'
import Link from 'next/link'
import useFavorite from '@/hooks/useFavorite'

interface ICrewGatheringInfoProps {
  id: number
  tags: string[]
  title: string
  location: string
  date: Date
  dues: number
  participantProfileImagesConfig: { imageUrl: string; fallback: string }[]
  participantsCurrentCount: number
  participantsMinCount: number
  participantsMaxCount: number
}

function CrewGatheringInfo({
  id,
  tags,
  title,
  location,
  date,
  dues,
  participantProfileImagesConfig,
  participantsCurrentCount,
  participantsMinCount,
  participantsMaxCount,
}: ICrewGatheringInfoProps) {
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(id)

  return (
    <div className="w-480pxr rounded-[0.625rem] bg-[#F9FAFC] px-24pxr pb-19pxr pt-20pxr">
      <div className="flex flex-col gap-24pxr border-b border-dashed border-[#C8C8C8] pb-28pxr">
        <div className="flex justify-between">
          <TagBadgeList tags={tags} />
          <div className="flex gap-8pxr">
            <FavoriteButton
              isFavoriteClicked={isFavoriteClicked}
              onFavoriteClick={handleFavoriteClick}
            />
            <button title="공유 버튼" type="button">
              <UploadIcon className="h-26pxr w-26pxr" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8pxr">
          <h2 className="font-headline-02">{title}</h2>
          <div className="flex flex-col gap-8pxr">
            <div className="flex gap-16pxr">
              <IconLabel src={locationIcon}>{location}</IconLabel>
              <IconLabel src={calendarIcon}>{formatDate(date)}</IconLabel>
            </div>
            <div>
              <IconLabel
                src={cardIcon}
              >{`${dues?.toLocaleString()}원`}</IconLabel>
            </div>
          </div>
          <div className="flex justify-end">
            <Link href="#">
              <button
                className="rounded-[1.25rem] bg-[#1E1F20] px-24pxr py-8pxr text-[#F9FAFC] transition-opacity duration-150 font-title-02 hover:opacity-90"
                type="button"
              >
                참가하기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ParticipantsInfo
        participantsCurrentCount={participantsCurrentCount}
        participantsMaxCount={participantsMaxCount}
        participantsMinCount={participantsMinCount}
        participantProfileImagesConfig={participantProfileImagesConfig}
      />
    </div>
  )
}

export default CrewGatheringInfo
