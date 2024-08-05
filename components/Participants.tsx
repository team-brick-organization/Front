import { Avatar } from '@radix-ui/themes'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import CustomBadge from './CustomBadge/CustomBadge'

function Participants({
  id,
  profileUrl,
  name,
  description,
  role,
}: IParticipants) {
  return (
    <div className="flex gap-16pxr">
      <Link href={`/profile/${id}`}>
        <Avatar
          className="h-45pxr w-45pxr rounded-full bg-[#D9D9D9]"
          src={profileUrl}
          fallback={
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
              <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
            </div>
          }
        />
      </Link>
      <Link href={`/profile/${id}`}>
        <div className="flex flex-col gap-4pxr">
          <div className="flex items-center gap-8pxr">
            <h3 className="text-gray-10 font-body-02">{name}</h3>
            {role === 'OWNER' && (
              <CustomBadge type="primary" size="small">
                호스트
              </CustomBadge>
            )}
          </div>
          <p className="text-gray-04 font-caption-02">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Participants
