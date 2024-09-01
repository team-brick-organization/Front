import React from 'react'

interface IValidateErrorMessageProps {
  className?: string
  children: string | undefined
}

function ValidateErrorMessage({
  className,
  children,
}: IValidateErrorMessageProps) {
  return (
    <small className={`${className} text-error font-caption-02`} role="alert">
      {children}
    </small>
  )
}

export default ValidateErrorMessage
