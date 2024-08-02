import BASE_URL from './apiConfig'

interface DeleteSocialProps {
  accessToken: string
  id: number
}
async function deleteSocial({
  accessToken,
  id,
}: DeleteSocialProps): Promise<Response> {
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
