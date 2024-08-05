'use client'

import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import Button from './Button'

interface IBottomBarProps {
  onButtonClick?: () => void
  disabled?: boolean
  children: string
}

function BottomBar({ onButtonClick, disabled, children }: IBottomBarProps) {
  const { registrationButtonRef } = useSocialRegistrationStore()
  return (
    <div className="fixed bottom-0pxr left-0pxr right-0pxr z-10 flex h-70pxr justify-center bg-gray-01 px-20pxr">
      <div className="flex w-full max-w-1180pxr items-center justify-end">
        <Button
          size="S"
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
        </Button>
      </div>
    </div>
  )
}

export default BottomBar
