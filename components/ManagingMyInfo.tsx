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
// import checkedIcon from '@/public/images/svgs/checked.svg'
// import unCheckedIcon from '@/public/images/svgs/unChecked.svg'
import useEditProfileImageStore from '@/stores/useEditProfileImageStore'
import useDate from '@/hooks/useDate'
import { PersonIcon } from '@radix-ui/react-icons'
import useUserInfoPortal from '@/hooks/useUserInfoPortal'
import postDuplicateNickname from '@/apis/postDuplicateCheck'
import patchEditUserInfo from '@/apis/patchEditUserInfo'
import { InfoPortal, RegistrationSuccessUserInfoModal } from '@/components'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TypeNickname } from 'types/types'
import getUser from '@/apis/getUser'
import useUserDataStore from '@/stores/useUserDataStore'
import SocialDateTimeButton from './SocialDateTimeButton'
import Input from './Input'

registerLocale('ko', ko)

interface IManagingMyInfoProps {
  setIsPortalOpen: (value: boolean) => void
}

interface IProfileFormInputs {
  detail: string
  birthday: string
  email: string
  name: string
  introduce: string
  profileImageUrl: string
}
function ManagingMyInfo({
  setIsPortalOpen,
}: IManagingMyInfoProps): JSX.Element | null {
  const { accessToken, hydrated } = useUserStore()
  const router = useRouter()
  const [isFormChanged, setIsFormChanged] = useState(false)
  const [userData, setUserData] = useState<IProfileFormInputs | null>()
  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 60,
  })
  const { userDataReFetchTrigger } = useUserDataStore()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    // setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<IProfileFormInputs>({
    mode: 'onChange',
  })

  // const watchNickname = watch('name')
  const watchBirthday = watch('birthday')
  const watchIntroduce = watch('introduce')

  // 닉네임 복구되면 주석해제 및 코드 이걸로 교체
  // useEffect(() => {
  //   if (userData) {
  //     setIsFormChanged(
  //       (watchNickname !== userData.name && watchNickname !== '') ||
  //         (watchBirthday !== userData.introduce && watchBirthday !== ''),
  //     )
  //   }
  // }, [watchNickname, watchBirthday, userData])

  const {
    userInfoPortalRef,
    isUserInfoPortalOpen,
    handleOutsideClick,
    setIsUserInfoPortalOpen,
  } = useUserInfoPortal()

  const profileImage = useEditProfileImageStore(
    (state) => state.profileImageUrl,
  )
  const setProfileImage = useEditProfileImageStore(
    (state) => state.setProfileImageUrl,
  )

  useEffect(() => {
    if (userData) {
      setIsFormChanged(
        watchBirthday !== userData.birthday ||
          watchIntroduce !== userData.introduce ||
          profileImage !== userData.profileImageUrl,
      )
    }
  }, [watchBirthday, watchIntroduce, userData, profileImage])

  async function fetchIsDuplicated<BodyType extends TypeNickname>(
    text: BodyType,
    fetcher: ({ body }: { body: BodyType }) => Promise<Response>,
  ) {
    const response = await fetcher({ body: text })

    if (!response.ok) {
      throw new Error('닉네임 중복 확인에 실패했습니다.')
    }

    const data: IPostDuplicateNicknameResponse = await response.json()

    return data.duplicateName
  }

  useEffect(() => {
    if (!hydrated) return

    if (!accessToken) {
      // eslint-disable-next-line no-alert
      alert('로그인이 필요한 서비스입니다.')
      router.push('/signin')
    }
    const getUserData = async () => {
      try {
        const response = await getUser({ accessToken })
        const data = await response.json()
        setProfileImage(data.profileImageUrl)
        reset({ name: data.name })
        // setValue('name', data.name)
        setSelectedDateTime(new Date(data.birthday))
        setUserData(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('유저 정보를 가져오는데 실패했습니다.', error)
      }
    }
    getUserData()
  }, [
    accessToken,
    router,
    hydrated,
    setProfileImage,
    setSelectedDateTime,
    reset,
    userDataReFetchTrigger,
  ])

  const handleModalClose = () => {
    setIsUserInfoPortalOpen(false)
  }
  const handleOpenModal = () => {
    setIsUserInfoPortalOpen(true)
  }

  useEffect(() => {
    if (userData?.birthday) {
      setSelectedDateTime(new Date(userData.birthday))
    }
  }, [userData, setSelectedDateTime])

  const onSubmit = async (data: IProfileFormInputs) => {
    if (!profileImage) return

    const { introduce, name } = data

    const birthday = selectedDateTime
      ? selectedDateTime.toISOString().split('T')[0]
      : ''
    // eslint-disable-next-line no-console
    // console.log('제출 데이터', { introduce, name, birthday, profileImage })

    // if문 => 사용자가 자신의 기존 이메일을 입력할 때는 중복 체크 오류가 나타나지 않도록 하는 로직
    // nickname => 변경 데이터, userName => 기존 저장 데이터

    // const isDuplicateNickname = await fetchIsDuplicated<TypeNickname>(
    //   { name },
    //   postDuplicateNickname,
    // )

    // if (isDuplicateNickname) {
    //   setError('name', {
    //     type: 'validate',
    //     message: '중복된 닉네임입니다.',
    //   })
    //   return
    // }

    try {
      const editUserInfoResponse = await patchEditUserInfo({
        body: {
          introduce,
          name,
          birthday,
          profileImageUrl: profileImage,
        },
        accessToken,
      })

      if (!editUserInfoResponse.ok) {
        throw new Error('회원정보 수정에 실패했습니다.')
      }
      userDataReFetchTrigger()
      handleOpenModal()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('회원정보 수정에 실패했습니다.', error)
    }
  }
  const hasErrors = !!errors.introduce || !!errors.name
  const isButtonActive = isFormChanged && !hasErrors

  if (!accessToken) return null

  // const isLengthValid =
  //   watchNickname && watchNickname.length >= 2 && watchNickname.length <= 8
  // const isValidPattern = nicknamePattern.value.test(watchNickname || '')
  // const hasNoWhitespace = !/\s/.test(watchNickname || '')
  // const showChecks = watchNickname && watchNickname.length >= 2

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-984pxr"
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
                <div className="flex h-full w-full items-center justify-center bg-gray-04">
                  <PersonIcon className="h-80pxr w-80pxr px-10pxr py-10pxr text-gray-06" />
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
            readOnly
            defaultValue={userData?.name}
            {...register('name', {
              required: '닉네임은 필수 입력입니다.',
              pattern: nicknamePattern,
              onBlur: async (e) => {
                const name = e.target.value

                if (!name) return

                // 현재 닉네임과 동일한 경우 중복 체크 x
                if (name === userData?.name) {
                  clearErrors('name')
                  return
                }

                const isDuplicateNickname =
                  await fetchIsDuplicated<TypeNickname>(
                    { name },
                    postDuplicateNickname,
                  )

                if (isDuplicateNickname) {
                  setError('name', {
                    type: 'validate',
                    message: '이미 중복된 닉네임입니다.',
                  })
                }
              },
            })}
            type="text"
            placeholder="User123"
            className={`mt-8pxr bg-gray-03 ${errors.name ? 'border-0 ring-1 ring-error' : ''}`}
          />
          {/* {(!errors.name || String(errors.name.message).length === 0) &&
            showChecks && (
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
            )} */}

          {errors.name && String(errors.name.message).length !== 0 && (
            <small className="mt-4pxr text-error font-caption-02" role="alert">
              {errors.name.message}
            </small>
          )}

          <div className="mt-40pxr">
            <label
              htmlFor="introduce"
              className="mb-8pxr text-gray-10 font-title-02"
            >
              한 줄 소개
            </label>
            <Input
              variant="border"
              id="introduce"
              defaultValue={userData?.introduce}
              {...register('introduce', {
                required: '한 줄 소개를 입력해 주세요.',
                pattern: detailPattern,
              })}
              type="text"
              placeholder="띄어쓰기 포함 80자 이내로 입력해 주세요."
              className={`mt-8pxr ${errors.introduce ? 'border-0 ring-1 ring-error' : ''}`}
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
              defaultValue={userData?.email}
              {...register('email')}
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
              popperClassName="!-top-6pxr"
            />
          </div>
        </div>

        <div className="mb: mb-115pxr mt-192pxr flex justify-center">
          <Button
            type="submit"
            className={`h-46pxr w-full max-w-216pxr cursor-pointer rounded-[0.625rem] ${
              isButtonActive
                ? 'bg-gray-10 text-gray-01'
                : 'bg-gray-04 text-gray-01'
            }`}
            disabled={!isButtonActive}
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
