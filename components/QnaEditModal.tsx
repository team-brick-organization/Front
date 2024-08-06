'use client'

import useUserStore from '@/stores/useUserStore'
import { useForm } from 'react-hook-form'
import useSocialQnAListStore from '@/stores/useSocialQnAListStore'
import { useParams } from 'next/navigation'
import { Avatar } from '@radix-ui/themes'
import { PersonIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import shortFormatDate from '@/utils/shortFormatDate'
import patchEditQnA from '@/apis/patchEditQnA'
import DisplayMaxLength from './DisplayMaxLength'
import { notify } from './ToastMessageTrigger'

interface IQnaEditFormInputs {
  title: string
  content: string
}

interface IQnaWriteModalProps {
  onClose: () => void
  qnaId: number | null
  title: string
  content: string
  profileImageUrl: string
  createdAt: string
}

function QnaEditModal({
  onClose,
  qnaId,
  title,
  content,
  profileImageUrl,
  createdAt,
}: IQnaWriteModalProps) {
  const { SocialQnAListDataReFetchTrigger } = useSocialQnAListStore()
  const { register, handleSubmit, watch, reset } = useForm<IQnaEditFormInputs>()
  const { accessToken } = useUserStore()
  const params = useParams()
  const formattedDate = shortFormatDate(new Date(createdAt))

  const onSubmit = async (data: IQnaEditFormInputs) => {
    try {
      const res = await patchEditQnA({
        accessToken,
        socialId: Number(params.id),
        qnaId: Number(qnaId),
        body: data,
      })
      if (!res.ok) {
        throw new Error('질문 수정에 실패했어요.')
      }
      notify('질문 수정이 완료되었어요.')
      SocialQnAListDataReFetchTrigger()
      onClose()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      notify('질문 수정에 실패했어요.')
    }
  }

  const disabled = !watch('title') || !watch('content')

  useEffect(() => {
    reset({ title, content })
  }, [title, content, reset])

  return (
    <div className="h-full w-full overflow-y-scroll rounded-[0.3125rem] bg-white px-24pxr py-80pxr mb:py-40pxr">
      <form
        className="flex h-full flex-col gap-40pxr divide-y divide-gray-04 mb:gap-24pxr"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex w-full flex-col gap-16pxr">
          <input
            className="shrink-0 grow-0 bg-transparent text-gray-10 outline-none font-headline-03 placeholder:text-gray-04 mb:font-headline-02"
            placeholder="질문을 입력해 주세요"
            {...register('title', {
              required: '제목은 필수 입력입니다.',
              maxLength: { value: 40, message: '40자 이내로 작성해 주세요.' },
            })}
            maxLength={40}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />

          <div className="flex flex-row gap-16pxr">
            <Avatar
              className="h-21pxr w-21pxr rounded-full bg-gray-04"
              src={profileImageUrl}
              fallback={
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-04">
                  <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
                </div>
              }
            />
            <span className="text-gray-08 font-body-01">{formattedDate}</span>
          </div>
        </section>

        <div className="flex w-full grow flex-col items-end gap-24pxr px-24pxr mb:px-0pxr">
          <div className="flex w-full grow flex-col">
            <textarea
              {...register('content', {
                required: '내용은 필수 입력입니다.',
                maxLength: {
                  value: 600,
                  message: '600자 이내로 작성해 주세요.',
                },
              })}
              className="w-full grow resize-none border-none pt-40pxr text-gray-10 outline-none font-body-02 placeholder:text-gray-04 mb:p-0pxr"
              placeholder="질문 내용을 작성해 주세요."
              maxLength={600}
            />
            <div className="mt-4pxr">
              <DisplayMaxLength
                currentLength={watch('content') ? watch('content').length : 0}
                maxLength={600}
              />
            </div>
          </div>

          <button
            className={`rounded-[0.625rem] bg-gray-10 px-40pxr py-8pxr text-gray-01 font-title-04 ${disabled ? '!bg-gray-04' : ''}`}
            type="submit"
            disabled={disabled}
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  )
}

export default QnaEditModal
