import { useFormContext } from 'react-hook-form'
import { Input } from '../index'

function SocialPlaceSection({
  address,
  onAddressSearch: handleAddressSearch,
  initialAddress,
  initialAddressDetail,
}: {
  address: {
    address: string | null
    isError: boolean
  }
  onAddressSearch: () => void
  initialAddress?: string
  initialAddressDetail?: string
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-8pxr">
      <label className="text-gray-10 font-title-04" htmlFor="socialPlace">
        장소
      </label>
      <div className="flex flex-col gap-4pxr">
        <button
          className={`w-full max-w-398pxr rounded-[0.625rem] bg-gray-01 p-14pxr text-start outline-gray-08 font-body-02 disabled:bg-gray-03 ${address.isError ? 'ring-1 ring-error' : ''} ${address.address ? 'text-gray-10' : 'text-gray-06'} ${initialAddress ? '!text-gray-06' : ''}`}
          type="button"
          onClick={() => {
            if (initialAddress) return

            handleAddressSearch()
          }}
          disabled={initialAddress !== undefined}
        >
          {initialAddress ||
            address.address ||
            '도로명, 건물명 또는 지번으로 검색'}
        </button>
        <Input
          {...register('socialAddressDetail', {
            required: '상세 주소는 필수 입력입니다.',
          })}
          className={`!w-full !max-w-398pxr ${errors.socialAddressDetail ? 'ring-1 ring-error' : ''}`}
          id="socialAddressDetail"
          type="text"
          placeholder="상세 주소를 입력해 주세요."
          defaultValue={initialAddressDetail}
        />
      </div>
    </div>
  )
}

export default SocialPlaceSection
