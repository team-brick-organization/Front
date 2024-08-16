'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { emailPattern, passwordPattern } from '@/constants/RegExr'
import Image from 'next/image'
import { Button } from '@radix-ui/themes'
import kakaoTalk from '@/public/images/svgs/kakaoTalk.svg'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import Link from 'next/link'
import usePasswordVisibility from '@/hooks/usePasswordVisibility'
import postSignIn from '@/apis/postSignIn'
import { useRouter } from 'next/navigation'
import useUserStore from '@/stores/useUserStore'
import useKakaoButtonText from '@/hooks/useKakaoButtonText'
import Input from './Input'

export interface ILoginFormInputs {
  email: string
  password: string
}

function SignInForm(): JSX.Element {
  const kakaoButtonText = useKakaoButtonText()
  const router = useRouter()
  const { setAccessToken } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginFormInputs>({ mode: 'onChange' })

  const onSubmit = async (data: ILoginFormInputs) => {
    try {
      const { email, password } = data

      const postSignInResponse = await postSignIn({ body: { email, password } })

      if (!postSignInResponse.ok) {
        setError('email', {
          type: 'manual',
          message: '이메일 또는 비밀번호가 일치하지 않습니다.',
        })
        return
      }

      const { accessToken } =
        (await postSignInResponse.json()) as IPostSignInResponse

      setAccessToken(accessToken)

      router.push('/')
    } catch (error) {
      setError('password', {
        type: 'manual',
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
      })
    }
  }

  const { showPassword, togglePasswordVisibility } = usePasswordVisibility()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full max-w-480pxr justify-center rounded-[0.625rem] bg-gray-01 px-39pxr py-50pxr mb:px-19pxr"
    >
      <h1 className="text-center text-gray-10 font-headline-03">로그인</h1>

      <div className="mt-47pxr">
        <label htmlFor="email" className="text-gray-10 font-title-02">
          이메일
        </label>
        <Input
          variant="border"
          id="email"
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            validate: emailPattern.validate.email,
          })}
          type="email"
          placeholder="이메일을 입력해 주세요."
          className={`mt-4pxr ${errors.email ? 'border-0 ring-1 ring-error' : ''}`}
          color="gray"
        />

        {errors.email && (
          <small className="mt-4pxr text-error font-caption-02" role="alert">
            {emailPattern.message}
          </small>
        )}
      </div>

      <div className="mt-24pxr">
        <label htmlFor="password" className="text-gray-10 font-title-02">
          비밀번호
        </label>
        <div className="relative mt-4pxr">
          <Input
            variant="border"
            id="password"
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              minLength: passwordPattern,
            })}
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요."
            className={`${errors.password ? 'border-0 ring-1 ring-error' : ''}`}
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
            className="absolute right-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
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
            {passwordPattern.message}
          </small>
        )}
      </div>

      <Button
        type="submit"
        className="mt-40pxr h-50pxr w-full max-w-402pxr cursor-pointer rounded-[0.625rem] bg-gray-10 text-center text-gray-01 font-title-04"
      >
        로그인
      </Button>

      <div className="mt-16pxr flex justify-end">
        <Link
          href="/password-find"
          className="cursor-pointer text-gray-10 font-body-01"
        >
          비밀번호 찾기
        </Link>
      </div>

      <div className="mt-45pxr flex w-400pxr items-center justify-center gap-24pxr mb:w-full">
        <div className="h-1pxr w-full max-w-126pxr bg-gray-04" />
        <div className="text-nowrap px-8pxr text-center text-gray-04 font-caption-03">
          또는
        </div>
        <div className="h-1pxr w-full max-w-126pxr bg-gray-04" />
      </div>

      <div className="mt-20pxr flex items-center justify-center">
        <Button
          type="button"
          className="h-full w-fit cursor-pointer gap-8pxr rounded-full border bg-[#FEE500] px-70pxr py-12pxr text-center text-gray-10 font-title-02 mb:px-60pxr"
        >
          <Image src={kakaoTalk} alt="1" width={24} height={22} />
          {kakaoButtonText}
        </Button>
      </div>

      <div className="mt-60pxr text-center text-gray-06 font-body-02">
        아직 브릭 회원이 아닌가요?
        <Link href="/signup">
          <span className="pl-8pxr text-gray-10 underline underline-offset-2">
            회원가입
          </span>
        </Link>
      </div>
    </form>
  )
}

export default SignInForm
