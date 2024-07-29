interface ISortButtonsProps {
  sort: string
  onClickLatest: () => void
  onClickPopularity: () => void
}

function SortButtons({
  sort,
  onClickLatest,
  onClickPopularity,
}: ISortButtonsProps) {
  return (
    <div className="flex flex-row gap-16pxr">
      <button
        type="button"
        className={`${sort === '최신순' ? 'text-gray-10' : 'text-gray-06'} font-title-04`}
        onClick={onClickLatest}
      >
        최신순
      </button>
      <button
        type="button"
        className={`${sort === '인기순' ? 'text-gray-10' : 'text-gray-06'} font-title-04`}
        onClick={onClickPopularity}
      >
        인기순
      </button>
    </div>
  )
}

export default SortButtons
