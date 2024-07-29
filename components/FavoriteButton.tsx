import { HeartFilledIcon } from '@radix-ui/react-icons'

interface IFavoriteButtonProps {
  isFavoriteClicked: boolean
  onFavoriteClick: () => void
}

function FavoriteButton({
  isFavoriteClicked,
  onFavoriteClick,
}: IFavoriteButtonProps) {
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
          <HeartFilledIcon
            className="text-gray-01 opacity-[0.6]"
            width={24}
            height={24}
          />
        )}
      </div>
    </button>
  )
}

export default FavoriteButton
