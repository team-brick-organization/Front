import { create } from 'zustand'

type UserData = {
  email: string
  name: string
  birthday: string
  introduce: string
  profileImageUrl: string
}

interface UserDataProps {
  userData: UserData
  setUserData: (userData: UserData) => void
  refetchUserData: boolean
  userDataReFetchTrigger: () => void
}

const useUserDataStore = create<UserDataProps>((set) => ({
  userData: {
    email: '',
    name: '',
    birthday: '',
    introduce: '',
    profileImageUrl: '',
  },
  setUserData: (userData) => set({ userData }),
  refetchUserData: false,
  userDataReFetchTrigger: () =>
    set((state) => ({
      refetchUserData: !state.refetchUserData,
    })),
}))

export default useUserDataStore
