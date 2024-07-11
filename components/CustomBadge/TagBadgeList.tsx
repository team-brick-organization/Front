import { CustomBadge } from '@/components/index'

interface ITagBadgeListProps {
  tags: string[]
}

function TagBadgeList({ tags }: ITagBadgeListProps) {
  return (
    <ul className="flex gap-4pxr">
      {tags.map((tag) => (
        <li key={tag}>
          <CustomBadge type="tag">{tag}</CustomBadge>
        </li>
      ))}
    </ul>
  )
}

export default TagBadgeList
