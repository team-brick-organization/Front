import { useFormContext } from 'react-hook-form'
import { DisplayMaxLength } from '../index'

function SocialIntroduceSection({
  initialIntroduce,
}: {
  initialIntroduce?: string
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  return (
    <div className="relative flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialIntroduce">
        모임 소개
      </label>
      <div>
        <textarea
          {...register('socialIntroduce', {
            required: '모임 소개는 필수 입력입니다.',
          })}
          className={`h-265pxr w-full resize-none rounded-[0.625rem] bg-gray-01 p-14pxr outline-none font-body-02 placeholder:text-gray-06 ${errors.socialIntroduce ? 'ring-1 ring-error' : ''}`}
          id="socialIntroduce"
          maxLength={3000}
          placeholder="모임 소개를 입력해 주세요."
          defaultValue={initialIntroduce}
        />
        <div className="mt-4pxr">
          <DisplayMaxLength
            currentLength={
              watch('socialIntroduce') ? watch('socialIntroduce').length : 0
            }
            maxLength={3000}
          />
        </div>
      </div>
    </div>
  )
}

export default SocialIntroduceSection
