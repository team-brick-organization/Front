import { Button } from '@radix-ui/themes'
import closeIcon from '@/public/images/svgs/close.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface IProfileImageChangeModalProps {
  onClose: () => void
}

function ProfileImageChangeModal({ onClose }: IProfileImageChangeModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
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
            />
          ) : (
            <div className="mb-24pxr mt-40pxr h-80pxr w-80pxr rounded-full bg-[#9A9B9D]" />
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
            type="file"
            accept="image/jpeg,image/png,image/webp"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <button
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
