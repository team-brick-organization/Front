import buildQueryString from '@/utils/buildQueryString'
import BASE_URL from './apiConfig'

interface GetMypageProps {
  accessToken: string
  offset: number
  limit: number
}

async function getCreatedSocial({
  accessToken,
  offset,
  limit,
}: GetMypageProps): Promise<Response> {
  const query = buildQueryString({ offset, limit })
  const response = await fetch(`${BASE_URL}/socials/me?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default getCreatedSocial
