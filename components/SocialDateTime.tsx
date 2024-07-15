'use client'

import DatePicker, { registerLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'
import filterPassedTime from '@/utils/filterPassedTime'
import { SocialDateTimeButton } from './index'
import '@/styles/SocialDateTimePicker.css'

registerLocale('ko', ko)

interface ISocialDateProps {
  selectedDateTime: Date | null
  onSelectedDateTime: (date: Date | null) => void
}

function SocialDateTime({
  selectedDateTime,
  onSelectedDateTime: handleSelectedDateTime,
}: ISocialDateProps) {
  return (
    <DatePicker
      className="rounded-[0.3125rem] bg-gray-01 p-14pxr text-gray-10 font-body-02 tb:rounded-full"
      shouldCloseOnSelect
      minDate={new Date()}
      selected={selectedDateTime}
      showTimeSelect
      timeIntervals={60}
      showPopperArrow={false}
      customInput={<SocialDateTimeButton selectedDateTime={selectedDateTime} />}
      onChange={(date) => handleSelectedDateTime(date)}
      popperPlacement="bottom-start"
      filterTime={filterPassedTime}
      dateFormatCalendar="yyyy년 M월"
      locale="ko"
      timeCaption="시간"
    />
  )
}

export default SocialDateTime
