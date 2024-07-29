'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import Button from './Button'

interface ConfirmModalProps {
  type?: 'confirm' | 'alert'
  title: string
  children?: string | React.ReactNode
  confirmFunc?: () => void
  cancelFunc?: () => void
}

/**
 *  확인 모달창
 * @param type : confirm, alert
 * @param title : 모달창 제목
 * @param children : 모달창내용 (문자열 또는 리엑트노드)
 * @param confirmFunc : 확인 버튼 클릭시 실행할 함수
 * @param cancelFunc : 취소 버튼 클릭시 실행할 함수
 */

function ConfirmModal({
  type = 'confirm',
  title,
  children,
  confirmFunc,
  cancelFunc,
}: ConfirmModalProps) {
  return (
    <div className="relative flex max-w-440pxr flex-col items-center gap-60pxr rounded-[.625rem] border bg-white px-20pxr pb-60pxr pt-88pxr">
      <section className="flex flex-col items-center gap-40pxr">
        <h1 className="text-gray-10 font-headline-03">{title}</h1>
        {children && (
          <p className="text-center text-gray-08 font-body-02">{children}</p>
        )}
      </section>
      <section className="flex w-full flex-row justify-center gap-16pxr">
        {type === 'confirm' ? (
          <>
            <Button size="SCancel" onClick={cancelFunc}>
              취소
            </Button>
            <Button size="S" onClick={confirmFunc}>
              확인
            </Button>
          </>
        ) : (
          <Button size="L" onClick={confirmFunc}>
            완료
          </Button>
        )}
      </section>
      <button
        type="button"
        onClick={cancelFunc}
        className="absolute right-20pxr top-30pxr"
      >
        <Cross2Icon width={28} height={28} />
      </button>
    </div>
  )
}

export default ConfirmModal
