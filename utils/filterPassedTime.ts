const filterPassedTime = (time: Date) => {
  const currentDate = new Date()
  const selectedDate = new Date(time)

  return currentDate < selectedDate
}

export default filterPassedTime
