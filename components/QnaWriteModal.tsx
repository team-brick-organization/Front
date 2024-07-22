'use client'

import { useForm } from 'react-hook-form'
import { notify } from './ToastMessageTrigger'

interface IQnaWriteFormInputs {
  title: string
  content: string
}

interface IQnaWriteModalProps {
  onClose: () => void
}

function QnaWriteModal({ onClose }: IQnaWriteModalProps) {
  const { register, handleSubmit, watch } = useForm<IQnaWriteFormInputs>()

  const onSubmit = (data: IQnaWriteFormInputs) => {
    console.log(data)
    notify('게시글 작성이 완료되었습니다.')
    onClose()
  }

  const disabled = !watch('title') || !watch('content')

  return (
    <div className="h-full w-full rounded-[0.3125rem] bg-white px-24pxr py-80pxr mb:py-40pxr">
      <form
        className="flex h-full flex-col gap-40pxr mb:gap-24pxr"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="shrink-0 grow-0 bg-transparent text-gray-10 outline-none font-headline-03 placeholder:text-gray-04 mb:font-headline-02"
          placeholder="질문을 입력해 주세요"
          {...register('title', {
            required: '제목은 필수 입력입니다.',
          })}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />

        <div className="h-1pxr shrink-0 grow-0 bg-gray-04" />

        <div className="flex w-full grow flex-col items-end gap-24pxr px-24pxr mb:px-0pxr">
          <textarea
            {...register('content', {
              required: '내용은 필수 입력입니다.',
            })}
            className="w-full grow resize-none rounded-[0.625rem] border-none bg-gray-01 p-24pxr text-gray-10 outline-none font-body-02 placeholder:text-gray-04"
            placeholder="질문 내용을 작성해 주세요."
          />

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
