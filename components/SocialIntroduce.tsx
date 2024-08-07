import useSocialDetailStore from '@/stores/useSocialDetailStore'
import { LocationMap, ParticipantsList, SocialDescription } from './index'

function SocialIntroduce() {
  const { socialDetailData } = useSocialDetailStore()
  return (
    <div className="w-full">
      <section>
        <SocialDescription>
          {socialDetailData.introduction.description}
        </SocialDescription>
      </section>
      <hr className="my-60pxr border-[#DDDEE0]" />
      <section className="w-full">
        <LocationMap
          location={socialDetailData.introduction.place.address}
          lat={socialDetailData.introduction.place.latitude}
          lng={socialDetailData.introduction.place.longitude}
        />
      </section>
      <section className="mt-57pxr">
        <ParticipantsList participants={socialDetailData.participants} />
      </section>
    </div>
  )
}

export default SocialIntroduce
