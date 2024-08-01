import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface SocialDetailsImgCarouselProps {
  images: string[]
}

function SocialDetailsImgCarousel({ images }: SocialDetailsImgCarouselProps) {
  const [emblaRef] = useEmblaCarousel()
  return (
    <section
      className="h-400pxr w-full max-w-1180pxr overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-full w-full flex-row">
        {images.slice(0, 5).map((image, index) => (
          <div key={`${index + 0}`} className="min-w-0 h-full w-full flex-none">
            <Image
              fill
              src={image}
              alt={`이미지 ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialDetailsImgCarousel
