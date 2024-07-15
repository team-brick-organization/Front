import { ReactNode } from 'react'

interface ICategoryTagProps {
  children: ReactNode
}

function CategoryTag({ children }: ICategoryTagProps) {
  return (
    <button
      type="button"
      className="text-nowrap rounded-[.3125rem] bg-[#EBECEE] px-40pxr py-12pxr text-[#1E1F20] font-title-04"
    >
      {children}
    </button>
  )
}

export default CategoryTag
