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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-480pxr rounded-[0.625rem] bg-gray-01 px-39pxr py-50pxr"
    >
      <h1 className="text-center text-gray-10 font-headline-03">
        비밀번호를 잊으셨나요?
      </h1>
      <p className="mt-16pxr text-center text-[#9A9B9D] font-body-02">
        가입한 이메일을 입력하면
        <br />
        암호를 재설정할 수 있는 링크를 이메일로 보내드릴게요.
      </p>
      <div className="relative mt-46pxr w-full">
        <Input
          variant="border"
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: emailPattern,
          })}
          type="email"
          placeholder="이메일을 입력해 주세요."
          className={`${errors.email ? 'ring-1 ring-error' : ''}`}
        />
        {errors.email && (
          <small className="mt-4pxr text-error font-caption-02" role="alert">
            {errors.email.message}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="mt-40pxr h-50pxr w-402pxr cursor-pointer rounded-[0.625rem] bg-gray-10 text-center text-gray-01 font-title-04"
      >
        확인
      </Button>
    </form>
  )
}

export default PasswordFindForm
