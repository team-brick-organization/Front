import { useRef, useState } from 'react'

function useUserInfoPortal() {
  const userInfoPortalRef = useRef<HTMLDivElement>(null)

  const [isUserInfoPortalOpen, setIsUserInfoPortalOpen] = useState(false)

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (userInfoPortalRef.current === e.target) setIsUserInfoPortalOpen(false)
  }
  return {
    userInfoPortalRef,
    isUserInfoPortalOpen,
    setIsUserInfoPortalOpen,
    handleOutsideClick,
  }
}

export default useUserInfoPortal
