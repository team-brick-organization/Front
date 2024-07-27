import PasswordResetVerifier from '@/components/PasswordResetVerifier'
import React from 'react'

function AccountPage() {
  return (
    <div>
      <PasswordResetVerifier name="김참치" email="test1@naver.com" />
      {/* 추후 변경해야합니다 */}
    </div>
  )
}

export default AccountPage
