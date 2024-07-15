import Image from 'next/image'
import crossSmallIcon from '@/public/images/svgs/crossSmall.svg'

interface IUploadImageCardProps {
  imageUrl: string
  onImageDelete: () => void
}

function UploadImageCard({
  imageUrl,
  onImageDelete: handleImageDelete,
}: IUploadImageCardProps) {
  return (
    <div className="relative h-99pxr w-99pxr overflow-hidden rounded-[0.3125rem] bg-gray-04">
      <Image className="object-cover" src={imageUrl} alt={imageUrl} fill />
      <button
        className="absolute right-8pxr top-8pxr"
        type="button"
        title="Delete button"
        onClick={handleImageDelete}
      >
        <Image
          className="pointer-events-none select-none"
          src={crossSmallIcon}
          width={15}
          height={15}
          alt="닫기 버튼 이미지"
        />
      </button>
    </div>
  )
}

export default UploadImageCard
