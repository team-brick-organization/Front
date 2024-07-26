import { BottomBar, SocialRegistrationForm } from '@/components/index'
import React from 'react'

function EditSocialPage() {
  return (
    <>
      <div className="flex justify-center pb-147pxr pt-60pxr mb:px-20pxr tb:px-20pxr">
        <SocialRegistrationForm isEditForm />
      </div>
      <BottomBar>등록하기</BottomBar>
    </>
  )
}

export default EditSocialPage
