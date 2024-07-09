'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import {
  emailPattern,
  namePattern,
  passwordMinLength,
} from '@/constants/RegExr'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import Input from './Input'

export interface ISignUpFormInputs {
  name: string
  email: string
  password: string
  passwordCheck: string
}

function SignUpEmail(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ISignUpFormInputs>({ mode: 'onChange' })

  const password = watch('password')

  const onSubmit = (data: ISignUpFormInputs) => {
    console.log('회원가입', data)
  }

  const passwordCheckValidate = (value: string) => {
    if (value !== password) {
      return '비밀번호가 일치하지 않습니다.'
    }
    return true
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 py-20pxr">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-10pxr relative h-auto w-480pxr flex-col justify-start bg-gray-50 px-39pxr py-50pxr shadow-2xl"
      >
        <h1 className="leading-33.60pxr pb-47pxr pt-50pxr text-center text-22pxr font-bold text-zinc-900">
          이메일로 가입하기
        </h1>

        <div>
          <div className="mb-24pxr">
            <label
              htmlFor="name"
              className="text-sm w-402pxr font-semibold leading-snug text-zinc-900"
            >
              이름
            </label>
            <Input
              size="3"
              id="name"
              register={register}
              hookFormId="name"
              hookFormRequire="이름은 필수 입력입니다."
              hookFormPattern={namePattern}
              type="text"
              placeholder="이름을 입력해 주세요."
              className={`mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
                errors.name ? 'ring-1 ring-red-500' : ''
              }`}
              variant="soft"
              color="gray"
            />

            {errors.name && (
              <small className="-pt-10pxr text-red-500" role="alert">
                {errors.name.message}
              </small>
            )}
          </div>

          <div className="mb-24pxr">
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
              className={`mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
                errors.email ? 'ring-1 ring-red-500' : ''
              }`}
              variant="soft"
              color="gray"
            />

            {errors.email && (
              <small className="-pt-10pxr text-red-500" role="alert">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="mb-24pxr">
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
                type="password"
                placeholder="비밀번호를 입력해주세요."
                variant="soft"
                color="gray"
                className={`mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
                  errors.password ? 'ring-1 ring-red-500' : ''
                }`}
              />
            </div>
            {errors.password && (
              <small className="-pt-10pxr text-red-500" role="alert">
                {errors.password.message}
              </small>
            )}
          </div>
          <div className="mb-24pxr">
            <label
              htmlFor="passwordCheck"
              className="text-sm w-402pxr pt-24pxr font-semibold leading-snug text-zinc-900"
            >
              비밀번호 확인
            </label>
            <div className="relative">
              <Input
                size="3"
                id="passwordCheck"
                register={register}
                hookFormId="passwordCheck"
                hookFormRequire="비밀번호가 일치하지 않습니다."
                hookFormMinLength={passwordMinLength}
                hookFormValidate={passwordCheckValidate}
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                variant="soft"
                color="gray"
                className={`mt-8pxr cursor-pointer p-12pxr text-10pxr font-medium text-neutral-400 outline-none ${
                  errors.passwordCheck ? 'ring-1 ring-red-500' : ''
                }`}
              />
            </div>
            {errors.passwordCheck && (
              <small className="-pt-10pxr text-red-500" role="alert">
                {errors.passwordCheck.message}
              </small>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="py-3.5 rounded-10pxr gap-2.5 text-sm mt-40pxr inline-flex h-50pxr w-402pxr cursor-pointer items-center justify-center bg-zinc-900 px-182pxr text-center font-semibold leading-snug text-gray-50"
        >
          확인
        </Button>

        <div className="text-sm align-center mt-52pxr flex justify-center pb-50pxr text-center font-medium leading-tight text-neutral-400">
          이미 회원이신가요?
          <Link href="/signin">
            <p className="text-sm cursor-pointer pl-9pxr font-medium leading-tight text-zinc-900 underline">
              로그인
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpEmail
