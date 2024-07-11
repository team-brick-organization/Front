import { Avatar } from '@radix-ui/themes'

interface IParticipantsInfoProps {
  profileImage: string
  name: string
  description: string
  role: 'host' | 'participant'
}

function ParticipantsInfo({
  profileImage,
  name,
  description,
  role,
}: IParticipantsInfoProps) {
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
          <h3 className="font-body-02">{name}</h3>
          {role === 'host' && (
            <span className="rounded-full bg-[#1E1F20] px-8pxr py-2pxr text-[#F9FAFC] font-caption-01">
              호스트
            </span>
          )}
        </div>
        <p className="text-[#DDDEE0] font-caption-02">{description}</p>
      </div>
    </div>
  )
}

export default ParticipantsInfo
