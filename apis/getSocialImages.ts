import BASE_URL from './apiConfig'

interface IGetSocialImagesProps {
  socialId: number
  accessToken: string
}

async function getSocialImages({
  socialId,
  accessToken,
}: IGetSocialImagesProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${socialId}/images`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

export default getSocialImages
