'use client'

import createTabStore from '@/stores/createTabStore'
import { useEffect, useState } from 'react'
import useMyPageStore from '@/stores/useMyPageStore'
import useUserStore from '@/stores/useUserStore'
import getCreatedSocial from '@/apis/getCreatedSocial'
import { MypageCardList, Pagination, Tab } from '../index'
import { notify } from '../ToastMessageTrigger'

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
  // const [myCurrentPageNum, setMyCurrentPageNum] = useState(1)
  const { accessToken, hydrated } = useUserStore()
  const { activeTab } = tabStore()
  const {
    mySocialData,
    setMySocialData,
    createdSocialData,
    setCreatedSocialData,
  } = useMyPageStore()

  const tabs = [
    // 탭 이름과 탭에 들어갈 아이템 개수 넣어줘야함
    { tabName: '참여', itemLength: createdSocialData.totalElement },
    {
      tabName: `${type === 'my' ? '내가 ' : ''}만든 모임`,
      itemLength: createdSocialData.totalElement,
    },
  ]

  // const handleMyCurrentPageChange = (page: number) => {
  //   // 페이지 변경 로직
  //   setMyCurrentPageNum(page)
  // }

  const handleCreatedCurrentPageChange = (page: number) => {
    // 페이지 변경 로직
    setCreatedCurrentPageNum(page)
  }

  useEffect(() => {
    // API 호출넣어줘야함
    const getCreatedSocialData = async () => {
      try {
        const res = await getCreatedSocial({
          accessToken,
          offset: createdCurrentPageNum - 1,
          limit: 10,
        })

        if (!res.ok) {
          throw new Error('내가 만든 모임 불러오기를 실패했어요.')
        }
        const jsonfied = await res.json()

        setCreatedSocialData(jsonfied)
        setMySocialData(jsonfied)
      } catch (error) {
        notify('내가 만든 모임 불러오기를 실패했어요.', 'error')
        // eslint-disable-next-line no-console
        console.error('Error fetching user data:', error)
      }
    }

    if (!hydrated) return

    getCreatedSocialData()
  }, [
    activeTab,
    hydrated,
    createdCurrentPageNum,
    accessToken,
    setCreatedSocialData,
    setMySocialData,
  ])

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
          <MypageCardList data={mySocialData.socials} />
        </div>
        <div className="mx-auto flex flex-row justify-center pt-40pxr">
          <Pagination
            currentPage={createdCurrentPageNum}
            totalPages={createdSocialData.totalPages}
            onPageChange={handleCreatedCurrentPageChange}
          />
        </div>
      </Tab.Panel>
      <Tab.Panel index={1} store={tabStore}>
        <div className="px-20pxr mb:px-0pxr">
          <MypageCardList data={createdSocialData.socials} />
        </div>
        <div className="mx-auto flex flex-row justify-center pt-40pxr">
          <Pagination
            currentPage={createdCurrentPageNum}
            totalPages={createdSocialData.totalPages}
            onPageChange={handleCreatedCurrentPageChange}
          />
        </div>
      </Tab.Panel>
    </Tab.Provider>
  )
}

export default MyPageTab
