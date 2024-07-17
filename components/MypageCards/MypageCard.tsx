'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@radix-ui/themes'
import formatDate from '@/utils/formatDate'
import useFavorite from '@/hooks/useFavorite'
import { PersonIcon } from '@radix-ui/react-icons'
import TagBadgeList from '../CustomBadge/TagBadgeList'
import ParticipantsInfo from '../ParticipantsInfo'
import CustomBadge from '../CustomBadge/CustomBadge'
import NestingAvatar from '../NestingAvatar'
import FavoriteButton from '../FavoriteButton'

interface ParticipantCount {
  minPeople: number
  maxPeople: number
  currentPeople: number
}
interface Participant {
  userName: string
  userProfileImg: string
}

interface Owner {
  name: string
  profileImageUrl: string
}

export interface Social {
  id: number
  type: 'social'
  socialName: string
  gatheringDate: string
  joinedAt: string
  address: string
  participantCount: ParticipantCount
  participant: Participant[]
  imageUrl: string
  tags: string[]
  owner: Owner
}

interface MypageCardProps {
  data: Social
}

/**
 * 마이 페이지 카드컴포넌트
 * @param data 데이터 배열
 */

function MypageCard({ data }: MypageCardProps) {
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(data.id)

  const isClosed =
    new Date(data.gatheringDate) < new Date() ||
    data.participantCount.currentPeople === data.participantCount.maxPeople

  const isClickableFavorite =
    new Date(data.gatheringDate) > new Date() || isFavoriteClicked

  const url = `/social/${data.id}`
  const participantProfileImagesConfig = data.participant.map((item) => ({
    imageUrl: item.userProfileImg,
    fallback: item.userName,
  }))

  const formatedDate = formatDate(new Date(data.gatheringDate))

  return (
    <div className="relative w-fit">
      <div className="flex h-208pxr w-full min-w-768pxr max-w-780pxr flex-row gap-20pxr mb:h-260pxr mb:w-212pxr mb:min-w-0pxr mb:max-w-1920pxr mb:flex-col mb:gap-8pxr">
        <section className="relative h-full w-280pxr shrink-0 rounded-[.3125rem] bg-gray-01 mb:h-158pxr mb:w-full">
          <Link href={url} className="h-fit w-fit">
            <Image
              src={data.imageUrl}
              alt="카드이미지"
              fill
              style={{ objectFit: 'contain' }}
            />
            {/* 회의때 정해서 값넣어주기(false 대신) */}
            {false && (
              <CustomBadge
                type="primary"
                size="large"
                className="absolute left-16pxr top-16pxr"
              >
                마감 임박
              </CustomBadge>
            )}
            {isClosed && (
              <>
                <div className="absolute h-full w-full rounded-[.3125rem] bg-black opacity-30" />
                <CustomBadge
                  type="primary"
                  size="large"
                  className="absolute left-16pxr top-16pxr"
                >
                  모집 마감
                </CustomBadge>
              </>
            )}
          </Link>
          {isClickableFavorite && (
            <div className="absolute right-16pxr top-16pxr mb:right-16pxr mb:top-16pxr">
              <FavoriteButton
                isFavoriteClicked={isFavoriteClicked}
                onFavoriteClick={handleFavoriteClick}
              />
            </div>
          )}
        </section>
        <div className="flex w-full max-w-500pxr flex-col justify-between gap-10pxr">
          <section className="flex w-full flex-col gap-4pxr">
            <TagBadgeList tags={data.tags} />
            <Link href={url} className="h-fit w-fit">
              <h4 className="text-left text-gray-10 font-title-04">
                {data.socialName}
              </h4>
            </Link>
            <div className="flex flex-row gap-4pxr">
              <Image
                src="/images/svgs/location.svg"
                alt="위치SVG"
                width={15}
                height={15}
              />
              <p className="text-nowrap text-left text-gray-08 font-body-01">
                {data.address} | {formatedDate}
              </p>
            </div>
            <div className="flex flex-row gap-8pxr">
              <div className="flex flex-row gap-4pxr">
                <Avatar
                  size="1"
                  className="h-20pxr w-20pxr"
                  src={data.owner.profileImageUrl}
                  radius="full"
                  fallback={data.owner.name.charAt(0)}
                />
                <p className="text-gray-06 font-caption-03">
                  {data.owner.name}
                </p>
              </div>
              <div className="hidden flex-row items-center gap-4pxr mb:flex">
                <PersonIcon width={20} height={20} />
                <p className="text-gray-06 font-caption-03">
                  {`${data.participantCount.currentPeople}/${data.participantCount.maxPeople}`}
                </p>
              </div>
            </div>
          </section>
          <div className="mb:hidden">
            {new Date(data.gatheringDate) < new Date() ? (
              <div className="flex flex-col gap-8pxr">
                <p className="text-left text-gray-10 font-body-01">
                  같이 함께 한 친구
                </p>
                <span className="flex flex-row items-center gap-0pxr">
                  <NestingAvatar
                    config={participantProfileImagesConfig}
                    displayLimit={3}
                    showRemainingPeople={false}
                  />
                  <p className="text-gray-08 font-caption-02">
                    {data.participant[0].userName} 외{' '}
                    {data.participantCount.currentPeople}명과 함께 했습니다.
                  </p>
                </span>
              </div>
            ) : (
              <div className="max-w-480pxr">
                <ParticipantsInfo
                  participantsCurrentCount={data.participantCount.currentPeople}
                  participantsMaxCount={data.participantCount.maxPeople}
                  participantsMinCount={data.participantCount.minPeople}
                  participantProfileImagesConfig={
                    participantProfileImagesConfig
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MypageCard
