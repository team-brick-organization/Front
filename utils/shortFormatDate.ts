function shortFormatDate(date: Date) {
  const convertedDate = new Date(date)

  const formattedDate = `${convertedDate.getFullYear().toString().slice(2, 4)}.${(convertedDate.getMonth() + 1).toString().padStart(2, '0')}.${convertedDate.getDate().toString().padStart(2, '0')}`

  return formattedDate
}

export default shortFormatDate
