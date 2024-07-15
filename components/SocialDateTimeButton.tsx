import { forwardRef } from 'react'

interface ISocialDateTimeButtonProps {
  selectedDateTime: Date | null
}

const SocialDateTimeButton = forwardRef<
  HTMLButtonElement,
  ISocialDateTimeButtonProps
>(({ selectedDateTime, ...rest }, ref) => {
  if (!selectedDateTime) return null

  const year = selectedDateTime.getFullYear()
  const month = selectedDateTime.getMonth() + 1
  const date = selectedDateTime.getDate()
  const hours = selectedDateTime.getHours()
  const minutes = selectedDateTime.getMinutes()
  const ampm = hours >= 12 ? '오후' : '오전'
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return (
    <button type="button" {...rest} ref={ref}>
      {`${year}년 ${month}월 ${date}일 ${ampm} ${formattedHours}:${formattedMinutes}`}
    </button>
  )
})

SocialDateTimeButton.displayName = 'SocialDateTimeButton'
export default SocialDateTimeButton
