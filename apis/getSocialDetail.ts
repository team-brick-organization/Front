import BASE_URL from './apiConfig'

async function getSocialDetail(id: number): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${id}/details`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  return response
}

export default getSocialDetail
