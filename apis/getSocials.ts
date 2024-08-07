import buildQueryString from '@/utils/buildQueryString'
import BASE_URL from './apiConfig'

export type FilterByType = 'open' | 'close' | 'cancel'
export type OrderByType = 'popularity'

interface IGetSocialsProps {
  filterBy?: FilterByType
  orderBy?: OrderByType
  offset?: number
  limit?: number
  ids?: string
  name?: string
}

async function getSocials({
  filterBy,
  orderBy,
  offset,
  limit,
  ids,
  name,
}: IGetSocialsProps): Promise<Response> {
  const query = buildQueryString({
    filterBy,
    orderBy,
    offset,
    limit,
    ids,
    name,
  })

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
