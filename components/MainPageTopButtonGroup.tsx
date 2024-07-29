import Image from 'next/image'
import Link from 'next/link'

function MainPageTopButtonGroup() {
  return (
    <div className="mx-auto flex w-fit max-w-1180pxr flex-row gap-16pxr px-20pxr max599:hidden">
      <Link href="/socials" className="relative">
        <Image
          src="/images/svgs/main_socialsButton.svg"
          alt="모집중"
          width={1920}
          height={160}
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <Link href="/socials" className="relative">
        <Image
          src="/images/svgs/main_imminent.svg"
          alt="모집마감"
          width={1920}
          height={160}
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <Link href="/socials" className="relative">
        <Image
          src="/images/svgs/main_likedButton.svg"
          alt="찜한모임"
          width={1920}
          height={160}
          style={{ objectFit: 'cover' }}
        />
      </Link>
    </div>
  )
}

export default MainPageTopButtonGroup
