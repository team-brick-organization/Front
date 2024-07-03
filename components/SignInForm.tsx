'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
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

  const { ref, ...rest } = register('password', {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 7,
      message: '7자리 이상 비밀번호를 입력하세요.',
    },
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 space-y-6 w-full max-w-md rounded-lg bg-white shadow-md"
      >
        <h1 className="text-2xl text-center font-bold">로그인</h1>
        <div className="space-y-4 flex flex-col">
          <div>
            <Input
              register={register}
              hookFormId="email"
              hookFormRequire="이메일은 필수 입력입니다."
              hookFormPattern={{
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              }}
              type="email"
              placeholder="이메일을 입력해주세요"
              className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <small className="text-red-500" role="alert">
                {errors.email.message}
              </small>
            )}
          </div>
          <div>
            <Input
              register={register}
              hookFormId="password"
              hookFormRequire="비밀번호는 필수 입력입니다."
              hookFormMinLength={{
                value: 7,
                message: '7자리 이상 비밀번호를 입력하세요.',
              }}
              {...rest}
              type="password"
              placeholder="패스워드를 입력해주세요"
              className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <small className="text-red-500" role="alert">
                {errors.password.message}
              </small>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="py-2 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignInForm
