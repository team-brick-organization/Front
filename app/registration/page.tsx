'use client'

import { CategoryTagList } from '@/components/index'
import useSocialRegistrationStore from '@/stores/useSocialRegistrationStore'
import Link from 'next/link'

function RegistrationPage() {
  const { tags } = useSocialRegistrationStore()
  return (
    <div className="mb-147pxr mt-60pxr flex justify-center gap-8pxr mb:px-20pxr tb:px-20pxr">
      <CategoryTagList />
      {tags.length > 0 && (
        <Link href="/registration/social">
          <button type="button">다음 페이지</button>
        </Link>
      )}
    </div>
  )
}

export default RegistrationPage
