import { Avatar } from '@radix-ui/themes'
import Link from 'next/link'

interface IProfileCardProps {
  type: 'user' | 'anotherUser'
  profileImageUrl: string
  name: string
  userEmail: string
  description: string
}

function ProfileCard({
  type,
  profileImageUrl,
  name,
  userEmail,
  description,
}: IProfileCardProps) {
  return (
    <div className="flex w-279pxr flex-col items-center rounded-[0.3125rem] border border-gray-04 bg-gray-01 px-24pxr py-50pxr mb:w-full tb:w-375pxr">
      <Avatar
        className="h-109pxr w-109pxr rounded-full bg-gray-04"
        src={profileImageUrl}
        alt="프로필 이미지"
        fallback={<div className="h-109pxr w-109pxr rounded-full bg-gray-04" />}
      />

      <h1 className="mt-16pxr text-gray-10 font-headline-02">{name}</h1>

      <span className="mt-4pxr text-gray-08 font-caption-01">{userEmail}</span>

      <p className="mt-24pxr line-clamp-2 h-28pxr w-full text-ellipsis text-wrap text-center text-gray-08 font-caption-02">
        {description}
      </p>

      {type === 'user' && (
        <Link className="w-full rounded-[0.625rem]" href="/mypage/profile/edit">
          <button
            className="mt-40pxr w-full rounded-[0.625rem] bg-gray-10 py-9pxr text-gray-01 font-body-01"
            type="button"
          >
            프로필 편집
          </button>
        </Link>
      )}
    </div>
  )
}

export default ProfileCard
