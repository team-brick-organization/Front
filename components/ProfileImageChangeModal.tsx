'use client'

import { useRef } from 'react'
import Image from 'next/image'
import closeIcon from '@/public/images/svgs/close.svg'
import { Button } from '@radix-ui/themes'
import { PersonIcon } from '@radix-ui/react-icons'
import useEditProfileImageStore from '@/stores/useEditProfileImageStore'
import { notify } from './ToastMessageTrigger'

interface IProfileImageChangeModalProps {
  onClose: () => void
}

function ProfileImageChangeModal({ onClose }: IProfileImageChangeModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const profileImage = useEditProfileImageStore(
    (state) => state.profileImageUrl,
  )
  const setProfileImage = useEditProfileImageStore(
    (state) => state.setProfileImageUrl,
  )

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      if (
        !file.type.includes('png') &&
        !file.type.includes('jpeg') &&
        !file.type.includes('webp')
      ) {
        // eslint-disable-next-line no-alert
        alert('이미지 파일만 업로드 가능합니다.')
        return
      }

      if (file.size > 1024 * 1024 * 10) {
        // eslint-disable-next-line no-alert
        alert(
          `${file.name}이 10MB를 초과합니다.\n이미지는 10MB 이하만 업로드 가능 합니다.`,
        )
        return
      }
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result as string)
        notify('프로필 이미지가 성공적으로 변경되었어요.', 'default')
      }
      reader.readAsDataURL(file)
    }
    onClose()
  }

  return (
    <div className="relative mt-50pxr flex h-full max-h-423pxr w-full max-w-580pxr flex-col justify-center rounded-[.625rem] bg-[#F9FAFC]">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-gray-10 font-headline-03">
          프로필 사진 변경
        </h1>
        <div className="flex items-center justify-center">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="mb-24pxr mt-40pxr h-80pxr w-80pxr rounded-full object-cover"
              onClick={() => setProfileImage('')}
            />
          ) : (
            <div className="mb-24pxr mt-40pxr flex h-80pxr w-80pxr rounded-full bg-gray-04">
              <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
            </div>
          )}
        </div>
        <div className="text-center">
          <span>
            최대 10MB의 JPEG, PNG, WEBP 이미지 파일을 업로드 해주세요.
          </span>
        </div>
        <div className="mt-60pxr flex items-center justify-center mb:px-104pxr">
          <Button
            type="button"
            className="h-46pxr min-w-247pxr bg-[#1E1F20]"
            onClick={handleButtonClick}
          >
            <h1>사진 선택하기</h1>
          </Button>
          <input
            title="프로필 사진 선택"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
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
  )
}

export default ProfileImageChangeModal
