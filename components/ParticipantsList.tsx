'use client'

import { useState } from 'react'
import { Participants } from './index'

interface IParticipantsListProps {
  participants:
    | {
        profileImage: string
        name: string
        description: string
        role: 'host' | 'participant'
      }[]
    | undefined
}

function ParticipantsList({ participants }: IParticipantsListProps) {
  const [offset, setOffset] = useState(10)

  const sliceParticipants = participants?.slice(0, offset)

  const handleLoadMoreClick = () => {
    setOffset((prevOffset) => prevOffset + 10)
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-gray-10 font-title-04">
        참여자 <span className="text-gray-05">{participants?.length}</span>
      </h2>
      <ul className="mt-20pxr flex flex-col gap-16pxr">
        {sliceParticipants?.map((participant) => {
          const { profileImage, name, description, role } = participant

          return (
            <li key={profileImage}>
              <Participants
                profileImage={profileImage}
                name={name}
                description={description}
                role={role}
              />
            </li>
          )
        })}
      </ul>
      {participants && offset < participants.length && (
        <button
          className="mt-24pxr text-gray-07 font-body-02"
          type="button"
          onClick={handleLoadMoreClick}
        >
          더보기
        </button>
      )}
    </div>
  )
}

export default ParticipantsList
