import { ReactNode, useState } from 'react'

interface IUseTabProps {
  tabNames: string[]
  tabContents: ReactNode[]
}

function useTab({ tabNames, tabContents }: IUseTabProps) {
  const [activeTab, setActiveTab] = useState(0)
  const tabContent = tabContents[activeTab]
  return {
    activeTab,
    setActiveTab,
    tabNames,
    tabContent,
  }
}

export default useTab
