'use client'

import {
  BottomBar,
  GatheringInfo,
  ImageViewer,
  SocialDetailPageTab,
} from '@/components/index'
import getEventStatus from '@/utils/getEventStatus'
import { Avatar } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

interface ISocialDetailData {
  images: {
    id: number
    src: string
  }[]
  nickName: string
  profileImage: string
  title: string
  description: string
  address: string
  lat: number
  lng: number
  date: string
  dues: number
  participants: {
    profileImage: string
    name: string
    description: string
    role: 'host' | 'participant'
  }[]
  participantsCurrentCount: number
  participantsMinCount: number
  participantsMaxCount: number
  tags: string[]
}

function SocialDetailPage() {
  const [socialDetailData, setSocialDetailData] =
    useState<ISocialDetailData | null>(null)

  useEffect(() => {
    // TODO: fetch data from server
    const fetchData: ISocialDetailData = {
      images: [
        {
          id: 1,
          src: 'https://via.placeholder.com/680x400',
        },
        {
          id: 2,
          src: 'https://via.placeholder.com/235x195',
        },
        {
          id: 3,
          src: 'https://via.placeholder.com/235x195',
        },
        {
          id: 4,
          src: 'https://via.placeholder.com/235x195',
        },
        {
          id: 5,
          src: 'https://via.placeholder.com/235x195',
        },
      ],
      nickName: '호스트입니다.',
      profileImage: 'https://via.placeholder.com/23x23',
      title: 'title',
      description: 'description',
      address: '대구시 북구 구암서로 22',
      lat: 35.9364429433593,
      lng: 128.565589928605,
      date: '2024-07-30T00:00:00.000Z',
      dues: 10000,
      participants: [
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'host',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
        {
          profileImage: 'https://via.placeholder.com/50x50',
          name: 'NickName',
          description: 'NickName',
          role: 'participant',
        },
      ],
      participantsCurrentCount: 14,
      participantsMinCount: 10,
      participantsMaxCount: 40,
      tags: ['asd', 'xxd', 'asdfg'],
    }

    setSocialDetailData(fetchData)
  }, [])

  if (!socialDetailData) return null

  const {
    images,
    nickName,
    profileImage,
    title,
    description,
    address,
    lat,
    lng,
    date,
    dues,
    participants,
    participantsCurrentCount,
    participantsMinCount,
    participantsMaxCount,
    tags,
  } = socialDetailData

  const badgeText = getEventStatus(
    date,
    participantsCurrentCount,
    participantsMaxCount,
  )

  return (
    <div className="flex justify-center px-20pxr pb-230pxr pt-20pxr">
      <div className="flex w-full max-w-1180pxr flex-col gap-40pxr">
        <ImageViewer images={images} />
        <div className="flex flex-col gap-16pxr">
          <div className="flex items-center gap-8pxr">
            <h1 className="text-gray-10 font-headline-03">{title}</h1>
            {badgeText && (
              <p className="rounded-full bg-gray-10 px-10pxr py-4pxr text-gray-01 font-caption-02">
                {badgeText}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4pxr">
            <Avatar
              className="h-23pxr w-23pxr rounded-full bg-gray-06"
              src={profileImage}
              fallback={
                <div className="h-23pxr w-23pxr rounded-full bg-gray-06" />
              }
            />
            <span className="text-gray-08 font-title-01">{nickName}</span>
          </div>
          <div className="grid w-full grid-cols-[minmax(auto,680px)_minmax(auto,480px)] gap-20pxr mb:grid-cols-1 mb:gap-36pxr max759Min480:grid-cols-1 max759Min480:gap-36pxr">
            <div className="flex w-full max-w-680pxr flex-col mb:order-2 max759Min480:order-2">
              <SocialDetailPageTab
                description={description}
                address={address}
                lat={lat}
                lng={lng}
                participants={participants}
              />
            </div>
            <div className="w-full max-w-480pxr mb:order-1 mb:max-w-full max759Min480:order-1 max759Min480:max-w-full">
              <GatheringInfo
                id={1}
                tags={tags}
                title={title}
                location={address}
                date={date}
                dues={dues}
                participantProfileImagesConfig={participants.map(
                  (participant) => ({
                    imageUrl: participant.profileImage,
                    fallback: participant.name.slice(0, 1),
                  }),
                )}
                participantsCurrentCount={participantsCurrentCount}
                participantsMinCount={participantsMinCount}
                participantsMaxCount={participantsMaxCount}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomBar>참가하기</BottomBar>
    </div>
  )
}

export default SocialDetailPage
