'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { emailPattern } from '@/constants/RegExr'
import { Button } from '@radix-ui/themes'
import Input from './Input'

export interface IPasswordFindFormInputs {
  email: string
}

function PasswordFindForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordFindFormInputs>({ mode: 'onChange' })

  const onSubmit = (data: IPasswordFindFormInputs) => {
    console.log('제출한 이메일', data)
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100 pb-149pxr pt-20pxr">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-10pxr relative h-auto w-480pxr flex-col items-center justify-start bg-gray-50 px-39pxr py-50pxr shadow-2xl"
      >
        <div className="flex flex-col items-center gap-16pxr">
          <h1 className="text-center text-22pxr text-[#1E1F20] font-headline-03">
            비밀번호를 잊으셨나요?
          </h1>
          <p className="w-full text-center text-[#9A9B9D] font-body-02">
            가입한 이메일을 입력하면
            <br />
            암호를 재설정할 수 있는 링크를 이메일로 보내드릴게요.
          </p>
          <div className="relative w-402pxr">
            <Input
              size="3"
              register={register}
              hookFormId="email"
              hookFormRequire="이메일은 필수 입력입니다."
              hookFormPattern={emailPattern}
              type="email"
              placeholder="이메일을 입력해 주세요."
              className={`mb-8pxr mt-31pxr w-full cursor-pointer p-12pxr outline-none font-caption-02 ${
                errors.email ? '-mb-1pxr ring-1 ring-[#DC2626]' : ''
              }`}
              variant="soft"
              color="gray"
            />
            {errors.email && (
              <small
                className="absolute -bottom-14pxr text-[#DC2626] font-caption-02"
                role="alert"
              >
                {errors.email.message}
              </small>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="py-3.5 rounded-10pxr gap-2.5 mt-40pxr inline-flex h-50pxr w-full cursor-pointer items-center justify-center bg-[#1E1F20] text-center font-title-04"
        >
          확인
        </Button>
      </form>
    </div>
  )
}

export default PasswordFindForm
