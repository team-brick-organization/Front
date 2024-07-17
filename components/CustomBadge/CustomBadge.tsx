import { Cross1Icon } from '@radix-ui/react-icons'
import { Badge } from '@radix-ui/themes'
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
        return 'font-caption-01 px-8pxr py-2pxr rounded-full text-[#F9FAFC]'

      case 'medium':
        return 'font-caption-02 px-8pxr py-2pxr rounded-full text-[#F9FAFC]'

      case 'large':
        return 'font-body-01 px-12pxr py-4pxr rounded-full text-[#F9FAFC]'

      default:
        return 'font-caption-02 px-8pxr py-2pxr rounded-full text-[#F9FAFC]'
    }
  }

  const typeClass = () => {
    switch (type) {
      case 'primary':
        return sizeClass()

      case 'tag':
        return 'rounded-[0.3125rem] border border-[#DDDEE0] bg-transparent px-10pxr py-4pxr  mb:py-2pxr text-[#DDDEE0] font-caption-02'

      case 'search':
        return 'px-14pxr py-4pxr !bg-[#F3F4F6] flex gap-8pxr items-center w-fit rounded-full text-[#5E5E60]'

      default:
        return sizeClass()
    }
  }

  return (
    <Badge className={`bg-[#1E1F20] ${typeClass()} ${className}`}>
      {children}
      {type === 'search' && (
        <button className="outline-none" type="button" onClick={onCrossClick}>
          <Cross1Icon width={15} height={15} />
        </button>
      )}
    </Badge>
  )
}

export default CustomBadge
