'use client'

import { Avatar } from '@radix-ui/themes'
import usePortal from '@/hooks/usePortal'
import { PersonIcon } from '@radix-ui/react-icons'
import shortFormatDate from '@/utils/shortFormatDate'
import { Portal, QnaDetailModal } from './index'

interface ISocialQnaCardProps {
  qnaId: number | null
  title: string
  content: string
  createdAt: string
  profileImageUrl: string
  name: string
  commentCount: number
}
/**
 * Q&A 카드 컴포넌트
 * @todo qna댓글 불러오기,페이지네이션
 */

function SocialQnaCard({
  qnaId,
  title,
  content,
  createdAt,
  profileImageUrl,
  name,
  commentCount,
}: ISocialQnaCardProps) {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const formattedDate = shortFormatDate(new Date(createdAt))

  return (
    <div className="w-full">
      <button
        className="w-full text-start"
        type="button"
        onClick={() => setIsPortalOpen(true)}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-gray-10 font-title-04">{title}</h1>
          <span className="text-gray-06 font-caption-02">{formattedDate}</span>
        </div>
        <p className="mt-8pxr line-clamp-2 h-34pxr w-full text-ellipsis text-gray-08 font-caption-03">
          {content}
        </p>
      </button>
      <div className="mt-24pxr flex items-center justify-between">
        <div className="flex items-center gap-8pxr">
          <Avatar
            className="h-21pxr w-21pxr rounded-full"
            src={profileImageUrl}
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
                <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
              </div>
            }
          />
          <span className="text-gray-08 font-body-01">{name}</span>
        </div>
        <p className="text-gray-08 font-body-01">
          댓글
          <span className="ml-4pxr">{commentCount}</span>
        </p>
      </div>
      <Portal
        portalRef={portalRef}
        isPortalOpen={isPortalOpen}
        handleOutsideClick={handleOutsideClick}
        className="h-full w-full max-w-1017pxr px-20pxr pb-160pxr pt-80pxr"
      >
        <QnaDetailModal
          qnaId={qnaId}
          title={title}
          profileImageUrl={profileImageUrl}
          name={name}
          createdAt={createdAt}
          content={content}
          commentCount={commentCount}
        />
      </Portal>
    </div>
  )
}

export default SocialQnaCard
