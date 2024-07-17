'use client'

import { ReactNode } from 'react'
import createTabStore from '@/stores/createTabStore'
import { Tab } from '../index'

interface ISocialDetailPageTabProps {
  tabContent1: ReactNode
  tabContent2: ReactNode
}

function SocialDetailPageTab({
  tabContent1,
  tabContent2,
}: ISocialDetailPageTabProps) {
  const tabStore = createTabStore()
  const tabs = [{ tabName: '소개' }, { tabName: 'Q&A' }]

  return (
    <Tab.Provider tabUnderlineWidthFit store={tabStore}>
      <Tab.List store={tabStore}>
        {tabs.map((tab, index) => (
          <Tab.Tab key={tab.tabName} index={index} store={tabStore}>
            {tab.tabName}
          </Tab.Tab>
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

export default SocialDetailPageTab
