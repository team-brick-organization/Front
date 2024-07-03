'use client'

import { Box, TextField } from '@radix-ui/themes'
import { UseFormRegister, ValidationRule } from 'react-hook-form'
import { ILoginFormInputs } from './SignInForm'
import { ISignUpFormInputs } from './SignUpForm'

interface InputProps extends React.ComponentProps<typeof TextField.Root> {
  maxWidth?: string
  hookFormId?: 'nickname' | 'email' | 'password'
  hookFormRequire?: string
  hookFormPattern?: ValidationRule<RegExp>
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
