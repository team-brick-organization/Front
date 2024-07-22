'use client'

import createTabStore from '@/stores/createTabStore'
import { SocialIntroduce, SocialQna, Tab } from '@/components'

function SocialDetailPageTab() {
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
        <div className="mt-40pxr w-full">
          <SocialIntroduce
            description="sad"
            location="asdas"
            lat={33.450701}
            lng={126.570667}
            participants={[
              {
                profileImage: 'z',
                name: 'z',
                description: '하이',
                role: 'host',
              },
            ]}
          />
        </div>
      </Tab.Panel>
      <Tab.Panel index={1} store={tabStore}>
        <div className="mt-40pxr w-full">
          <SocialQna />
        </div>
      </Tab.Panel>
    </Tab.Provider>
  )
}

export default SocialDetailPageTab
