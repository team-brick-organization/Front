'use client'

import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import { useRouter } from 'next/navigation'

interface IBottomBarProps {
  buttonClassName?: string
  disabled?: boolean
  children: string
}

function BottomBar({ buttonClassName, disabled, children }: IBottomBarProps) {
  const router = useRouter()
  const { registrationButtonRef } = useSocialRegistrationStore()
  return (
    <div className="fixed bottom-0pxr left-0pxr right-0pxr flex h-72pxr items-center justify-end bg-gray-01 pr-370pxr mb:pr-20pxr tb:pr-20pxr">
      <button
        className={`rounded-[0.625rem] bg-gray-10 px-20pxr py-8pxr text-gray-01 transition-all duration-200 font-title-02 ${disabled ? '!bg-gray-02 !text-gray-04' : ''} ${buttonClassName}`}
        type="button"
        onClick={() => {
          if (registrationButtonRef.current) {
            registrationButtonRef.current.click()
            return
          }

          router.push('/registration/social')
        }}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default BottomBar
