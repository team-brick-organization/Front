import BASE_URL from './apiConfig'

/** QnA 삭제 fetch
 * @param accessToken 엑세스토큰
 * @param id 소셜 id
 */

async function deleteQnA(
  accessToken: string,
  socialId: number,
  qnaId: number,
): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/qnas/${qnaId}`,
    {
      method: 'delete',
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
