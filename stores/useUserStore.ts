import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IUserStoreProps {
  accessToken: string
  setAccessToken: (token: string) => void
  email: string
  setEmail: (email: string) => void
  name: string
  setName: (name: string) => void
}

const useUserStore = create(
  persist<IUserStoreProps>(
    (set) => ({
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
    }),
    { name: 'user-store', storage: createJSONStorage(() => localStorage) },
  ),
)

export default useUserStore
