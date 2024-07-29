import BASE_URL from './apiConfig'

interface IGetUserProps {
  accessToken: string
}

async function getUser({ accessToken }: IGetUserProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default getUser
