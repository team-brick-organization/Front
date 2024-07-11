import { TagBadge } from '@/components'

interface ITagBadgeListProps {
  tags: string[]
}

function TagBadgeList({ tags }: ITagBadgeListProps) {
  return (
    <ul className="flex gap-4pxr">
      {tags.map((tag) => (
        <li key={tag}>
          <TagBadge>{tag}</TagBadge>
        </li>
      ))}
    </ul>
  )
}

export default TagBadgeList
