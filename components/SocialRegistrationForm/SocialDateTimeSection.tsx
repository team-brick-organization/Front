import { SocialDateTime } from '../index'

function SocialDateTimeSection({
  selectedDateTime,
  onSelectedDateTime,
  disabled = false,
}: {
  selectedDateTime: Date | null
  onSelectedDateTime: (date: Date | null) => void
  disabled?: boolean
}) {
  return (
    <div className="flex w-full flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialDateTime">
        모임 일정
      </label>
      <SocialDateTime
        selectedDateTime={selectedDateTime}
        onSelectedDateTime={onSelectedDateTime}
        disabled={disabled}
      />
    </div>
  )
}

export default SocialDateTimeSection
