'use client'

import { Box, TextField } from '@radix-ui/themes'
import { UseFormRegister, Validate, ValidationRule } from 'react-hook-form'
import { ISignUpFormInputs } from './SignUpEmail'
import { ILoginFormInputs } from './SignInForm'

interface InputProps extends React.ComponentProps<typeof TextField.Root> {
  maxWidth?: string
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
}

function Input({
  hookFormId,
  hookFormRequire,
  hookFormPattern,
  hookFormMinLength,
  hookFormValidate,
  register,
  maxWidth,
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
    <Box maxWidth={maxWidth}>
      <TextField.Root {...inputProps} />
    </Box>
  )
}

export default Input
