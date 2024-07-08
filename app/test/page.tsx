'use client'

import { Tab } from '@/components/index'
import useTab from '@/hooks/useTab'

function Page() {
  const { activeTab, setActiveTab, tabNames, tabContent } = useTab({
    tabNames: ['설명', '리뷰', '채팅'],
    tabContents: [
      <div key="description">설명</div>,
      <div key="review">리뷰</div>,
      <div key="chat">채팅</div>,
    ],
  })

  return (
    <div className="m-12pxr w-680pxr">
      <Tab activeTab={activeTab} onTabClick={setActiveTab} tabNames={tabNames}>
        {tabContent}
      </Tab>
    </div>
  )
}

export default Page
