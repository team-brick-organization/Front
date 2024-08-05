import BASE_URL from './apiConfig'

async function getQnAComment(
  socialId: number,
  qnaId: number,
  page: number,
  size: number,
): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}/comments?page=${page}&size=${size}`,
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
