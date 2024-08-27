type Fetcher<BodyType> = ({ body }: { body: BodyType }) => Promise<Response>

/** 중복 여부를 확인하기 위해 서버에 요청을 보내는 함수
 * @param text: 중복 여부를 확인할 텍스트 (닉네임, 이메일 등)
 * @param fetcher: 서버 요청을 수행하는 함수
 * @param key: 응답 데이터에서 중복 여부를 확인할 때 사용할 속성의 key
 * @returns duplicateNickname => boolean, duplicateEmail => boolean을 반환
 * */
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
