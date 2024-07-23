import { ForwardedRef, ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface IPortalProps {
  children: ReactNode
  handleOutsideClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  isUserInfoPortalOpen: boolean
  userInfoPortalRef: ForwardedRef<HTMLDivElement>
  className?: string
}

function InfoPortal({
  children,
  handleOutsideClick,
  isUserInfoPortalOpen,
  userInfoPortalRef,
  className,
}: IPortalProps) {
  if (!isUserInfoPortalOpen) return null

  return ReactDOM.createPortal(
    <div>
      <div
        ref={userInfoPortalRef}
        className="fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-[#1E1F20] opacity-30"
        onClick={handleOutsideClick}
        role="presentation"
      />
      <div
        className={`fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal')!,
  )
}

export default InfoPortal
