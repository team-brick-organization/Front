import { create } from 'zustand'

interface ISocialQnAListStore {
  socialQnACommentListData: IQnACommentData
  setSocialQnACommentListData: (state: IQnACommentData) => void
  fetchSocialQnACommentListData: boolean
  socialQnACommentListDataReFetchTrigger: () => void
}

const useSocialQnACommentListStore = create<ISocialQnAListStore>((set) => ({
  socialQnACommentListData: {
    totalElement: 0,
    totalPages: 0,
    currentPage: 0,
    socials: [],
  },
  setSocialQnACommentListData: (state) =>
    set({ socialQnACommentListData: state }),
  fetchSocialQnACommentListData: false,
  socialQnACommentListDataReFetchTrigger: () =>
    set((state) => ({
      fetchSocialQnACommentListData: !state.fetchSocialQnACommentListData,
    })),
}))

export default useSocialQnACommentListStore
