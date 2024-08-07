/* 이메일: @기준 사용자명과 도메인구분, 첫글자 대소문자허용,
특수문자 -, _, .이 올 수 있지만 연속으로는 올 수 x,특수문자 다음에는 다시 알파벳 대소문자와 숫자 가능
최소 두 글자에서 세 글자까지의 알파벳으로 된 최상위 도메인 */
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

export const emailPattern = {
  value: EMAIL_REGEX,
  message: '이메일 형식에 맞지 않습니다.',
  validate: {
    email: (email: string) => {
      if (!email.includes('@')) return true
      return EMAIL_REGEX.test(email)
    },
  },
}

export const namePattern = {
  value: /^[가-힣]{2,8}$/,
  message: '이름을 입력해 주세요.',
}

export const nicknamePattern = {
  value: /^[가-힣a-zA-Z0-9]{2,8}$/,
  message: '',
}

export const birthPattern = {
  value: /^[0-9]{6}$/,
  message: '생년월일을 입력해 주세요.',
}

export const phoneNumberPattern = {
  value: /^[0-9]{11}$/,
  message: '전화번호를 입력해 주세요.',
}

export const passwordPattern = {
  value: 8,
  message: '8자리 이상 비밀번호를 입력하세요.',
}

export const detailPattern = {
  value: /^.{1,80}$/,
  message: '',
}
