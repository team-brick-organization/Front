import BASE_URL from './apiConfig'

interface IPostSignInProps {
  body: {
    email: string
    password: string
  }
}

async function postSignIn({ body }: IPostSignInProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default postSignIn
