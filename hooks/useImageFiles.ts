/* eslint-disable no-alert */
import { useEffect, useRef, useState } from 'react'

interface IUseImageFilesProps {
  imageLimit: number
  initialImages?: string[]
}

function useImageFiles({ imageLimit, initialImages }: IUseImageFilesProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const handleImageFilesChange = (fileList: FileList | null) => {
    if (fileList) {
      if (fileList.length > imageLimit) {
        alert(`이미지는 최대 ${imageLimit}장까지 업로드 가능합니다.`)
        return
      }

      if (imageUrls.length + fileList.length > imageLimit) {
        alert(`이미지는 최대 ${imageLimit}장까지 업로드 가능합니다.`)
        return
      }

      Array.from(fileList).forEach((file) => {
        if (
          !file.type.includes('png') &&
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

        const url = URL.createObjectURL(file)
        setImageUrls((prevFiles) => [...prevFiles, url])
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

  useEffect(() => {
    if (initialImages) {
      setImageUrls(initialImages)
    }
  }, [initialImages])

  return {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleThumbnailChange,
    handleImageDelete,
    error,
    setError,
  }
}

export default useImageFiles
