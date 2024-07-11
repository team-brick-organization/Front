import { ForwardedRef, ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface IPortalProps {
  children: ReactNode
  handleOutsideClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  isPortalOpen: boolean
  portalRef: ForwardedRef<HTMLDivElement>
}

function Portal({
  children,
  handleOutsideClick,
  isPortalOpen,
  portalRef,
}: IPortalProps) {
  if (!isPortalOpen) return null

  return ReactDOM.createPortal(
    <div>
      <div
        ref={portalRef}
        className="fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-[#1E1F20] opacity-30"
        onClick={handleOutsideClick}
        role="presentation"
      >
        <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal')!,
  )
}

export default Portal
