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
import locationIcon from '@/public/images/svgs/locationSocialDetail.svg'
import calendarIcon from '@/public/images/svgs/calendar.svg'
import cardIcon from '@/public/images/svgs/card.svg'
import formatDate from '@/utils/formatDate'
import useFavorite from '@/hooks/useFavorite'
import usePortal from '@/hooks/usePortal'
import { useParams } from 'next/navigation'
import useSocialDetailStore from '@/stores/useSocialDetailStore'

function GatheringInfo() {
  const { handleOutsideClick, isPortalOpen, setIsPortalOpen, portalRef } =
    usePortal()
  const { socialDetailData } = useSocialDetailStore()
  const params = useParams()
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(
    Number(params.id),
  )

  return (
    <div className="min-h-346pxr w-full max-w-480pxr rounded-[0.3125rem] bg-gray-01 p-24pxr shadow-[0rem_0.25rem_0.625rem_0rem_rgba(0,0,0,0.15)] mb:px-16pxr mb:py-24pxr tb:px-16pxr tb:py-24pxr max759Min480:max-w-full">
      <div className="mb-40pxr flex flex-col gap-14pxr border-b border-dashed border-[#C8C8C8] pb-40pxr">
        <div className="flex justify-between">
          <TagBadgeList tags={socialDetailData.tags} />
          <div className="flex gap-8pxr">
            <FavoriteButton
              isFavoriteClicked={isFavoriteClicked}
              onFavoriteClick={handleFavoriteClick}
              isSocialDetail
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
          <h2 className="text-gray-10 font-headline-02">
            {socialDetailData.name}
          </h2>
          <div className="flex flex-col gap-8pxr">
            <div className="flex flex-col gap-8pxr">
              <IconLabel src={locationIcon}>
                {socialDetailData.introduction.place.address}
              </IconLabel>
              <IconLabel src={calendarIcon}>
                {formatDate(new Date(socialDetailData.gatheringDate))}
              </IconLabel>
              <IconLabel
                src={cardIcon}
              >{`${socialDetailData.dues?.toLocaleString()}원`}</IconLabel>
            </div>
          </div>
        </div>
      </div>
      <ParticipantsInfo
        participantsCurrentCount={socialDetailData.participantCount.current}
        participantsMaxCount={socialDetailData.participantCount.max}
        participantsMinCount={socialDetailData.participantCount.min}
        participants={socialDetailData.participants}
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
