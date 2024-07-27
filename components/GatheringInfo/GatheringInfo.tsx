'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */

import {
  FavoriteButton,
  IconLabel,
  KakaoShareModal,
  ParticipantsInfo,
  Portal,
  TagBadgeList,
} from '@/components'
import { Share2Icon } from '@radix-ui/react-icons'
import locationIcon from '@/public/images/svgs/location.svg'
import calendarIcon from '@/public/images/svgs/calendar.svg'
import cardIcon from '@/public/images/svgs/card.svg'
import formatDate from '@/utils/formatDate'
import useFavorite from '@/hooks/useFavorite'
import usePortal from '@/hooks/usePortal'

interface IGatheringInfoProps {
  id: number
  tags: string[]
  title: string
  location: string
  date: string
  dues: number
  participantProfileImagesConfig: { imageUrl: string; fallback: string }[]
  participantsCurrentCount: number
  participantsMinCount: number
  participantsMaxCount: number
}

function GatheringInfo({
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
}: IGatheringInfoProps) {
  const { handleOutsideClick, isPortalOpen, setIsPortalOpen, portalRef } =
    usePortal()
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(id)

  return (
    <div className="h-346pxr w-full max-w-480pxr rounded-[0.3125rem] bg-gray-01 p-24pxr shadow-[0rem_0.25rem_0.625rem_0rem_rgba(0,0,0,0.15)] mb:px-16pxr mb:py-24pxr tb:px-16pxr tb:py-24pxr max759Min480:max-w-full">
      <div className="mb-40pxr flex flex-col gap-14pxr border-b border-dashed border-[#C8C8C8] pb-40pxr">
        <div className="flex justify-between">
          <TagBadgeList tags={tags} />
          <div className="flex gap-8pxr">
            <FavoriteButton
              isFavoriteClicked={isFavoriteClicked}
              onFavoriteClick={handleFavoriteClick}
            />
            <button
              title="공유 버튼"
              type="button"
              onClick={() => setIsPortalOpen(true)}
            >
              <Share2Icon className="h-24pxr w-24pxr" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-16pxr">
          <h2 className="text-gray-10 font-headline-02">{title}</h2>
          <div className="flex flex-col gap-8pxr">
            <div className="flex flex-col gap-8pxr">
              <IconLabel src={locationIcon}>{location}</IconLabel>
              <IconLabel src={calendarIcon}>
                {formatDate(new Date(date))}
              </IconLabel>
              <IconLabel
                src={cardIcon}
              >{`${dues?.toLocaleString()}원`}</IconLabel>
            </div>
          </div>
        </div>
      </div>
      <ParticipantsInfo
        participantsCurrentCount={participantsCurrentCount}
        participantsMaxCount={participantsMaxCount}
        participantsMinCount={participantsMinCount}
        participantProfileImagesConfig={participantProfileImagesConfig}
      />
      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
      >
        <KakaoShareModal
          onClose={() => {
            setIsPortalOpen(false)
          }}
        />
      </Portal>
    </div>
  )
}

export default GatheringInfo
