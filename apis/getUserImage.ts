import buildQueryString from '@/utils/buildQueryString'
import BASE_URL from './apiConfig'

interface IGetUserImageProps {
  accessToken: string
  imageFileExtension: 'JPEG' | 'JPG' | 'PNG' | 'WEBP'
}

async function getUserImage({
  accessToken,
  imageFileExtension,
}: IGetUserImageProps): Promise<Response> {
  const query = buildQueryString({ imageFileExtension })
  const response = await fetch(
    `${BASE_URL}/auth/users/images${query ? `?${query}` : ''}`,
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

export default getUserImage
