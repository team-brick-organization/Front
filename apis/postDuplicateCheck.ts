import type { TypeEmail, TypeNickname } from 'types/types'
import BASE_URL from './apiConfig'

// 닉네임, 이메일 중복체크 API
// request 예시 : {name: string}, {email: string}
async function postDuplicateCheck({
  body,
}: {
  body: TypeEmail | TypeNickname
}): Promise<Response> {
  let endpoint = ''

  // body에 email이 있으면 이메일 중복체크 API 호출
  if ('email' in body) {
    endpoint = `${BASE_URL}/auth/users/duplicate-email`
  }

  // body에 name이 있으면 닉네임 중복체크 API 호출
  if ('name' in body) {
    endpoint = `${BASE_URL}/auth/users/duplicate-name`
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  // return 예시: {duplicateName: boolean}, {duplicateEmail: boolean}
  return response
}

export default postDuplicateCheck
