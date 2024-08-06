'use client'

import Image from 'next/image'
import penIcon from '@/public/images/svgs/pen.svg'
import usePortal from '@/hooks/usePortal'
import useUserStore from '@/stores/useUserStore'
import { useEffect, useState } from 'react'
import getQnA from '@/apis/getQnA'
import { useParams } from 'next/navigation'
import useSocialQnAListStore from '@/stores/useSocialQnAListStore'
import useSocialDetailStore from '@/stores/useSocialDetailStore'
import { Portal, Pagination, QnaWriteModal, SocialQnaCardList } from './index'
import { notify } from './ToastMessageTrigger'

export interface ISocialQnaComment {
  commentId: number
  name: string
  profileImageUrl: string
  createdAt: string
  content: string
}

export interface ISocialQnaContent {
  qnaId: number
  socialId: number
  title: string
  content: string
  profileImageUrl: string
  name: string
  commentCount: number
  comments: ISocialQnaComment[]
  createdAt: string
}

/**
 * Q&A 탭 컴포넌트
 * @todo 페이지네이션 해야함
 */

function SocialQna() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const { SocialQnAListData, setSocialQnAListData, fetchSocialQnAListData } =
    useSocialQnAListStore()
  const { socialDetailData } = useSocialDetailStore()
  const [pageNum, setPageNum] = useState(0)
  const { accessToken } = useUserStore()
  const params = useParams()

  const handlePageChange = (page: number) => {
    setPageNum(page - 1)
  }

  useEffect(() => {
    const getQnAData = async () => {
      try {
        const data = await getQnA({
          id: Number(params.id),
          pageNum,
          size: 10,
        })
        if (!data.ok) {
          throw new Error('QnA불러오기를 실패했어요')
        }
        const jsonfied = await data.json()

        setSocialQnAListData(jsonfied)
      } catch (error) {
        notify('QnA불러오기를 실패했어요', 'error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    getQnAData()
  }, [params, setSocialQnAListData, fetchSocialQnAListData, pageNum])

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-gray-10 font-title-04">
          게시글
          <span className="ml-4pxr text-gray-05">
            {SocialQnAListData?.totalElement}
          </span>
        </h3>
        {accessToken !== '' && !socialDetailData.canceled && (
          <button
            className="flex items-center gap-4pxr font-body-02"
            type="button"
            onClick={() => setIsPortalOpen(true)}
          >
            <Image src={penIcon} alt="펜 아이콘" /> 새 글 작성
          </button>
        )}
      </div>
      <div className="mt-24pxr">
        <SocialQnaCardList contents={SocialQnAListData.socials} />
        {SocialQnAListData.totalElement > 0 && (
          <div className="mt-80pxr flex justify-center">
            <Pagination
              currentPage={SocialQnAListData.currentPage + 1}
              totalPages={SocialQnAListData.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
      <Portal
        portalRef={portalRef}
        isPortalOpen={isPortalOpen}
        handleOutsideClick={handleOutsideClick}
        className="h-full w-full max-w-1017pxr px-20pxr pb-160pxr pt-80pxr"
      >
        <QnaWriteModal onClose={() => setIsPortalOpen(false)} />
      </Portal>
    </>
  )
}

export default SocialQna
