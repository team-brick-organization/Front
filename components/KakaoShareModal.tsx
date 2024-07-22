import { Cross1Icon } from '@radix-ui/react-icons'
import React from 'react'
import Image from 'next/image'
import kakaoTalkIcon from '@/public/images/svgs/kakaoTalkYellow.svg'
import { Button } from '.'
import { notify } from './ToastMessageTrigger'

interface IKakaoShareModalProps {
  onClose: () => void
}

function KakaoShareModal({ onClose: handleClose }: IKakaoShareModalProps) {
  const handleShearToKakao = () => {
    const { Kakao, location: windowLocation } = window
    Kakao.Share.sendScrap({
      requestUrl: windowLocation.href,
    })
  }

  return (
    <div className="flex w-440pxr flex-col gap-60pxr rounded-[0.625rem] bg-white px-20pxr pb-60pxr pt-30pxr">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-10 font-headline-03">공유하기</h1>
        <button
          title="닫기 버튼"
          type="button"
          onClick={() => {
            handleClose()
          }}
        >
          <Cross1Icon className="h-28pxr w-28pxr text-gray-10" />
        </button>
      </div>
      <div className="flex flex-col gap-8pxr">
        <Button
          size="L"
          className="flex items-center justify-center gap-8pxr !bg-gray-02 text-gray-10"
          onClick={() => {
            handleShearToKakao()
          }}
        >
          <Image
            src={kakaoTalkIcon}
            width={24}
            height={22}
            alt="카카오톡 아이콘"
          />
          카카오로 링크 공유하기
        </Button>
        <Button
          size="L"
          className="!bg-gray-02 text-gray-10"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            notify('링크가 복사되었습니다.')
            handleClose()
          }}
        >
          공유 링크 복사
        </Button>
      </div>
    </div>
  )
}

export default KakaoShareModal
