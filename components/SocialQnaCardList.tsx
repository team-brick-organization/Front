'use client'

import { SocialQnaCard } from './index'

interface ISocialQnaCardListProps {
  contents: IQnADatas[]
}
/** 추후 api 추가되면 로직 바뀌어야함 */
function SocialQnaCardList({ contents }: ISocialQnaCardListProps) {
  return (
    <ul className="w-full">
      {contents?.map((content) => {
        return (
          <li className="mt-24pxr w-full" key={content.id}>
            <SocialQnaCard
              qnaId={content.id} // 들어갈지 안드갈지 모르겠음 일단 주석처리
              title={content.title}
              content={content.content}
              createdAt={content.createdAt}
              profileImageUrl={content.writerProfileImageUrl}
              name={content.writerName}
              commentCount={content.commentCount}
            />
            <div className="mt-24pxr h-1pxr w-full bg-gray-04" />
          </li>
        )
      })}
    </ul>
  )
}

export default SocialQnaCardList
