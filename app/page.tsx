import { MyPageTab, SocialDetailPageTab, SocialIntroduce } from '../components'

export default function Home() {
  return (
    <div className="w-600pxr">
      <MyPageTab tabContent1={<div>1</div>} tabContent2={<div>2</div>} />

      <SocialDetailPageTab
        tabContent1={
          <SocialIntroduce
            description="sad"
            location="asdas"
            lat={33.450701}
            lng={126.570667}
            participants={[
              {
                profileImage: 'z',
                name: 'z',
                description: '하이',
                role: 'host',
              },
            ]}
          />
        }
        tabContent2={<div>asdasd</div>}
      />
    </div>
  )
}
