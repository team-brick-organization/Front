/* 이메일: @기준 사용자명과 도메인구분, 첫글자 대소문자허용,
특수문자 -, _, .이 올 수 있지만 연속으로는 올 수 x,특수문자 다음에는 다시 알파벳 대소문자와 숫자 가능
최소 두 글자에서 세 글자까지의 알파벳으로 된 최상위 도메인 */
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

// 닉네임: - 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성
// * 특이사항 : 한글 초성 및 모음은 허가하지 않는다.
export const NICKNAME_REGEX = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/

export const emailPattern = {
  value: EMAIL_REGEX,
  message: '이메일 형식에 맞지 않습니다.',
}

export const nicknamePattern = {
  value: NICKNAME_REGEX,
  message: '닉네임 형식에 맞지 않습니다.',
}

export const passwordMinLength = {
  value: 7,
  message: '7자리 이상 비밀번호를 입력하세요.',
}
