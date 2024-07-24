'use client'

import Image from 'next/image'
import crossSmallIcon from '@/public/images/svgs/crossSmall.svg'
import useWindowWidth from '@/hooks/useWindowWidth'

interface IUploadImageCardProps {
  type?: 'thumbnail'
  imageUrl: string
  onThumbnailChange: () => void
  onImageDelete: () => void
}

function UploadImageCard({
  type,
  imageUrl,
  onThumbnailChange: handleThumbnailChange,
  onImageDelete: handleImageDelete,
}: IUploadImageCardProps) {
  const windowWidth = useWindowWidth()

  const isMobile = windowWidth && windowWidth > 479

  return (
    <div
      className={`relative h-100pxr w-100pxr rounded-[0.3125rem] bg-gray-04 ring-primary hover:ring-2 mb:h-64pxr mb:w-64pxr ${type === 'thumbnail' ? 'ring-2' : ''}`}
    >
      {type === 'thumbnail' && (
        <div className="absolute left-0pxr top-0pxr z-10 rounded-br-[0.3125rem] bg-primary pb-4pxr pl-4pxr pr-5pxr pt-4pxr text-gray-01 font-caption-02 mb:py-2pxr mb:pl-5pxr mb:pr-6pxr">
          {isMobile ? '대표 이미지' : '대표'}
        </div>
      )}
      <button
        className={type === 'thumbnail' ? 'cursor-default' : ''}
        title={type === 'thumbnail' ? '' : '대표 이미지 설정 버튼'}
        type="button"
        onClick={() => {
          if (type === 'thumbnail') return
          handleThumbnailChange()
        }}
      >
        <Image
          className="rounded-[0.3125rem] object-cover"
          src={imageUrl}
          alt={imageUrl}
          fill
        />
      </button>
      <button
        className="absolute right-4pxr top-4pxr mb:right-2pxr mb:top-2pxr"
        type="button"
        title="Delete button"
        onClick={() => {
          handleImageDelete()
        }}
      >
        <Image
          className="pointer-events-none absolute left-0pxr top-0pxr z-10 h-18pxr w-18pxr select-none"
          src={crossSmallIcon}
          width={18}
          height={18}
          alt="닫기 버튼 이미지"
        />
        <div className="h-18pxr w-18pxr bg-gray-08 opacity-[0.3]" />
      </button>
    </div>
  )
}

export default UploadImageCard
