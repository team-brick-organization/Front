import BASE_URL from './apiConfig'

async function deleteQnAComment(
  accessToken: string,
  socialId: number,
  qnaId: number,
  commentId: number,
): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}/comments/${commentId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    },
  )

  return response
}

export default deleteQnAComment
