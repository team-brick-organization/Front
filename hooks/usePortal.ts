import { useRef, useState } from 'react'

/** 포탈을 사용하기 위한 커스텀 훅, 우리 프로젝트에서는 보통 모달창을 띄울 때 사용
 * @returns portalRef: 포탈을 사용할 div 요소
 * @returns isPortalOpen: 포탈이 열려있는지 여부
 * @returns setIsPortalOpen: 포탈을 열고 닫는 함수
 * @returns handleOutsideClick: 포탈 외부를 클릭했을 때 포탈을 닫는 함수
 */
function usePortal() {
  const portalRef = useRef<HTMLDivElement>(null)

  const [isPortalOpen, setIsPortalOpen] = useState(false)

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (portalRef.current === e.target) setIsPortalOpen(false)
  }
  return {
    portalRef,
    isPortalOpen,
    setIsPortalOpen,
    handleOutsideClick,
  }
}

export default usePortal
