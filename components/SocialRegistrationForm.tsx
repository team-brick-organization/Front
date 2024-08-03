'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import useImageFiles from '@/hooks/useImageFiles'
import validateAndAdjustInputNumber from '@/utils/validateAndAdjustInputNumber'
import openPostCodeSearch from '@/utils/openPostCodeSearch'
import useDate from '@/hooks/useDate'
import infoCircleIcon from '@/public/images/svgs/infoCircle.svg'
import Image from 'next/image'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import { useParams, useRouter } from 'next/navigation'
import postSocial from '@/apis/postSocial'
import useUserStore from '@/stores/useUserStore'
import getSocialDetail from '@/apis/getSocialDetail'
import useUserDataStore from '@/stores/useUserDataStore'
import patchSocial from '@/apis/patchSocial'
import { DisplayMaxLength, Input, SocialDateTime, UploadImages } from './index'
import { notify } from './ToastMessageTrigger'

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
          socialId={Number(params.id)}
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

function SocialNameSection({ initialName }: { initialName?: string }) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  return (
    <div className="flex w-full max-w-270pxr flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialName">
        모임 이름
      </label>
      <div>
        <Input
          {...register('socialName', {
            required: '모임 이름은 필수 입력입니다.',
            maxLength: {
              value: 20,
              message: '모임 이름은 20자 이내로 입력해 주세요.',
            },
          })}
          maxLength={20}
          className={`${errors.socialName ? 'ring-1 ring-error' : ''}`}
          id="socialName"
          type="text"
          placeholder="모임 이름을 입력해 주세요."
          defaultValue={initialName}
        />
        <div className="mt-4pxr">
          <DisplayMaxLength
            currentLength={watch('socialName') ? watch('socialName').length : 0}
            maxLength={20}
          />
        </div>
      </div>
    </div>
  )
}

function SocialIntroduceSection({
  initialIntroduce,
}: {
  initialIntroduce?: string
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  return (
    <div className="relative flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialIntroduce">
        모임 소개
      </label>
      <div>
        <textarea
          {...register('socialIntroduce', {
            required: '모임 소개는 필수 입력입니다.',
          })}
          className={`h-265pxr w-full resize-none rounded-[0.625rem] bg-gray-01 p-14pxr outline-none font-body-02 placeholder:text-gray-06 ${errors.socialIntroduce ? 'ring-1 ring-error' : ''}`}
          id="socialIntroduce"
          maxLength={3000}
          placeholder="모임 소개를 입력해 주세요."
          defaultValue={initialIntroduce}
        />
        <div className="mt-4pxr">
          <DisplayMaxLength
            currentLength={
              watch('socialIntroduce') ? watch('socialIntroduce').length : 0
            }
            maxLength={3000}
          />
        </div>
      </div>
    </div>
  )
}

function SocialCapacitySection({
  initialMin,
  initialMax,
}: {
  initialMin?: number
  initialMax?: number
}) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()
  return (
    <div className="flex flex-col gap-16pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialMinPeople">
        모임 정원
      </label>
      <div className="flex flex-col gap-24pxr">
        <div className="flex items-end gap-16pxr">
          <div className="flex flex-col items-center gap-8pxr">
            <label
              className="text-gray-10 font-body-01"
              htmlFor="socialMinPeople"
            >
              최소 인원
            </label>
            <Input
              {...register('socialMinPeople', {
                required: '모임 최소 정원은 필수 입력입니다.',
                pattern: /^[0-9]*$/,
              })}
              className={`!w-66pxr px-20pxr py-14pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialMinPeople ? 'ring-1 ring-error' : ''}`}
              id="socialMinPeople"
              placeholder="000"
              onChange={(e) => {
                const value = validateAndAdjustInputNumber({
                  e,
                  max: 300,
                })
                setValue('socialMinPeople', value, {
                  shouldValidate: true,
                })
                setValue('socialMaxPeople', value, {
                  shouldValidate: true,
                })
              }}
              defaultValue={initialMin}
              disabled={initialMin !== undefined}
            />
          </div>
          <span className="h-[2.9744rem] content-center text-black font-body-01">
            ~
          </span>
          <div className="flex flex-col items-center gap-8pxr">
            <label
              className="text-gray-10 font-body-01"
              htmlFor="socialMaxPeople"
            >
              최대 인원
            </label>
            <Input
              {...register('socialMaxPeople', {
                required: '모임 최대 정원은 필수 입력입니다.',
                pattern: /^[0-9]*$/,
              })}
              className={`!w-66pxr px-20pxr py-14pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialMaxPeople ? 'ring-1 ring-error' : ''}`}
              id="socialMaxPeople"
              placeholder="000"
              onChange={(e) => {
                const value = validateAndAdjustInputNumber({
                  e,
                  max: 300,
                })
                setValue('socialMaxPeople', value, {
                  shouldValidate: true,
                })
              }}
              defaultValue={initialMax}
              disabled={initialMax !== undefined}
            />
          </div>
        </div>
        <div className="flex w-fit items-start rounded-[0.3125rem] bg-gray-02 p-14pxr">
          <Image
            src={infoCircleIcon}
            width={12}
            height={12}
            alt="정보 아이콘"
          />
          <ol className="list-disc pl-20pxr text-gray-06 font-caption-02">
            <li>최소 인원은 2명부터 입력 가능합니다.</li>
            <li>
              최대 인원은 300명 까지 가능하며, 최소인원 보다 적은 수로 입력
              불가합니다.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

function SocialDateTimeSection({
  selectedDateTime,
  onSelectedDateTime,
  disabled = false,
}: {
  selectedDateTime: Date | null
  onSelectedDateTime: (date: Date | null) => void
  disabled?: boolean
}) {
  return (
    <div className="flex w-full flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialDateTime">
        모임 일정
      </label>
      <SocialDateTime
        selectedDateTime={selectedDateTime}
        onSelectedDateTime={onSelectedDateTime}
        disabled={disabled}
      />
    </div>
  )
}

function SocialPlaceSection({
  address,
  onAddressSearch: handleAddressSearch,
  initialAddress,
  initialAddressDetail,
}: {
  address: {
    address: string | null
    isError: boolean
  }
  onAddressSearch: () => void
  initialAddress?: string
  initialAddressDetail?: string
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialPlace">
        장소
      </label>
      <div className="flex flex-col gap-4pxr">
        <button
          className={`w-full max-w-398pxr rounded-[0.625rem] bg-gray-01 p-14pxr text-start outline-gray-08 font-body-02 disabled:bg-gray-03 ${address.isError ? 'ring-1 ring-error' : ''} ${address.address ? 'text-gray-10' : 'text-gray-06'} ${initialAddress ? '!text-gray-06' : ''}`}
          type="button"
          onClick={() => {
            if (initialAddress) return

            handleAddressSearch()
          }}
          disabled={initialAddress !== undefined}
        >
          {initialAddress ||
            address.address ||
            '도로명, 건물명 또는 지번으로 검색'}
        </button>
        <Input
          {...register('socialAddressDetail', {
            required: '상세 주소는 필수 입력입니다.',
          })}
          className={`!w-full !max-w-398pxr ${errors.socialAddressDetail ? 'ring-1 ring-error' : ''}`}
          id="socialAddressDetail"
          type="text"
          placeholder="상세 주소를 입력해 주세요."
          defaultValue={initialAddressDetail}
        />
      </div>
    </div>
  )
}

function SocialDuesSection({ initialDues }: { initialDues?: number }) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()

  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialDues">
        활동비
      </label>
      <Input
        {...register('socialDues', {
          required: '활동비는 필수 입력입니다.',
        })}
        className={`!w-full !max-w-398pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialDues ? 'ring-1 ring-error' : ''}`}
        id="socialDues"
        type="text"
        placeholder="활동비를 입력해 주세요. 활동비가 없는 경우는 0으로 입력해 주세요."
        onChange={(e) => {
          const value = validateAndAdjustInputNumber({
            e,
          })
          setValue('socialDues', value, { shouldValidate: true })
        }}
        defaultValue={initialDues}
        disabled={initialDues !== undefined}
      />
    </div>
  )
}

function SocialTagsSection({
  tags,
  initialTags,
}: {
  tags: string[]
  initialTags?: string[]
}) {
  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04">모임 태그</label>
      <ul className="flex gap-8pxr">
        {(initialTags || tags).map((tag) => (
          <li key={tag}>
            <div
              className={`rounded-[0.3125rem] bg-gray-03 px-14pxr py-10pxr text-gray-06 font-body-02 ${initialTags ? 'bg-gray-03' : ''}`}
            >
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
