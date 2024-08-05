import BASE_URL from './apiConfig'

interface DeleteQnAProps {
  accessToken: string
  socialId: number
  qnaId: number
}

/** QnA 삭제 fetch
 * @param accessToken 엑세스토큰
 * @param id 소셜 id
 */

async function deleteQnA({
  accessToken,
  socialId,
  qnaId,
}: DeleteQnAProps): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}`,
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

export default deleteQnA
