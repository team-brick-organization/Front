interface IMySocials {
  id: number
  name: string
  gatheringDate: string
  address: string
  participantCount: IParticipantCount
  participants: IParticipants[]
  thumbnail: string
  tags: string[]
  owner: IOwner
}
