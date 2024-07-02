import { useState } from 'react'

function useFavorite() {
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavoriteClicked(!isFavoriteClicked)
  }

  return { isFavoriteClicked, handleFavoriteClick }
}

export default useFavorite
