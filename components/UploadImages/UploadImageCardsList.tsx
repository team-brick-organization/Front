'use client'

import Image from 'next/image'
import ImageIcon from '@/public/images/svgs/image.svg'
import { RefObject, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { UploadImageCard } from '../index'

interface IUploadImageCardsListProps {
  inputRef: RefObject<HTMLInputElement>
  imageUrls: string[]
  onImageFilesChange: (files: FileList | null) => void
  onImageDelete: (index: number) => void
  onUploadButtonClick: () => void
  setError: (error: boolean) => void
}

function UploadImageCardsList({
  inputRef,
  imageUrls,
  onImageFilesChange: handleImageFilesChange,
  onImageDelete: handleImageDelete,
  onUploadButtonClick: handleUploadButtonClick,
  setError,
}: IUploadImageCardsListProps) {
  const ref = useRef<HTMLInputElement>(null)
  const [emblaRef] = useEmblaCarousel({ dragFree: true })

  return (
    <div className="px-24pxr pb-24pxr" ref={emblaRef}>
      <ul className="flex gap-8pxr">
        <li>
          <input
            className="hidden"
            title="이미지 업로드"
            id="fileInput"
            type="file"
            ref={ref}
            accept="image/png, image/jpeg, image/webp"
            multiple
            onChange={(e) => {
              handleImageFilesChange(e.target.files)
              setError(false)
            }}
          />
          <button
            className="flex h-99pxr w-99pxr flex-col items-center justify-center gap-4pxr rounded-[0.3125rem] border border-dashed border-gray-08"
            type="button"
            onClick={handleUploadButtonClick}
          >
            <Image src={ImageIcon} width={49} height={49} alt="이미지 아이콘" />
            <p className="text-gray-08 font-caption-02">
              {imageUrls.length}/10
            </p>
          </button>
        </li>
        {imageUrls.map((imageUrl, index) => (
          <li key={imageUrl}>
            <UploadImageCard
              imageUrl={imageUrl}
              onImageDelete={() => {
                if (inputRef && inputRef.current) {
                  const currentInputRef = inputRef.current
                  handleImageDelete(index)
                  currentInputRef.value = ''
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UploadImageCardsList
