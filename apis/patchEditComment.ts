import BASE_URL from './apiConfig'

interface IPatchEditCommentProps {
  accessToken: string
  socialId: number
  qnaId: number
  commentId: number
  body: {
    comment: string
  }
}

async function patchEditComment({
  accessToken,
  socialId,
  qnaId,
  commentId,
  body,
}: IPatchEditCommentProps): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}/comments/${commentId}`,
    {
      method: 'PATCH',
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

export default patchEditComment
