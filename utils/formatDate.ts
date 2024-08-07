function formatDate(date: Date) {
  const days = ['일', '월', '화', '수', '목', '금', '토']

  const hours = date.getHours()
  const halfDay = hours >= 12 ? '오후' : '오전'

  const hours12 = hours % 12 || 12

  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${date.getMonth() + 1}.${date.getDate()} (${days[date.getDay()]}) ${halfDay} ${hours12}:${minutes}`
}

export default formatDate
