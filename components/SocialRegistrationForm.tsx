'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useImageFiles from '@/hooks/useImageFiles'
import validateAndAdjustInputNumber from '@/utils/validateAndAdjustInputNumber'
import openPostCodeSearch from '@/utils/openPostCodeSearch'
import useDate from '@/hooks/useDate'
import infoCircleIcon from '@/public/images/svgs/infoCircle.svg'
import Image from 'next/image'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import { useRouter } from 'next/navigation'
import { Input, SocialDateTime, UploadImages } from './index'

export interface ISocialRegistrationInputs {
  socialName: string
  socialIntroduce: string
  socialMinPeople: number
  socialMaxPeople: number
  socialAddressDetail: string
  socialDues: number
}

function SocialRegistrationForm() {
  const router = useRouter()
  const [address, setAddress] = useState<{
    address: string | null
    isError: boolean
  }>({
    address: null,
    isError: false,
  })
  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 59,
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
    setError: setFormError,
  } = useForm<ISocialRegistrationInputs>()
  const { registrationButtonRef, tags } = useSocialRegistrationStore()

  const onSubmit = (data: ISocialRegistrationInputs) => {
    if (imageUrls.length === 0) {
      setError(true)
      return
    }

    if (address.address === null) {
      setAddress((prev) => ({ ...prev, isError: true }))
      return
    }

    if (data.socialMinPeople > data.socialMaxPeople) {
      setFormError('socialMaxPeople', { type: 'min' })
      return
    }

    const body = {
      socialName: data.socialName,
      socialIntroduce: data.socialIntroduce,
      socialMinPeople: data.socialMinPeople,
      socialMaxPeople: data.socialMaxPeople,
      socialDateTime: selectedDateTime,
      socialAddress: address.address,
      socialAddressDetail: data.socialAddressDetail,
      socialDues: data.socialDues,
      imageUrls,
      tags,
    }

    console.log(body)
    router.push(`/social/1`)
  }

  const handleAddressSearch = () => {
    openPostCodeSearch((data) => {
      setAddress({ address: data.address, isError: false })
    })
  }

  useEffect(() => {
    if (tags.length === 0) {
      router.push('/registration')
    }
  }, [router, tags])

  return (
    <form
      className="flex w-full max-w-980pxr flex-col gap-60pxr"
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

      <div className="flex flex-col gap-32pxr">
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

        <div className="flex flex-col gap-16pxr">
          <label
            className="text-gray-10 font-title-04"
            htmlFor="socialMinPeople"
          >
            소셜 정원
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
                    required: '소셜 최소 정원은 필수 입력입니다.',
                    pattern: /^[0-9]*$/,
                  })}
                  className={`!w-66pxr px-20pxr py-14pxr ${errors.socialMinPeople ? 'border border-error' : ''}`}
                  id="socialMinPeople"
                  placeholder="000"
                  onChange={(e) => {
                    const value = validateAndAdjustInputNumber({
                      e,
                      min: 2,
                      max: 300,
                    })
                    setValue('socialMinPeople', value, { shouldValidate: true })
                    setValue('socialMaxPeople', value, { shouldValidate: true })
                  }}
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
                    required: '소셜 최대 정원은 필수 입력입니다.',
                    pattern: /^[0-9]*$/,
                  })}
                  className={`!w-66pxr px-20pxr py-14pxr ${errors.socialMaxPeople ? 'border border-error' : ''}`}
                  id="socialMaxPeople"
                  placeholder="000"
                  onChange={(e) => {
                    const value = validateAndAdjustInputNumber({
                      e,
                      max: 300,
                    })
                    setValue('socialMaxPeople', value, { shouldValidate: true })
                  }}
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

        <div className="flex w-full flex-col gap-8pxr">
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
              className={`w-full max-w-398pxr rounded-[0.625rem] bg-gray-01 p-14pxr text-start font-body-02 ${address.isError ? 'border border-error' : ''} ${address.address ? 'text-gray-10' : 'text-gray-04'}`}
              type="button"
              onClick={handleAddressSearch}
            >
              {address.address || '도로명, 건물명 또는 지번으로 검색'}
            </button>
            <Input
              {...register('socialAddressDetail', {
                required: '상세 주소는 필수 입력입니다.',
              })}
              className={`!w-full !max-w-398pxr ${errors.socialAddressDetail ? 'border border-error' : ''}`}
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
            className={`!w-full !max-w-398pxr ${errors.socialDues ? 'border border-error' : ''}`}
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

        <div className="flex flex-col gap-8pxr">
          <label className="text-gray-10 font-title-04" htmlFor="socialDues">
            모임 태그
          </label>
          <ul className="flex gap-8pxr">
            {tags.map((tag) => (
              <li key={tag}>
                <div className="rounded-[0.3125rem] bg-gray-03 px-14pxr py-10pxr text-gray-06 font-body-02">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
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
        소셜 등록하기
      </button>
    </form>
  )
}

export default SocialRegistrationForm
