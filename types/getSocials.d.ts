interface IGetSocial {
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

type GetSocialsType = IGetSocial[]
