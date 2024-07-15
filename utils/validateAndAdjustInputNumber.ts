import { FormEvent } from 'react'

interface IValidateAndAdjustInputNumberProps {
  e: FormEvent<HTMLInputElement>
  min?: number
  max?: number
}

function validateAndAdjustInputNumber({
  e,
  min,
  max,
}: IValidateAndAdjustInputNumberProps) {
  const target = e.target as HTMLInputElement
  let { value } = target

  value = value.replace(/[^0-9]/g, '')

  if (value === '') {
    target.value = min?.toString() || (0).toString()
    return min || 0
  }

  let numericValue = Number(value)

  if (min !== undefined && numericValue < min) {
    numericValue = min
  }

  if (max !== undefined && numericValue > max) {
    numericValue = max
  }

  return numericValue
}

export default validateAndAdjustInputNumber
