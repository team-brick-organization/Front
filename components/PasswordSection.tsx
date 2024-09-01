import { Input, ValidateErrorMessage } from '@/components'
import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Path,
} from 'react-hook-form'
import Image from 'next/image'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'

interface IPasswordSectionProps<T extends FieldValues> {
  register: UseFormRegister<T>
  id: Path<T>
  registerOption: RegisterOptions<T>
  showPassword: boolean
  errors: FieldError | undefined
  togglePasswordVisibility: () => void
  children: string
}

function PasswordSection<T extends FieldValues>({
  register,
  id,
  registerOption,
  showPassword,
  errors,
  togglePasswordVisibility,
  children,
}: IPasswordSectionProps<T>) {
  const placeholder =
    id === 'password'
      ? '비밀번호를 입력해주세요.'
      : '비밀번호를 다시 한번 입력해주세요.'

  return (
    <div>
      <label htmlFor={id} className="pt-24pxr text-gray-10 font-title-02">
        {children}
      </label>
      <div className="relative mt-8pxr">
        <Input
          variant="border"
          id={id}
          {...register(id, registerOption)}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={`${errors ? 'border-0 ring-1 ring-error' : ''}`}
          autoComplete="new-password"
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
      {errors && (
        <ValidateErrorMessage className="mt-4pxr">
          {errors.message}
        </ValidateErrorMessage>
      )}
    </div>
  )
}

export default PasswordSection
