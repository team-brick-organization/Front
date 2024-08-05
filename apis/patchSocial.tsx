import BASE_URL from './apiConfig'

interface IPatchSocialProps {
  accessToken: string
  socialId: number
  body: IPatchSocial
}

async function patchSocial({
  accessToken,
  body,
  socialId,
}: IPatchSocialProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/socials/${socialId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default patchSocial
