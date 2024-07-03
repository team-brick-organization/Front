'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'

export interface ISignUpFormInputs {
  nickname: string
  email: string
  password: string
}

function SignUpForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormInputs>({ mode: 'onChange' })

  const onSubmit = (data: ISignUpFormInputs) => {
    console.log('회원가입', data)
  }

  const { ref, ...rest } = register('password', {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 7,
      message: '7자리 이상 비밀번호를 입력하세요.',
    },
  })
  // 닉네임: - 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성
  // * 특이사항 : 한글 초성 및 모음은 허가하지 않는다.
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 space-y-6 w-full max-w-md rounded-lg bg-white shadow-md"
      >
        <h1 className="text-2xl text-center font-bold">회원가입</h1>
        <div className="space-y-4 flex flex-col">
          <div>
            <Input
              register={register}
              hookFormId="nickname"
              hookFormRequire="닉네임은 필수 입력입니다."
              hookFormPattern={{
                value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/, // 정규 표현식을 문자열로 감싸줍니다.
                message: '닉네임 형식에 맞지 않습니다.',
              }}
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="px-3 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.nickname && (
              <small className="text-red-500" role="alert">
                {errors.nickname.message}
              </small>
            )}
          </div>
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
          회원가입
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
