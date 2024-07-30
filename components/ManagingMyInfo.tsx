'use client'

import Image from 'next/image'
import useUserStore from '@/stores/useUserStore'
import '@/styles/SocialDateTimePicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'
import pencilIcon from '@/public/images/svgs/pencil.svg'
import { useForm } from 'react-hook-form'
import { detailPattern, nicknamePattern } from '@/constants/RegExr'
import { Avatar, Button } from '@radix-ui/themes'
import checkedIcon from '@/public/images/svgs/checked.svg'
import unCheckedIcon from '@/public/images/svgs/unChecked.svg'
import useEditProfileImageStore from '@/stores/useEditProfileImageStore'
import useDate from '@/hooks/useDate'
import personIcon from '@/public/images/svgs/person.svg'
import useUserInfoPortal from '@/hooks/useUserInfoPortal'
import postDuplicateNickname from '@/apis/postDuplicateCheck'
import postEditUserInfo from '@/apis/postEditUserInfo'
import { InfoPortal, RegistrationSuccessUserInfoModal } from '@/components'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { TypeNickname } from 'types/types'
import SocialDateTimeButton from './SocialDateTimeButton'
import Input from './Input'

registerLocale('ko', ko)

interface IManagingMyInfoProps {
  setIsPortalOpen: (value: boolean) => void
}

interface IProfileFormInputs {
  detail: string
  email: string
  nickname: string
}
function ManagingMyInfo({
  setIsPortalOpen,
}: IManagingMyInfoProps): JSX.Element | null {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<IProfileFormInputs>({ mode: 'onChange' })
  const watchNickname = watch('nickname')

  const {
    userInfoPortalRef,
    isUserInfoPortalOpen,
    handleOutsideClick,
    setIsUserInfoPortalOpen,
  } = useUserInfoPortal()

  const accesstoken = useUserStore()

  async function fetchIsDuplicated<BodyType extends TypeNickname>(
    text: BodyType,
    fetcher: ({ body }: { body: TypeNickname }) => Promise<Response>,
  ) {
    const response = await fetcher({ body: text })

    if (!response.ok) {
      throw new Error('닉네임 중복 확인에 실패했습니다.')
    }

    const data: IPostDuplicateNicknameResponse = await response.json()
    console.log('datas', data)
    return data.duplicateName
  }
  useEffect(() => {
    if (!accesstoken) {
      alert('로그인이 필요한 서비스입니다.')
      router.push('/signin')
    }
  }, [accesstoken, router])

  const handleModalClose = () => {
    setIsUserInfoPortalOpen(false)
  }
  const handleOpenModal = () => {
    setIsUserInfoPortalOpen(true)
  }

  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 60,
  })

  const profileImage = useEditProfileImageStore(
    (state) => state.profileImageUrl,
  )

  const onSubmit = async (data: IProfileFormInputs) => {
    if (!profileImage) return

    const { detail, nickname } = data

    const birth = selectedDateTime
      ? selectedDateTime.toISOString().split('T')[0]
      : ''

    console.log('제출 데이터', { detail, nickname, birth, profileImage })

    const isDuplicateNickname = await fetchIsDuplicated<TypeNickname>(
      { name: nickname },
      postDuplicateNickname,
    )

    if (isDuplicateNickname) {
      setError('nickname', {
        type: 'validate',
        message: '중복된 닉네임입니다.',
      })
      return
    }

    const editUserInfoResponse = await postEditUserInfo({
      body: {
        detail,
        nickname,
        birthday: birth,
        profileImageUrl: profileImage,
      },
    })
    console.log('정보 변경 데이터', data)
    if (!editUserInfoResponse.ok) {
      return
    }

    handleOpenModal()
  }
  const hasErrors = !!errors.detail || !!errors.nickname
  if (!accesstoken) return null

  const isLengthValid =
    watchNickname && watchNickname.length >= 2 && watchNickname.length <= 8
  const isValidPattern = nicknamePattern.value.test(watchNickname || '')
  const hasNoWhitespace = !/\s/.test(watchNickname || '')

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-984prx relative w-full"
      >
        <div className="mb-40pxr mb:hidden">
          <h1 className="text-gray-10 font-headline-03">내 정보 관리</h1>
        </div>

        <div className="relative w-fit">
          <button
            type="button"
            className="h-80pxr w-80pxr overflow-hidden rounded-full"
            title="수정 버튼"
            onClick={() => setIsPortalOpen(true)}
          >
            <Avatar
              src={profileImage || ''}
              alt="profileImg"
              fallback={
                <div className="h-80pxr w-80pxr rounded-full bg-gray-04">
                  <Image
                    src={personIcon}
                    alt="Person"
                    className="px-10pxr py-10pxr"
                    fill
                  />
                </div>
              }
              className="h-80pxr w-80pxr rounded-full bg-gray-04"
              onClick={() => setIsPortalOpen(true)}
            />
          </button>

          <button
            type="button"
            className="absolute bottom-0pxr right-0pxr h-19pxr w-19pxr overflow-hidden rounded-full"
            title="수정 버튼"
            onClick={() => setIsPortalOpen(true)}
          >
            <Image src={pencilIcon} alt="수정 아이콘" width={19} height={19} />
          </button>
        </div>

        <div className="mt-40pxr">
          <label
            htmlFor="nickname"
            className="mb-8pxr text-gray-10 font-title-02"
          >
            닉네임
          </label>
          <Input
            variant="border"
            id="nickname"
            {...register('nickname', {
              required: '닉네임은 필수 입력입니다.',
              pattern: nicknamePattern,
              onBlur: async (e) => {
                const nickname = e.target.value

                if (!nickname) return

                const isDuplicateNickname =
                  await fetchIsDuplicated<TypeNickname>(
                    { name: nickname },
                    postDuplicateNickname,
                  )

                if (isDuplicateNickname) {
                  setError('nickname', {
                    type: 'validate',
                    message: '이미 중복된 닉네임입니다.',
                  })
                }
              },
            })}
            type="text"
            placeholder="User123"
            className={`mt-8pxr ${errors.nickname ? 'ring-1 ring-error' : ''}`}
            // defaultValue={}
          />
          {(!errors.nickname ||
            String(errors.nickname.message).length === 0) && (
            <div className="mt-4pxr inline-flex">
              <div className="flex gap-16pxr">
                <div className="flex gap-2pxr">
                  <Image
                    src={isLengthValid ? checkedIcon : unCheckedIcon}
                    alt={isLengthValid ? 'checkedIcon' : 'unCheckedIcon'}
                    width={14}
                    height={14}
                  />
                  <span
                    className={`font-caption-02 ${isLengthValid ? 'text-gray-10' : 'text-gray-08'}`}
                  >
                    2-8자 이하
                  </span>
                </div>
                <div className="flex gap-2pxr">
                  <Image
                    src={isValidPattern ? checkedIcon : unCheckedIcon}
                    alt={isValidPattern ? 'checkedIcon' : 'unCheckedIcon'}
                    width={14}
                    height={14}
                  />
                  <span
                    className={`font-caption-02 ${isValidPattern ? 'text-gray-10' : 'text-gray-08'}`}
                  >
                    한글/영어/숫자 가능
                  </span>
                </div>
                <div className="flex gap-2pxr">
                  <Image
                    src={hasNoWhitespace ? checkedIcon : unCheckedIcon}
                    alt={hasNoWhitespace ? 'checkedIcon' : 'unCheckedIcon'}
                    width={14}
                    height={14}
                  />
                  <span
                    className={`font-caption-02 ${hasNoWhitespace ? 'text-gray-10' : 'text-gray-08'}`}
                  >
                    공백 불가
                  </span>
                </div>
              </div>
            </div>
          )}

          {errors.nickname && String(errors.nickname.message).length !== 0 && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.nickname.message}
            </small>
          )}

          <div className="mt-40pxr">
            <label
              htmlFor="detail"
              className="mb-8pxr text-gray-10 font-title-02"
            >
              한 줄 소개
            </label>
            <Input
              variant="border"
              id="detail"
              {...register('detail', {
                required: '한 줄 소개를 입력해 주세요.',
                pattern: detailPattern,
              })}
              type="text"
              placeholder="띄어쓰기 포함 80자 이내로 입력해 주세요."
              className={`mt-8pxr ${errors.detail ? 'ring-1 ring-error' : ''}`}
            />
          </div>
          <div className="mt-40pxr">
            <label
              htmlFor="email"
              className="mb-8pxr text-gray-10 font-title-02"
            >
              이메일
            </label>
            <Input
              variant="border"
              id="email"
              readOnly
              type="email"
              placeholder="User@gmail.com"
              className="mt-8pxr bg-gray-03"
              color="gray"
              // defaultValue={}
            />
          </div>

          <div className="mt-40pxr flex flex-col">
            <label className="mb-8pxr text-gray-10 font-title-02">
              생년월일
            </label>
            <DatePicker
              className="rounded-[0.3125rem] bg-gray-01 px-20pxr py-14pxr text-start text-gray-10 font-body-02"
              shouldCloseOnSelect
              maxDate={new Date()}
              selected={selectedDateTime}
              showPopperArrow={false}
              enableTabLoop={false}
              customInput={
                <SocialDateTimeButton
                  type="date"
                  selectedDateTime={selectedDateTime}
                />
              }
              onChange={(date) => setSelectedDateTime(date)}
              popperPlacement="bottom-start"
              dateFormatCalendar="yyyy년 M월"
              locale="ko"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
          </div>
        </div>

        <div className="mb: mb-115pxr mt-192pxr flex justify-center">
          <Button
            type="submit"
            className={`h-46pxr w-full max-w-216pxr cursor-pointer rounded-[0.625rem] ${!hasErrors ? 'bg-gray-10 text-gray-01' : 'bg-gray-04 text-gray-01'}`}
            disabled={hasErrors}
          >
            저장하기
          </Button>
        </div>
      </form>

      <InfoPortal
        handleOutsideClick={handleOutsideClick}
        isUserInfoPortalOpen={isUserInfoPortalOpen}
        userInfoPortalRef={userInfoPortalRef}
        className="h-full w-full max-w-440pxr mb:px-20pxr"
      >
        <RegistrationSuccessUserInfoModal onClose={handleModalClose} />
      </InfoPortal>
    </>
  )
}

export default ManagingMyInfo
