import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-gray-02 pb-34pxr pt-65pxr">
      <section className="relative mx-auto h-46pxr w-128pxr mb:h-32pxr mb:w-90pxr">
        <Image src="/images/svgs/logo.svg" alt="로고이미지" fill />
      </section>
      <section className="gap-56 mx-auto mt-80pxr flex w-474pxr flex-row justify-between text-gray-10 font-headline-02 mb:mt-40pxr mb:w-278pxr mb:font-body-02">
        <Link href="/socials">모집중</Link>
        <Link href="/socials?type=imminent">모집완료</Link>
        <Link href="/liked">찜한모임</Link>
        <Link href="/mypage">마이페이지</Link>
      </section>
      <section className="mx-auto mt-40pxr flex w-fit flex-row gap-6pxr text-gray-08 font-caption-03 mb:mt-16pxr">
        <p>서비스 소개</p>
        <p>|</p>
        <p>이용약관</p>
        <p>|</p>
        <p>개인정보 처리방침</p>
      </section>
      <section className="mx-auto mt-76pxr w-fit text-gray-08 font-caption-02 mb:mt-24pxr">
        Copyright (C) Brick All rights reserved.
      </section>
    </div>
  )
}

export default Footer
