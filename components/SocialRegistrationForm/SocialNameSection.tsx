import { useFormContext } from 'react-hook-form'
import { DisplayMaxLength, Input } from '../index'

function SocialNameSection({ initialName }: { initialName?: string }) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  return (
    <div className="flex w-full max-w-270pxr flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialName">
        모임 이름
      </label>
      <div>
        <Input
          {...register('socialName', {
            required: '모임 이름은 필수 입력입니다.',
            maxLength: {
              value: 20,
              message: '모임 이름은 20자 이내로 입력해 주세요.',
            },
          })}
          maxLength={20}
          className={`${errors.socialName ? 'ring-1 ring-error' : ''}`}
          id="socialName"
          type="text"
          placeholder="모임 이름을 입력해 주세요."
          defaultValue={initialName}
        />
        <div className="mt-4pxr">
          <DisplayMaxLength
            currentLength={watch('socialName') ? watch('socialName').length : 0}
            maxLength={20}
          />
        </div>
      </div>
    </div>
  )
}

export default SocialNameSection
