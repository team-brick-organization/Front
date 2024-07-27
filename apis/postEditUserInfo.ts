import BASE_URL from './apiConfig'

interface IPostEditUserInfoProps {
  body: {
    detail: string
    name?: string // 추후 nickname으로 변경 예정
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
  })

  return response
}

export default postEditUserInfo
