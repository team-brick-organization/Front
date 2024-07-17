import { useEffect, useState } from 'react'

function useFavorite(id: number) {
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false)

  const handleFavoriteClick = () => {
    const favoriteSocials = localStorage.getItem('favoriteSocials')
    if (!favoriteSocials) return

    // 찜 빼기
    if (isFavoriteClicked) {
      const filteredIds = JSON.parse(favoriteSocials).filter(
        (targetId: number) => targetId !== id,
      )
      localStorage.setItem('favoriteSocials', JSON.stringify(filteredIds))
      setIsFavoriteClicked(false)
      return
    }

    // 찜 추가
    const favoriteIds = JSON.parse(favoriteSocials)
    favoriteIds.unshift(id)
    localStorage.setItem('favoriteSocials', JSON.stringify(favoriteIds))
    setIsFavoriteClicked(true)
  }

  useEffect(() => {
    const favoriteSocials = localStorage.getItem('favoriteSocials')

    if (favoriteSocials) {
      const localData = JSON.parse(favoriteSocials)
      const favorite = localData.includes(id)
      setIsFavoriteClicked(favorite)
      return
    }

    localStorage.setItem('favoriteSocials', JSON.stringify([]))
    setIsFavoriteClicked(false)
  }, [id])

  return { isFavoriteClicked, handleFavoriteClick }
}

export default useFavorite
