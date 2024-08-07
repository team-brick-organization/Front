'use client'

import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'

interface ICategoryTagProps {
  onTagClick: (tagName: string) => void
  children: string
}

function CategoryTag({ onTagClick, children }: ICategoryTagProps) {
  const { tags, setTags } = useSocialRegistrationStore()
  return (
    <button
      type="button"
      className={`text-nowrap rounded-[.3125rem] bg-gray-01 px-40pxr py-12pxr text-gray-10 transition-all duration-200 font-title-04 tb:px-30pxr tb:py-8pxr tb:font-title-02 ${tags.includes(children) ? '!bg-[#F64A19] !text-gray-01' : ''}`}
      onClick={() => {
        if (tags.includes(children)) {
          setTags(tags.filter((tag) => tag !== children))
          return
        }

        if (tags.length >= 3) return

        onTagClick(children)
      }}
    >
      {children}
    </button>
  )
}

export default CategoryTag
