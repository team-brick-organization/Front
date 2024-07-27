import type { TypeEmail } from 'types/types'
import BASE_URL from './apiConfig'

async function postDuplicateEmail({
  body,
}: {
  body: TypeEmail
}): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users/duplicate-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default postDuplicateEmail
