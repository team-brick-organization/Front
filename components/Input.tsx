'use client'

import { UseFormRegister, Validate, ValidationRule } from 'react-hook-form'
import { HTMLProps } from 'react'
import { ISignUpFormInputs } from './SignUpEmailForm'
import { ILoginFormInputs } from './SignInForm'
import { IPasswordFindFormInputs } from './PasswordFindForm'

interface InputProps extends HTMLProps<HTMLInputElement> {
  hookFormId?: 'name' | 'email' | 'password' | 'passwordCheck'
  hookFormRequire?: string
  hookFormPattern?: ValidationRule<RegExp> | undefined
  hookFormValidate?:
    | Validate<string, ISignUpFormInputs | ILoginFormInputs>
    | Record<string, Validate<string, ISignUpFormInputs | ILoginFormInputs>>
  hookFormMinLength?: ValidationRule<number>
  register?:
    | UseFormRegister<ILoginFormInputs>
    | UseFormRegister<ISignUpFormInputs>
    | UseFormRegister<IPasswordFindFormInputs>
  className?: string
}

function Input({
  hookFormId,
  hookFormRequire,
  hookFormPattern,
  hookFormMinLength,
  hookFormValidate,
  register,
  className,
  ...props
}: InputProps) {
  // input이 hookform 쓰이지않는 경우도 있기에 register로 조건부사용
  const inputProps =
    register && hookFormId
      ? {
          ...(
            register as UseFormRegister<ILoginFormInputs | ISignUpFormInputs>
          )(hookFormId, {
            required: hookFormRequire,
            pattern: hookFormPattern,
            minLength: hookFormMinLength,
            validate: hookFormValidate,
          }),
          ...props,
        }
      : props

  return (
    <input {...inputProps} className={`w-full outline-none ${className}`} />
  )
}

export default Input
