'use client'

import Image from 'next/image'
import { useState } from 'react'
import closeIcon from '@/public/images/svgs/close.svg'
import chevronleftIcon from '@/public/images/svgs/chevronleft.svg'
import chevronrightIcon from '@/public/images/svgs/chevronright.svg'

interface IImageViewerModalProps {
  images: {
    id: number
    src: string
  }[]
  onClose: () => void
}

function ImageViewerModal({ images, onClose }: IImageViewerModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div className="relative h-full w-full rounded-[10px] bg-[#F9FAFC] object-contain p-20pxr">
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].id.toString()}
        className="object-contain"
        fill
      />
      <button
        type="button"
        onClick={prevImage}
        className="absolute left-0pxr top-1/2 z-10 -translate-y-1/2 transform rounded-full p-2pxr"
      >
        <Image src={chevronleftIcon} alt="leftIcon" width={100} height={100} />
      </button>
      <button
        type="button"
        onClick={nextImage}
        className="absolute right-0pxr top-1/2 z-10 -translate-y-1/2 transform rounded-full"
      >
        <Image src={chevronrightIcon} alt="leftIcon" width={100} height={100} />
      </button>
      <button
        className="absolute -right-100pxr -top-100pxr rounded-full"
        type="button"
        onClick={onClose}
      >
        <Image
          src={closeIcon}
          alt="closeIcon"
          width={100}
          height={100}
          className="fill-white"
        />
      </button>
    </div>
  )
}

export default ImageViewerModal
