'use client'

import { MyPageTab } from '@/components/index'
import ProfileCard from '@/components/ProfileCard'
import createTabStore from '@/stores/createTabStore'
import useUserDataStore from '@/stores/useUserDataStore'
import useUserStore from '@/stores/useUserStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function MyPage() {
  const { accessToken, hydrated } = useUserStore()
  const { userData } = useUserDataStore()
  const tabStore = createTabStore()
  const router = useRouter()

  useEffect(() => {
    if (!hydrated) return

    if (accessToken === '') {
      router.push('/signin')
    }
  }, [accessToken, router, hydrated])

  return (
    <div className="mx-auto mt-80pxr flex w-full max-w-1200pxr flex-row gap-16pxr px-20pxr max1020:mt-40pxr max1020:flex-col max1020:gap-32pxr max1020:px-0pxr">
      <section className="h-400pxr max1020:px-20pxr">
        <ProfileCard
          type="user"
          profileImageUrl={userData.profileImageUrl}
          name={userData.name}
          description={userData.introduce}
        />
      </section>
      <section className="flex w-full flex-col pb-160pxr">
        <h1 className="mb-24pxr px-20pxr text-gray-10 font-headline-03">
          내 활동 관리
        </h1>
        <MyPageTab type="my" tabStore={tabStore} />
      </section>
    </div>
  )
}

export default MyPage
