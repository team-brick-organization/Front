interface IPatchSocial {
  name: string
  description: string
  place: {
    address: string
    detailAddress: string
    latitude: number
    longitude: number
  }
  imageUrls: string[]
}
