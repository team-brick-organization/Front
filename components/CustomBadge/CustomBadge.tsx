import { Cross1Icon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

interface IBadgeProps {
  type: 'primary' | 'tag' | 'search'
  size?: 'small' | 'medium' | 'large'
  className?: string
  onCrossClick?: () => void
  children: ReactNode
}

/**
 * type을 primary로 설정하면 size는 small, medium, large로 설정 가능
 */

function CustomBadge({
  type,
  size,
  className,
  onCrossClick,
  children,
}: IBadgeProps) {
  const sizeClass = () => {
    switch (size) {
      case 'small':
        return 'font-caption-01 px-8pxr py-2pxr rounded-full text-gray-01'

      case 'medium':
        return 'font-caption-02 px-8pxr py-2pxr rounded-full text-gray-01'

      case 'large':
        return 'font-body-01 px-12pxr py-4pxr rounded-full text-gray-01'

      default:
        return 'font-caption-02 px-8pxr py-2pxr rounded-full text-gray-01'
    }
  }

  const typeClass = () => {
    switch (type) {
      case 'primary':
        return sizeClass()

      case 'tag':
        return 'rounded-[.3125rem] border border-gray-04 !bg-gray-01 px-10pxr py-4pxr  mb:py-2pxr text-gray-06 font-caption-02'

      case 'search':
        return 'px-14pxr py-4pxr !bg-gray-02 flex gap-8pxr items-center w-fit rounded-full text-gray-08'

      default:
        return sizeClass()
    }
  }

  return (
    <div className={`bg-gray-10 ${typeClass()} ${className}`}>
      {children}
      {type === 'search' && (
        <button
          title="뱃지 삭제 버튼"
          className="outline-none"
          type="button"
          onClick={onCrossClick}
        >
          <Cross1Icon width={15} height={15} />
        </button>
      )}
    </div>
  )
}

export default CustomBadge
