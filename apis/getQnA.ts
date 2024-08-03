import BASE_URL from './apiConfig'

async function getQnA(id: number, limit: number): Promise<Response> {
  const response = await fetch(
    `${BASE_URL}/socials/${id}/qnas?limit=${limit}`,
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
