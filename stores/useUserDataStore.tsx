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
}))

export default useUserDataStore
