import BASE_URL from './apiConfig'

async function postQnAComment(
  accessToken: string,
  socialId: number,
  qnaId: number,
  body: { comment: string },
): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ...body }),
      credentials: 'include',
    },
  )

  return response
}

export default postQnAComment
