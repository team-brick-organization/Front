import Image from 'next/image'
import formatDate from '@/utils/formatDate'
import Link from 'next/link'
import { Social } from '../MypageCards/MypageCard'
import { TagBadgeList } from '..'

interface MainPageCardProps {
  data: Social
}

function MainPageCard({ data }: MainPageCardProps) {
  const formattedDate = formatDate(new Date(data.gatheringDate))
  const formattedAddress = data.address.split(' ')[1]

  return (
    <Link href={`/socials/${data.id}`}>
      <div className="relative h-282pxr w-full rounded-[.625rem] p-30pxr">
        <div className="flex h-full flex-col justify-between">
          <section>
            <TagBadgeList tags={data.tags} />
          </section>
          <section className="flex flex-col gap-4pxr">
            <h1 className="text-white font-headline-03">{data.socialName}</h1>
            <div className="flex flex-row gap-4pxr">
              <Image
                src="/images/svgs/locationWhite.svg"
                alt="위치SVG"
                width={15}
                height={15}
              />
              <div className="flex flex-row gap-8pxr">
                <p className="text-gray-02 font-body-01">{formattedAddress}</p>
                <p className="text-gray-02 font-body-01">|</p>
                <p className="text-gray-02 font-body-01">{formattedDate}</p>
              </div>
            </div>
          </section>
          <Image
            alt="인기모임배경이미지"
            src={data.imageUrl}
            fill
            style={{ objectFit: 'cover' }}
            className="-z-10 rounded-[.625rem]"
          />
        </div>
      </div>
    </Link>
  )
}

export default MainPageCard
