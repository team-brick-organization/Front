'use client'

import createTabStore from '@/stores/createTabStore'
import { SocialIntroduce, SocialQna, Tab } from '@/components'

interface ISocialDetailPageTabProps {
  description: string
  address: string
  lat: number
  lng: number
  participants: {
    profileImage: string
    name: string
    description: string
    role: 'host' | 'participant'
  }[]
}

function SocialDetailPageTab({
  description,
  address,
  lat,
  lng,
  participants,
}: ISocialDetailPageTabProps) {
  const tabStore = createTabStore()
  const tabs = [{ tabName: '소개' }, { tabName: 'Q&A' }]

  return (
    <Tab.Provider tabUnderlineWidthFit store={tabStore}>
      <Tab.List store={tabStore}>
        <div className="flex w-full justify-around">
          {tabs.map((tab, index) => (
            <Tab.Tab key={tab.tabName} index={index} store={tabStore}>
              {tab.tabName}
            </Tab.Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panel index={0} store={tabStore}>
        <div className="mt-40pxr w-full px-16pxr">
          <SocialIntroduce
            description={description}
            location={address}
            lat={lat}
            lng={lng}
            participants={participants}
          />
        </div>
      </Tab.Panel>
      <Tab.Panel index={1} store={tabStore}>
        <div className="mt-40pxr w-full px-16pxr">
          <SocialQna />
        </div>
      </Tab.Panel>
    </Tab.Provider>
  )
}

export default SocialDetailPageTab
