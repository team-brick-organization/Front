import { create } from 'zustand'

interface IMyPageStore {
  mySocialData: IGetMyPage
  setMySocialData: (state: IGetMyPage) => void
  createdSocialData: IGetMyPage
  setCreatedSocialData: (state: IGetMyPage) => void
}

const useMyPageStore = create<IMyPageStore>((set) => ({
  mySocialData: {
    totalElement: 0,
    totalPages: 0,
    currentPage: 0,
    socials: [],
  },
  setMySocialData: (state) => set({ mySocialData: state }),
  createdSocialData: {
    totalElement: 0,
    totalPages: 0,
    currentPage: 0,
    socials: [],
  },
  setCreatedSocialData: (state) => set({ createdSocialData: state }),
}))

export default useMyPageStore
