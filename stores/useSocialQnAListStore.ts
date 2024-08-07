import { create } from 'zustand'

interface ISocialQnAListStore {
  SocialQnAListData: ISocialQnAs
  setSocialQnAListData: (state: ISocialQnAs) => void
  fetchSocialQnAListData: boolean
  SocialQnAListDataReFetchTrigger: () => void
}

const useSocialQnAListStore = create<ISocialQnAListStore>((set) => ({
  SocialQnAListData: {
    totalElement: 0,
    totalPages: 0,
    currentPage: 0,
    socials: [
      {
        id: 0,
        title: '',
        content: '',
        writerName: '',
        writerProfileImageUrl: '',
        commentCount: 0,
        createdAt: '',
        updatedAt: '',
      },
    ],
  },
  setSocialQnAListData: (state) => set({ SocialQnAListData: state }),
  fetchSocialQnAListData: false,
  SocialQnAListDataReFetchTrigger: () =>
    set((state) => ({ fetchSocialQnAListData: !state.fetchSocialQnAListData })),
}))

export default useSocialQnAListStore
