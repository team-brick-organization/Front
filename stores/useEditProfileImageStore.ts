import { create } from 'zustand'

interface IEditProfileImageState {
  profileImageUrl: string | null
  setProfileImageUrl: (state: string | null) => void
}

const useEditProfileImageStore = create<IEditProfileImageState>((set) => ({
  profileImageUrl: null,
  setProfileImageUrl: (state) => set({ profileImageUrl: state }),
}))

export default useEditProfileImageStore
