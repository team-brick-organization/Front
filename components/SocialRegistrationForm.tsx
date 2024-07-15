'use client'

import { RefObject, useState } from 'react'
import { useForm } from 'react-hook-form'
import useImageFiles from '@/hooks/useImageFiles'
import validateAndAdjustInputNumber from '@/utils/validateAndAdjustInputNumber'
import openPostCodeSearch from '@/utils/openPostCodeSearch'
import useDate from '@/hooks/useDate'
import { Input, SocialDateTime, UploadImages } from './index'

export interface ISocialRegistrationInputs {
  socialName: string
  socialIntroduce: string
  socialMaxPeople: number
  socialAddressDetail: string
  socialDues: number
}

interface ISocialRegistrationFormProps {
  registrationRef: RefObject<HTMLButtonElement>
}

function SocialRegistrationForm({
  registrationRef,
}: ISocialRegistrationFormProps) {
  const [address, setAddress] = useState<{
    address: string | null
    isError: boolean
  }>({
    address: null,
    isError: false,
  })

  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 60,
  })
  const {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleImageDelete,
    error,
    setError,
  } = useImageFiles({ imageLimit: 10 })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ISocialRegistrationInputs>()

  const onSubmit = (data: ISocialRegistrationInputs) => {
    if (imageUrls.length === 0) {
      setError(true)
    }

    if (address.address === null) {
      setAddress((prev) => ({ ...prev, isError: true }))
      return
    }

    const body = {
      socialName: data.socialName,
      socialIntroduce: data.socialIntroduce,
      socialMaxPeople: data.socialMaxPeople,
      socialDateTime: selectedDateTime,
      socialAddress: address.address,
      socialAddressDetail: data.socialAddressDetail,
      socialDues: data.socialDues,
      imageUrls,
    }

    console.log(body)
  }

  const handleAddressSearch = () => {
    openPostCodeSearch((data) => {
      setAddress({ address: data.address, isError: false })
    })
  }

  return (
    <form
      className="flex w-780pxr flex-col gap-60pxr"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UploadImages
        inputRef={inputRef}
        imageUrls={imageUrls}
        onImageFilesChange={handleImageFilesChange}
        onImageDelete={handleImageDelete}
        error={error}
        setError={setError}
      />

      <div className="flex flex-col gap-40pxr">
        <div className="flex flex-col gap-8pxr">
          <label className="text-gray-10 font-title-04" htmlFor="socialName">
            소셜 이름
          </label>
          <Input
            {...register('socialName', {
              required: '소셜 이름은 필수 입력입니다.',
            })}
            className={`${errors.socialName ? 'border border-error' : ''}`}
            id="socialName"
            type="text"
            placeholder="소셜 이름을 입력해 주세요."
          />
        </div>

        <div className="flex flex-col gap-8pxr">
          <label
            className="text-gray-10 font-title-04"
            htmlFor="socialIntroduce"
          >
            소셜 소개
          </label>
          <textarea
            {...register('socialIntroduce', {
              required: '소셜 소개는 필수 입력입니다.',
            })}
            className={`min-h-88pxr rounded-[0.625rem] bg-gray-01 p-14pxr outline-none font-body-02 placeholder:text-gray-04 ${errors.socialIntroduce ? 'border border-error' : ''}`}
            id="socialIntroduce"
            placeholder="소셜 소개를 입력해 주세요."
          />
        </div>

        <div className="flex flex-col gap-8pxr">
          <label
            className="text-gray-10 font-title-04"
            htmlFor="socialMaxPeople"
          >
            소셜 정원
          </label>
          <Input
            {...register('socialMaxPeople', {
              required: '소셜 정원은 필수 입력입니다.',
              pattern: /^[0-9]*$/,
            })}
            className={`!w-188pxr ${errors.socialMaxPeople ? 'border border-error' : ''}`}
            id="socialMaxPeople"
            placeholder="5명~300명까지 가능합니다."
            onChange={(e) => {
              const value = validateAndAdjustInputNumber({
                e,
                min: 5,
                max: 300,
              })
              setValue('socialMaxPeople', value, { shouldValidate: true })
            }}
          />
        </div>

        <div className="flex flex-col gap-8pxr">
          <label
            className="text-gray-10 font-title-04"
            htmlFor="socialDateTime"
          >
            소셜 일정
          </label>
          <SocialDateTime
            selectedDateTime={selectedDateTime}
            onSelectedDateTime={setSelectedDateTime}
          />
        </div>

        <div className="flex flex-col gap-8pxr">
          <label className="text-gray-10 font-title-04" htmlFor="socialPlace">
            장소
          </label>
          <div className="flex flex-col gap-4pxr">
            <button
              className={`w-398pxr rounded-[0.625rem] bg-gray-01 p-14pxr text-start font-body-02 ${address.isError ? 'border border-error' : ''} ${address.address ? 'text-gray-10' : 'text-gray-04'}`}
              type="button"
              onClick={handleAddressSearch}
            >
              {address.address || '도로명, 건물명 또는 지번으로 검색'}
            </button>
            <Input
              {...register('socialAddressDetail', {
                required: '상세 주소는 필수 입력입니다.',
              })}
              className={`!w-398pxr ${errors.socialAddressDetail ? 'border border-error' : ''}`}
              id="socialAddressDetail"
              type="text"
              placeholder="상세 주소를 입력해 주세요."
            />
          </div>
        </div>

        <div className="flex flex-col gap-8pxr">
          <label className="text-gray-10 font-title-04" htmlFor="socialDues">
            활동비
          </label>
          <Input
            {...register('socialDues', {
              required: '활동비는 필수 입력입니다.',
            })}
            className={`!w-398pxr ${errors.socialDues ? 'border border-error' : ''}`}
            id="socialDues"
            type="text"
            placeholder="활동비를 입력해 주세요. 활동비가 없는 경우는 0으로 입력해 주세요."
            onChange={(e) => {
              const value = validateAndAdjustInputNumber({
                e,
              })
              setValue('socialDues', value, { shouldValidate: true })
            }}
          />
        </div>
      </div>
      <button
        ref={registrationRef}
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
        소셜 등록하기
      </button>
    </form>
  )
}

export default SocialRegistrationForm
