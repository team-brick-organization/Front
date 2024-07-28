import { Avatar } from '@radix-ui/themes'

interface INestingAvatarProps {
  config: { imageUrl: string; fallback: string }[]
  displayLimit: number
  showRemainingPeople?: boolean
}

function NestingAvatar({
  config,
  displayLimit,
  showRemainingPeople = true,
}: INestingAvatarProps) {
  const sliceConfig = config
    .map((item) => ({
      imageUrl: item.imageUrl,
      fallback: item.fallback.slice(0, 1),
    }))
    .slice(0, displayLimit)

  return (
    <div className="flex items-center justify-center">
      {sliceConfig.map((item, index) => (
        <Avatar
          style={{
            transform: `translateX(${index !== 0 ? `${-10 * index}px` : '0'})`,
          }}
          className="h-24pxr w-24pxr rounded-full border border-gray-01"
          color="gray"
          key={item.fallback}
          src={item.imageUrl}
          fallback={
            <div className="h-24pxr w-24pxr content-center rounded-full border border-gray-01 bg-gray-02 text-center text-14pxr text-gray-10 font-caption-02">
              {item.fallback}
            </div>
          }
        />
      ))}
      {config.length > displayLimit && showRemainingPeople && (
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
