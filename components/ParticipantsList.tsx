'use client'

import { useState } from 'react'
import { IParticipants } from 'types/getSocialDetails'
import { Participants } from './index'

interface IParticipantsListProps {
  participants: IParticipants[] | undefined
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
        같이하는 멤버{' '}
        <span className="text-gray-05">{participants?.length}</span>
      </h2>
      <ul className="mt-20pxr flex flex-col gap-16pxr">
        {sliceParticipants?.map((participant, index) => {
          const { profileUrl, name, description, role } = participant

          return (
            <li key={`${index + 0}`}>
              <Participants
                profileImage={profileUrl}
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
