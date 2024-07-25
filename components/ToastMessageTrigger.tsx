'use client'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Bounce, toast } from 'react-toastify'

interface ToastMessageProps {
  type?: 'default' | 'error'
  text: string
  children: React.ReactNode
}

/**
 * 토스트 메시지를 띄워주는 함수 실행시 문구와 타입대로 토스트 메시지를 띄워줍니다.
 * @param text - 토스트 메시지 내용
 * @param type - 토스트 메시지 타입
 */

export const notify = (text: string, type: 'error' | 'default' = 'default') => {
  toast(
    <div className="flex w-full max-w-400pxr flex-row items-center justify-center gap-16pxr rounded-[.3125rem] bg-black px-10pxr py-12pxr">
      {type === 'error' && (
        <ExclamationTriangleIcon
          width={18}
          height={18}
          className="shrink-0 text-error"
        />
      )}
      <p className="text-gray-01 font-body-02 mb:text-pretty">{text}</p>
    </div>,
    {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'night',
      closeButton: false,
      transition: Bounce,
    },
  )
}

/**
 * 트리거로 감싸주면 토스트 메시지를 띄워줍니다.
 * @param text - 토스트 메시지 내용
 * @param type - 토스트 메시지 타입
 * @param children - 토스트 메시지를 띄우기 위한 트리거대상
 */
function ToastMessageTrigger({
  type = 'default',
  children,
  text,
}: ToastMessageProps) {
  return <div onClick={() => notify(text, type)}>{children}</div>
}

export default ToastMessageTrigger
