import buildQueryString from '@/utils/buildQueryString'
import BASE_URL from './apiConfig'

export type FilterByType = 'open' | 'close' | 'cancel' | 'host'
export type OrderByType = 'popularity'

interface IGetSocialsProps {
  filterBy?: FilterByType
  orderBy?: OrderByType
}

async function getSocials({
  filterBy,
  orderBy,
}: IGetSocialsProps): Promise<Response> {
  const query = buildQueryString({ filterBy, orderBy })

  const response = await fetch(
    `${BASE_URL}/socials${query ? `?${query}` : ''}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  )

  return response
}

export default getSocials
