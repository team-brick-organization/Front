'use client'

import Image from 'next/image'
import { Button } from '@radix-ui/themes'
import kakaoTalk from '@/public/images/svgs/kakaoTalk.svg'
import Link from 'next/link'

function SignUpStart() {
  return (
    <div className="gap flex h-full w-full items-center justify-center bg-gray-100 py-20pxr">
      <div className="rounded-10pxr relative h-auto w-480pxr flex-col items-start justify-start bg-gray-50 px-39pxr py-50pxr shadow-2xl">
        <div className="w-full pb-47pxr pt-50pxr text-center">
          <h1
            className="text-2xl mb-6 font-bold text-zinc-900"
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.2',
              marginBottom: '1.6rem',
            }}
          >
            반가워요!
          </h1>
          <p className="text-sm font-medium text-neutral-400">
            브릭을 통해서 어쩌고 해봐요 이렇게 해보세요
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="button"
            className="px-4 mt-96pxr h-50pxr w-full cursor-pointer rounded-2xl border bg-yellow-400 text-center text-black"
          >
            <Image src={kakaoTalk} alt="1" width={23} height={23} />
            카카오로 3초만에 가입하기
          </Button>
        </div>

        <div className="gap-6 mt-96pxr inline-flex h-17pxr w-400pxr items-center justify-center">
          <div className="h-0pxr w-113pxr border border-zinc-200" />
          <div className="text-xs px-8pxr text-center font-medium leading-none text-zinc-200">
            또는
          </div>
          <div className="h-0pxr w-113pxr border border-zinc-200" />
        </div>

        <Link href="/signup/email">
          <Button
            type="submit"
            className="py-3.5 rounded-10pxr text-sm mt-40pxr inline-flex h-50pxr w-402pxr w-full cursor-pointer items-center justify-center bg-zinc-900 text-center font-semibold leading-snug text-gray-50"
          >
            이메일로 시작하기
          </Button>
        </Link>

        <div className="text-sm align-center mt-82pxr flex justify-center pb-50pxr text-center font-medium leading-tight text-neutral-400">
          이미 회원이신가요?
          <Link href="/signin">
            <p className="text-sm cursor-pointer pl-9pxr font-medium leading-tight text-zinc-900 underline">
              로그인
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpStart
