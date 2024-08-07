import { CustomBadge } from '@/components/index'

interface ITagBadgeListProps {
  tags: string[]
}

function TagBadgeList({ tags }: ITagBadgeListProps) {
  return (
    <ul className="item-center inline-flex gap-4pxr">
      {tags.map((tag) => {
        if (tags.length === 0 || tag === '') return null

        return (
          <li key={tag} className="h-22pxr">
            <CustomBadge type="tag">{tag}</CustomBadge>
          </li>
        )
      })}
    </ul>
  )
}

export default TagBadgeList
