import { useRef, useState } from 'react'

interface IUseImageFilesProps {
  imageLimit: number
}

function useImageFiles({ imageLimit }: IUseImageFilesProps) {
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
        const url = URL.createObjectURL(file)
        setImageUrls((prevFiles) => [...prevFiles, url])
      })
    }
  }

  const handleImageDelete = (index: number) => {
    URL.revokeObjectURL(imageUrls[index])
    setImageUrls((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  return {
    inputRef,
    imageUrls,
    handleImageFilesChange,
    handleImageDelete,
    error,
    setError,
  }
}

export default useImageFiles
