import buildQueryString from '@/utils/buildQueryString'
import BASE_URL from './apiConfig'

interface IGetSocialImageProps {
  socialId: number
  accessToken: string
  imageFileExtension: 'JPEG' | 'JPG' | 'PNG' | 'WEBP'
}

async function getSocialImage({
  socialId,
  accessToken,
  imageFileExtension,
}: IGetSocialImageProps): Promise<Response> {
  const query = buildQueryString({ imageFileExtension })
  const response = await fetch(
    `${BASE_URL}/socials/${socialId}/images${query ? `?${query}` : ''}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    },
  )

  return response
}

export default getSocialImage
