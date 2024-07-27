'use client'

import { BottomBar, CategoryTagList } from '@/components/index'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import { useRouter } from 'next/navigation'

function RegistrationPage() {
  const router = useRouter()
  const { tags } = useSocialRegistrationStore()

  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center gap-80pxr pb-152pxr pt-80pxr mb:px-20pxr tb:px-20pxr">
        <h1 className="text-gray-10 font-headline-02 mb:font-title-04">
          개최하는 모임과 관련된 태그를 최대 3개까지 선택해 주세요
        </h1>
        <CategoryTagList />
      </div>
      <BottomBar
        disabled={tags.length <= 0}
        buttonClassName="px-40pxr py-8pxr font-title-04"
        onButtonClick={() => {
          router.push('/registration/social')
        }}
      >
        다음
      </BottomBar>
    </>
  )
}

export default RegistrationPage
