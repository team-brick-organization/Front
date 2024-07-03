import { useState } from 'react'

interface IUseTabProps {
  tabNames: string[]
}

function useTab({ tabNames }: IUseTabProps) {
  const [activeTab, setActiveTab] = useState(0)

  return {
    activeTab,
    setActiveTab,
    tabNames,
  }
}

export default useTab
