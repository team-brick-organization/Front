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
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import Image from 'next/image'
import usePasswordVisibility from '@/hooks/usePasswordVisibility'
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

  const {
    showPassword,
    showPasswordCheck,
    togglePasswordVisibility,
    togglePasswordCheckVisibility,
  } = usePasswordVisibility()

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-[#F3F4F6] pb-149pxr pt-20pxr">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-10pxr relative h-auto w-480pxr flex-col justify-start bg-[#F9FAFC] px-39pxr py-50pxr shadow-2xl"
      >
        <h1 className="r pb-47pxr pt-50pxr text-center text-22pxr text-[#1E1F20] font-headline-03">
          이메일로 가입하기
        </h1>

        <div>
          <div className="mb-24pxr">
            <label
              htmlFor="name"
              className="w-402pxr text-[#1E1F20] font-title-02"
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
              className={`mb-8pxr mt-8pxr cursor-pointer p-12pxr outline-none font-caption-02 ${
                errors.name ? '-mb-1pxr ring-1 ring-[#DC2626]' : ''
              }`}
              variant="soft"
              color="gray"
            />

            {errors.name && (
              <small
                className="-pt-10pxr text-[#DC2626] font-caption-01"
                role="alert"
              >
                {errors.name.message}
              </small>
            )}
          </div>

          <div className="mb-24pxr">
            <label
              htmlFor="email"
              className="w-402pxr text-[#1e1f20] font-title-02"
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
              className={`mb-8pxr mt-8pxr cursor-pointer p-12pxr outline-none font-caption-02 ${
                errors.email ? '-mb-1pxr ring-1 ring-[#DC2626]' : ''
              }`}
              variant="soft"
              color="gray"
            />

            {errors.email && (
              <small
                className="-pt-10pxr text-[#DC2626] font-caption-01"
                role="alert"
              >
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="mb-24pxr">
            <label
              htmlFor="password"
              className="w-402pxr pt-24pxr text-[#1E1F20] font-title-02"
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
                className={`mb-8pxr mt-8pxr cursor-pointer p-12pxr outline-none font-caption-01 ${
                  errors.password ? '-mb-1pxr ring-1 ring-[#DC2626]' : ''
                }`}
              />
              <button
                title="비밀번호 보이기/숨기기 버튼"
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
              <small
                className="-pt-10pxr text-[#DC2626] font-caption-01"
                role="alert"
              >
                {errors.password.message}
              </small>
            )}
          </div>
          <div className="mb-24pxr">
            <label
              htmlFor="passwordCheck"
              className="w-402pxr pt-24pxr text-[#1E1F20] font-title-02"
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
                type={showPasswordCheck ? 'text' : 'password'}
                placeholder="비밀번호를 다시 한번 입력해주세요."
                variant="soft"
                color="gray"
                className={`mb-8pxr mt-8pxr cursor-pointer p-12pxr outline-none font-caption-02 ${
                  errors.passwordCheck ? '-mb-1pxr ring-1 ring-[#DC2626]' : ''
                }`}
              />
              <button
                title="비밀번호 보이기/숨기기 버튼"
                onClick={togglePasswordCheckVisibility}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    togglePasswordCheckVisibility()
                  }
                }}
                type="button"
                tabIndex={0}
                className="w-5 h-5 absolute right-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <Image
                  src={showPasswordCheck ? visibility : visibilityOff}
                  alt="비밀번호 켜고 꺼지게"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            {errors.passwordCheck && (
              <small
                className="-pt-10pxr text-[#DC2626] font-caption-01"
                role="alert"
              >
                {errors.passwordCheck.message}
              </small>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="py-3.5 rounded-10pxr gap-2.5 mt-40pxr inline-flex h-50pxr w-402pxr cursor-pointer items-center justify-center bg-[#1E1F20] px-182pxr text-center text-[#F9FAFC] font-title-02"
        >
          확인
        </Button>

        <div className="align-center mt-52pxr flex justify-center pb-50pxr text-center text-[#DDDEE0] font-body-02">
          이미 회원이신가요?
          <Link href="/signin">
            <p className="cursor-pointer pl-9pxr text-[#1E1F20] underline">
              로그인
            </p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpEmail
