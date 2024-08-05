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
  disabled?: boolean
}

function SocialDateTime({
  selectedDateTime,
  onSelectedDateTime: handleSelectedDateTime,
  disabled = false,
}: ISocialDateProps) {
  return (
    <div className="flex gap-8pxr">
      <DatePicker
        className="rounded-[0.3125rem] bg-gray-01 px-20pxr py-14pxr text-start text-gray-10 outline-gray-08 font-body-02 disabled:bg-gray-03 disabled:text-gray-06"
        shouldCloseOnSelect
        minDate={new Date()}
        selected={selectedDateTime}
        showPopperArrow={false}
        enableTabLoop={false}
        customInput={
          <SocialDateTimeButton
            type="date"
            selectedDateTime={selectedDateTime}
          />
        }
        onChange={(date) => handleSelectedDateTime(date)}
        popperPlacement="bottom-start"
        dateFormatCalendar="yyyy년 M월"
        locale="ko"
        disabled={disabled}
      />
      <DatePicker
        className="rounded-[0.3125rem] bg-gray-01 px-20pxr py-14pxr text-start text-gray-10 outline-gray-08 font-body-02 disabled:bg-gray-03 disabled:text-gray-06"
        shouldCloseOnSelect
        minDate={new Date()}
        selected={selectedDateTime}
        showTimeSelect
        timeIntervals={60}
        showPopperArrow={false}
        enableTabLoop={false}
        customInput={
          <SocialDateTimeButton
            type="time"
            selectedDateTime={selectedDateTime}
          />
        }
        showTimeSelectOnly
        onChange={(date) => handleSelectedDateTime(date)}
        popperPlacement="bottom-start"
        filterTime={filterPassedTime}
        dateFormatCalendar="yyyy년 M월"
        locale="ko"
        timeCaption="시간"
        disabled={disabled}
      />
    </div>
  )
}

export default SocialDateTime
