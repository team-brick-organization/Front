import validateAndAdjustInputNumber from '@/utils/validateAndAdjustInputNumber'
import { useFormContext } from 'react-hook-form'
import { Input } from '../index'

function SocialDuesSection({ initialDues }: { initialDues?: number }) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()

  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialDues">
        활동비
      </label>
      <Input
        {...register('socialDues', {
          required: '활동비는 필수 입력입니다.',
        })}
        className={`!w-full !max-w-398pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialDues ? 'ring-1 ring-error' : ''}`}
        id="socialDues"
        type="text"
        placeholder="활동비를 입력해 주세요. 활동비가 없는 경우는 0으로 입력해 주세요."
        onChange={(e) => {
          const value = validateAndAdjustInputNumber({
            e,
          })
          setValue('socialDues', value, { shouldValidate: true })
        }}
        defaultValue={initialDues}
        disabled={initialDues !== undefined}
      />
    </div>
  )
}

export default SocialDuesSection
