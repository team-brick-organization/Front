import { useState } from 'react'

function useFavorite(initialState = false) {
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(initialState)

  const handleFavoriteClick = () => {
    setIsFavoriteClicked(!isFavoriteClicked)
  }

  return { isFavoriteClicked, handleFavoriteClick }
}

export default useFavorite
