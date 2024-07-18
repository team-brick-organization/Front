import Image from 'next/image'
import pencilIcon from '@/public/images/svgs/pencil.svg'

interface IManagingMyInfoProps {
  setIsPortalOpen: (value: boolean) => void
}

function ManagingMyInfo({ setIsPortalOpen }: IManagingMyInfoProps) {
  return (
    <form className="max-w-984prx h-1008pxr w-full bg-[#F3F4F6]">
      <div className="mb-42pxr">
        <h1 className="text-gray-10">내 정보 관리</h1>
      </div>

      <div className="h-80pxr w-80pxr rounded-full bg-[#9A9B9D]">
        <Image
          src={pencilIcon}
          alt="펜슬 아이콘"
          onClick={() => setIsPortalOpen(true)}
          className="cursor-pointer"
        />
      </div>
    </form>
  )
}

export default ManagingMyInfo
