'use client'

import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'

interface IBottomBarProps {
  onButtonClick?: () => void
  buttonClassName?: string
  disabled?: boolean
  children: string
}

function BottomBar({
  onButtonClick,
  buttonClassName,
  disabled,
  children,
}: IBottomBarProps) {
  const { registrationButtonRef } = useSocialRegistrationStore()
  return (
    <div className="fixed bottom-0pxr left-0pxr right-0pxr z-10 flex h-70pxr justify-center bg-gray-01 px-20pxr">
      <div className="flex w-full max-w-1180pxr items-center justify-end">
        <button
          className={`rounded-[0.625rem] bg-gray-10 px-20pxr py-8pxr text-gray-01 transition-all duration-200 font-title-02 ${disabled ? '!bg-gray-02 !text-gray-04' : ''} ${buttonClassName}`}
          type="button"
          onClick={() => {
            if (registrationButtonRef.current) {
              registrationButtonRef.current.click()
              return
            }

            onButtonClick?.()
          }}
          disabled={disabled}
        >
          {children}
        </button>
      </div>
    </div>
  )
}

export default BottomBar
