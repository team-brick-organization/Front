import BASE_URL from './apiConfig'

async function deleteSocial(
  accessToken: string,
  id: number,
): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default deleteSocial
