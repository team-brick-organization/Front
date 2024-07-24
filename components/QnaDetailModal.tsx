'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
import { useForm } from 'react-hook-form'
import { Avatar } from '@radix-ui/themes'
import shortFormatDate from '@/utils/shortFormatDate'
import { DotsDropDownMenu } from '.'
import { ISocialQnaComment } from './SocialQna'

interface IQnaDetailFormInputs {
  comment: string
}

interface IQnaDetailModalProps {
  title: string
  profileImageUrl: string
  name: string
  createdAt: string
  content: string
  commentCount: number
  comments: ISocialQnaComment[]
}

function QnaDetailModal({
  title,
  profileImageUrl,
  name,
  createdAt,
  content,
  commentCount,
  comments,
}: IQnaDetailModalProps) {
  const formattedDate = shortFormatDate(new Date(createdAt))
  const isCommentExist = commentCount !== 0

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
        // 삭제 기능
      },
    },
  ]

  return (
    <div className="h-full w-full overflow-y-scroll rounded-[0.3125rem] bg-white py-80pxr mb:py-40pxr">
      <div className="px-24pxr">
        <div className="flex flex-col gap-16pxr">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-10 font-headline-03">{title}</h1>
            <DotsDropDownMenu direction="horizontal" menuItems={menuItems} />
            {/* // qna 생성한 유저에게만 보여야함 */}
          </div>
          <div className="flex items-center gap-8pxr">
            <div className="flex items-center gap-8pxr">
              <Avatar
                className="h-21pxr w-21pxr rounded-full bg-gray-04"
                src={profileImageUrl}
                fallback={
                  <div className="h-21pxr w-21pxr rounded-full bg-gray-04" />
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

        <CommentForm content={content} commentCount={commentCount} />
      </div>

      {isCommentExist && (
        <>
          <div className="mb-60pxr mt-101pxr h-10pxr w-full bg-gray-01" />
          <CommentList comments={comments} />
        </>
      )}
    </div>
  )
}

export default QnaDetailModal

function CommentForm({
  content,
  commentCount,
}: {
  content: string
  commentCount: number
}) {
  const { register, handleSubmit, watch } = useForm<IQnaDetailFormInputs>()

  const disabled = !watch('comment')

  const onSubmit = (data: IQnaDetailFormInputs) => {
    console.log(data)
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

function CommentList({ comments }: { comments: ISocialQnaComment[] }) {
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
        // 삭제 기능
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
                  <div className="h-40pxr w-40pxr rounded-full bg-[#D9D9D9]" />
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
                  {/* // qna 댓글 생성한 유저에게만 보여야함 */}
                  <DotsDropDownMenu
                    direction="horizontal"
                    menuItems={menuItems}
                  />
                </div>
                <p className="text-gray-08 font-body-01">{commentContent}</p>
              </div>
            </div>
            <div className="mt-40pxr h-1pxr w-full bg-gray-04" />
          </li>
        )
      })}
    </ul>
  )
}
