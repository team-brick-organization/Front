import { Avatar } from '@radix-ui/themes'
import CustomBadge from './CustomBadge/CustomBadge'

interface IParticipantsProps {
  profileImage: string
  name: string
  description: string
  role: 'host' | 'participant'
}

function Participants({
  profileImage,
  name,
  description,
  role,
}: IParticipantsProps) {
  return (
    <div className="flex gap-16pxr">
      <Avatar
        className="h-45pxr w-45pxr rounded-full bg-[#D9D9D9]"
        src={profileImage}
        fallback={
          <div className="h-45pxr w-45pxr content-center rounded-full bg-[#D9D9D9] text-center text-14pxr text-white">
            BRICK
          </div>
        }
      />
      <div className="flex flex-col gap-4pxr">
        <div className="flex items-center gap-8pxr">
          <h3 className="text-gray-10 font-body-02">{name}</h3>
          {role === 'host' && (
            <CustomBadge type="primary" size="small">
              호스트
            </CustomBadge>
          )}
        </div>
        <p className="text-gray-04 font-caption-02">{description}</p>
      </div>
    </div>
  )
}

export default Participants
