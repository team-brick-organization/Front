'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import Button from './Button'

interface ConfirmModalProps {
  type?: 'confirm' | 'alert'
  title: string
  children?: string | React.ReactNode
  onOkFunc?: () => void
  onCancelFunc?: () => void
}

/**
 *  확인 모달창
 * @param type : confirm, alert
 * @param title : 모달창 제목
 * @param children : 모달창내용 (문자열 또는 리엑트노드)
 * @param onOkFunc : 확인 버튼 클릭시 실행할 함수
 * @param onCancelFunc : 취소 버튼 클릭시 실행할 함수
 */

function ConfirmModal({
  type = 'confirm',
  title,
  children,
  onOkFunc,
  onCancelFunc,
}: ConfirmModalProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="relative mx-auto flex w-full max-w-440pxr flex-col items-center gap-60pxr rounded-[.625rem] bg-white px-20pxr pb-60pxr pt-88pxr">
        <section className="flex flex-col items-center gap-40pxr">
          <h1 className="text-gray-10 font-headline-03">{title}</h1>
          {children && (
            <p className="text-center text-gray-08 font-body-02">{children}</p>
          )}
        </section>
        <section className="flex w-full flex-row justify-center gap-16pxr">
          {type === 'confirm' ? (
            <>
              <Button size="SCancel" onClick={onCancelFunc}>
                취소
              </Button>
              <Button size="S" onClick={onOkFunc}>
                확인
              </Button>
            </>
          ) : (
            <Button size="L" onClick={onOkFunc}>
              완료
            </Button>
          )}
        </section>
        <button
          title="닫기 버튼"
          type="button"
          onClick={onCancelFunc}
          className="absolute right-20pxr top-30pxr"
        >
          <Cross2Icon width={28} height={28} />
        </button>
      </div>
    </div>
  )
}

export default ConfirmModal
