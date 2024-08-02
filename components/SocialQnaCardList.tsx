'use client'

import { useState } from 'react'
import { Pagination, SocialQnaCard } from './index'

interface ISocialQnaCardListProps {
  contents: IQnADatas[]
}
/** 추후 api 추가되면 로직 바뀌어야함 */
function SocialQnaCardList({ contents }: ISocialQnaCardListProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const slicedContents = contents.slice(
    (currentPage - 1) * 10,
    currentPage * 10,
  )

  return (
    <>
      <ul className="w-full">
        {slicedContents.map((content) => {
          return (
            <li className="mt-24pxr w-full" key={content.id}>
              <SocialQnaCard
                qnaId={content.id} // 들어갈지 안드갈지 모르겠음 일단 주석처리
                title={content.title}
                content={content.content}
                createdAt={content.createdAt}
                profileImageUrl={content.profileUrl}
                name={content.writerName}
                commentCount={content.commentCount}
              />
              <div className="mt-24pxr h-1pxr w-full bg-gray-04" />
            </li>
          )
        })}
      </ul>
      <div className="mt-80pxr flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={1}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default SocialQnaCardList
