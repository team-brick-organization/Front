import create from 'zustand'

interface ITabState {
  activeTab: number
  setActiveTab: (index: number) => void
  tabRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>
  underlineStyle: { width: number; left: number; offsetWidth: number }
  setUnderlineStyle: (style: {
    width: number
    left: number
    offsetWidth: number
  }) => void
}

const createTabStore = () =>
  create<ITabState>((set) => ({
    activeTab: 0,
    setActiveTab: (index: number) => set({ activeTab: index }),
    tabRefs: { current: [] },
    underlineStyle: { width: 0, left: 0, offsetWidth: 0 },
    setUnderlineStyle: (style) => set({ underlineStyle: style }),
  }))

export default createTabStore
