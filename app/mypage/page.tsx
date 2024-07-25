'use client'

import { MyPageTab } from '@/components/index'
import ProfileCard from '@/components/ProfileCard'
import createTabStore from '@/stores/createTabStore'
import useUserStore from '@/stores/useUserStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function MyPage() {
  const { accessToken, name, profileImageUrl, description } = useUserStore()
  const tabStore = createTabStore()
  const router = useRouter()

  useEffect(() => {
    if (accessToken === '') {
      router.back()
    }
  }, [accessToken, router])

  return (
    <div className="mx-auto mt-80pxr flex w-full max-w-1200pxr flex-row gap-16pxr px-20pxr mb:mt-40pxr mb:flex-col mb:gap-32pxr mb:px-0pxr">
      <section className="h-400pxr mb:px-20pxr">
        <ProfileCard
          type="user"
          profileImageUrl={profileImageUrl}
          name={name}
          description={description}
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
