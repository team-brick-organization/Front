import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IUserStoreProps {
  hydrated: boolean
  accessToken: string
  setAccessToken: (token: string) => void
  email: string
  setEmail: (email: string) => void
  name: string
  setName: (name: string) => void
  profileImageUrl: string
  setProfileImageUrl: (name: string) => void
  description: string
  setDescription: (name: string) => void
}

const useUserStore = create(
  persist<IUserStoreProps>(
    (set) => ({
      hydrated: true,
      accessToken: '',
      setAccessToken: (token) => {
        set({ accessToken: token })
      },
      email: '',
      setEmail: (email) => {
        set({ email })
      },
      name: '',
      setName: (name) => {
        set({ name })
      },
      profileImageUrl: '',
      setProfileImageUrl: (profileImageUrl) => {
        set({ profileImageUrl })
      },
      description: '',
      setDescription: (description) => {
        set({ description })
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => () => {
        useUserStore.setState({ hydrated: true })
      },
    },
  ),
)

export default useUserStore
