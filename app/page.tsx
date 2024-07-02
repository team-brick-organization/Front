'use client'

import useTab from '@/hooks/useTab'
import Tab from '@/components/Tab'

export default function Home() {
  const { activeTab, setActiveTab, tabNames } = useTab({
    tabNames: ['달램핏', '워케이션'],
  })
  return (
    <div className="p-12pxr">
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabNames={tabNames}
      />
    </div>
  )
}
