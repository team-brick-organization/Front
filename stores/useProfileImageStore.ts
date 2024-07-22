import { create } from 'zustand'

interface IProfileImageState {
  profileImage: string | null
  setProfileImage: (state: string | null) => void
}

const useProfileImageStore = create<IProfileImageState>((set) => ({
  profileImage: null,
  setProfileImage: (state) => set({ profileImage: state }),
}))

export default useProfileImageStore
