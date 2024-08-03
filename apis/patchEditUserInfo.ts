import BASE_URL from './apiConfig'

interface IPatchEditUserInfoProps {
  body: {
    introduce: string
    name?: string
    birthday: string
    profileImageUrl: string
  }
  accessToken: string
}

async function patchEditUserInfo({
  body,
  accessToken,
}: IPatchEditUserInfoProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default patchEditUserInfo
