import Image from 'next/image'
import starYellow from '@/public/images/svgs/starYellow.svg'
import starGray from '@/public/images/svgs/starGray.svg'

interface IFavoriteButtonProps {
  isFavoriteClicked: boolean
  onFavoriteClick: () => void
}

function FavoriteButton({
  isFavoriteClicked,
  onFavoriteClick,
}: IFavoriteButtonProps) {
  const getStarImagePath = () => {
    switch (isFavoriteClicked) {
      case true:
        return starYellow

      case false:
        return starGray

      default:
        return starGray
    }
  }

  return (
    <button
      className="group text-30pxr text-yellow-500"
      type="button"
      onClick={onFavoriteClick}
      title="Dibs this item"
    >
      <Image
        width={24}
        height={24}
        src={getStarImagePath()}
        alt="yellow star image"
        className="transition-all duration-150 ease-in-out group-hover:scale-125 group-active:scale-50"
      />
    </button>
  )
}

export default FavoriteButton
