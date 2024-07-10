import Image from 'next/image'
import heartBlack from '@/public/images/svgs/heartBlack.svg'
import heart from '@/public/images/svgs/heart.svg'

interface IFavoriteButtonProps {
  isFavoriteClicked: boolean
  onFavoriteClick: () => void
}

function FavoriteButton({
  isFavoriteClicked,
  onFavoriteClick,
}: IFavoriteButtonProps) {
  const getStarImagePath = isFavoriteClicked ? heartBlack : heart

  return (
    <button
      className="group"
      type="button"
      onClick={onFavoriteClick}
      title="Dibs this item"
    >
      <Image
        width={24}
        height={24}
        src={getStarImagePath}
        alt={`${isFavoriteClicked ? 'black' : 'gray'} heart image`}
        className="transition-all duration-150 ease-in-out group-hover:scale-125 group-active:scale-50"
      />
    </button>
  )
}

export default FavoriteButton
