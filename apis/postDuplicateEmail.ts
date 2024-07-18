import BASE_URL from './apiConfig'

interface IPostDuplicateEmailProps {
  body: {
    email: string
  }
}

async function postDuplicateEmail({
  body,
}: IPostDuplicateEmailProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/users/duplicate-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  })

  return response
}

export default postDuplicateEmail
