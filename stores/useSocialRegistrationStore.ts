import { RefObject } from 'react'
import { create } from 'zustand'

interface IUseSocialRegistrationStoreProps {
  registrationButtonRef: RefObject<HTMLButtonElement>
  tags: string[]
  setTags: (tags: string[]) => void
}
const useSocialRegistrationStore = create<IUseSocialRegistrationStoreProps>(
  (set) => ({
    registrationButtonRef: { current: null },
    tags: [],
    setTags: (tags) => set({ tags }),
  }),
)

export default useSocialRegistrationStore
