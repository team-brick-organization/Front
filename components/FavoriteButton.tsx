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
  const getHeartImagePath = isFavoriteClicked ? heartBlack : heart

  return (
    <button
      className="group"
      type="button"
      onClick={onFavoriteClick}
      title="Dibs this item"
    >
      <Image
        width={26}
        height={26}
        src={getHeartImagePath}
        alt={`${isFavoriteClicked ? 'black' : 'gray'} heart image`}
        className="transition-all duration-150 ease-in-out group-hover:scale-125 group-active:scale-50"
      />
    </button>
  )
}

export default FavoriteButton
