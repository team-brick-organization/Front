import BASE_URL from './apiConfig'

interface PostQnAProps {
  accessToken: string
  body: {
    title: string
    content: string
  }
  id: number
}

async function postQnA({
  accessToken,
  id,
  body,
}: PostQnAProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${id}/qnas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default postQnA
