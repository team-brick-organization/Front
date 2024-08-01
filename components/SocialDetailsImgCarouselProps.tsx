'use client'

import Image from 'next/image'
import usePortal from '@/hooks/usePortal'
import useEmblaCarousel from 'embla-carousel-react'
import { ImageViewerModal, Portal } from '@/components'
import useDotBtn from '@/hooks/useDotBtn'

interface IImage {
  // id: number
  src: string
}

interface SocialDetailsImgCarouselProps {
  images: IImage[]
}

function SocialDetailsImgCarousel({ images }: SocialDetailsImgCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  const { selectedIndex } = useDotBtn(emblaApi)

  return (
    <section
      className="relative h-400pxr w-full max-w-1180pxr overflow-hidden mb:max-h-231pxr mb:max-w-439pxr"
      ref={emblaRef}
    >
      <ul className="p-0 flex h-full w-full list-none flex-row">
        {images.map((image, index) => (
          <li key={`${index + 0}`} className="relative h-full w-full flex-none">
            <Image
              fill
              src={image.src}
              alt={`이미지 ${index + 1}`}
              className="h-full w-full object-cover"
              onClick={() => setIsPortalOpen(true)}
            />
          </li>
        ))}
      </ul>

      <Portal
        handleOutsideClick={handleOutsideClick}
        isPortalOpen={isPortalOpen}
        portalRef={portalRef}
        className="h-635pxr w-full max-w-1180pxr mb:h-183pxr mb:px-20pxr tb:h-354pxr tb:px-80pxr"
      >
        <ImageViewerModal
          images={images}
          initialIndex={0}
          onClose={() => setIsPortalOpen(false)}
        />
      </Portal>
      <div className="absolute bottom-50pxr left-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-black px-20pxr py-6pxr mb:bottom-16pxr tb:bottom-30pxr">
        <span className="flex items-center gap-8pxr text-gray-01 font-title-01">
          {selectedIndex + 1}
          <div className="h-12pxr w-1pxr bg-[#f9fafc]" />
          {images.length}
        </span>
      </div>
    </section>
  )
}

export default SocialDetailsImgCarousel
