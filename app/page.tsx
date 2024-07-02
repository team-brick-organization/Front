'use client'

import FavoriteButton from '@/components/FavoriteButton'
import useFavorite from '@/hooks/useFavorite'

export default function Home() {
  const { isFavoriteClicked, handleFavoriteClick } = useFavorite()

  return (
    <FavoriteButton
      isFavoriteClicked={isFavoriteClicked}
      onFavoriteClick={handleFavoriteClick}
    />
  )
}
