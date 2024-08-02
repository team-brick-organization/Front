import { create } from 'zustand'

interface ISocialDetailStore {
  socialDetailData: ISocialDetailData
  setSocialDetailData: (state: ISocialDetailData) => void
}

const useSocialDetailStore = create<ISocialDetailStore>((set) => ({
  socialDetailData: {
    id: 0,
    name: '',
    introduction: {
      description: '',
      place: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
    },
    gatheringDate: '',
    participantCount: {
      min: 0,
      max: 0,
      current: 0,
    },
    imageUrls: [],
    dues: 0,
    tags: [],
    owner: {
      name: '',
      profileUrl: '',
      role: 'host',
    },
    participants: [],
  },
  setSocialDetailData: (state) => set({ socialDetailData: state }),
}))

export default useSocialDetailStore
