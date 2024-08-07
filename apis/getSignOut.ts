import BASE_URL from './apiConfig'

interface IGetSignOutProps {
  accessToken: string
}

async function getSignOut({
  accessToken,
}: IGetSignOutProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/signout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default getSignOut
