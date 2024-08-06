'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'
import useUserStore from '@/stores/useUserStore'
import useSocialQnACommentListStore from '@/stores/useSocialQnACommentListStore'
import patchEditComment from '@/apis/patchEditComment'
import { useEffect } from 'react'
import { notify } from './ToastMessageTrigger'
import Button from './Button'
import DisplayMaxLength from './DisplayMaxLength'

interface IQnaDetailFormInputs {
  comment: string
}

const MAX_LENGTH = 600

function CommentEditForm({
  qnaId,
  commentId,
  defaultContent,
  onCancel,
}: {
  qnaId: number | null
  commentId: number
  defaultContent: string
  onCancel: () => void
}) {
  const { register, handleSubmit, watch, reset } =
    useForm<IQnaDetailFormInputs>()
  const disabled = !watch('comment')
  const { socialQnACommentListDataReFetchTrigger } =
    useSocialQnACommentListStore()
  const { accessToken } = useUserStore()

  const params = useParams()
  const currentLength = watch('comment')?.length || 0

  const editComment = async (data: IQnaDetailFormInputs) => {
    try {
      const res = await patchEditComment({
        accessToken,
        socialId: Number(params.id),
        qnaId: Number(qnaId),
        commentId,
        body: data,
      })
      console.log('res', res)
      // eslint-disable-next-line no-console
      if (!res.ok) {
        throw new Error('댓글 수정에 실패했습니다.')
      }
      const jsonfied = await res.json()
      console.log('jsonfied', jsonfied)
      socialQnACommentListDataReFetchTrigger()
      notify('댓글 수정을 수정했어요')
      onCancel()
    } catch (error) {
      notify('댓글 수정에 실패했어요', 'error')
      // eslint-disable-next-line no-console
      console.error('Error fetching user data:', error)
    }
  }

  const onSubmit = (data: IQnaDetailFormInputs) => {
    if (qnaId === null) return

    editComment(data)
  }

  useEffect(() => {
    reset({ comment: defaultContent })
  }, [reset, defaultContent])

  return (
    <form className="mb:px-0pxr" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-end gap-16pxr">
        <div className="flex w-full flex-col items-end gap-4pxr">
          <textarea
            className="h-98pxr w-full resize-none bg-gray-01 p-24pxr text-gray-10 outline-none font-body-02 placeholder:text-gray-04"
            {...register('comment', {
              required: '답변은 필수 입력입니다.',
              maxLength: {
                value: MAX_LENGTH,
                message: '600자 이내로 작성해 주세요.',
              },
            })}
            placeholder="답변을 작성해 주세요."
            maxLength={MAX_LENGTH}
          />
          <DisplayMaxLength
            maxLength={MAX_LENGTH}
            currentLength={currentLength}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-12pxr">
          <Button
            onClick={onCancel}
            size="XS"
            className="!bg-gray-03 text-gray-10"
            type="button"
          >
            취소
          </Button>
          <Button size="XS" type="submit" disabled={disabled}>
            등록
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CommentEditForm
