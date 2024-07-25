'use client'

import mockSocialProps from '@/components/Gnb/moc'
import createTabStore from '@/stores/createTabStore'
import { useEffect, useState } from 'react'
import { MypageCardList, Pagination, Tab } from '../index'
import { Social } from '../MypageCards/MypageCard'

interface MyPageTabProps {
  type: 'my' | 'other'
  tabStore: ReturnType<typeof createTabStore>
}
/**
 * @param type my:내가 만든 모임, other:만든 모임
 * @todo api 나오면 주석부분들 수정
 */

function MyPageTab({ type = 'my', tabStore }: MyPageTabProps) {
  const [createdCurrentPageNum, setCreatedCurrentPageNum] = useState(1)
  const [myCurrentPageNum, setMyCurrentPageNum] = useState(1)
  const [mySocialData, setMySocialData] = useState<Social[]>([])
  const [createdSocialData, setCreatedSocialData] = useState<Social[]>([])

  const data = mockSocialProps
  const tabs = [
    // 탭 이름과 탭에 들어갈 아이템 개수 넣어줘야함
    { tabName: '참여', itemLength: data.length },
    { tabName: `${type === 'my' ? '내가 ' : ''}만든 모임`, itemLength: 3 },
  ]

  const handleMyCurrentPageChange = (page: number) => {
    // 페이지 변경 로직
    setMyCurrentPageNum(page)
  }

  const handleCreatedCurrentPageChange = (page: number) => {
    // 페이지 변경 로직
    setCreatedCurrentPageNum(page)
  }

  useEffect(() => {
    // API 호출넣어줘야함
    setMySocialData(data)
    setCreatedSocialData(data)
  }, [data])

  return (
    <Tab.Provider tabUnderlineWidthFit store={tabStore}>
      <Tab.List
        ulClassName="items-start !justify-start gap-16pxr border-none h-full px-20pxr"
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
        <div className="px-20pxr mb:px-0pxr">
          <MypageCardList data={mySocialData} />
        </div>
        <div className="mx-auto flex flex-row justify-center pt-40pxr">
          <Pagination
            currentPage={myCurrentPageNum}
            totalPages={12}
            onPageChange={handleMyCurrentPageChange}
          />
        </div>
      </Tab.Panel>
      <Tab.Panel index={1} store={tabStore}>
        <div className="px-20pxr mb:px-0pxr">
          <MypageCardList data={createdSocialData} />
        </div>
        <div className="mx-auto flex flex-row justify-center pt-40pxr">
          <Pagination
            currentPage={createdCurrentPageNum}
            totalPages={12}
            onPageChange={handleCreatedCurrentPageChange}
          />
        </div>
      </Tab.Panel>
    </Tab.Provider>
  )
}

export default MyPageTab
