/* eslint-disable no-alert */
import getSocialImage from '@/apis/getSocialImage'
import { useRef, useState } from 'react'

interface IUseImageFilesProps {
  imageLimit: number
}

function useImageFiles({ imageLimit }: IUseImageFilesProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const handleImageFilesChange = ({
    accessToken,
    fileList,
  }: {
    accessToken: string
    fileList: FileList | null
  }) => {
    if (fileList) {
      if (fileList.length > imageLimit) {
        alert(`이미지는 최대 ${imageLimit}장까지 업로드 가능합니다.`)
        return
      }

      if (imageUrls.length + fileList.length > imageLimit) {
        alert(`이미지는 최대 ${imageLimit}장까지 업로드 가능합니다.`)
        return
      }

      Array.from(fileList).forEach(async (file) => {
        if (
          !file.type.includes('png') &&
          !file.type.includes('jpg') &&
          !file.type.includes('jpeg') &&
          !file.type.includes('webp')
        ) {
          alert('이미지 파일만 업로드 가능합니다.')
          return
        }

        if (file.size > 1024 * 1024 * 10) {
          alert(
            `${file.name}이 10MB를 초과합니다.\n이미지는 10MB 이하만 업로드 가능 합니다.`,
          )
          return
        }

        const uploadImage = await getSocialImage({
          accessToken,
          imageFileExtension: file.type.split('/')[1].toUpperCase() as
            | 'JPG'
            | 'JPEG'
            | 'PNG'
            | 'WEBP',
        })
        const { presignedUrl, imageUrl } = await uploadImage.json()
        await fetch(presignedUrl, {
          method: 'PUT',
          body: file,
        })
        setImageUrls((prevFiles) => [...prevFiles, imageUrl])
      })
    }
  }

  const handleThumbnailChange = (index: number) => {
    const thumbnail = imageUrls[index]
    setImageUrls((prevFiles) => [
      thumbnail,
      ...prevFiles.filter((_, i) => i !== index),
    ])
  }

  const handleImageDelete = (index: number) => {
    URL.revokeObjectURL(imageUrls[index])
    setImageUrls((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  const handleInitialImages = (initialImages: string[]) => {
    if (initialImages) {
      setImageUrls(initialImages)
    }
  }

  return {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleThumbnailChange,
    handleImageDelete,
    handleInitialImages,
    error,
    setError,
  }
}

export default useImageFiles
