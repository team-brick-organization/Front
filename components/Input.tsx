'use client'

import { Box, TextField } from '@radix-ui/themes'
import { UseFormRegister, ValidationRule } from 'react-hook-form'
import { ILoginFormInputs } from './SignInForm'
import { ISignUpFormInputs } from './SignUpForm'

interface InputProps extends React.ComponentProps<typeof TextField.Root> {
  maxWidth?: string
  hookFormId: string
  hookFormRequire: string
  hookFormPattern?: ValidationRule<RegExp>
  hookFormMinLength?: ValidationRule<number>
  register:
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
  const inputType = () => {
    switch (hookFormId) {
      case 'nickname':
        return 'nickname'

      case 'email':
        return `email`

      default:
        return `password`
    }
  }

  return (
    <Box maxWidth={maxWidth}>
      <TextField.Root
        {...(register as UseFormRegister<ILoginFormInputs | ISignUpFormInputs>)(
          inputType(),
          {
            required: hookFormRequire,
            pattern: hookFormPattern,
            minLength: hookFormMinLength,
          },
        )}
        {...props}
      />
    </Box>
  )
}

export default Input
