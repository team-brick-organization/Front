import { useEffect, useState } from 'react'

interface Data {
  id: number
  userName: string
  userProfileImg: string
  img: string
  tags: string[]
  title: string
  place: string
  liked: boolean
  current: number
  max: number
}

/**
 * 데이터 배열 받아서 카드를 정렬하는 훅
 * @param data 데이터 배열
 * @param chunk 한줄에 보여줄 카드의 갯수
 */

function useCardListSort(data: Data[], chunk: number) {
  const [sortedData, setSortedData] = useState<Data[][] | undefined>(undefined)

  useEffect(() => {
    const sortingObject = (objects: Data[], chunkSize: number) => {
      const result = []
      if (objects !== undefined) {
        for (let i = 0; i < objects.length; i += chunkSize) {
          result.push(objects.slice(i, i + chunkSize))
        }
        return result
      }
      return undefined
    }

    const value = sortingObject(data, chunk)
    setSortedData(value)
  }, [data, chunk])

  return sortedData
}

export default useCardListSort
