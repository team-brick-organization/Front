'use client'

import Image from 'next/image'
import { Button } from '@radix-ui/themes'
import kakaoTalk from '@/public/images/svgs/kakaoTalk.svg'
import Link from 'next/link'

function SignUpStart() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100 pb-149pxr pt-20pxr">
      <div className="rounded-10pxr relative h-auto w-480pxr flex-col items-start justify-start bg-gray-50 px-39pxr py-50pxr shadow-2xl">
        <div className="w-full pb-47pxr pt-50pxr text-center">
          <h1 className="text-22pxr text-[#1E1F20] font-headline-03">
            반가워요!
          </h1>
          <p className="text-[#9A9B9D] font-body-02">
            브릭을 통해서 어쩌고 해봐요 이렇게 해보세요
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="button"
            className="px-4 mt-96pxr h-50pxr w-full cursor-pointer rounded-2xl border bg-yellow-400 text-center text-[#000] font-title-02"
          >
            <Image src={kakaoTalk} alt="1" width={23} height={23} />
            카카오로 3초만에 가입하기
          </Button>
        </div>

        <div className="gap-6 mt-96pxr inline-flex h-17pxr w-400pxr items-center justify-center">
          <div className="h-0pxr w-113pxr border border-[#DDDEE0]" />
          <div className="px-8pxr text-center text-[#DDDEE0] font-caption-02">
            또는
          </div>
          <div className="h-0pxr w-113pxr border border-[#DDDEE0]" />
        </div>

        <Link href="/signup/email">
          <Button
            type="submit"
            className="py-3.5 rounded-10pxr mt-40pxr inline-flex h-50pxr w-402pxr cursor-pointer items-center justify-center bg-[#1E1F20] text-center text-[#F9FAFC] font-title-02"
          >
            이메일로 시작하기
          </Button>
        </Link>

        <div className="align-center mt-82pxr flex justify-center pb-50pxr text-center text-[#DDDEE0] font-body-02">
          이미 회원이신가요?
          <Link href="/signin">
            <p className="cursor-pointer pl-9pxr text-[#1E1F20] underline">
              로그인
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpStart
