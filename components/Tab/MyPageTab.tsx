'use client'

import { ReactNode } from 'react'
import createTabStore from '@/stores/createTabStore'
import { Tab } from '../index'

interface IMyPageTabProps {
  tabContent1: ReactNode
  tabContent2: ReactNode
}

function MyPageTab({ tabContent1, tabContent2 }: IMyPageTabProps) {
  const tabStore = createTabStore()

  const tabs = [
    { tabName: '참여', itemLength: 5 },
    { tabName: '내가 만든 모임', itemLength: 3 },
  ]

  return (
    <Tab.Provider tabUnderlineWidthFit store={tabStore}>
      <Tab.List
        ulClassName="items-start !justify-start gap-16pxr border-none h-full"
        underlineClassName="!bottom-0pxr"
        store={tabStore}
      >
        {tabs.map((tab, index) => (
          <div className="flex items-center gap-4pxr" key={tab.tabName}>
            <Tab
              className="w-full !font-title-02"
              index={index}
              store={tabStore}
            >
              {tab.tabName}
            </Tab>
            <p className="text-primary font-title-02">{tab.itemLength}</p>
          </div>
        ))}
      </Tab.List>
      <Tab.Panel index={0} store={tabStore}>
        {tabContent1}
      </Tab.Panel>
      <Tab.Panel index={1} store={tabStore}>
        {tabContent2}
      </Tab.Panel>
    </Tab.Provider>
  )
}

export default MyPageTab
