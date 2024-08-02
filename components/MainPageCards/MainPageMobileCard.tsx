import Image from 'next/image'
import formatDate from '@/utils/formatDate'
import Link from 'next/link'
import convertToKoreanTime from '@/utils/convert-to-korean-time'
import { TagBadgeList } from '..'

interface MainPageMobileCardProps {
  data: IGetSocial
}
function MainPageMobileCard({ data }: MainPageMobileCardProps) {
  const formattedDate = formatDate(
    convertToKoreanTime(new Date(data.gatheringDate)),
  )

  return (
    <Link href={`/socials/${data.id}`}>
      <div className="flex h-235pxr w-full flex-col gap-4pxr rounded-[.625rem]">
        <section className="relative h-158pxr w-full pl-10pxr pt-10pxr transition-all duration-150 hover:scale-[1.03] hover:shadow-lg">
          <TagBadgeList tags={data.tags} />
          <Image
            src={data.thumbnail}
            alt="인기모임이미지"
            fill
            className="-z-10 rounded-[.625rem] object-cover"
          />
          <Image
            src="/images/svgs/subtract.svg"
            alt="이미지테두리"
            fill
            className="rounded-[.625rem]"
          />
        </section>
        <section className="flex flex-col gap-0pxr">
          <h1 className="text-gray-10 font-title-04">{data.name}</h1>

          <div className="flex flex-row gap-4pxr">
            <Image
              src="/images/svgs/location.svg"
              alt="위치SVG"
              width={15}
              height={15}
            />
            <div className="flex flex-row gap-8pxr">
              <p className="text-black font-body-01">
                {data.address.split(' ')[1]}
              </p>
              <p className="text-black font-body-01">|</p>
              <p className="text-black font-body-01">{formattedDate}</p>
            </div>
          </div>
        </section>
      </div>
    </Link>
  )
}

export default MainPageMobileCard
