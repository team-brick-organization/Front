import type { TypeEmail, TypeNickname } from 'types/types'
import BASE_URL from './apiConfig'

async function postDuplicateCheck({
  body,
}: {
  body: TypeEmail | TypeNickname
}): Promise<Response> {
  let endpoint = ''

  if ('email' in body) {
    endpoint = `${BASE_URL}/auth/users/duplicate-email`
  }
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

  return response
}

export default postDuplicateCheck
