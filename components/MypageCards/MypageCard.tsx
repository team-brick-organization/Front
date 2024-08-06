'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@radix-ui/themes'
import formatDate from '@/utils/formatDate'
import useFavorite from '@/hooks/useFavorite'
import { PersonIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import getSocialDetail from '@/apis/getSocialDetail'
import getEventStatus from '@/utils/getEventStatus'
import TagBadgeList from '../CustomBadge/TagBadgeList'
import ParticipantsInfo from '../ParticipantsInfo'
import CustomBadge from '../CustomBadge/CustomBadge'
import NestingAvatar from '../NestingAvatar'
import FavoriteButton from '../FavoriteButton'

interface MypageCardProps {
  data: MyPageSocial
}

/**
 * 마이 페이지 카드컴포넌트
 * @param data 데이터 배열
 */

function MypageCard({ data }: MypageCardProps) {
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(data.id)
  const [participantsData, setParticipantsData] = useState<IParticipants[]>([])
  const badgeText = getEventStatus(
    data.gatheringDate,
    data.participantCount.current,
    data.participantCount.max,
    data.canceled,
  )

  const isClickableFavorite =
    isFavoriteClicked || (!data.canceled && badgeText !== '모집 마감')

  const url = `/socials/${data.id}`

  const formattedDate = formatDate(new Date(data.gatheringDate))
  const formattedAddress = data.address.split(' ')[1]

  useEffect(() => {
    const socialId = data.id
    const getSocialDetailData = async () => {
      try {
        const res = await getSocialDetail(socialId)
        if (!res.ok) {
          throw new Error('소셜 불러오기에 실패했어요.')
        }
        const jsonfied = await res.json()
        setParticipantsData(jsonfied.participants)
      } catch (e) {
        console.error(e)
      }
    }
    getSocialDetailData()
  }, [data])

  return (
    <div className="card group relative">
      <div className="mb:max-w-1920pxr flex h-208pxr w-full min-w-540pxr max-w-780pxr flex-row gap-20pxr mb:h-260pxr mb:w-212pxr mb:min-w-0pxr mb:flex-col mb:gap-8pxr">
        <section className="relative h-full w-280pxr shrink-0 overflow-hidden rounded-[.3125rem] bg-gray-01 mb:h-158pxr mb:w-full">
          <Link href={url} className="h-fit w-fit">
            <Image
              src={data.thumbnail}
              alt="카드이미지"
              fill
              className="rounded-[.3125rem] object-cover transition-all duration-200 group-[.card]:group-hover:scale-110 group-[.card]:group-hover:shadow-lg"
            />
            {badgeText && (
              <>
                {badgeText !== '마감 임박' && (
                  <div className="absolute h-full w-full rounded-[.3125rem] bg-black opacity-30" />
                )}
                <CustomBadge
                  type="primary"
                  size="large"
                  className="absolute left-16pxr top-16pxr"
                >
                  {badgeText}
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
                {data.name}
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
                {formattedAddress} | {formattedDate}
              </p>
            </div>
            <div className="flex flex-row gap-8pxr">
              <div className="flex flex-row gap-4pxr">
                <Avatar
                  size="1"
                  className="h-20pxr w-20pxr"
                  src={data.owner.profileUrl}
                  radius="full"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
                      <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
                    </div>
                  }
                />
                <p className="text-gray-06 font-caption-03">
                  {data.owner.name}
                </p>
              </div>
              <div className="hidden flex-row items-center gap-4pxr mb:flex">
                <PersonIcon width={20} height={20} />
                <p className="text-gray-06 font-caption-03">
                  {`${data.participantCount.current}/${data.participantCount.max}`}
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
                    config={participantsData}
                    displayLimit={3}
                    showRemainingPeople={false}
                  />
                  <p className="text-gray-08 font-caption-02">
                    {
                      [
                        {
                          id: 1,
                          name: '김아무개',
                          profileUrl: '',
                          role: 'OWNER',
                          description: '',
                        },
                      ][0].name
                    }{' '}
                    외{' '}
                    {data.participantCount.current !== 0
                      ? data.participantCount.current - 1
                      : 0}
                    명과 함께 했습니다.
                  </p>
                </span>
              </div>
            ) : (
              <div className="max-w-480pxr">
                <ParticipantsInfo
                  participantsCurrentCount={data.participantCount.current}
                  participantsMaxCount={data.participantCount.max}
                  participantsMinCount={data.participantCount.min}
                  participants={[
                    {
                      id: 1,
                      name: '김아무개',
                      profileUrl: '',
                      role: 'OWNER',
                      description: '',
                    },
                  ]}
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
