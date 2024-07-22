'use client'

import { Avatar } from '@radix-ui/themes'
import usePortal from '@/hooks/usePortal'
import shortFormatDate from '@/utils/shortFormatDate'
import { Portal, QnaDetailModal } from './index'
import { ISocialQnaComment } from './SocialQna'

interface ISocialQnaCardProps {
  // qnaId: number
  // socialId: number
  title: string
  content: string
  createdAt: string
  profileImageUrl: string
  name: string
  commentCount: number
  comments: ISocialQnaComment[]
}

function SocialQnaCard({
  // qnaId,
  // socialId,
  title,
  content,
  createdAt,
  profileImageUrl,
  name,
  commentCount,
  comments,
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
              <div className="flex h-21pxr w-21pxr items-center justify-center rounded-full bg-gray-04 text-gray-10 font-caption-02">
                {name.charAt(0)}
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
          title={title}
          profileImageUrl={profileImageUrl}
          name={name}
          createdAt={createdAt}
          content={content}
          commentCount={commentCount}
          comments={comments}
        />
      </Portal>
    </div>
  )
}

export default SocialQnaCard
