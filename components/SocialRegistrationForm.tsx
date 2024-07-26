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
import { useRouter } from 'next/navigation'
import { DisplayMaxLength, Input, SocialDateTime, UploadImages } from './index'

export interface ISocialRegistrationInputs {
  socialName: string
  socialIntroduce: string
  socialMinPeople: number
  socialMaxPeople: number
  socialAddressDetail: string
  socialDues: number
}

export interface IInitialData {
  socialImages?: string[]
  socialName?: string
  socialIntroduce?: string
  socialMinPeople?: number
  socialMaxPeople?: number
  socialDateTime?: string
  socialAddress?: string
  socialLat?: number
  socialLng?: number
  socialAddressDetail?: string
  socialDues?: number
  socialTags?: string[]
}

interface ISocialRegistrationFormProps {
  isEditForm?: boolean
}

function SocialRegistrationForm({
  isEditForm = false,
}: ISocialRegistrationFormProps) {
  const router = useRouter()
  const [initialData, setInitialData] = useState<IInitialData | null>(null)
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
    timeIntervals: 59,
  })
  const {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleThumbnailChange,
    handleImageDelete,
    error,
    setError,
  } = useImageFiles({ imageLimit: 5, initialImages: initialData?.socialImages })
  const methods = useForm<ISocialRegistrationInputs>()
  const { registrationButtonRef, tags, setTags } = useSocialRegistrationStore()

  const onSubmit = (data: ISocialRegistrationInputs) => {
    if (
      imageUrls.length === 0 ||
      address.address === null ||
      data.socialMinPeople > data.socialMaxPeople
    ) {
      setError(true)
      setAddress((prev) => ({ ...prev, isError: address.address === null }))
      methods.setError('socialMaxPeople', { type: 'min' })
      return
    }

    const body = {
      ...data,
      socialDateTime: selectedDateTime?.toISOString(),
      socialAddress: address.address,
      imageUrls,
      tags,
    }

    console.log(body)
    // router.push(`/social/1`) // 추후 api 연결 시 라우트 변경해야함
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
    if (!tags.length && !isEditForm) {
      router.push('/registration')
      return
    }

    if (isEditForm) {
      // 초기 데이터 설정 (API 연결 시 변경 필요)
      const initData = {
        socialImages: [
          'https://cdn.discordapp.com/attachments/1246000777735176305/1265836655722365000/image.png?ex=66a2f5c0&is=66a1a440&hm=00cac0e6c01e636685d7931c2644673187d2bf536f238176dfae551d442e78e3&',
          'https://cdn.discordapp.com/attachments/1246000777735176305/1265612602927616000/image.png?ex=66a2cdd6&is=66a17c56&hm=b2534b3a74ac7535cf3eab309b0dbf5d975db94c16d3a5298ee7e6f77045245c&',
          'https://cdn.discordapp.com/attachments/1246000777735176305/1265612603195916319/image.png?ex=66a2cdd6&is=66a17c56&hm=f79f36d89826a51cb3fd12bd9ac55de7b0c5e10873cf9bdf0fbc955d7ba42124&',
        ],
        socialName: '모임 이름',
        socialIntroduce: '모임 소개',
        socialMinPeople: 2,
        socialMaxPeople: 20,
        socialDateTime: '2024-01-01T12:00:00.000Z',
        socialAddress: '주소입니다.',
        socialLat: 37.566826,
        socialLng: 126.9786567,
        socialAddressDetail: '상세 주소입니다.',
        socialDues: 0,
        socialTags: ['태그1', '태그2', '태그3'],
      }

      setInitialData(initData)
      methods.reset(initData)
      setAddress({
        address: initData.socialAddress,
        lat: initData.socialLat,
        lng: initData.socialLng,
        isError: false,
      })
      setTags(initData.socialTags)
      setSelectedDateTime(new Date(initData.socialDateTime))
    }
  }, [isEditForm, router, setTags, tags.length, methods, setSelectedDateTime])

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full max-w-980pxr flex-col gap-60pxr tb:max-w-1199pxr"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <UploadImages
          inputRef={inputRef}
          imageUrls={imageUrls}
          onImageFilesChange={handleImageFilesChange}
          onThumbnailChange={handleThumbnailChange}
          onImageDelete={handleImageDelete}
          error={error}
          setError={setError}
        />

        <div className="flex flex-col gap-32pxr">
          <SocialNameSection initialName={initialData?.socialName} />

          <SocialIntroduceSection
            initialIntroduce={initialData?.socialIntroduce}
          />

          <SocialCapacitySection
            initialMin={initialData?.socialMinPeople}
            initialMax={initialData?.socialMaxPeople}
          />

          <SocialDateTimeSection
            selectedDateTime={selectedDateTime}
            onSelectedDateTime={setSelectedDateTime}
            disabled={isEditForm}
          />

          <SocialPlaceSection
            address={address}
            onAddressSearch={handleAddressSearch}
            initialAddress={initialData?.socialAddress}
            initialAddressDetail={initialData?.socialAddressDetail}
          />

          <SocialDuesSection initialDues={initialData?.socialDues} />

          <SocialTagsSection
            tags={tags}
            initialTags={initialData?.socialTags}
          />
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
                  min: 2,
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
          className={`w-full max-w-398pxr rounded-[0.625rem] bg-gray-01 p-14pxr text-start font-body-02 disabled:bg-gray-03 ${address.isError ? 'ring-1 ring-error' : ''} ${address.address ? 'text-gray-10' : 'text-gray-06'} ${initialAddress ? '!text-gray-06' : ''}`}
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
