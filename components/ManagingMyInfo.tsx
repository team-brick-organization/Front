'use client'

import Image from 'next/image'
import pencilIcon from '@/public/images/svgs/pencil.svg'
import { useForm } from 'react-hook-form'
import { introduceOneLinePattern, nicknamePattern } from '@/constants/RegExr'
import { Avatar, Button } from '@radix-ui/themes'
import useProfileImageStore from '@/stores/useProfileImageStore'
import DatePicker from 'react-datepicker'
import useDate from '@/hooks/useDate'
import Input from './Input'
import SocialDateTimeButton from './SocialDateTimeButton'

interface IManagingMyInfoProps {
  setIsPortalOpen: (value: boolean) => void
}

interface IProfileFormInputs {
  name: string
  introduceOneLine: string
  email: string
  phoneNumber: number
  nickname: string
  birth: number
}

function ManagingMyInfo({
  setIsPortalOpen,
}: IManagingMyInfoProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormInputs>({ mode: 'onChange' })

  const { selectedDateTime, setSelectedDateTime } = useDate({
    timeIntervals: 60,
  })
  const profileImage = useProfileImageStore((state) => state.profileImage)

  const onSubmit = (data: IProfileFormInputs) => {
    console.log('정보 변경 데이터', data)
  }

  const hasErrors = !!errors.introduceOneLine || !!errors.nickname
  return (
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
              <div className="h-80pxr w-80pxr rounded-full bg-gray-06" />
            }
            className="h-80pxr w-80pxr rounded-full bg-gray-06"
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

      <div className="mt-32pxr">
        <div>
          <label htmlFor="name" className="mb-8pxr text-gray-10 font-title-02">
            이름
          </label>
          <Input
            variant="border"
            id="name"
            readOnly
            type="text"
            placeholder="김OO"
            className="mt-8pxr bg-gray-03"
            // defaultValue={}
          />
        </div>

        <div className="mt-40pxr">
          <label
            htmlFor="introduceOneLine"
            className="mb-8pxr text-gray-10 font-title-02"
          >
            한 줄 소개
          </label>
          <Input
            variant="border"
            id="introduceOneLine"
            {...register('introduceOneLine', {
              required: '한 줄 소개를 입력해 주세요.',
              pattern: introduceOneLinePattern,
            })}
            type="text"
            placeholder="띄어쓰기 포함 80자 이내로 입력해 주세요."
            className={`mt-8pxr ${errors.introduceOneLine ? 'ring-1 ring-error' : ''}`}
          />
        </div>
        <div className="mt-40pxr">
          <label htmlFor="email" className="mb-8pxr text-gray-10 font-title-02">
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
            })}
            type="text"
            placeholder="User123"
            className={`mt-8pxr ${errors.nickname ? 'ring-1 ring-error' : ''}`}
          />
        </div>
        <div className="mt-40pxr flex flex-col">
          <label className="mb-8pxr text-gray-10 font-title-02">생년월일</label>
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
            timeCaption="시간"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
          />
        </div>
      </div>

      <div className="mt-192pxr flex justify-center">
        <Button
          type="submit"
          className={`h-46pxr w-full max-w-216pxr cursor-pointer rounded-[0.625rem] ${!hasErrors ? 'bg-gray-10 text-gray-01' : 'bg-gray-04 text-gray-01'}`}
          disabled={hasErrors}
        >
          저장하기
        </Button>
      </div>
    </form>
  )
}

export default ManagingMyInfo
