'use client'

import { forwardRef, HTMLProps } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {
  variant?: 'default' | 'border'
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const typeOfInputClassName =
      variant === 'default'
        ? 'rounded-[0.625rem] bg-gray-01 p-14pxr font-body-02 placeholder:text-gray-06 text-gray-10'
        : 'rounded-[0.3125rem] border border-gray-04 bg-gray-01 px-16pxr py-12pxr text-gray-10 placeholder:text-gray-06 font-caption-03'
    return (
      <input
        ref={ref}
        {...props}
        className={`w-full outline-none ${typeOfInputClassName} ${className}`}
      />
    )
  },
)

Input.displayName = 'Input'
export default Input
