import { PersonIcon } from '@radix-ui/react-icons'
import { Avatar } from '@radix-ui/themes'

interface INestingAvatarProps {
  config: IParticipants[]
  displayLimit: number
  showRemainingPeople?: boolean
}

function NestingAvatar({
  config,
  displayLimit,
  showRemainingPeople = true,
}: INestingAvatarProps) {
  return (
    <div className="flex items-center justify-center">
      {config?.map((item, index) => (
        <Avatar
          style={{
            transform: `translateX(${index !== 0 ? `${-10 * index}px` : '0'})`,
          }}
          className="h-24pxr w-24pxr rounded-full border border-gray-01"
          color="gray"
          key={`${index + 0}`}
          src={item.profileUrl}
          fallback={
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
              <PersonIcon className="text-gray-06" />
            </div>
          }
        />
      ))}
      {config?.length > displayLimit && showRemainingPeople && (
        <div
          style={{ transform: `translateX(${displayLimit * -10}px)` }}
          className="h-24pxr w-24pxr content-center rounded-full border border-gray-01 bg-gray-02 text-center text-14pxr text-gray-10 font-caption-02"
        >
          +{config.length - displayLimit}
        </div>
      )}
    </div>
  )
}

export default NestingAvatar
