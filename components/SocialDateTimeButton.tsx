import { forwardRef } from 'react'

interface ISocialDateTimeButtonProps {
  type: 'date' | 'time'
  selectedDateTime: Date | null
}

const SocialDateTimeButton = forwardRef<
  HTMLButtonElement,
  ISocialDateTimeButtonProps
>(({ type, selectedDateTime, ...rest }, ref) => {
  if (!selectedDateTime) return null

  const year = selectedDateTime.getFullYear()
  const month = selectedDateTime.getMonth() + 1
  const date = selectedDateTime.getDate()
  const hours = selectedDateTime.getHours()
  const minutes = selectedDateTime.getMinutes()
  const dateOrTime =
    type === 'date'
      ? `${year}년 ${month}월 ${date}일`
      : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

  return (
    <button className="text-start" type="button" {...rest} ref={ref}>
      {dateOrTime}
    </button>
  )
})

SocialDateTimeButton.displayName = 'SocialDateTimeButton'
export default SocialDateTimeButton
