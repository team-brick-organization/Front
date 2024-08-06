'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button, Input } from '@/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import checkedCheckBox from '@/public/images/svgs/checkedCheckBox.svg'
import uncheckedCheckBox from '@/public/images/svgs/unCheckedCheckBox.svg'
import deleteUserAccount from '@/apis/deleteUserAccount'
import sendVerificationEmail from '@/utils/sendVerificationEmail'
// import PutPasswordChange from '@/apis/putPasswordChange'
import { useRouter } from 'next/navigation'
import { notify } from './ToastMessageTrigger'

interface PasswordResetVerifierProps {
  name: string
  email: string
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

/**
 * 비밀번호 재설정을 위한 이메일을 전송하는 컴포넌트
 * @param name 현제 유저의 이름
 * @param email 현제 유저의 이메일
 */

function PasswordResetVerifier({
  name,
  email,
  accessToken,
  setAccessToken,
}: PasswordResetVerifierProps) {
  const [checked, setChecked] = useState(false)
  const [isInputFolded, setIsInputFolded] = useState(false)
  const [isPasswordInputFolded, setIsPassWordInputFolded] = useState(false)
  const [isAccountDeletedFolded, setIsAccountDeletedFolded] = useState(false)
  const [newPasswordInputType, setNewPasswordInputType] = useState('password')
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState('password')
  const [timeLeft, setTimeLeft] = useState(300)
  const [hideResendButton, setHideResendButton] = useState('')
  const [passwordLengthMessage, setPasswordLengthMessage] = useState(false)
  const [passwordIncorrectMessage, setPasswordIncorrect] = useState(false)
  const [verificationNum, setVerificationNum] = useState<number | undefined>(
    undefined,
  )
  const verificationNumInputRef = useRef<HTMLInputElement>(null)
  const newPasswordInputRef = useRef<HTMLInputElement>(null)
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const disableCertificationButton =
    timeLeft <= 0 || verificationNumInputRef.current?.value.length !== 6

  const handlePasswordIncorrectMessage = () => {
    if (
      newPasswordInputRef.current?.value ===
      passwordConfirmInputRef.current?.value
    ) {
      setPasswordIncorrect(false)
      return
    }

    setPasswordIncorrect(true)
  }

  const handlePasswordLengthMessage = () => {
    const regex = /^.{8,}$/
    const value = newPasswordInputRef.current?.value || ''
    setPasswordLengthMessage(!regex.test(value))
  }

  const handleEyeClick1 = () => {
    setNewPasswordInputType(
      newPasswordInputType === 'password' ? 'text' : 'password',
    )
  }

  const handleEyeClick2 = () => {
    setConfirmPasswordInputType(
      confirmPasswordInputType === 'password' ? 'text' : 'password',
    )
  }

  const resetVerificationNum = () => {
    const num = Math.floor(100000 + Math.random() * 900000)
    setVerificationNum(num)
    return num
  }

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const verifyNum = resetVerificationNum()
    console.log(verifyNum)
    await sendVerificationEmail(name, email, verifyNum)
    setIsInputFolded(true)
    ;(e.target as HTMLButtonElement).disabled = true
  }

  const handleVerification = () => {
    const input = verificationNumInputRef.current
    if (verificationNum === Number(input?.value)) {
      setIsPassWordInputFolded(true)
    } else {
      // 토스트 띄워주기
      notify('인증번호가 일치하지 않습니다.', 'error')
    }
  }

  const onClickResend = async () => {
    setHideResendButton('hidden')
    setTimeLeft(300)
    const verifyNum = resetVerificationNum()
    await sendVerificationEmail(name, email, verifyNum, true)
    setTimeout(() => {
      setHideResendButton('')
    }, 30000)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const handlePasswordChange = () => {
    const newPassword = newPasswordInputRef.current
    const passwordConfirm = passwordConfirmInputRef.current

    if (!(newPassword?.value === passwordConfirm?.value)) {
      notify('비밀번호가 일치하지 않습니다.')
      return
    }
    // 비밀번호 변경 api 호출
    // PutPasswordChange({accessToken, body: { password: newPassword?.value }})
    notify('비밀번호 재설정이 완료되었어요.')
    // document.location.reload()
  }

  useEffect(() => {
    const verifierTimerId =
      isInputFolded &&
      setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)

    if (verifierTimerId && timeLeft <= 0) {
      clearInterval(verifierTimerId)
      if (!isPasswordInputFolded) {
        notify('제한 시간이 만료됐어요.', 'error')
      }
    }

    return () => {
      if (verifierTimerId) {
        clearInterval(verifierTimerId)
      }
    }
  }, [timeLeft, isInputFolded, isPasswordInputFolded])

  const handleUserAccount = async () => {
    if (!accessToken) {
      notify('로그인 후 이용해주세요.', 'error')
      router.push('/signin')
      return
    }

    try {
      await deleteUserAccount({ accessToken })
      setAccessToken('')
      notify('회원 탈퇴가 완료되었어요.')
      router.push('/signin')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('회원 탈퇴 중 오류 발생:', error)
      notify('회원 탈퇴 중 오류가 발생했습니다. 다시 시도해 주세요.', 'error')
    }
  }

  return (
    <>
      {!isPasswordInputFolded && !isAccountDeletedFolded && (
        <div className="flex w-full max-w-510pxr flex-col gap-24pxr mb:mt-40pxr">
          <div className="flex flex-col gap-16pxr">
            <section className="flex flex-col gap-4pxr">
              <h1 className="mb-40pxr text-gray-10 font-headline-03">
                계정 설정
              </h1>
              <h4 className="text-gray-10 font-title-02">비밀번호 재설정</h4>
              <p className="text-gray-06 font-caption-02">
                비밀번호 재설정을 위한 이메일을 전송합니다.
              </p>
            </section>
            <section className="flex flex-row items-center gap-24pxr">
              <Input
                variant="border"
                placeholder="Email을 입력해주세요"
                className="w-full max-w-370pxr bg-gray-03"
                disabled
                value={email}
              />

              <Button size="XS" type="button" onClick={handleSendEmail}>
                인증하기
              </Button>
            </section>
          </div>
          {/* isInputFolded 테스트 끝나면 넣어주기 */}
          {isInputFolded && (
            <div>
              <div className="flex flex-col gap-16pxr">
                <h4 className="text-gray-10 font-title-02">인증번호</h4>
                <section className="flex flex-row items-center gap-24pxr">
                  <Input
                    variant="border"
                    ref={verificationNumInputRef}
                    placeholder="숫자 6자리 입력"
                    className="w-full max-w-370pxr"
                    type="number"
                    onInput={(e) => {
                      if (e.currentTarget.value.length > 6) {
                        e.currentTarget.value = e.currentTarget.value.slice(
                          0,
                          6,
                        )
                      }
                    }}
                  />
                  <Button
                    size="XS"
                    type="button"
                    onClick={handleVerification}
                    disabled={disableCertificationButton}
                  >
                    확인
                  </Button>
                </section>
              </div>
              <section className="mr-140pxr flex w-full max-w-468pxr flex-row justify-between pr-98pxr pt-4pxr">
                <div className="flex flex-row gap-4pxr">
                  <p className="text-gray-08 font-caption-03">남은 시간</p>
                  <p className="text-error font-caption-03">
                    {formatTime(timeLeft)}
                  </p>
                </div>
                <button
                  type="button"
                  className={`${hideResendButton} text-gray-08 font-caption-03`}
                  onClick={onClickResend}
                >
                  재전송
                </button>
              </section>
              <section className="mt-24pxr h-fit w-full max-w-370pxr bg-gray-03 p-14pxr">
                <div className="flex flex-row gap-4pxr">
                  <InfoCircledIcon
                    width={12}
                    height={12}
                    className="mt-3pxr flex-shrink-0"
                  />
                  <div>
                    <h4 className="!leading-[180%] text-error font-caption-02">
                      인증번호 메일을 못 받으셨나요?
                    </h4>
                    <ul className="list-disc pl-14pxr !leading-[180%] text-gray-06 font-caption-02">
                      <li>
                        입력하신 인증정보가 일치하지 않을 경우, 인증번호 메일이
                        발송되지 않습니다.
                      </li>
                      <li>
                        인증번호가 메일로 수신되지 않을 경우 정확한 정보로
                        재시도해 주시기 바랍니다.
                      </li>
                      <li>
                        해당 메일을 찾지 못한 경우 스팸함을 확인해 주세요.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      )}
      {isPasswordInputFolded && !isAccountDeletedFolded && (
        <div className="flex w-full max-w-510pxr flex-col gap-24pxr mb:mt-40pxr">
          <div className="flex w-full flex-col gap-8pxr">
            <h1 className="mb-40pxr text-gray-10 font-headline-03">
              계정 설정
            </h1>
            <h4 className="text-gray-10 font-title-02">새로운 비밀번호</h4>
            <section className="flex flex-row items-center gap-24pxr pr-77pxr">
              <div className="relative w-full max-w-370pxr">
                <Input
                  variant="border"
                  ref={newPasswordInputRef}
                  placeholder="비밀번호를 입력해 주세요."
                  className={`pr-32pxr ${passwordLengthMessage ? 'ring-[1px] ring-error' : ''}`}
                  type={newPasswordInputType}
                  onChange={() => {
                    handlePasswordIncorrectMessage()
                    handlePasswordLengthMessage()
                  }}
                />
                <Image
                  width={17}
                  height={17}
                  alt="eye1"
                  src={
                    newPasswordInputType === 'password'
                      ? visibilityOff
                      : visibility
                  }
                  className="absolute right-16pxr top-12pxr"
                  onClick={handleEyeClick1}
                />
              </div>
            </section>
            <label
              htmlFor="passwordConfirm"
              className={`${passwordLengthMessage ? '' : 'hidden'} left-0 top-4pxr text-error font-caption-02`}
            >
              8자리 이상 입력해 주세요.
            </label>
          </div>
          <div className="flex w-full max-w-510pxr flex-col gap-8pxr">
            <h4 className="text-gray-10 font-title-02">비밀번호 확인</h4>
            <section className="flex flex-row items-center gap-24pxr">
              <div className="relative w-full max-w-370pxr">
                <Input
                  id="passwordConfirm"
                  variant="border"
                  ref={passwordConfirmInputRef}
                  placeholder="비밀번호를 다시 한 번 입력해 주세요."
                  className={`${passwordIncorrectMessage ? 'ring-[1px] ring-error' : ''} pr-32pxr`}
                  type={confirmPasswordInputType}
                  onChange={handlePasswordIncorrectMessage}
                />
                <Image
                  width={17}
                  height={17}
                  alt="eye2"
                  src={
                    confirmPasswordInputType === 'password'
                      ? visibilityOff
                      : visibility
                  }
                  className="absolute right-16pxr top-12pxr"
                  onClick={handleEyeClick2}
                />
              </div>
              <Button
                size="XS"
                type="button"
                disabled={passwordIncorrectMessage || passwordLengthMessage}
                onClick={handlePasswordChange}
              >
                확인
              </Button>
            </section>
            <label
              htmlFor="passwordConfirm"
              className={`${passwordIncorrectMessage ? '' : 'hidden'} left-0 top-4pxr text-error font-caption-02`}
            >
              비밀번호가 일치하지 않습니다.
            </label>
          </div>
        </div>
      )}
      {!isAccountDeletedFolded && (
        <button
          type="button"
          className="mt-100pxr text-gray-10 font-title-02"
          onClick={() => setIsAccountDeletedFolded(true)}
        >
          회원탈퇴
        </button>
      )}
      {isAccountDeletedFolded && (
        <section className="ml-130pxr h-full w-fit max-w-480pxr mb:ml-0pxr mb:mt-80pxr mb:w-full">
          <h1 className="font-headline-03">
            {name}님,
            <br />
            정말 BRICK을 떠나실건가요?
          </h1>

          <p className="mt-40pxr text-gray-10 font-title-02">
            탈퇴하기 전 아래 내용을 확인해 주세요.
          </p>
          <div className="mt-8pxr">
            <li className="text-gray-08 font-title-02">
              {name}님의 모든 활동 정보는 바로 삭제되며,삭제된 데이터는 복구할
              수 없어요.
            </li>
            <li className="text-gray-08 font-title-02">
              부정 이용 방지를 위해 탈퇴 후{' '}
              <span className="text-gray-10">15일 동안</span> Brick에 다시
              가입할 수 없어요.
            </li>
          </div>

          <div className="mt-41pxr flex gap-8pxr">
            {checked ? (
              <Image
                src={checkedCheckBox}
                alt="탈퇴 동의 체크박스"
                width={24}
                height={24}
                onClick={() => setChecked((prev) => !prev)}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src={uncheckedCheckBox}
                alt="탈퇴 미동의 체크박스"
                width={24}
                height={24}
                onClick={() => setChecked((prev) => !prev)}
                className="cursor-pointer"
              />
            )}
            <span className="text-gray-08 font-title-02">
              안내 사항을 확인하였으며, 이에 동의합니다.
            </span>
          </div>
          <div className="mt-85pxr flex items-center justify-center">
            <Button
              size="M"
              className={`${checked ? 'bg-primary text-gray-01' : 'bg-gray-04 text-gray-01'}`}
              onClick={handleUserAccount}
              disabled={!checked}
            >
              회원 탈퇴
            </Button>
          </div>
        </section>
      )}
    </>
  )
}

export default PasswordResetVerifier
