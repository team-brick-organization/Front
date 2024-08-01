'use client'

import {
  BottomBar,
  ConfirmModal,
  DotsDropDownMenu,
  GatheringInfo,
  ImageViewer,
  Portal,
  SocialDetailPageTab,
  SocialDetailsImgCarouselProps,
} from '@/components/index'
import getEventStatus from '@/utils/getEventStatus'
import { Avatar } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import usePortal from '@/hooks/usePortal'
import formatDate from '@/utils/formatDate'
import getSocialDetail from '@/apis/getSocialDetail'
import { useParams, useRouter } from 'next/navigation'
import useUserDataStore from '@/stores/useUserDataStore'
import postJoinSocial from '@/apis/postJoinSocial'
import useUserStore from '@/stores/useUserStore'
import deleteSocial from '@/apis/deleteSocial'
import deleteCancelSocialParticipation from '@/apis/deleteSocialParticipation'
import { ISocialDetailData } from 'types/getSocialDetails'
import { notify } from '@/components/ToastMessageTrigger'

const fetchData1 = {
  place: {
    address: '대구시 북구 구암서로 22 1222212222222222223333',
    lat: 35.9364429433593,
    lng: 128.565589928605,
  },
}
/** @todo fetchData1.place 부분 수정해야함 */

function SocialDetailPage() {
  const [socialDetailData, setSocialDetailData] =
    useState<ISocialDetailData | null>(null)
  const [modalType, setModalType] = useState<'join' | 'cancel'>('join')
  const [isOwner, setIsOwner] = useState(false)
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const { accessToken } = useUserStore()
  const { userData } = useUserDataStore()
  const router = useRouter()
  const params = useParams()

  const isParticipant = socialDetailData?.participants.some(
    (i) => i.name === userData.name,
  )
  const onClickJoinButton = () => {
    setModalType('join')
    setIsPortalOpen(true)
  }

  // 참가 페치 보내기
  const fetchConfirmJoin = async () => {
    if (!socialDetailData) return
    try {
      const data = await postJoinSocial(accessToken, socialDetailData.id)
      const jsonfied = await data.json()
      if (!jsonfied.ok) {
        throw new Error('모임 참가를 실패했어요.')
      }
      router.refresh()
      router.refresh()
    } catch (error) {
      notify('모임 참가를 실패했어요.', 'error')
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const fetchSocialCancel = async () => {
    if (!socialDetailData || !socialDetailData.id) return
    try {
      const data = await deleteSocial(accessToken, socialDetailData?.id)
      if (!data.ok) {
        throw new Error('모임 취소를 실패했어요.')
      }
      router.push('/socials')
    } catch (error) {
      notify('모임 취소를 실패했어요', 'error')
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const fetchSocialJoinCancel = async () => {
    if (!socialDetailData?.participants.some((i) => i.name === userData.name)) {
      setIsPortalOpen(false)
      return
    }

    try {
      const data = await deleteCancelSocialParticipation(
        accessToken,
        Number(params.id),
      )

      if (!data.ok) {
        throw new Error('참가 취소를 실패했어요.')
      }
      router.refresh()
    } catch (error) {
      notify('참가 취소를 실패했어요', 'error')
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  // 소셜 참가 확인 버튼
  const onClickJoinOkButton = async () => {
    setIsPortalOpen(false)
    await fetchConfirmJoin()
  }

  // 소셜취소 확인 버튼
  const onClickSocialCancelOkButton = async () => {
    setIsPortalOpen(false)
    await fetchSocialCancel()
  }

  // 소셜 참가 취소 확인 버튼
  const onClickSocialJoinCancelOkButton = async () => {
    setIsPortalOpen(false)
    await fetchSocialJoinCancel()
  }

  useEffect(() => {
    setIsOwner(userData.name === socialDetailData?.owner.name)
  }, [socialDetailData, userData])

  useEffect(() => {
    // TODO: fetch data from server
    if (typeof Number(params.id) !== 'number') {
      router.push('/404')
    }

    const getSocialDetailData = async (id: number) => {
      try {
        const data = await getSocialDetail(id)
        console.log('data', data)

        if (!data.ok) console.error('error: ', data.status)

        const jsonfied = await data.json()
        console.log('jsonfied', jsonfied)

        setSocialDetailData(jsonfied)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching user data:', error)
      }
    }
    getSocialDetailData(Number(params.id))
    // setSocialDetailData(fetchData1)
  }, [params.id, router])

  const dropDownMenuItems = isOwner
    ? [
        {
          menuItem: '게시글 수정',
          onClick: () => {
            if (socialDetailData?.owner.name !== userData.name) return
            router.push(`/socials/${params.id}/edit`)
          },
        },
        {
          menuItem: `모임 취소`,
          onClick: () => {
            setModalType('cancel')
            setIsPortalOpen(true)
          },
        },
      ]
    : [
        {
          menuItem: `모임 취소`,
          onClick: () => {
            setModalType('cancel')
            setIsPortalOpen(true)
          },
        },
      ]

  if (!socialDetailData) return null

  const badgeText = getEventStatus(
    socialDetailData.gatheringDate,
    socialDetailData.participantCount.current,
    socialDetailData.participantCount.max,
  )

  return (
    <div className="flex justify-center px-20pxr pb-230pxr pt-20pxr">
      <div className="flex w-full max-w-1180pxr flex-col gap-40pxr">
        {socialDetailData?.imageUrls.length < 5 ? (
          <SocialDetailsImgCarouselProps images={socialDetailData.imageUrls} />
        ) : (
          <ImageViewer images={socialDetailData.imageUrls} />
        )}
        {/* <ImageViewer images={images} />
        {/* <SocialDetailsImgCarouselProps images={images} /> */}
        <div className="flex flex-col gap-16pxr">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex items-center gap-8pxr">
              <h1 className="text-gray-10 font-headline-03">
                {socialDetailData.name}
              </h1>
              {badgeText && (
                <p className="rounded-full bg-gray-10 px-10pxr py-4pxr text-gray-01 font-caption-02">
                  {badgeText}
                </p>
              )}
            </div>
            {isParticipant && (
              <DotsDropDownMenu
                direction="vertical"
                menuItems={dropDownMenuItems}
              />
            )}
          </div>
          <div className="flex items-center gap-4pxr">
            <Avatar
              className="h-23pxr w-23pxr rounded-full bg-gray-06"
              src={socialDetailData.owner.profileUrl}
              fallback={
                <div className="h-23pxr w-23pxr rounded-full bg-gray-06" />
              }
            />
            <span className="text-gray-08 font-title-01">
              {socialDetailData.owner.name}
            </span>
          </div>
          <div className="grid w-full grid-cols-[minmax(auto,680px)_minmax(auto,480px)] gap-20pxr mb:grid-cols-1 mb:gap-36pxr max759Min480:grid-cols-1 max759Min480:gap-36pxr">
            <div className="flex w-full max-w-680pxr flex-col mb:order-2 max759Min480:order-2">
              <SocialDetailPageTab
                description={socialDetailData.description}
                address={fetchData1.place.address}
                lat={fetchData1.place.lat}
                lng={fetchData1.place.lng}
                participants={socialDetailData.participants}
              />
            </div>
            <div className="relative h-full w-full max-w-480pxr mb:order-1 mb:max-w-full max759Min480:order-1 max759Min480:max-w-full">
              <div className="sticky top-0pxr h-fit w-full pt-42pxr max759Min480:static">
                <GatheringInfo
                  tags={socialDetailData.tags}
                  title={socialDetailData.name}
                  location={fetchData1.place.address}
                  date={socialDetailData.gatheringDate}
                  dues={socialDetailData.dues}
                  participantProfileImagesConfig={socialDetailData.participants.map(
                    (participant) => ({
                      imageUrl: participant.profileUrl,
                      fallback: participant.name.slice(0, 1),
                    }),
                  )}
                  participantsCurrentCount={
                    socialDetailData.participantCount.current
                  }
                  participantsMinCount={socialDetailData.participantCount.min}
                  participantsMaxCount={socialDetailData.participantCount.max}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-full w-full max-w-580pxr mb:px-20pxr"
      >
        {modalType === 'join' ? (
          <ConfirmModal
            type="confirm"
            title="모임 참가"
            onOkFunc={onClickJoinOkButton}
            onCancelFunc={() => {
              setIsPortalOpen(false)
            }}
          >
            <p>{formatDate(new Date(socialDetailData.gatheringDate))}</p>
            <p>{fetchData1.place.address}</p>
          </ConfirmModal>
        ) : (
          <ConfirmModal
            type="confirm"
            title={
              isOwner ? '개설된 모임을 취소할까요?' : '모임 참가를 취소할까요?'
            }
            onOkFunc={
              isOwner
                ? onClickSocialCancelOkButton
                : onClickSocialJoinCancelOkButton
            }
            onCancelFunc={() => {
              setIsPortalOpen(false)
            }}
          />
        )}
      </Portal>
      {isParticipant || (
        <BottomBar onButtonClick={onClickJoinButton}>같이하기</BottomBar>
      )}
    </div>
  )
}

export default SocialDetailPage
