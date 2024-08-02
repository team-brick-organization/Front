'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
import useUserDataStore from '@/stores/useUserDataStore'
import { useForm } from 'react-hook-form'
import { Avatar } from '@radix-ui/themes'
import shortFormatDate from '@/utils/shortFormatDate'
import usePortal from '@/hooks/usePortal'
import { useParams, useRouter } from 'next/navigation'
import deleteQnA from '@/apis/deleteQnA'
import { useEffect, useState } from 'react'
import useUserStore from '@/stores/useUserStore'
import getQnAComment from '@/apis/getQnaComment'
import { PersonIcon } from '@radix-ui/react-icons'
import postQnAComment from '@/apis/postQnAComment'
import deleteQnAComment from '@/apis/deleteQnAComment'
import { ISocialQnaComment } from './SocialQna'
import { ConfirmModal, DotsDropDownMenu, Portal } from '.'
import { notify } from './ToastMessageTrigger'

interface IQnaDetailFormInputs {
  comment: string
}

interface IQnaDetailModalProps {
  qnaId: number | null
  title: string
  profileImageUrl: string
  name: string
  createdAt: string
  content: string
  commentCount: number
}

function QnaDetailModal({
  qnaId,
  title,
  profileImageUrl,
  name,
  createdAt,
  content,
  commentCount,
}: IQnaDetailModalProps) {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const { accessToken } = useUserStore()
  const { userData } = useUserDataStore()
  const [commentData, setCommentData] = useState([])
  const router = useRouter()
  const params = useParams()
  const formattedDate = shortFormatDate(new Date(createdAt))
  const isCommentExist = commentCount !== 0

  const handleClickDeleteModalOk = async () => {
    try {
      const data = await deleteQnA({
        accessToken,
        socialId: Number(params.id),
        qnaId: Number(qnaId),
      })
      const jsonfied = await data.json()
      if (!jsonfied.ok) {
        throw new Error('게시글 삭제에 실패했어요.')
      }
      router.refresh()
    } catch (error) {
      notify('게시글 삭제에 실패했어요.', 'error')
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const menuItems = [
    {
      menuItem: '게시글 수정',
      onClick: () => {
        // 수정 기능
      },
    },
    {
      menuItem: '게시글 삭제',
      onClick: () => {
        setIsPortalOpen(true)
      },
    },
  ]

  useEffect(() => {
    const getComments = async () => {
      // 추후에 페이지네이션 리미트 넣어줘야함
      if (qnaId === null) return

      try {
        const data = await getQnAComment(Number(params.id), qnaId, 90)
        console.log('data', data)

        // eslint-disable-next-line no-console
        if (!data.ok) console.error('error: ', data.status)

        const jsonfied = await data.json()
        console.log('commentData', jsonfied)

        setCommentData(jsonfied)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching user data:', error)
      }
    }
    getComments()
  }, [params, qnaId])

  return (
    <div className="h-full w-full overflow-y-scroll rounded-[0.3125rem] bg-white py-80pxr mb:py-40pxr">
      <div className="px-24pxr">
        <div className="flex flex-col gap-16pxr">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-10 font-headline-03">{title}</h1>
            {userData.name === name && (
              <DotsDropDownMenu direction="horizontal" menuItems={menuItems} />
            )}
          </div>
          <div className="flex items-center gap-8pxr">
            <div className="flex items-center gap-8pxr">
              <Avatar
                className="h-21pxr w-21pxr rounded-full bg-gray-04"
                src={profileImageUrl}
                fallback={
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
                    <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
                  </div>
                }
              />
              <span className="text-gray-08 font-body-01">{name}</span>
            </div>
            <span className="text-gray-06 font-caption-03">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="mb-60pxr mt-40pxr h-1pxr w-full bg-gray-04" />

        <CommentForm
          qnaId={qnaId}
          content={content}
          commentCount={commentCount}
        />
      </div>

      {isCommentExist && (
        <>
          <div className="mb-60pxr mt-101pxr h-10pxr w-full bg-gray-01" />
          <CommentList comments={commentData} qnaId={qnaId} />
        </>
      )}
      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-full w-full max-w-580pxr mb:px-20pxr"
        zIndex={6000}
      >
        <ConfirmModal
          type="confirm"
          title="게시글을 삭제할까요?"
          onOkFunc={handleClickDeleteModalOk}
          onCancelFunc={() => {
            setIsPortalOpen(false)
          }}
        />
      </Portal>
    </div>
  )
}

export default QnaDetailModal

function CommentForm({
  qnaId,
  content,
  commentCount,
}: {
  qnaId: number | null
  content: string
  commentCount: number
}) {
  const { register, handleSubmit, watch } = useForm<IQnaDetailFormInputs>()
  const { accessToken } = useUserStore()
  const disabled = !watch('comment')
  const params = useParams()

  const onSubmit = (data: IQnaDetailFormInputs) => {
    if (qnaId === null) return

    const postComment = async () => {
      try {
        const res = await postQnAComment(
          accessToken,
          Number(params.id),
          qnaId,
          data,
        )
        if (!res.ok) {
          throw new Error('댓글 등록에 실패했어요.')
        }
        notify('댓글이 등록되었어요.')
      } catch (error) {
        notify('댓글 등록에 실패했어요.', 'error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    postComment()
  }

  return (
    <form
      className="flex flex-col gap-180pxr px-24pxr mb:px-0pxr"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-gray-10 font-body-02">{content}</p>
      <div className="flex flex-col gap-24pxr">
        <h3 className="text-gray-10 font-title-04">
          댓글
          {commentCount !== 0 && (
            <span className="text-primary"> {commentCount}</span>
          )}
        </h3>
        <div className="flex flex-col items-end gap-8pxr">
          <textarea
            className="h-150pxr w-full resize-none bg-gray-01 p-24pxr text-gray-10 outline-none font-body-02 placeholder:text-gray-04"
            {...register('comment', {
              required: '답변은 필수 입력입니다.',
              maxLength: { value: 600, message: '600자 이내로 작성해 주세요.' },
            })}
            placeholder="답변을 작성해 주세요."
            maxLength={600}
          />
          <button
            className={`rounded-[0.625rem] bg-gray-10 px-18pxr py-8pxr text-gray-01 transition-all duration-200 font-body-01 ${disabled ? '!bg-gray-04' : ''}`}
            type="submit"
            disabled={disabled}
          >
            등록
          </button>
        </div>
      </div>
    </form>
  )
}

function CommentList({
  comments,
  qnaId,
}: {
  comments: ISocialQnaComment[]
  qnaId: number | null
}) {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const { userData } = useUserDataStore()
  const { accessToken } = useUserStore()
  const router = useRouter()
  const params = useParams()

  const onClickDeleteCommentOkButton = async (commentId: number) => {
    try {
      const data = await deleteQnAComment({
        accessToken,
        socialId: Number(params.id),
        qnaId: Number(qnaId),
        commentId,
      })

      if (!data.ok) {
        throw new Error('댓글 삭제에 실패했어요.')
      }
      router.refresh()
    } catch (error) {
      notify('댓글 삭제에 실패했어요.', 'error')
      // eslint-disable-next-line no-console
      console.error('Error fetching user data:', error)
    }
  }

  const menuItems = [
    {
      menuItem: '댓글 수정',
      onClick: () => {
        // 수정 기능
      },
    },
    {
      menuItem: '댓글 삭제',
      onClick: () => {
        setIsPortalOpen(true)
      },
    },
  ]

  return (
    <ul className="bg:px-24pxr flex flex-col gap-40pxr px-48pxr">
      {comments.map((comment) => {
        const {
          commentId,
          name: commentName,
          profileImageUrl: commentProfileImageUrl,
          createdAt: commentCreatedAt,
          content: commentContent,
        } = comment

        const commentFormattedDate = shortFormatDate(new Date(commentCreatedAt))

        return (
          <li className="w-full" key={commentId}>
            <div className="flex gap-16pxr">
              <Avatar
                className="h-40pxr w-40pxr rounded-full bg-[#D9D9D9]"
                src={commentProfileImageUrl}
                fallback={
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
                    <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
                  </div>
                }
              />
              <div className="flex w-full flex-col gap-16pxr">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-8pxr">
                    <h2 className="font-body-04 text-gray-10">{commentName}</h2>
                    <span className="text-gray-06 font-caption-02">
                      {commentFormattedDate}
                    </span>
                  </div>
                  {commentName === userData.name && (
                    <DotsDropDownMenu
                      direction="horizontal"
                      menuItems={menuItems}
                    />
                  )}
                </div>
                <p className="text-gray-08 font-body-01">{commentContent}</p>
              </div>
            </div>
            <div className="mt-40pxr h-1pxr w-full bg-gray-04" />
            <Portal
              handleOutsideClick={handleOutsideClick}
              isPortalOpen={isPortalOpen}
              portalRef={portalRef}
              className="h-full w-full max-w-580pxr mb:px-20pxr"
              zIndex={6000}
            >
              <ConfirmModal
                type="confirm"
                title="댓글을 삭제할까요?"
                onOkFunc={() => {
                  onClickDeleteCommentOkButton(commentId)
                }}
                onCancelFunc={() => {
                  setIsPortalOpen(false)
                }}
              />
            </Portal>
          </li>
        )
      })}
    </ul>
  )
}
