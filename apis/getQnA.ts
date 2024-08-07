import BASE_URL from './apiConfig'

interface GetQnAProps {
  id: number
  pageNum: number
  size: number
}

async function getQnA({ id, pageNum, size }: GetQnAProps): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${id}/qnas?page=${pageNum}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  )

  return response
}

export default getQnA
