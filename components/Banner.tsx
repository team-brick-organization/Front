import { Box } from '@radix-ui/themes'
import Image from 'next/image'

interface IImageProps {
  src: string
  // alt: string
}

function Banner({ src }: IImageProps) {
  return (
    <div>
      <div className="relative">
        <Box className="max-w-1920pxr absolute h-400pxr w-full bg-gray-01 mb:max-w-480pxr tb:max-w-1200pxr">
          {src && (
            <Image src={src} alt="배너 이미지" fill className="object-cover" />
          )}
        </Box>
      </div>
    </div>
  )
}

export default Banner
