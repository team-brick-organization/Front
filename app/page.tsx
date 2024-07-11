'use client'

import { SocialIntroduce, Tab } from '@/components/index'
import useTab from '@/hooks/useTab'

const participants: {
  profileImage: string
  name: string
  description: string
  role: 'host' | 'participant'
}[] = [
  {
    profileImage: '/images/profile-image-01.png',
    name: '김민수',
    description: '안녕하세요. 김민수입니다.',
    role: 'host',
  },
  {
    profileImage: '/images/profile-image-02.png',
    name: '이영희',
    description: '안녕하세요. 이영희입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
  {
    profileImage: '/images/profile-image-03.png',
    name: '박철수',
    description: '안녕하세요. 박철수입니다.',
    role: 'participant',
  },
]

export default function Home() {
  const { tabNames, tabContent, activeTab, setActiveTab } = useTab({
    tabNames: ['소개', 'Qna'],
    tabContents: [
      <SocialIntroduce
        key="introduce"
        description="소셜 소개 입니다."
        location="서울특별시 중구 삼일대로 343 대신파이낸스센터 8층"
        lat={37.5662952}
        lng={126.9779451}
        participants={participants}
      />,
      <div key="qna">Qna</div>,
    ],
  })

  return (
    <div className="w-680pxr">
      <Tab activeTab={activeTab} tabNames={tabNames} onTabClick={setActiveTab}>
        {tabContent}
      </Tab>
    </div>
  )
}
