type Fetcher<BodyType> = ({ body }: { body: BodyType }) => Promise<Response>

async function fetchIsDuplicated<BodyType, ResponseType>(
  text: BodyType,
  fetcher: Fetcher<BodyType>,
  key: keyof ResponseType,
) {
  const response = await fetcher({ body: text })

  if (!response.ok) {
    throw new Error('중복 확인에 실패했습니다.')
  }

  const data: ResponseType = await response.json()

  return data[key]
}

export default fetchIsDuplicated
