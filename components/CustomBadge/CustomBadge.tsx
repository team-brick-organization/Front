import { Badge } from '@radix-ui/themes'

interface IBadgeProps {
  type: 'primary' | 'tag'
  size?: 'small' | 'medium' | 'large'
  className?: string
  children: string
}

/**
 * type을 primary로 설정하면 size는 small, medium, large로 설정 가능
 */

function CustomBadge({ type, size, className, children }: IBadgeProps) {
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

  const typeClass =
    type === 'tag'
      ? 'rounded-[0.3125rem] border border-[#DDDEE0] bg-transparent px-10pxr py-4pxr text-[#DDDEE0] font-caption-02'
      : sizeClass()

  return (
    <Badge className={`bg-[#1E1F20] ${typeClass} ${className}`}>
      {children}
    </Badge>
  )
}

export default CustomBadge
