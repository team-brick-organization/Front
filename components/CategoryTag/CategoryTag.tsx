interface ICategoryTagProps {
  children: string
  onTagClick: (tagName: string) => void
}

function CategoryTag({ onTagClick, children }: ICategoryTagProps) {
  return (
    <button
      type="button"
      className="text-nowrap rounded-[.3125rem] bg-gray-01 px-40pxr py-12pxr text-gray-10 font-title-04"
      onClick={() => onTagClick(children)}
    >
      {children}
    </button>
  )
}

export default CategoryTag
