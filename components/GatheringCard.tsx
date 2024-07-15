'use client'

import { Avatar } from '@radix-ui/themes'
import Image from 'next/image'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import TagBadgeList from './CustomBadge/TagBadgeList'
import CustomBadge from './CustomBadge/CustomBadge'

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
  return (
    <Link href={`/social/${data.id}`}>
      <button
        type="button"
        className="flex h-317pxr w-280pxr cursor-pointer flex-col gap-6pxr"
      >
        <section className="relative flex h-208pxr w-full items-center justify-center rounded-[.3125rem] bg-slate-100">
          {data?.img && (
            <Image
              src={data.img}
              alt="모임사진"
              fill
              style={{ objectFit: 'contain' }}
            />
          )}
          <CustomBadge
            type="primary"
            size="large"
            className="absolute left-16pxr top-16pxr"
          >
            모집 마감
          </CustomBadge>
        </section>
        <section className="flex h-22pxr flex-row gap-5pxr">
          <TagBadgeList tags={data.tags} />
        </section>
        <section className="flex flex-col gap-6pxr">
          <h4 className="font-title-04">{data.title}</h4>

          <p className="text-left font-body-01">{data.place}</p>

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
      </button>
    </Link>
  )
}

export default GatheringCard
