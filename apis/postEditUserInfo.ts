import BASE_URL from './apiConfig'

interface IPostEditUserInfoProps {
  body: {
    detail: string
    nickname?: string
    birthday: string
    profileImageUrl: string
  }
}

async function postEditUserInfo({
  body,
}: IPostEditUserInfoProps): Promise<Response> {
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

export default postEditUserInfo
