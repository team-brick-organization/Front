'use client'

import createTabStore from '@/stores/createTabStore'
import Provider from './Provider'
import List from './List'
import Panel from './Panel'

interface ITabProps {
  index: number
  className?: string
  store: ReturnType<typeof createTabStore>
  children: string
}

function Tab({ index, className, store, children }: ITabProps) {
  const { setActiveTab, tabRefs } = store()

  return (
    <li>
      <button
        className={`w-64pxr font-title-04 ${className}`}
        type="button"
        onClick={() => setActiveTab(index)}
        ref={(el) => {
          tabRefs.current[index] = el
        }}
      >
        {children}
      </button>
    </li>
  )
}

Tab.Provider = Provider
Tab.List = List
Tab.Panel = Panel
Tab.Tab = Tab

export default Tab
