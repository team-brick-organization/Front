'use client'

import { Avatar } from '@radix-ui/themes'
import Image from 'next/image'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import useFavorite from '@/hooks/useFavorite'
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

  return (
    <div className="relative w-fit overflow-hidden">
      <Link href={`/socials/${data.id}`}>
        <button
          type="button"
          className="relative flex h-310pxr w-280pxr cursor-pointer flex-col gap-8pxr mb:h-256pxr mb:w-212pxr tb:h-382pxr tb:w-376pxr"
        >
          <section className="relative flex h-208pxr w-full items-center justify-center rounded-[.3125rem] bg-slate-100 tb:h-280pxr">
            {data?.imageUrl && (
              <Image
                src={data.imageUrl}
                alt="모임사진"
                fill
                style={{ objectFit: 'contain' }}
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
          <div className="flex w-280pxr flex-col gap-4pxr mb:w-212pxr tb:w-376pxr">
            <section>
              <TagBadgeList tags={data.tags} />
            </section>
            <section className="flex flex-col gap-4pxr">
              <h4 className="truncate whitespace-nowrap text-left font-title-04">
                {data.socialName}
              </h4>
              <div className="flex flex-row gap-4pxr">
                <Image
                  src="/images/svgs/location.svg"
                  alt="위치SVG"
                  width={15}
                  height={15}
                />
                <p className="truncate whitespace-nowrap text-left font-body-01">
                  {formattedAddress}
                </p>
              </div>

              <div className="flex flex-row gap-16pxr">
                <div className="font-Title-04 flex flex-row items-center gap-4pxr">
                  <Avatar
                    size="1"
                    className="h-20pxr w-20pxr"
                    src={data.owner.profileImageUrl}
                    radius="full"
                    fallback={data.owner.name?.charAt(0)}
                  />
                  <p className="font-caption-03">{data.owner.name}</p>
                </div>

                <div className="flex flex-row items-center gap-4pxr">
                  <PersonIcon width={20} height={20} />
                  <p className="font-caption-03">{`${data.participantCount.currentPeople}/${data.participantCount.maxPeople}`}</p>
                </div>
              </div>
            </section>
          </div>
        </button>
      </Link>
      {isClickableFavorite && (
        <div className="absolute right-16pxr top-16pxr tb:right-24pxr tb:top-24pxr">
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
