import BASE_URL from './apiConfig'

interface IPostSocialProps {
  accessToken: string
  body: IPostSocialBody
}

async function postSocial({
  accessToken,
  body,
}: IPostSocialProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default postSocial
