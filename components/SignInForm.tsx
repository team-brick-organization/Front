'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { emailPattern, passwordMinLength } from '@/constants/RegExr'
import Image from 'next/image'
import { Button } from '@radix-ui/themes'
import kakaoTalk from '@/public/images/svgs/kakaoTalk.svg'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import Link from 'next/link'
import Input from './Input'

export interface ILoginFormInputs {
  email: string
  password: string
}

function SignInForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({ mode: 'onChange' })

  const onSubmit = (data: ILoginFormInputs) => {
    console.log('로그인', data)
  }

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 pb-149pxr pt-20pxr">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-10pxr relative h-auto w-480pxr flex-col justify-start bg-gray-50 px-39pxr py-50pxr shadow-2xl"
      >
        <h1 className="leading-33.60pxr pb-47pxr pt-50pxr text-center text-22pxr font-bold text-zinc-900">
          로그인
        </h1>

        <div>
          <label
            htmlFor="email"
            className="text-sm w-402pxr font-semibold leading-snug text-zinc-900"
          >
            이메일
          </label>
          <Input
            size="3"
            id="email"
            register={register}
            hookFormId="email"
            hookFormRequire="이메일은 필수 입력입니다."
            hookFormPattern={emailPattern}
            type="email"
            placeholder="이메일을 입력해 주세요."
            className={`mb-8pxr mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
              errors.email ? '-mb-1pxr ring-1 ring-red-500' : ''
            }`}
            variant="soft"
            color="gray"
          />

          {errors.email && (
            <small className="-pt-10pxr text-red-500" role="alert">
              {errors.email.message}
            </small>
          )}

          <div>
            <label
              htmlFor="password"
              className="text-sm w-402pxr pt-24pxr font-semibold leading-snug text-zinc-900"
            >
              비밀번호
            </label>
            <div className="relative">
              <Input
                size="3"
                id="password"
                register={register}
                hookFormId="password"
                hookFormRequire="비밀번호는 필수 입력입니다."
                hookFormMinLength={passwordMinLength}
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해주세요."
                variant="soft"
                color="gray"
                className={`mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
                  errors.password ? 'ring-1 ring-red-500' : ''
                }`}
              />
              <button
                onClick={togglePasswordVisibility}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    togglePasswordVisibility()
                  }
                }}
                type="button"
                tabIndex={0}
                className="w-5 h-5 absolute right-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <Image
                  src={showPassword ? visibility : visibilityOff}
                  alt="비밀번호 켜고 꺼지게"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            {errors.password && (
              <small className="-pt-10pxr text-red-500" role="alert">
                {errors.password.message}
              </small>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="py-3.5 rounded-10pxr gap-2.5 text-sm mt-40pxr inline-flex h-50pxr w-402pxr cursor-pointer items-center justify-center bg-zinc-900 px-182pxr text-center font-semibold leading-snug text-gray-50"
        >
          로그인
        </Button>

        <div className="mt-16pxr flex justify-end">
          <Link
            href="hi"
            className="text-xs text-zinc-90 cursor-pointer font-medium leading-none"
          >
            비밀번호 찾기
          </Link>
        </div>

        <div className="gap-6 mt-45pxr inline-flex h-17pxr w-400pxr items-center justify-center">
          <div className="h-0pxr w-113pxr border border-zinc-200" />
          <div className="text-xs px-8pxr text-center font-medium leading-none text-zinc-200">
            또는
          </div>
          <div className="h-0pxr w-113pxr border border-zinc-200" />
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="button"
            className="mt-20pxr h-50pxr cursor-pointer rounded-2xl border bg-yellow-400 px-100pxr text-center text-black"
          >
            <Image src={kakaoTalk} alt="1" width={23} height={23} />
            카카오로 3초만에 시작하기
          </Button>
        </div>

        <div className="text-sm align-center mt-82pxr flex justify-center pb-50pxr text-center font-medium leading-tight text-neutral-400">
          아직 브릭 회원이 아닌가요?
          <Link href="/signup">
            <p className="text-sm cursor-pointer pl-9pxr font-medium leading-tight text-zinc-900 underline">
              회원가입
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
