'use client'

import { Box } from '@radix-ui/themes'
import Image from 'next/image'
import usePortal from '@/hooks/usePortal'
import { ImageViewerModal, Portal } from '../index'

const mockImages = [
  {
    id: 1,
    src: 'https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_1280.jpg',
  },
  {
    id: 2,
    src: 'https://cdn.pixabay.com/photo/2023/12/04/16/12/leaf-8429779_1280.jpg',
  },
  {
    id: 3,
    src: 'https://cdn.pixabay.com/photo/2024/01/02/13/28/gecko-8483282_1280.png',
  },
  {
    id: 4,
    src: 'https://cdn.pixabay.com/photo/2024/03/28/15/59/life-8661191_1280.jpg',
  },
  {
    id: 5,
    src: 'https://cdn.pixabay.com/photo/2024/03/28/15/59/life-8661191_1280.jpg',
  },
]

function ImageViewer() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()

  const sliceImages = mockImages.slice(1, 5)

  return (
    <div className="flex gap-20pxr">
      <Box className="h-400pxr w-680pxr">
        <Image
          src={mockImages[0].src}
          alt="대표 이미지"
          width={680}
          height={400}
          className="h-400pxr w-680pxr object-cover"
        />
      </Box>
      <Box className="grid h-400pxr w-480pxr grid-cols-2 grid-rows-2 gap-10pxr">
        {sliceImages.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.id.toString()}
            width={235}
            height={195}
            className="h-195pxr w-235pxr object-cover"
            onClick={() => setIsPortalOpen(true)}
          />
        ))}
      </Box>

      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-635pxr w-full max-w-1180pxr"
      >
        <ImageViewerModal
          images={sliceImages}
          onClose={() => setIsPortalOpen(false)}
        />
      </Portal>
    </div>
  )
}

export default ImageViewer
