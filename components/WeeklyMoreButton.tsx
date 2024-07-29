import Image from 'next/image'
import Link from 'next/link'

function WeeklyMoreButton() {
  return (
    <Link href="/socials">
      <div className="relative flex h-235pxr w-full flex-col items-end justify-between overflow-hidden rounded-[.3125rem] border border-gray-04 bg-gray-01 py-24pxr">
        <p className="pr-16pxr text-right text-gray-08 font-body-02">더보기</p>
        <h1 className="relative w-fit pr-7pxr text-right text-gray-10 font-headline-03">
          이번주 인기 모임
          <div className="absolute -left-10pxr -top-32pxr h-63pxr w-60pxr">
            <Image
              src="/images/svgs/curlyArrow.svg"
              alt="꼬불화살표"
              width={60}
              height={63}
            />
          </div>
        </h1>
        <div className="absolute -left-100pxr -top-100pxr h-293pxr w-242pxr opacity-20">
          <Image
            src="/images/svgs/spark.svg"
            alt="불꽃모양"
            width={242}
            height={293}
          />
        </div>
      </div>
    </Link>
  )
}

export default WeeklyMoreButton
