import useWindowWidth from '@/hooks/useWindowWidth'

function useKakaoButtonText() {
  const windowWidth = useWindowWidth()

  const kakaoButtonText =
    windowWidth && windowWidth <= 400
      ? '카카오로 시작하기'
      : '카카오로 3초만에 시작하기'

  return kakaoButtonText
}

export default useKakaoButtonText
