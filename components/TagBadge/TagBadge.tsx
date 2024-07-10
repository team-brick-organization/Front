import { Badge } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface ITageBadgeProps {
  children: ReactNode
}

function TagBadge({ children }: ITageBadgeProps) {
  return (
    <Badge
      className="rounded-[0.3125rem] border border-[#DDDEE0] bg-transparent px-10pxr py-4pxr text-[#DDDEE0] font-caption-01"
      variant="solid"
    >
      {children}
    </Badge>
  )
}

export default TagBadge
