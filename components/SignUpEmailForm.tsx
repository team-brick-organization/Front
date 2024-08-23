'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import {
  emailPattern,
  nicknamePattern,
  passwordPattern,
} from '@/constants/RegExr'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import Image from 'next/image'
import { validateEmail, validateNickname } from '@/utils/handleValidation'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import checkedIcon from '@/public/images/svgs/checked.svg'
import unCheckedIcon from '@/public/images/svgs/unChecked.svg'
import usePasswordVisibility from '@/hooks/usePasswordVisibility'
import useNicknameValidation from '@/hooks/useNicknameValidation'
import postSignUp from '@/apis/postSignUp'
import Input from './Input'

export interface ISignUpFormInputs {
  nickname: string
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

  const watchNickname = watch('nickname')
  const password = watch('password')

  const onSubmit = async (data: ISignUpFormInputs) => {
    const { email, password: dataPassword, nickname } = data

    await validateNickname(nickname, setError)
    await validateEmail(email, setError)

    const signUpResponse = await postSignUp({
      body: {
        name: nickname,
        email,
        password: dataPassword,
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

  const { isLengthValid, isValidPattern, hasNoWhitespace, showChecks } =
    useNicknameValidation({ watchNickname })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full max-w-476pxr rounded-[0.625rem] bg-gray-01 px-38pxr py-50pxr mb:px-19pxr"
    >
      <h1 className="text-center text-gray-10 font-headline-03">
        이메일로 가입하기
      </h1>

      <div className="mt-47pxr">
        <div>
          <label htmlFor="nickname" className="text-gray-10 font-title-02">
            닉네임
          </label>
          <Input
            variant="border"
            id="nickname"
            {...register('nickname', {
              required: '',
              pattern: nicknamePattern,
              onBlur: async (e) => {
                await validateNickname(e.target.value, setError)
              },
            })}
            type="text"
            placeholder="닉네임을 입력해 주세요."
            className={`mt-8pxr ${errors.nickname ? 'border-0 ring-1 ring-error' : ''}`}
          />

          {(!errors.nickname || String(errors.nickname.message).length === 0) &&
            showChecks && (
              <div className="mt-4pxr inline-flex">
                <div className="flex gap-16pxr">
                  <div className="flex gap-2pxr">
                    <Image
                      src={isLengthValid ? checkedIcon : unCheckedIcon}
                      alt={isLengthValid ? 'checkedIcon' : 'unCheckedIcon'}
                      width={14}
                      height={14}
                    />
                    <span
                      className={`font-caption-02 ${isLengthValid ? 'text-gray-10' : 'text-gray-08'}`}
                    >
                      2-8자 이하
                    </span>
                  </div>
                  <div className="flex gap-2pxr">
                    <Image
                      src={isValidPattern ? checkedIcon : unCheckedIcon}
                      alt={isValidPattern ? 'checkedIcon' : 'unCheckedIcon'}
                      width={14}
                      height={14}
                    />
                    <span
                      className={`font-caption-02 ${isValidPattern ? 'text-gray-10' : 'text-gray-08'}`}
                    >
                      한글/영어/숫자 가능
                    </span>
                  </div>
                  <div className="flex gap-2pxr">
                    <Image
                      src={hasNoWhitespace ? checkedIcon : unCheckedIcon}
                      alt={hasNoWhitespace ? 'checkedIcon' : 'unCheckedIcon'}
                      width={14}
                      height={14}
                    />
                    <span
                      className={`font-caption-02 ${hasNoWhitespace ? 'text-gray-10' : 'text-gray-08'}`}
                    >
                      공백 불가
                    </span>
                  </div>
                </div>
              </div>
            )}

          {errors.nickname && String(errors.nickname.message).length !== 0 && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.nickname.message}
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
                await validateEmail(e.target.value, setError)
              },
            })}
            type="email"
            placeholder="이메일을 입력해 주세요."
            className={`mt-8pxr ${errors.email ? 'border-0 ring-1 ring-error' : 'text-gray-10'}`}
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
                minLength: passwordPattern,
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요."
              className={`${errors.password ? 'border-0 ring-1 ring-error' : ''}`}
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
                minLength: passwordPattern,
                validate: passwordCheckValidate,
              })}
              type={showPasswordCheck ? 'text' : 'password'}
              placeholder="비밀번호를 다시 한번 입력해주세요."
              className={`${errors.passwordCheck ? 'border-0 ring-1 ring-error' : ''}`}
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
