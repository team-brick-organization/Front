'use client'

import { Box } from '@radix-ui/themes'
import Image from 'next/image'
import usePortal from '@/hooks/usePortal'
import { ImageViewerModal, Portal } from '@/components'
import moreImgIcon from '@/public/images/svgs/moreImg.svg'

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
    src: 'https://cdn.pixabay.com/photo/2023/12/04/16/12/leaf-8429779_1280.jpg',
  },
  {
    id: 6,
    src: 'https://cdn.pixabay.com/photo/2024/01/02/13/28/gecko-8483282_1280.png',
  },
  {
    id: 7,
    src: 'https://cdn.pixabay.com/photo/2023/12/04/16/12/leaf-8429779_1280.jpg',
  },
]

function ImageViewer() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()

  const mobileRemainingImages = mockImages.length - 1
  const remainingImages = mockImages.length - 5
  return (
    <div className="flex gap-20pxr">
      <Box className="relative h-400pxr w-680pxr cursor-pointer items-center overflow-hidden rounded-[10px] mb:h-200pxr mb:min-w-380pxr tb:h-301pxr tb:w-319pxr">
        <Image
          src={mockImages[0].src}
          alt="대표 이미지"
          fill
          className="h-400pxr w-680pxr object-cover mb:h-200pxr mb:w-full tb:h-301pxr tb:w-319pxr"
          onClick={() => setIsPortalOpen(true)}
        />
        {mobileRemainingImages > 0 && (
          <div className="mb:absolute mb:left-1/2 mb:top-1/2 mb:flex mb:-translate-x-1/2 mb:-translate-y-1/2 mb:flex-col mb:items-center mb:justify-center tb:hidden">
            <Image src={moreImgIcon} alt="icon" width={40} height={40} />
            <span className="text-center text-[#F9FAFC] font-headline-03">
              +{mobileRemainingImages}
            </span>
          </div>
        )}
      </Box>
      <Box className="grid h-400pxr w-480pxr grid-cols-2 grid-rows-2 gap-10pxr mb:hidden tb:h-301pxr tb:w-319pxr">
        {mockImages.slice(1, 5).map((image, index) => {
          return (
            <div
              className="relative cursor-pointer overflow-hidden rounded-[10px]"
              key={image.id}
            >
              <Image
                src={image.src}
                alt={image.id.toString()}
                width={235}
                height={195}
                className="h-195pxr w-235pxr object-cover"
                onClick={() => setIsPortalOpen(true)}
              />
              {index === 3 && remainingImages > 0 && (
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                  <Image src={moreImgIcon} alt="icon" width={40} height={40} />
                  <span className="text-center text-[#F9FAFC] font-headline-03">
                    +{remainingImages}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </Box>

      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-635pxr w-full max-w-1180pxr mb:h-183pxr mb:px-20pxr tb:h-354pxr tb:px-80pxr"
      >
        <ImageViewerModal
          images={mockImages}
          initialIndex={0}
          onClose={() => setIsPortalOpen(false)}
        />
      </Portal>
    </div>
  )
}

export default ImageViewer
