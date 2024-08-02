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
  name: string
  profileUrl: string
  role: 'OWNER' | 'PARTICIPANT'
  description: string
}

interface IPlace {
  address: string
  lat: number
  lng: number
}
interface ISocialDetailData {
  id: number
  name: string
  description: string
  place: IPlace
  gatheringDate: string
  participantCount: IParticipantCount
  imageUrls: string[]
  dues: number
  tags: string[]
  owner: IOwner
  participants: IParticipants[]
}
