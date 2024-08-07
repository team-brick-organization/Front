import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IUserStoreProps {
  hydrated: boolean
  accessToken: string
  setAccessToken: (token: string) => void
}

const useUserStore = create(
  persist<IUserStoreProps>(
    (set) => ({
      hydrated: false,
      accessToken: '',
      setAccessToken: (token) => {
        set({ accessToken: token })
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
