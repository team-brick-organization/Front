import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState<number | null>(null)
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowWidth
