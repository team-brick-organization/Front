'use client'

import useUserStore from '@/stores/useUserStore'
import { useForm } from 'react-hook-form'
import postQnA from '@/apis/postQnA'
import useSocialQnAListStore from '@/stores/useSocialQnAListStore'
import { useParams } from 'next/navigation'
import DisplayMaxLength from './DisplayMaxLength'
import { notify } from './ToastMessageTrigger'

interface IQnaWriteFormInputs {
  title: string
  content: string
}

interface IQnaWriteModalProps {
  onClose: () => void
}

function QnaWriteModal({ onClose }: IQnaWriteModalProps) {
  const { SocialQnAListDataReFetchTrigger } = useSocialQnAListStore()
  const { register, handleSubmit, watch } = useForm<IQnaWriteFormInputs>()
  const { accessToken } = useUserStore()
  const params = useParams()

  const onSubmit = async (data: IQnaWriteFormInputs) => {
    try {
      const res = await postQnA({
        accessToken,
        id: Number(params.id),
        body: data,
      })
      if (!res.ok) {
        throw new Error('질문 등록에 실패했어요.')
      }
      notify('질문 등록이 완료되었어요.')
      SocialQnAListDataReFetchTrigger()
      onClose()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      notify('질문 등록에 실패했어요.')
    }
  }

  const disabled = !watch('title') || !watch('content')

  return (
    <div className="h-full w-full overflow-y-scroll rounded-[0.3125rem] bg-white px-24pxr py-80pxr mb:py-40pxr">
      <form
        className="flex h-full flex-col gap-40pxr mb:gap-24pxr"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <div className="h-1pxr shrink-0 grow-0 bg-gray-04" />

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
              className="w-full grow resize-none border-none text-gray-10 outline-none font-body-02 placeholder:text-gray-04 mb:p-0pxr"
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

export default QnaWriteModal
