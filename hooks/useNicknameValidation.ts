import { nicknamePattern } from '@/constants/RegExr'
import { useMemo } from 'react'

interface INicknameProps {
  watchNickname: string
}

// useMemo를 굳이 사용할 필요는 없지만 사용방법 연습을 위해 사용 !
// dependency는 watchNickname 의해 계산된 값이기 때문에 다 넣을 필요는 없음
function useNicknameValidation({ watchNickname }: INicknameProps) {
  const isLengthValid =
    watchNickname && watchNickname.length >= 2 && watchNickname.length <= 8
  const isValidPattern = nicknamePattern.value.test(watchNickname)
  const hasNoWhitespace = !/\s/.test(watchNickname || '')
  const showChecks = watchNickname && watchNickname.length >= 2

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
