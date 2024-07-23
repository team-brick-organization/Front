'use client'

import { RefObject } from 'react'
import Image from 'next/image'
import ImageIcon from '@/public/images/svgs/image.svg'
import { UploadImageCardsList } from '../index'

interface IUploadImagesProps {
  inputRef: RefObject<HTMLInputElement>
  imageUrls: string[]
  onImageFilesChange: (files: FileList | null) => void
  onThumbnailChange: (index: number) => void
  onImageDelete: (index: number) => void
  error: boolean
  setError: (error: boolean) => void
}

function UploadImages({
  inputRef,
  imageUrls,
  onImageFilesChange: handleImageFilesChange,
  onThumbnailChange: handleThumbnailChange,
  onImageDelete: handleImageDelete,
  error,
  setError,
}: IUploadImagesProps) {
  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div
      className={`flex h-540pxr w-full max-w-980pxr flex-col justify-between overflow-hidden rounded-[0.625rem] bg-gray-01 mb:h-205pxr ${imageUrls.length > 0 ? 'h-364pxr' : ''} ${error ? 'border border-error' : ''}`}
    >
      <input
        className="hidden"
        title="이미지 업로드"
        id="fileInput"
        type="file"
        ref={inputRef}
        accept="image/png, image/jpeg, image/webp"
        multiple
        onChange={(e) => {
          handleImageFilesChange(e.target.files)
          setError(false)
        }}
      />

      {imageUrls.length === 0 && (
        <button
          title="이미지 업로드"
          className="flex h-full w-full flex-col items-center justify-center gap-16pxr outline-none"
          type="button"
          onClick={handleUploadButtonClick}
        >
          <Image
            className="mb-h-60pxr mb:w-60pxr"
            src={ImageIcon}
            width={100}
            height={100}
            alt="이미지 아이콘"
          />
          <div>
            <h2 className="font-title-04">
              이미지 (최대 5장)을 업로드해 주세요.
            </h2>
            <p className="text-gray-05 font-body-01">
              최대 10MB의 JPEG, PNG, WEBP 이미지 파일
            </p>
          </div>
        </button>
      )}

      {imageUrls.length > 0 && (
        <>
          <div className="flex grow flex-col items-center justify-center">
            <p className="text-center text-[#1E1F20] font-title-04">
              이미지 (최대 5장)을 업로드해 주세요.
            </p>
            <p className="text-center text-[#B9BABC] font-body-01">
              최대 10MB의 JPEG, PNG, WEBP 이미지 파일
            </p>
          </div>
          <UploadImageCardsList
            inputRef={inputRef}
            imageUrls={imageUrls}
            onImageFilesChange={handleImageFilesChange}
            onThumbnailChange={handleThumbnailChange}
            onImageDelete={handleImageDelete}
            onUploadButtonClick={handleUploadButtonClick}
            setError={setError}
          />
        </>
      )}
    </div>
  )
}

export default UploadImages
