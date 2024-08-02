function convertToKoreanTime(prevDate: Date) {
  const offset = new Date().getTimezoneOffset() * 60000

  return new Date(prevDate.getTime() - offset)
}

export default convertToKoreanTime
