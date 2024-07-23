import { GatheringInfo } from '../components'

export default function Home() {
  return (
    <div className="">
      Hello world!
      <GatheringInfo
        id={1}
        tags={['asd', 'sdg', 'asda']}
        title="asdasd"
        location="대구시 북구"
        date="2024-01-01T15:00:00Z"
        dues={20000}
        participantProfileImagesConfig={[{ imageUrl: 'asd', fallback: 'asd' }]}
        participantsCurrentCount={9}
        participantsMinCount={2}
        participantsMaxCount={20}
      />
    </div>
  )
}
