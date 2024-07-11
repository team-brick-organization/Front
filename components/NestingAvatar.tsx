import { Avatar } from '@radix-ui/themes'

interface INestingAvatarProps {
  config: { imageUrl: string; fallback: string }[]
  displayLimit: number
}

function NestingAvatar({ config, displayLimit }: INestingAvatarProps) {
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
          className="h-29pxr w-29pxr rounded-full"
          color="gray"
          key={item.imageUrl}
          src={item.imageUrl}
          fallback={
            <div className="h-29pxr w-29pxr content-center rounded-full bg-[#D9D9D9] text-center text-14pxr font-semibold text-[#1F2937]">
              {item.fallback}
            </div>
          }
        />
      ))}
      <div
        style={{ transform: `translateX(${displayLimit * -10}px)` }}
        className="h-29pxr w-29pxr content-center rounded-full bg-[#D9D9D9] text-center text-14pxr font-semibold text-[#1F2937]"
      >
        +{config.length - displayLimit}
      </div>
    </div>
  )
}

export default NestingAvatar
