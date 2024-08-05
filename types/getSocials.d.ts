interface ISocials {
  id: number
  name: string
  gatheringDate: string
  address: string
  participantCount: {
    min: number
    max: number
    current: number
  }
  thumbnail: string
  tags: string[]
  owner: {
    name: string
    profileUrl: string
    role: string
  }
}

interface IGetSocials {
  currentPage: number
  totalPages: number
  totalElement: number
  socials: ISocials[]
}
