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
import postDuplicateEmail from '@/apis/postDuplicateEmail'
import postSignUp from '@/apis/postSignUp'
import { useRouter } from 'next/navigation'
import Input from './Input'

export interface ISignUpFormInputs {
  name: string
  email: string
  password: string
  passwordCheck: string
}

function SignUpEmailForm(): JSX.Element {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<ISignUpFormInputs>({ mode: 'onChange' })

  const password = watch('password')

  const fetchIsDuplicateEmail = async (email: string) => {
    const response = await postDuplicateEmail({
      body: {
        email,
      },
    })

    if (!response.ok) {
      throw new Error('이메일 중복 확인에 실패했습니다.')
    }

    const data: IPostDuplicateEmailResponse = await response.json()

    return data.duplicateEmail
  }

  const onSubmit = async (data: ISignUpFormInputs) => {
    const { email, password: dataPassword, name } = data

    const isDuplicateEmail = await fetchIsDuplicateEmail(email)

    if (isDuplicateEmail) {
      setError('email', {
        type: 'validate',
        message: '이미 가입된 이메일입니다.',
      })
      return
    }

    const signUpResponse = await postSignUp({
      body: {
        email,
        password: dataPassword,
        name,
      },
    })

    if (!signUpResponse.ok) {
      return
    }

    router.push('/signin')
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full max-w-480pxr rounded-[0.625rem] bg-gray-01 px-39pxr py-50pxr mb:px-19pxr"
    >
      <h1 className="text-center text-gray-10 font-headline-03">
        이메일로 가입하기
      </h1>

      <div className="mt-47pxr">
        <div>
          <label htmlFor="name" className="text-gray-10 font-title-02">
            이름
          </label>
          <Input
            variant="border"
            id="name"
            {...register('name', {
              required: '이름은 필수 입력입니다.',
              pattern: namePattern,
            })}
            type="text"
            placeholder="이름을 입력해 주세요."
            className={`mt-8pxr ${errors.name ? 'ring-1 ring-error' : ''}`}
          />

          {errors.name && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.name.message}
            </small>
          )}
        </div>

        <div className="mt-24pxr">
          <label htmlFor="email" className="text-gray-10 font-title-02">
            이메일
          </label>
          <Input
            variant="border"
            id="email"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: emailPattern,
              onBlur: async (e) => {
                const email = e.target.value

                if (!email) return

                const isDuplicateEmail = await fetchIsDuplicateEmail(email)

                if (isDuplicateEmail) {
                  setError('email', {
                    type: 'validate',
                    message: '이미 가입된 이메일입니다.',
                  })
                }
              },
            })}
            type="email"
            placeholder="이메일을 입력해 주세요."
            className={`mt-8pxr ${errors.email ? 'ring-1 ring-error' : ''}`}
            autoComplete="username"
          />

          {errors.email && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.email.message}
            </small>
          )}
        </div>

        <div className="mt-24pxr">
          <label
            htmlFor="password"
            className="pt-24pxr text-gray-10 font-title-02"
          >
            비밀번호
          </label>
          <div className="relative mt-8pxr">
            <Input
              variant="border"
              id="password"
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: passwordMinLength,
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요."
              className={`${errors.password ? 'ring-1 ring-error' : ''}`}
              autoComplete="password"
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
              className="absolute right-16pxr top-1/2 -translate-y-1/2"
            >
              <Image
                src={showPassword ? visibility : visibilityOff}
                alt="비밀번호 켜고 꺼지게"
                width={17}
                height={17}
              />
            </button>
          </div>
          {errors.password && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.password.message}
            </small>
          )}
        </div>

        <div className="mt-24pxr">
          <label
            htmlFor="passwordCheck"
            className="pt-24pxr text-gray-10 font-title-02"
          >
            비밀번호 확인
          </label>
          <div className="relative mt-8pxr">
            <Input
              variant="border"
              id="passwordCheck"
              {...register('passwordCheck', {
                required: '비밀번호 확인은 필수 입력입니다.',
                minLength: passwordMinLength,
                validate: passwordCheckValidate,
              })}
              type={showPasswordCheck ? 'text' : 'password'}
              placeholder="비밀번호를 다시 한번 입력해주세요."
              className={`${errors.passwordCheck ? 'ring-1 ring-error' : ''}`}
              autoComplete="new-password"
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
              className="absolute right-16pxr top-1/2 -translate-y-1/2"
            >
              <Image
                src={showPasswordCheck ? visibility : visibilityOff}
                alt="비밀번호 켜고 꺼지게"
                width={17}
                height={17}
              />
            </button>
          </div>
          {errors.passwordCheck && (
            <small
              className="-pt-10pxr text-error font-caption-02"
              role="alert"
            >
              {errors.passwordCheck.message}
            </small>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="mt-40pxr h-50pxr w-full cursor-pointer rounded-[0.625rem] bg-gray-10 text-center text-gray-01 font-title-04"
      >
        확인
      </Button>

      <div className="mt-52pxr text-center text-gray-06 font-body-02">
        이미 회원이신가요?
        <Link href="/signin">
          <span className="pl-8pxr text-gray-10 underline underline-offset-2">
            로그인
          </span>
        </Link>
      </div>
    </form>
  )
}

export default SignUpEmailForm
