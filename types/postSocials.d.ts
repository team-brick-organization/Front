interface IPostSocialBody {
  name: string
  description: string
  gatheringDate: string
  participantCount: {
    min: number
    max: number
    current: number
  }
  place: {
    address: string
    detailAddress: string
    latitude: number
    longitude: number
  }
  imageUrls: string[]
  dues: number
  tags: string[]
}

interface IPostSocialResponse {
  id: number
  message: string
}
