import BASE_URL from './apiConfig'

/** 소셜 참가 취소 fetch
 * @param accessToken 엑세스토큰
 * @param id 소셜 id
 */

async function deleteSocialParticipation(
  accessToken: string,
  id: number,
): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${id}/participants`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default deleteSocialParticipation
