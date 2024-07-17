'use client'

interface IProfileImageChangeModalProps {
  onClose: () => void
}

function ProfileImageChangeModal({ onClose }: IProfileImageChangeModalProps) {
  return (
    <div className="">
      <button type="button" onClick={onClose}>
        닫기
      </button>
    </div>
  )
}

export default ProfileImageChangeModal
