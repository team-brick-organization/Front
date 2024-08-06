import convertToKoreanTime from './convert-to-korean-time'

function getEventStatus(
  date: string | Date,
  participantsCurrentCount: number,
  participantsMaxCount: number,
  canceled: boolean = false,
): string {
  const eventDate = convertToKoreanTime(new Date(date))
  const today = new Date()

  // 3일 이내로 임박
  // const isDateNear =
  //   eventDate.getTime() < today.getTime() + 3 * 24 * 60 * 60 * 1000

  // 인원수가 80% 이상 찬 경우
  const isAlmostFull = participantsCurrentCount / participantsMaxCount > 0.8

  // 인원수가 꽉 찬 경우
  const isFull = participantsCurrentCount === participantsMaxCount

  // 기간이 이미 지난 경우
  const isPast = eventDate.getTime() < today.getTime()

  // 취소된 경우
  if (canceled) {
    return '모임 취소'
  }

  if (isFull || isPast) {
    return '모집 마감'
  }

  if (isAlmostFull) {
    return '마감 임박'
  }

  return ''
}

export default getEventStatus
