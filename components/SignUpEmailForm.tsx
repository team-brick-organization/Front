'use client'

import { FocusEvent } from 'react'
import { useForm } from 'react-hook-form'
import {
  emailPattern,
  nicknameInputPattern,
  passwordPattern,
} from '@/constants/RegExr'
import { useRouter } from 'next/navigation'
import { Button } from '@radix-ui/themes'
import { validateEmail, validateNickname } from '@/utils/handleValidation'
import usePasswordVisibility from '@/hooks/usePasswordVisibility'
import useNicknameValidation from '@/hooks/useNicknameValidation'
import postSignUp from '@/apis/postSignUp'
import {
  PasswordSection,
  ValidateErrorMessage,
  ValidationIndicator,
  Input,
  AuthNavigation,
} from '@/components'

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

  const nicknameValidationConfig = [
    { isValidate: isLengthValid, text: '2-8자 이하' },
    { isValidate: isValidPattern, text: '한글/영어/숫자 가능' },
    { isValidate: hasNoWhitespace, text: '공백 불가' },
  ]

  const registerOptions = {
    nickname: {
      required: '',
      pattern: nicknameInputPattern,
      onBlur: async (e: FocusEvent<HTMLInputElement, Element>) => {
        await validateNickname(e.target.value, setError)
      },
    },

    email: {
      required: '이메일은 필수 입력입니다.',
      pattern: emailPattern,
      onBlur: async (e: FocusEvent<HTMLInputElement, Element>) => {
        try {
          await validateEmail(e.target.value, setError)
        } catch (error) {
          setError('email', {
            type: 'validate',
            message: '이메일 형식에 맞지 않습니다.',
          })
        }
      },
    },

    password: {
      required: '비밀번호는 필수 입력입니다.',
      minLength: passwordPattern,
    },

    passwordCheck: {
      required: '비밀번호 확인은 필수 입력입니다.',
      minLength: passwordPattern,
      validate: passwordCheckValidate,
    },
  }

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
            {...register('nickname', registerOptions.nickname)}
            type="text"
            placeholder="닉네임을 입력해 주세요."
            className={`mt-8pxr ${errors.nickname ? 'border-0 ring-1 ring-error' : ''}`}
          />

          {(!errors.nickname || String(errors.nickname.message).length === 0) &&
            showChecks && (
              <div className="mt-4pxr inline-flex">
                <div className="flex gap-16pxr">
                  {nicknameValidationConfig.map((config) => {
                    const { isValidate, text } = config

                    return (
                      <ValidationIndicator isValidate={isValidate} key={text}>
                        {text}
                      </ValidationIndicator>
                    )
                  })}
                </div>
              </div>
            )}

          {errors.nickname && String(errors.nickname.message).length !== 0 && (
            <ValidateErrorMessage className="mt-4pxr">
              {errors.nickname.message}
            </ValidateErrorMessage>
          )}
        </div>

        <div className="mt-24pxr">
          <label htmlFor="email" className="text-gray-10 font-title-02">
            이메일
          </label>
          <Input
            variant="border"
            id="email"
            {...register('email', registerOptions.email)}
            type="email"
            placeholder="이메일을 입력해 주세요."
            className={`mt-8pxr ${errors.email ? 'border-0 ring-1 ring-error' : 'text-gray-10'}`}
            autoComplete="username"
          />

          {errors.email && (
            <ValidateErrorMessage className="mt-4pxr">
              {errors.email.message}
            </ValidateErrorMessage>
          )}
        </div>

        <PasswordSection<ISignUpFormInputs>
          register={register}
          id="password"
          registerOption={registerOptions.password}
          showPassword={showPassword}
          errors={errors.password}
          togglePasswordVisibility={togglePasswordVisibility}
        >
          비밀번호
        </PasswordSection>

        <PasswordSection<ISignUpFormInputs>
          register={register}
          id="passwordCheck"
          registerOption={registerOptions.passwordCheck}
          showPassword={showPasswordCheck}
          errors={errors.passwordCheck}
          togglePasswordVisibility={togglePasswordCheckVisibility}
        >
          비밀번호 확인
        </PasswordSection>
      </div>

      <Button
        type="submit"
        className="mt-40pxr h-50pxr w-full cursor-pointer rounded-[0.625rem] bg-gray-10 text-center text-gray-01 font-title-04"
      >
        확인
      </Button>

      <div className="mt-60pxr">
        <AuthNavigation isSignUp />
      </div>
    </form>
  )
}

export default SignUpEmailForm
