import BASE_URL from './apiConfig'

interface IGetAccessTokenProps {
  accessToken: string
}

async function deleteUserAccount({
  accessToken,
}: IGetAccessTokenProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default deleteUserAccount
