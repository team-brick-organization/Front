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
      setTags(tags.filter((tag) => tag !== tagName))
      return
    }
    setTags([...tags, tagName])
  }

  return (
    <ul
      className={`${className} flex flex-col items-center justify-center gap-8pxr px-40pxr`}
    >
      <li className="flex gap-8pxr">
        {CATEGORIES.slice(0, 8).map((category) => (
          <CategoryTag key={category} onTagClick={handleTagClick}>
            {category}
          </CategoryTag>
        ))}
      </li>
      <li className="flex gap-8pxr">
        {CATEGORIES.slice(9, 17).map((category) => (
          <CategoryTag key={category} onTagClick={handleTagClick}>
            {category}
          </CategoryTag>
        ))}
      </li>
      <li className="flex gap-8pxr">
        {CATEGORIES.slice(19, 26).map((category) => (
          <CategoryTag key={category} onTagClick={handleTagClick}>
            {category}
          </CategoryTag>
        ))}
      </li>
      <li className="flex gap-8pxr">
        {CATEGORIES.slice(27, 34).map((category) => (
          <CategoryTag key={category} onTagClick={handleTagClick}>
            {category}
          </CategoryTag>
        ))}
      </li>
    </ul>
  )
}

export default CategoryTagList
