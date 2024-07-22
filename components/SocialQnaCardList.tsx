'use client'

import { useState } from 'react'
import { Pagination, SocialQnaCard } from './index'
import { ISocialQnaContent } from './SocialQna'

interface ISocialQnaCardListProps {
  contents: ISocialQnaContent[]
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
          const {
            qnaId,
            // socialId, // 들어갈지 안드갈지 모르겠음 일단 주석처리
            title,
            content: cardContent,
            createdAt,
            profileImageUrl,
            name,
            commentCount,
            comments,
          } = content
          return (
            <li className="mt-24pxr w-full" key={qnaId}>
              <SocialQnaCard
                // qnaId={qnaId} // 들어갈지 안드갈지 모르겠음 일단 주석처리
                // socialId={socialId} // 들어갈지 안드갈지 모르겠음 일단 주석처리
                title={title}
                content={cardContent}
                createdAt={createdAt}
                profileImageUrl={profileImageUrl}
                name={name}
                commentCount={commentCount}
                comments={comments}
              />
              <div className="mt-24pxr h-1pxr w-full bg-gray-04" />
            </li>
          )
        })}
      </ul>
      <div className="mt-80pxr flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default SocialQnaCardList
