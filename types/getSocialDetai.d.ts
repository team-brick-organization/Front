interface IGetSocialDetail {
  id: number
  name: string
  description: string
  gatheringDate: string
  participantCount: {
    min: number
    max: number
    current: number
  }
  imageUrls: string[]
  dues: number
  tags: string[]
  owner: {
    id: number
    name: string
    profileUrl: string
    role: string
    description: string
  }
  participants: {
    id: number
    name: string
    profileUrl: string
    role: string
    description: string
  }[]
  introduction: {
    description: string
    place: {
      address: string
      detailAddress: string
      latitude: number
      longitude: number
    }
  }
}
