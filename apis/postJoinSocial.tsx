import BASE_URL from './apiConfig'

async function postJoinSocial(
  accessToken: string,
  id: number,
): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${id}/participants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default postJoinSocial
