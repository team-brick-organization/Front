import { create } from 'zustand'

interface UseSearchStore {
  onSearch: boolean
  setOnSearch: (state: boolean) => void
  searchValue: string
  setSearchValue: (state: string) => void
}
const useSearchStore = create<UseSearchStore>((set) => ({
  onSearch: false,
  setOnSearch: (state) => set({ onSearch: state }),
  searchValue: '',
  setSearchValue: (state) => set({ searchValue: state }),
}))

export default useSearchStore
