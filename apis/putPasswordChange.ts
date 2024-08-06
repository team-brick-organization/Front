import BASE_URL from './apiConfig'

interface IPutPasswordChange {
  accessToken: string
  body: { password: string }
}

async function PutPasswordChange({
  accessToken,
  body,
}: IPutPasswordChange): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users/password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default PutPasswordChange
