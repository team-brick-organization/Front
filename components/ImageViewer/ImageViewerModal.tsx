'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import closeIcon from '@/public/images/svgs/close.svg'
import chevronleftIcon from '@/public/images/svgs/chevronleft.svg'
import chevronrightIcon from '@/public/images/svgs/chevronright.svg'

interface IImageViewerModalProps {
  images: string[]
  initialIndex: number
  onClose: () => void
}

function ImageViewerModal({
  images,
  initialIndex,
  onClose,
}: IImageViewerModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentImageIndex(initialIndex)
  }, [initialIndex])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[.625rem] bg-[#F9FAFC] object-cover">
      <Image
        src={images[currentImageIndex]}
        alt={`이미지 ${currentImageIndex + 1}`}
        className="object-cover"
        fill
      />
      <div className="absolute bottom-50pxr left-1/2 flex -translate-x-1/2 items-center gap-16pxr mb:bottom-16pxr tb:bottom-30pxr">
        <div className="flex items-center gap-4pxr rounded-[.3125rem] bg-black px-8pxr py-3pxr">
          <button
            title="left button"
            type="button"
            onClick={prevImage}
            className=""
          >
            <Image
              src={chevronleftIcon}
              alt="leftIcon"
              width={23}
              height={23}
            />
          </button>
          <button
            title="right button"
            type="button"
            onClick={nextImage}
            className=""
          >
            <Image
              src={chevronrightIcon}
              alt="rightIcon"
              width={23}
              height={23}
            />
          </button>
        </div>
        <div className="rounded-full bg-black px-20pxr py-6pxr">
          <span className="flex items-center gap-8pxr text-gray-01 font-title-01">
            {currentImageIndex + 1}
            <div className="h-12pxr w-1pxr bg-[#f9fafc]" />
            {images.length}
          </span>
        </div>
      </div>
      <button
        title="close button"
        className="absolute right-50pxr top-50pxr rounded-full mb:right-16pxr mb:top-16pxr tb:right-30pxr tb:top-30pxr"
        type="button"
        onClick={onClose}
      >
        <Image
          src={closeIcon}
          alt="closeIcon"
          width={50}
          height={50}
          className="fill-white"
        />
      </button>
    </div>
  )
}

export default ImageViewerModal
