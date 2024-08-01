export interface IParticipantCount {
  min: number
  max: number
  current: number
}

export interface IOwner {
  name: string
  profileUrl: string
  role: 'host' | 'participant'
}
export interface IParticipants {
  name: string
  profileUrl: string
  role: 'OWNER' | 'PARTICIPANT'
  description: string
}

export interface IPlace {
  address: string
  lat: number
  lng: number
}
export interface ISocialDetailData {
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
