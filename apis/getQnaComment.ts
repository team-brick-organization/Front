import BASE_URL from './apiConfig'

async function getQnAComment(
  socialId: number,
  qnaId: number,
  limit: number,
): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}/comments?limit=${limit}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  )

  return response
}

export default getQnAComment
