'use client'

import createTabStore from '@/stores/createTabStore'
import { ReactNode } from 'react'

interface IPanelProps {
  children: ReactNode
  index: number
  store: ReturnType<typeof createTabStore>
}

function Panel({ children, index, store }: IPanelProps) {
  const { activeTab } = store()
  return activeTab === index ? (
    <div className="flex w-full flex-col items-center px-16pxr">{children}</div>
  ) : null
}

export default Panel
