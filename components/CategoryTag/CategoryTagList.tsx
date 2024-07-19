'use client'

import { CategoryTag } from '@/components'
import CATEGORIES from '@/constants/categories'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'

interface ICategoryListProps {
  className?: string
}

function CategoryTagList({ className }: ICategoryListProps) {
  const { tags, setTags } = useSocialRegistrationStore()
  const handleTagClick = (tagName: string) => {
    if (tags.includes(tagName)) {
      setTags(tags.filter((tag: string) => tag !== tagName))
      return
    }
    setTags([...tags, tagName])
  }

  return (
    <ul
      className={`flex max-w-1220pxr flex-wrap-reverse items-center justify-center gap-8pxr ${className}`}
    >
      {CATEGORIES.map((category) => (
        <li key={category}>
          <CategoryTag onTagClick={handleTagClick}>{category}</CategoryTag>
        </li>
      ))}
    </ul>
  )
}

export default CategoryTagList
