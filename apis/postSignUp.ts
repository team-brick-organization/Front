import BASE_URL from './apiConfig'

interface IPostSignUpProps {
  body: {
    email: string
    password: string
    name: string
  }
}

async function postSignUp({ body }: IPostSignUpProps): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
    credentials: 'include',
  })

  return response
}

export default postSignUp
