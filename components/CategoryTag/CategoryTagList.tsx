import { CategoryTag } from '@/components'

interface ICategoryListProps {
  categories: string[]
  className: string
}

function CategoryTagList({ categories, className }: ICategoryListProps) {
  return (
    <ul className={`${className} flex gap-8pxr px-40pxr`}>
      {categories.map((category) => (
        <li key={category}>
          <CategoryTag>{category}</CategoryTag>
        </li>
      ))}
    </ul>
  )
}

export default CategoryTagList
