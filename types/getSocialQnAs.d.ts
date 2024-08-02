interface IQnADatas {
  id: number | null
  title: string
  content: string
  profileUrl: string
  writerName: string
  commentCount: number
  createdAt: string
  updatedAt: string
}

interface ISocialQnAs {
  nextCursor: null | string
  data: IQnADatas[]
}
