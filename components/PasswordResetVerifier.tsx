'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button, Input } from '@/components'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import visibility from '@/public/images/svgs/visibility.svg'
import visibilityOff from '@/public/images/svgs/visibilityOff.svg'
import sendVerificationEmail from '@/utils/sendVerificationEmail'
import { notify } from './ToastMessageTrigger'

interface PasswordResetVerifierProps {
  name: string
  email: string
}

/**
 * 비밀번호 재설정을 위한 이메일을 전송하는 컴포넌트
 * @param name 현제 유저의 이름
 * @param email 현제 유저의 이메일
 */

function PasswordResetVerifier({ name, email }: PasswordResetVerifierProps) {
  const [isInputFolded, setIsInputFolded] = useState(false)
  const [isPasswordInputFolded, setIsPassWordInputFolded] = useState(false)
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
    }, 5000)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const handlePasswordChange = () => {
    const newPassword = newPasswordInputRef.current
    const passwordConfirm = passwordConfirmInputRef.current
    if (newPassword?.value === passwordConfirm?.value) {
      // 비밀번호 변경 api 호출
      notify('비밀번호 재설정이 완료되었어요.')
    } else {
      // 토스트 띄워주기
      notify('비밀번호가 일치하지 않습니다.')
    }
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

  return (
    <>
      {!isPasswordInputFolded && (
        <div className="flex w-full max-w-510pxr flex-col gap-24pxr">
          <div className="flex flex-col gap-16pxr">
            <section className="flex flex-col gap-4pxr">
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
                    className="mt-1pxr flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-[10px] font-normal leading-[14px] text-error">
                      인증번호 메일을 못 받으셨나요?
                    </h4>
                    <ul className="list-disc pl-14pxr text-[10px] font-normal leading-[15px] text-gray-06">
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
      {isPasswordInputFolded && (
        <div className="mt-24pxr flex w-full max-w-510pxr flex-col gap-24pxr">
          <div className="flex w-full flex-col gap-8pxr">
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
      <button type="button" className="mt-100pxr text-gray-10 font-title-02">
        회원탈퇴
      </button>
    </>
  )
}

export default PasswordResetVerifier
