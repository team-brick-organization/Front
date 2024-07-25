'use client'

import ChevronLeft from '@/public/images/svgs/chevronleft'
import ChevronRight from '@/public/images/svgs/chevronright'
import { useMemo } from 'react'

interface IPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  scrollToTop?: boolean
}

/**
 * Pagination component
 * @param currentPage Current page number
 * @param totalPages Total page number
 * @param onPageChange Page change event
 * @param scrollToTop Scroll to top when page changes
 * @returns Pagination component
 * @example
 * ```tsx
 * <Pagination
 *  currentPage={currentPage}
 *  totalPages={totalPages}
 *  onPageChange={handlePageChange}
 * />
 */
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  scrollToTop = true,
}: IPaginationProps) {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    onPageChange(page)
  }

  const renderPageNumbers = useMemo(() => {
    if (scrollToTop && typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
    const pageNumbers = []
    const totalPageBlocks = Math.ceil(totalPages / 5)

    const currentBlock = Math.floor((currentPage - 1) / 5)
    const startPage = currentBlock * 5 + 1
    const endPage = Math.min(startPage + 4, totalPages)

    for (let i = startPage; i <= endPage; i += 1) {
      pageNumbers.push(i)
    }

    if (currentBlock < totalPageBlocks - 1) {
      pageNumbers.push('-')
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }, [currentPage, scrollToTop, totalPages])

  const getPageItemClass = ({
    currentLength,
    index,
  }: {
    currentLength: number
    index: number
  }) => {
    if (currentLength <= 5) return ''

    if (index < 4) {
      return 'pl-12pxr pr-12pxr'
    }

    if (index === 4) {
      return 'pl-12pxr pr-6pxr'
    }

    if (index === 5) {
      return 'pl-6pxr pr-6pxr'
    }

    return 'pl-6pxr pr-0pxr'
  }

  return (
    <div className="flex gap-12pxr">
      <button
        title="Previous"
        type="button"
        onClick={() => {
          if (currentPage === 1) return
          handlePageChange(currentPage - 1)
        }}
        disabled={currentPage === 1}
      >
        <ChevronLeft fill={currentPage === 1 ? '#9A9B9D' : '#1E1F20'} />
      </button>
      <ul
        className={`flex items-center ${renderPageNumbers.length <= 5 ? 'gap-24pxr' : ''}`}
      >
        {renderPageNumbers.map((page, index) => (
          <li
            key={page}
            className={`${getPageItemClass({ currentLength: renderPageNumbers.length, index })}`}
          >
            {page === '-' ? (
              <div className="h-2pxr w-12pxr bg-gray-06" />
            ) : (
              <button
                type="button"
                onClick={() => handlePageChange(page as number)}
                className={`text-gray-06 font-title-04 ${currentPage === page ? 'text-gray-10' : ''}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        title="Next"
        type="button"
        onClick={() => {
          if (currentPage === totalPages) return
          handlePageChange(currentPage + 1)
        }}
        disabled={currentPage === totalPages}
      >
        <ChevronRight
          fill={currentPage === totalPages ? '#9A9B9D' : '#1E1F20'}
        />
      </button>
    </div>
  )
}

export default Pagination
