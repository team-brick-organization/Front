import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'

interface IFavoriteButtonProps {
  isFavoriteClicked: boolean
  onFavoriteClick: () => void
  isSocialDetail?: boolean
}

function FavoriteButton({
  isFavoriteClicked,
  onFavoriteClick,
  isSocialDetail = false,
}: IFavoriteButtonProps) {
  const heartIcons = [
    <HeartIcon width={24} height={24} key="HeartIcon" />,
    <HeartFilledIcon
      className="text-gray-01 opacity-[0.6]"
      width={24}
      height={24}
      key="HeartFilledIcon"
    />,
  ]
  const RenderHeartIcon = () => (isSocialDetail ? heartIcons[0] : heartIcons[1])

  return (
    <button
      className="dibs group"
      type="button"
      onClick={onFavoriteClick}
      title="Dibs this item"
    >
      <div className="transition-all duration-150 ease-in-out group-[.dibs]:group-hover:scale-125 group-[.dibs]:group-active:scale-50">
        {isFavoriteClicked ? (
          <HeartFilledIcon className="text-error" width={24} height={24} />
        ) : (
          RenderHeartIcon()
        )}
      </div>
    </button>
  )
}

export default FavoriteButton
