import { Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import { PersonIcon } from '@radix-ui/react-icons'
import Button from './Button'

interface IProfileCardProps {
  type: 'user' | 'anotherUser'
  profileImageUrl: string
  name: string
  description: string
}

function ProfileCard({
  type,
  profileImageUrl,
  name,
  description,
}: IProfileCardProps) {
  return (
    <div className="flex w-279pxr flex-col items-center rounded-[0.3125rem] border border-gray-04 bg-gray-01 px-24pxr py-50pxr tb:w-375pxr max1020:w-full">
      <Avatar
        className="h-109pxr w-109pxr rounded-full bg-gray-04"
        src={profileImageUrl}
        alt="프로필 이미지"
        fallback={
          <div className="flex h-109pxr w-109pxr items-center justify-center rounded-full bg-gray-04">
            <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
          </div>
        }
      />

      <h1 className="mt-16pxr text-gray-10 font-headline-02">{name}</h1>

      <p className="mb-40pxr mt-16pxr line-clamp-2 w-full text-ellipsis text-wrap text-center text-gray-08 font-body-01 tb:mt-12pxr">
        {description}
      </p>

      {type === 'user' && (
        <Link
          className="flex w-full justify-center rounded-[0.625rem]"
          href="/mypage/edit/profile"
        >
          <Button size="M" type="button">
            프로필 편집
          </Button>
        </Link>
      )}
    </div>
  )
}

export default ProfileCard
