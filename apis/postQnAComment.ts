import BASE_URL from './apiConfig'

type Body = { content: string }

interface IPostQnACommentProps {
  accessToken: string
  socialId: number
  qnaId: number
  body: Body
}

async function postQnAComment({
  accessToken,
  socialId,
  qnaId,
  body,
}: IPostQnACommentProps): Promise<Response> {
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
