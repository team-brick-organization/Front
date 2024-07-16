'use client'

import { useState, useEffect } from 'react'
import { Avatar } from '@radix-ui/themes'
import Image from 'next/image'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import TagBadgeList from './CustomBadge/TagBadgeList'
import CustomBadge from './CustomBadge/CustomBadge'
import FavoriteButton from './FavoriteButton'

interface Data {
  id: number
  userName: string
  userProfileImg: string
  img: string
  tags: string[]
  title: string
  place: string
  liked: boolean
  current: number
  max: number
}

type GatheringCardProps = {
  data: Data
}

/**
 * 카드리스트에 들어가는 카드 컴포넌트
 * @param data 카드에 들어갈 데이터
 * @todo 나중에 데이터값들어오는거 수정 및 타입수정, 라우터 연결
 */

function GatheringCard({ data }: GatheringCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    const favoriteSocials = localStorage.getItem('favoriteSocials')

    if (isFavorite) {
      if (favoriteSocials) {
        const filteredIds = JSON.parse(favoriteSocials).filter(
          (id: number) => id !== data.id,
        )
        localStorage.setItem('favoriteSocials', JSON.stringify(filteredIds))
        setIsFavorite(false)
      }
    } else {
      if (favoriteSocials) {
        const favoriteIds = JSON.parse(favoriteSocials)
        favoriteIds.push(data.id)
        localStorage.setItem(
          'favoriteSocials',
          JSON.stringify(favoriteIds.sort()),
        )
      }
      setIsFavorite(true)
    }
  }

  useEffect(() => {
    const favoriteSocials = localStorage.getItem('favoriteSocials')

    if (favoriteSocials) {
      const localData = JSON.parse(favoriteSocials)
      const favorite = localData.includes(data.id)
      setIsFavorite(favorite)
    } else {
      localStorage.setItem('favoriteSocials', JSON.stringify([]))
      setIsFavorite(false)
    }
  }, [data.id])

  return (
    <div className="relative w-fit">
      <Link href={`/social/${data.id}`}>
        <button
          type="button"
          className="relative flex h-310pxr w-280pxr cursor-pointer flex-col gap-8pxr mb:h-256pxr mb:w-212pxr tb:h-382pxr tb:w-376pxr"
        >
          <section className="relative flex h-208pxr w-full items-center justify-center rounded-[.3125rem] bg-slate-100 tb:h-280pxr">
            {data?.img && (
              <Image
                src={data.img}
                alt="모임사진"
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
            {data.current === data.max && (
              <CustomBadge
                type="primary"
                size="large"
                className="absolute left-16pxr top-16pxr tb:left-24pxr tb:top-24pxr"
              >
                모집 마감
              </CustomBadge>
            )}
          </section>
          <div className="flex flex-col gap-4pxr">
            <section>
              <TagBadgeList tags={data.tags} />
            </section>
            <section className="flex flex-col gap-4pxr">
              <h4 className="text-left font-title-04">{data.title}</h4>
              <div className="flex flex-row gap-4pxr">
                <Image
                  src="/images/svgs/location.svg"
                  alt="위치SVG"
                  width={15}
                  height={15}
                />
                <p className="text-left font-body-01">{data.place}</p>
              </div>

              <div className="flex flex-row gap-16pxr">
                <div className="font-Title-04 flex flex-row items-center gap-4pxr">
                  <Avatar
                    size="1"
                    className="h-20pxr w-20pxr"
                    src={data.userProfileImg}
                    radius="full"
                    fallback={data.userName?.charAt(0)}
                  />
                  <p className="font-caption-03">{data.userName}</p>
                </div>

                <div className="flex flex-row items-center gap-4pxr">
                  <PersonIcon width={20} height={20} />
                  <p className="font-caption-03">{`${data.current}/${data.max}`}</p>
                </div>
              </div>
            </section>
          </div>
        </button>
      </Link>
      <div className="absolute right-16pxr top-16pxr tb:right-24pxr tb:top-24pxr">
        <FavoriteButton
          isFavoriteClicked={isFavorite}
          onFavoriteClick={handleFavoriteClick}
        />
      </div>
    </div>
  )
}

export default GatheringCard
