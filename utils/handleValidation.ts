import { UseFormClearErrors, UseFormSetError } from 'react-hook-form'
import { ISignUpFormInputs } from '@/components/SignUpEmailForm'
import { TypeEmail, TypeNickname } from 'types/types'
import postDuplicateCheck from '@/apis/postDuplicateCheck'
import fetchIsDuplicated from '@/utils/fetchIsDuplicated'
import { IProfileFormInputs } from '@/components/ManagingMyInfo'

/** 중복된 닉네임인지 확인하는 함수
 * @param nickname: 사용자가 입력한 닉네임
 * @param setError: 에러메시지를 설정하는 함수
 */
export async function validateNickname(
  nickname: string,
  setError: UseFormSetError<ISignUpFormInputs>,
) {
  if (!nickname) return

  const isDuplicateNickname = await fetchIsDuplicated<
    TypeNickname,
    IPostDuplicateNicknameResponse
  >({ name: nickname }, postDuplicateCheck, 'duplicateName')

  if (isDuplicateNickname) {
    setError('nickname', {
      type: 'validate',
      message: '중복된 닉네임입니다.',
    })
  }
}

/** 중복된 이메일인지 확인하는 함수
 * @param email: 사용자가 입력한 닉네임
 * @param setError: 에러메시지를 설정하는 함수
 */
export async function validateEmail(
  email: string,
  setError: UseFormSetError<ISignUpFormInputs>,
) {
  if (!email) return

  const isDuplicateEmail = await fetchIsDuplicated<
    TypeEmail,
    IPostDuplicateEmailResponse
  >({ email }, postDuplicateCheck, 'duplicateEmail')

  if (isDuplicateEmail) {
    setError('email', {
      type: 'validate',
      message: '이미 가입된 이메일입니다.',
    })
  }
}

/** 마이페이지에서 중복된 닉네임인지 확인하는 함수
 * @param name: 사용자가 입력한 닉네임
 * @param userDataName: 저장되어있는 유저닉네임
 * @param clearErrors: 에러메시지를 초기화하는 함수
 * @param setError: 에러메시지를 설정하는 함수
 * */
export async function validateMyInfoNickName(
  name: string,
  userDataName: string | undefined,
  clearErrors: UseFormClearErrors<IProfileFormInputs>,
  setError: UseFormSetError<IProfileFormInputs>,
) {
  if (!name) return

  // 현재 닉네임과 동일한 경우 중복체크를 하지 않게 하는 로직
  if (name === userDataName) {
    clearErrors('name')
    return
  }

  const isDuplicateNickname = await fetchIsDuplicated<
    TypeNickname,
    IPostDuplicateNicknameResponse
  >({ name }, postDuplicateCheck, 'duplicateName')

  if (isDuplicateNickname) {
    setError('name', {
      type: 'validate',
      message: '중복된 닉네임입니다.',
    })
  }
}
