'use client'

import { MyPageTab } from '@/components/index'
import ProfileCard from '@/components/ProfileCard'
import createTabStore from '@/stores/createTabStore'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function ProfilePage() {
  const tabStore = createTabStore()
  const [profileData, setProfileData] = useState({
    name: '',
    profileImageUrl: '',
    description: '',
  })

  const { id } = useParams()

  useEffect(() => {
    // api 호출 함수 넣기
    console.log(id)
    setProfileData({ name: '', profileImageUrl: '', description: '' })
  }, [id])

  return (
    <div className="mx-auto mt-80pxr flex w-full max-w-1200pxr flex-row px-20pxr mb:mt-40pxr mb:flex-col mb:gap-32pxr mb:px-0pxr">
      <section className="h-400pxr mb:px-20pxr">
        <ProfileCard
          type="anotherUser"
          name={profileData.name}
          profileImageUrl={profileData.profileImageUrl}
          description={profileData.description}
        />
      </section>
      <section className="flex w-full flex-col pb-160pxr">
        <h1 className="mb-24pxr px-20pxr text-gray-10 font-headline-03">
          {profileData.name}님의 활동
        </h1>
        <MyPageTab type="other" tabStore={tabStore} />
      </section>
    </div>
  )
}

export default ProfilePage
