import { create } from 'zustand'

interface ISocialQnAListStore {
  SocialQnAListData: IQnADatas[]
  setSocialQnAListData: (state: IQnADatas[]) => void
  fetchSocialQnAListData: boolean
  SocialQnAListDataReFetchTrigger: () => void
}

const useSocialQnAListStore = create<ISocialQnAListStore>((set) => ({
  SocialQnAListData: [],
  setSocialQnAListData: (state) => set({ SocialQnAListData: state }),
  fetchSocialQnAListData: false,
  SocialQnAListDataReFetchTrigger: () =>
    set((state) => ({ fetchSocialQnAListData: !state.fetchSocialQnAListData })),
}))

export default useSocialQnAListStore
