import { LocationMap, ParticipantsInfoList, SocialDescription } from './index'

interface ISocialIntroduceProps {
  description: string
  location: string
  lat: number
  lng: number
  participants: {
    profileImage: string
    name: string
    description: string
    role: 'host' | 'participant'
  }[]
}

function SocialIntroduce({
  description,
  location,
  lat,
  lng,
  participants,
}: ISocialIntroduceProps) {
  return (
    <div className="w-full">
      <section>
        <SocialDescription>{description}</SocialDescription>
      </section>
      <hr className="my-60pxr border-[#DDDEE0]" />
      <section className="w-full">
        <LocationMap location={location} lat={lat} lng={lng} />
      </section>
      <section className="mt-57pxr">
        <ParticipantsInfoList participants={participants} />
      </section>
    </div>
  )
}

export default SocialIntroduce
