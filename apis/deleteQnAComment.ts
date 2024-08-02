import BASE_URL from './apiConfig'

interface DeleteQnACommentProps {
  accessToken: string
  socialId: number
  qnaId: number
  commentId: number
}
async function deleteQnAComment({
  accessToken,
  socialId,
  qnaId,
  commentId,
}: DeleteQnACommentProps): Promise<Response> {
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
