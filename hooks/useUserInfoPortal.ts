import { useRef, useState } from 'react'

/** 마이페이지 유저정보 포탈을 사용하기 위한 커스텀 훅, 우리 프로젝트에서는 보통 모달창을 띄울 때 사용
 * @returns userInfoPortalRef: 포탈을 사용할 div 요소
 * @returns isUserInfoPortalOpen: 포탈이 열려있는지 여부
 * @returns setIsUserInfoPortalOpen: 포탈을 열고 닫는 함수
 * @returns handleOutsideClick: 포탈 외부를 클릭했을 때 포탈을 닫는 함수
 */
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
