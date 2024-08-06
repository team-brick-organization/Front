import BASE_URL from './apiConfig'

interface IQnaEditFormInputs {
  title: string
  content: string
}

interface IPatchEditCommentProps {
  accessToken: string
  socialId: number
  qnaId: number
  body: IQnaEditFormInputs
}

async function patchEditQnA({
  accessToken,
  socialId,
  qnaId,
  body,
}: IPatchEditCommentProps): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}`,
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

export default patchEditQnA
