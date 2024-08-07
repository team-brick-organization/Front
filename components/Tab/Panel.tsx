'use client'

import createTabStore from '@/stores/createTabStore'
import { ReactNode } from 'react'

interface IPanelProps {
  children: ReactNode
  index: number
  store: ReturnType<typeof createTabStore>
  className?: string
}

function Panel({ children, index, store, className }: IPanelProps) {
  const { activeTab } = store()
  return activeTab === index ? (
    <div className={`${className} w-full`}>{children}</div>
  ) : null
}

export default Panel
