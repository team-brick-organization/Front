'use client'

import closeIcon from '@/public/images/svgs/close.svg'
import Image from 'next/image'
import Btn from './Button'

interface IRegistrationSuccessUserInfoModalProps {
  onClose: () => void
}

function RegistrationSuccessUserInfoModal({
  onClose,
}: IRegistrationSuccessUserInfoModalProps) {
  return (
    <div className="relative mt-50pxr flex h-full max-h-292pxr w-full max-w-580pxr flex-col justify-center rounded-[.625rem] bg-[#F9FAFC]">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <h1 className="mt-88pxr text-center text-gray-10 font-headline-03">
          회원 정보가 저장되었어요
        </h1>

        <div className="mt-60pxr flex items-center justify-center mb:px-104pxr">
          <Btn
            size="L"
            type="button"
            className="h-46pxr min-w-247pxr bg-[#1E1F20]"
            onClick={onClose}
          >
            <h1>완료</h1>
          </Btn>
        </div>
        <div className="mb-60pxr">
          <button
            title="닫기 버튼"
            className="absolute right-24pxr top-24pxr rounded-full"
            type="button"
            onClick={onClose}
          >
            <Image
              src={closeIcon}
              alt="closeIcon"
              width={30}
              height={30}
              className="text-[#1E1F20]"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationSuccessUserInfoModal
