interface IQnADatas {
  id: number | null
  title: string
  content: string
  writerName: string
  writerProfileImageUrl: string
  commentCount: number
  createdAt: string
  updatedAt: string
}

interface ISocialQnAs {
  totalElement: number
  totalPages: number
  currentPage: number
  socials: IQnADatas[]
}
