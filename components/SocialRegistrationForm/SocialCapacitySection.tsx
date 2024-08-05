import { useFormContext } from 'react-hook-form'
import validateAndAdjustInputNumber from '@/utils/validateAndAdjustInputNumber'
import Image from 'next/image'
import infoCircleIcon from '@/public/images/svgs/infoCircle.svg'
import { Input } from '../index'

function SocialCapacitySection({
  initialMin,
  initialMax,
}: {
  initialMin?: number
  initialMax?: number
}) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext()
  return (
    <div className="flex flex-col gap-16pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialMinPeople">
        모임 정원
      </label>
      <div className="flex flex-col gap-24pxr">
        <div className="flex items-end gap-16pxr">
          <div className="flex flex-col items-center gap-8pxr">
            <label
              className="text-gray-10 font-body-01"
              htmlFor="socialMinPeople"
            >
              최소 인원
            </label>
            <Input
              {...register('socialMinPeople', {
                required: '모임 최소 정원은 필수 입력입니다.',
                pattern: /^[0-9]*$/,
              })}
              className={`!w-66pxr px-20pxr py-14pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialMinPeople ? 'ring-1 ring-error' : ''}`}
              id="socialMinPeople"
              placeholder="000"
              onChange={(e) => {
                const value = validateAndAdjustInputNumber({
                  e,
                  max: 300,
                })
                setValue('socialMinPeople', value, {
                  shouldValidate: true,
                })
                setValue('socialMaxPeople', value, {
                  shouldValidate: true,
                })
              }}
              defaultValue={initialMin}
              disabled={initialMin !== undefined}
            />
          </div>
          <span className="h-[2.9744rem] content-center text-black font-body-01">
            ~
          </span>
          <div className="flex flex-col items-center gap-8pxr">
            <label
              className="text-gray-10 font-body-01"
              htmlFor="socialMaxPeople"
            >
              최대 인원
            </label>
            <Input
              {...register('socialMaxPeople', {
                required: '모임 최대 정원은 필수 입력입니다.',
                pattern: /^[0-9]*$/,
              })}
              className={`!w-66pxr px-20pxr py-14pxr disabled:bg-gray-03 disabled:text-gray-06 ${errors.socialMaxPeople ? 'ring-1 ring-error' : ''}`}
              id="socialMaxPeople"
              placeholder="000"
              onChange={(e) => {
                const value = validateAndAdjustInputNumber({
                  e,
                  max: 300,
                })
                setValue('socialMaxPeople', value, {
                  shouldValidate: true,
                })
              }}
              defaultValue={initialMax}
              disabled={initialMax !== undefined}
            />
          </div>
        </div>
        <div className="flex w-fit items-start rounded-[0.3125rem] bg-gray-02 p-14pxr">
          <Image
            src={infoCircleIcon}
            width={12}
            height={12}
            alt="정보 아이콘"
          />
          <ol className="list-disc pl-20pxr text-gray-06 font-caption-02">
            <li>최소 인원은 2명부터 입력 가능합니다.</li>
            <li>
              최대 인원은 300명 까지 가능하며, 최소인원 보다 적은 수로 입력
              불가합니다.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SocialCapacitySection
