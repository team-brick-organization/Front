'use client'

import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useImageFiles from '@/hooks/useImageFiles'
import openPostCodeSearch from '@/utils/openPostCodeSearch'
import useDate from '@/hooks/useDate'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import { useParams, useRouter } from 'next/navigation'
import postSocial from '@/apis/postSocial'
import useUserStore from '@/stores/useUserStore'
import getSocialDetail from '@/apis/getSocialDetail'
import useUserDataStore from '@/stores/useUserDataStore'
import patchSocial from '@/apis/patchSocial'
import { UploadImages } from '../index'
import { notify } from '../ToastMessageTrigger'
import SocialNameSection from './SocialNameSection'
import SocialCapacitySection from './SocialCapacitySection'
import SocialIntroduceSection from './SocialIntroduceSection'
import SocialTagsSection from './SocialTagsSection'
import SocialDuesSection from './SocialDuesSection'
import SocialPlaceSection from './SocialPlaceSection'
import SocialDateTimeSection from './SocialDateTimeSection'

export interface ISocialRegistrationInputs {
  socialName: string
  socialIntroduce: string
  socialMinPeople: number
  socialMaxPeople: number
  socialAddressDetail: string
  socialDues: number
}

interface ISocialRegistrationFormProps {
  isEditForm?: boolean
}

function SocialRegistrationForm({
  isEditForm = false,
}: ISocialRegistrationFormProps) {
  const { accessToken } = useUserStore()
  const { userData } = useUserDataStore()
  const router = useRouter()
  const params = useParams()
  const [initialData, setInitialData] = useState<IGetSocialDetail | null>(null)
  const [address, setAddress] = useState<{
    address: string | null
    lat: number | null
    lng: number | null
    isError: boolean
  }>({
    address: null,
    lat: null,
    lng: null,
    isError: false,
  })
  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 60,
  })
  const {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleThumbnailChange,
    handleImageDelete,
    handleInitialImages,
    error,
    setError,
  } = useImageFiles({ imageLimit: 5 })
  const methods = useForm<ISocialRegistrationInputs>()
  const { registrationButtonRef, tags, setTags } = useSocialRegistrationStore()

  const onSubmit = async (data: ISocialRegistrationInputs) => {
    const gatheringDate = selectedDateTime?.toISOString()
    const { address: socialAddress, lat, lng } = address
    const isAddressValid = socialAddress && lat && lng

    if (
      imageUrls.length === 0 ||
      !isAddressValid ||
      Number(data.socialMinPeople) > Number(data.socialMaxPeople) ||
      !gatheringDate
    ) {
      setError(true)
      setAddress((prev) => ({ ...prev, isError: !isAddressValid }))

      if (Number(data.socialMinPeople) > Number(data.socialMaxPeople)) {
        methods.setError('socialMaxPeople', {
          type: 'min',
          message: '최소 인원은 최대 인원보다 적을 수 없습니다.',
        })
      }

      return
    }

    if (isEditForm) {
      const body = {
        name: data.socialName,
        description: data.socialIntroduce,
        place: {
          address: socialAddress,
          detailAddress: data.socialAddressDetail,
          latitude: lat,
          longitude: lng,
        },
        imageUrls,
      }

      try {
        const response = await patchSocial({
          accessToken,
          body,
          socialId: Number(params.id),
        })

        if (!response.ok) {
          notify('모임 수정에 실패했어요.', 'error')
          return
        }

        router.push(`/socials/${params.id}`)
      } catch (onSubmitError) {
        notify('모임 수정 중 오류가 발생했습니다.', 'error')
      }

      return
    }

    const body = {
      name: data.socialName,
      description: data.socialIntroduce,
      gatheringDate,
      participantCount: {
        min: data.socialMinPeople,
        max: data.socialMaxPeople,
        current: 0,
      },
      place: {
        address: socialAddress,
        detailAddress: data.socialAddressDetail,
        latitude: lat,
        longitude: lng,
      },
      imageUrls,
      dues: data.socialDues,
      tags,
    }

    try {
      const response = await postSocial({ accessToken, body })

      if (!response.ok) {
        notify('모임 등록에 실패했어요.', 'error')
        return
      }

      const res = await response.json()
      router.push(`/socials/${res.id}`)
    } catch (onSubmitError) {
      notify('모임 등록 중 오류가 발생했어요.', 'error')
    }
  }

  const handleAddressSearch = () => {
    openPostCodeSearch((data) => {
      kakao.maps.load(() => {
        const geocoder = new kakao.maps.services.Geocoder()

        geocoder.addressSearch(data.address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            setAddress({
              address: data.address,
              lat: Number(result[0].y),
              lng: Number(result[0].x),
              isError: false,
            })
          }
        })
      })
    })
  }

  useEffect(() => {
    if (!accessToken || !userData.name) return

    if (!accessToken) {
      router.push('/signin')
      return
    }

    if (!isEditForm && !tags.length) {
      router.push('/registration')
    }

    if (!isEditForm) return

    const fetchSocialData = async () => {
      try {
        const socialResponse = await getSocialDetail(Number(params.id))

        if (!socialResponse.ok)
          throw new Error('모임 정보를 불러오는데 실패했습니다.')

        const socialData: IGetSocialDetail = await socialResponse.json()

        if (socialData.owner.name !== userData.name) {
          notify('본인이 작성한 모임만 수정할 수 있어요.', 'error')
          router.push(`/socials/${params.id}`)
          return
        }

        setInitialData(socialData)
        methods.reset({
          socialName: socialData.name,
          socialIntroduce: socialData.description,
          socialMinPeople: socialData.participantCount.min,
          socialMaxPeople: socialData.participantCount.max,
          socialAddressDetail: socialData.introduction.place.detailAddress,
          socialDues: socialData.dues,
        })
        handleInitialImages(socialData.imageUrls)
        setAddress({
          address: socialData.introduction.place.address,
          lat: socialData.introduction.place.latitude,
          lng: socialData.introduction.place.longitude,
          isError: false,
        })
        setTags(socialData.tags)
        setSelectedDateTime(new Date(socialData.gatheringDate))
      } catch (socialDataError) {
        notify('모임 정보를 불러오는 중 오류가 발생했습니다.', 'error')
      }
    }

    fetchSocialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, userData, params.id, isEditForm, router, methods])

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full max-w-980pxr flex-col gap-60pxr tb:max-w-1199pxr"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <UploadImages
          accessToken={accessToken}
          inputRef={inputRef}
          imageUrls={imageUrls}
          onImageFilesChange={handleImageFilesChange}
          onThumbnailChange={handleThumbnailChange}
          onImageDelete={handleImageDelete}
          error={error}
          setError={setError}
        />

        <div className="flex flex-col gap-32pxr">
          <SocialNameSection initialName={initialData?.name} />

          <SocialIntroduceSection initialIntroduce={initialData?.description} />

          <SocialCapacitySection
            initialMin={initialData?.participantCount.min}
            initialMax={initialData?.participantCount.max}
          />

          <SocialDateTimeSection
            selectedDateTime={selectedDateTime}
            onSelectedDateTime={setSelectedDateTime}
            disabled={isEditForm}
          />

          <SocialPlaceSection
            address={address}
            onAddressSearch={handleAddressSearch}
            initialAddress={initialData?.introduction.place.address}
            initialAddressDetail={initialData?.introduction.place.detailAddress}
          />

          <SocialDuesSection initialDues={initialData?.dues} />

          <SocialTagsSection tags={tags} initialTags={initialData?.tags} />
        </div>
        <button
          ref={registrationButtonRef}
          type="submit"
          className="hidden"
          onClick={() => {
            if (imageUrls.length === 0) {
              setError(true)
            }

            if (address.address === null) {
              setAddress((prev) => ({ ...prev, isError: true }))
            }
          }}
        >
          모임 등록하기
        </button>
      </form>
    </FormProvider>
  )
}

export default SocialRegistrationForm
