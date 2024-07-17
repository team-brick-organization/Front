import { CustomBadge } from '@/components/index'

interface ITagBadgeListProps {
  tags: string[]
}

function TagBadgeList({ tags }: ITagBadgeListProps) {
  return (
    <ul className="item-center flex gap-4pxr">
      {tags.map((tag) => (
        <li key={tag} className="h-22pxr">
          <CustomBadge type="tag">{tag}</CustomBadge>
        </li>
      ))}
    </ul>
  )
}

export default TagBadgeList
