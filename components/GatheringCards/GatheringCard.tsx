'use client'

import { Avatar } from '@radix-ui/themes'
import Image from 'next/image'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import useFavorite from '@/hooks/useFavorite'
import formatDate from '@/utils/formatDate'
import TagBadgeList from '../CustomBadge/TagBadgeList'
import CustomBadge from '../CustomBadge/CustomBadge'
import FavoriteButton from '../FavoriteButton'
import { Social } from '../MypageCards/MypageCard'

type GatheringCardProps = {
  data: Social
}

/**
 * 카드리스트에 들어가는 카드 컴포넌트
 * @param data 카드에 들어갈 데이터
 * @todo 나중에 데이터값들어오는거 수정 및 타입수정, 라우터 연결
 */

function GatheringCard({ data }: GatheringCardProps) {
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite(data.id)

  const isClosed =
    new Date(data.gatheringDate) < new Date() ||
    data.participantCount.currentPeople === data.participantCount.maxPeople

  const isClickableFavorite =
    new Date(data.gatheringDate) > new Date() || isFavoriteClicked

  const formattedAddress = data.address.split(' ')[1]

  const formattedDate = formatDate(new Date(data.gatheringDate))

  return (
    <div className="card group relative w-full">
      <Link href={`/socials/${data.id}`}>
        <button
          type="button"
          className="relative flex h-full w-full cursor-pointer flex-col gap-8pxr"
        >
          <section className="relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-[.3125rem] bg-slate-100">
            {data?.imageUrl && (
              <Image
                src={data.imageUrl}
                alt="모임사진"
                className="object-cover transition-transform duration-200 group-[.card]:group-hover:scale-110"
                width={320}
                height={248}
              />
            )}
            {/* 회의때 정해서 값넣어주기(false 대신) */}
            {false && (
              <CustomBadge
                type="primary"
                size="large"
                className="absolute left-16pxr top-16pxr tb:left-24pxr tb:top-24pxr"
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
                  className="absolute left-16pxr top-16pxr tb:left-24pxr tb:top-24pxr"
                >
                  모집 마감
                </CustomBadge>
              </>
            )}
          </section>
          <div className="flex w-full flex-col gap-4pxr">
            <section className="text-start">
              <TagBadgeList tags={data.tags} />
            </section>
            <section className="flex flex-col gap-4pxr">
              <h4 className="truncate whitespace-nowrap text-left text-gray-10 font-title-04">
                {data.socialName}
              </h4>
              <div className="flex items-center gap-8pxr">
                <div className="flex flex-row gap-4pxr">
                  <Image
                    src="/images/svgs/location.svg"
                    alt="위치SVG"
                    width={15}
                    height={15}
                  />
                  <p className="truncate whitespace-nowrap text-left text-gray-08 font-body-01">
                    {formattedAddress}
                  </p>
                </div>
                <div className="h-11pxr w-1pxr bg-gray-08" />
                <p className="text-gray-08 font-body-01">{formattedDate}</p>
              </div>

              <div className="flex flex-row gap-8pxr">
                <div className="flex flex-row items-center gap-4pxr">
                  <Avatar
                    size="1"
                    className="h-20pxr w-20pxr bg-gray-04"
                    src={data.owner.profileImageUrl}
                    radius="full"
                    fallback={
                      <div className="flex h-20pxr w-20pxr items-center justify-center rounded-full bg-gray-04 text-gray-10">
                        <PersonIcon
                          className="text-gray-06"
                          width={11}
                          height={11}
                        />
                      </div>
                    }
                  />
                  <p className="text-gray-06 font-caption-03">
                    {data.owner.name}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-4pxr">
                  <PersonIcon className="text-gray-06" width={17} height={17} />
                  <p className="text-gray-06 font-caption-03">{`${data.participantCount.currentPeople}/${data.participantCount.maxPeople}`}</p>
                </div>
              </div>
            </section>
          </div>
        </button>
      </Link>
      {isClickableFavorite && (
        <div className="absolute right-16pxr top-16pxr">
          <FavoriteButton
            isFavoriteClicked={isFavoriteClicked}
            onFavoriteClick={handleFavoriteClick}
          />
        </div>
      )}
    </div>
  )
}

export default GatheringCard
