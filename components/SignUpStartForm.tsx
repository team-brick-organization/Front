'use client'

import Image from 'next/image'
import { Button } from '@radix-ui/themes'
import kakaoTalk from '@/public/images/svgs/kakaoTalk.svg'
import useWindowWidth from '@/hooks/useWindowWidth'
import Link from 'next/link'

function SignUpStartForm() {
  const windowWidth = useWindowWidth()

  const kakaoButtonText =
    windowWidth && windowWidth <= 400
      ? '카카오로 시작하기'
      : '카카오로 3초만에 시작하기'
  return (
    <div className="relative flex w-full max-w-480pxr flex-col items-center rounded-[.625rem] bg-gray-01 px-39pxr py-50pxr pt-139pxr mb:px-19pxr">
      <div className="w-156pxr text-center">
        <h1 className="text-22pxr text-gray-10 font-headline-03">반가워요!</h1>
        <p className="mt-16pxr text-gray-06 font-body-02">
          브릭을 통해서 어쩌고 해봐요 이렇게 해보세요
        </p>
      </div>
      <div className="mt-96pxr flex items-center justify-center">
        <Button
          type="button"
          className="h-full w-fit cursor-pointer gap-8pxr rounded-full border bg-[#FEE500] px-70pxr py-12pxr text-center text-gray-10 font-title-02 mb:px-60pxr"
        >
          <Image src={kakaoTalk} alt="1" width={24} height={22} />
          {kakaoButtonText}
        </Button>
      </div>

      <div className="mt-45pxr flex w-full max-w-400pxr items-center justify-center gap-24pxr">
        <div className="h-1pxr w-full max-w-126pxr bg-gray-04" />
        <div className="text-nowrap px-8pxr text-center text-gray-04 font-caption-03">
          또는
        </div>
        <div className="h-1pxr w-full max-w-126pxr bg-gray-04" />
      </div>

      <Link className="mt-20pxr w-full" href="/signup/email">
        <Button
          type="submit"
          className="h-50pxr w-full max-w-402pxr cursor-pointer rounded-[0.625rem] bg-gray-10 text-gray-01 font-title-04"
        >
          이메일로 시작하기
        </Button>
      </Link>

      <div className="mt-82pxr text-center text-gray-06 font-body-02">
        이미 회원이신가요?
        <Link href="/signin">
          <span className="pl-8pxr text-gray-10 underline underline-offset-2 mb:w-full">
            로그인
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SignUpStartForm
