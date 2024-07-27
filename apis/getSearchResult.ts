import mockSocialProps from '@/components/Gnb/moc'
import { Social } from '@/components/MypageCards/MypageCard'

/** 검색값 불러오는 API 호출함수
 * @param searchValue 검색 값 넣어주기
 * @todo API 연결 하기, 프롭스 타입 수정하기
 */

function getSearchResult() {
  const api: Social[] = mockSocialProps
  return api
}

export default getSearchResult
