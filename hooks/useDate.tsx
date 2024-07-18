import { useState } from 'react'

interface IUseDateProps {
  timeIntervals?: number
}

function useDate({ timeIntervals = 30 }: IUseDateProps) {
  const currentDate = new Date()
  const initialDate = new Date()

  if (currentDate.getMinutes() < timeIntervals) {
    initialDate.setMinutes(timeIntervals + 1)
    initialDate.setSeconds(0)
  } else {
    initialDate.setHours(currentDate.getHours() + 1)
    initialDate.setMinutes(0)
    initialDate.setSeconds(0)
  }

  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
    initialDate,
  )

  return { selectedDateTime, setSelectedDateTime }
}

export default useDate
