import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'

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
      className="group"
      type="button"
      onClick={onFavoriteClick}
      title="Dibs this item"
    >
      <div className="transition-all duration-150 ease-in-out group-hover:scale-125 group-active:scale-50">
        {isFavoriteClicked ? (
          <HeartFilledIcon
            width={26}
            height={26}
            style={{ color: '#F91880' }}
          />
        ) : (
          <HeartIcon width={26} height={26} />
        )}
      </div>
    </button>
  )
}

export default FavoriteButton
