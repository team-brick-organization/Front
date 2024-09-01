import { nicknamePattern } from '@/constants/RegExr'
import { useMemo } from 'react'

interface INicknameProps {
  watchNickname: string
}
// useMemo를 굳이 사용할 필요는 없지만 사용방법 연습을 위해 사용 !
/** Nickname 조건 유효성 검사를 위한 커스텀 훅
 * @param watchNickname: watch 함수로 가져온 nickname
 * @returns isLengthValid: 닉네임 길이가 2~8자인지 여부
 * @returns isValidPattern: 닉네임이 정규표현식에 맞는지 여부
 * @returns hasNoWhitespace: 닉네임에 공백이 없는지 여부
 */
//
function useNicknameValidation({ watchNickname }: INicknameProps) {
  const isLengthValid =
    !!watchNickname && watchNickname.length >= 2 && watchNickname.length <= 8

  const isValidPattern = nicknamePattern.value.test(watchNickname)
  const hasNoWhitespace = !/\s/.test(watchNickname || '')
  const showChecks = watchNickname && watchNickname.length >= 2

  // dependency는 watchNickname 의해 계산된 값이기 때문에 다 넣을 필요는 없음
  return useMemo(
    () => ({
      isLengthValid,
      isValidPattern,
      hasNoWhitespace,
      showChecks,
    }),
    [watchNickname],
  )
}

export default useNicknameValidation
