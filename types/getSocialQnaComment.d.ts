interface IComments {
  id: number
  content: string
  writerName: string
  writerProfileImageUrl: string
  createdAt: string
  updatedAt: string
}

interface IQnACommentData {
  totalElement: number
  totalPages: number
  currentPage: number
  socials: IComments[]
}
