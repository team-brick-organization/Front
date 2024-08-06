interface MyPageParticipantCount {
  min: number
  max: number
  current: number
}

interface MyPageOwner {
  id: number
  name: string
  profileUrl: string
  role: string
  description: string
}

interface MyPageSocial {
  id: number
  name: string
  canceled: boolean
  gatheringDate: string
  address: string
  participantCount: MypageParticipantCount
  thumbnail: string
  tags: string[]
  owner: MypageOwner
}

interface IGetMyPage {
  totalElement: number
  totalPages: number
  currentPage: number
  socials: MypageSocial[]
}
