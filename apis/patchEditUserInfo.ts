import BASE_URL from './apiConfig'

interface IPatchEditUserInfoProps {
  body: {
    detail: string
    nickname?: string
    birthday: string
    profileImageUrl: string
  }
}

async function patchEditUserInfo({
  body,
}: IPatchEditUserInfoProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default patchEditUserInfo
