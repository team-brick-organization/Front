interface IParticipantCount {
  min: number
  max: number
  current: number
}

interface IOwner {
  name: string
  profileUrl: string
  role: 'host' | 'participant'
}
interface IParticipants {
  id?: number
  name: string
  profileUrl: string
  role: 'OWNER' | 'PARTICIPANT'
  description: string
}

interface IPlace {
  address: string
  latitude: number
  longitude: number
}

interface IIntroduction {
  description: string
  place: IPlace
}

interface ISocialDetailData {
  id: number
  name: string
  introduction: IIntroduction
  gatheringDate: string
  participantCount: IParticipantCount
  imageUrls: string[]
  dues: number
  tags: string[]
  owner: IOwner
  participants: IParticipants[]
}
