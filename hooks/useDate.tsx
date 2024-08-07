import { useEffect, useState } from 'react'

interface IUseDateProps {
  timeIntervals?: number
}

function useDate({ timeIntervals = 30 }: IUseDateProps) {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  useEffect(() => {
    if (selectedDateTime) return

    const currentDate = new Date()
    const initialDate = new Date()

    if (currentDate.getMinutes() < timeIntervals) {
      initialDate.setMinutes(timeIntervals + 1)
      initialDate.setSeconds(0)
    }

    initialDate.setHours(currentDate.getHours() + 1)
    initialDate.setMinutes(0)
    initialDate.setSeconds(0)

    setSelectedDateTime(initialDate)
  }, [selectedDateTime, timeIntervals])

  return { selectedDateTime, setSelectedDateTime }
}

export default useDate
