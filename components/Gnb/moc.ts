const mockSocialProps = [
  {
    id: 1,
    type: 'social' as const,
    socialName: '서울 나들이',
    gatheringDate: '2024-07-04T12:13:28.263Z',
    joinedAt: '2024-07-04T12:13:28.263Z',
    address: '경기도 고양시 덕양구 호국로 754 (성사동, 어울림마을7단지아파트)',
    participantCount: {
      minPeople: 4,
      maxPeople: 10,
      currentPeople: 5,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['서울', '서울2'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'codeit',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 2,
    type: 'social' as const,
    socialName: '부산 여행',
    gatheringDate: '2024-08-12T14:30:00.000Z',
    joinedAt: '2024-07-15T10:00:00.000Z',
    address: '부산광역시 해운대구 해운대로 123 (우동, 해운대 센텀시티)',
    participantCount: {
      minPeople: 5,
      maxPeople: 15,
      currentPeople: 8,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['부산', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'travelMaster',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 3,
    type: 'social' as const,
    socialName: '한강 피크닉',
    gatheringDate: '2024-07-20T15:00:00.000Z',
    joinedAt: '2024-07-10T12:00:00.000Z',
    address: '서울특별시 영등포구 여의도동 여의도공원',
    participantCount: {
      minPeople: 3,
      maxPeople: 10,
      currentPeople: 3,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['피크닉', '한강'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'picnicLover',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 4,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 5,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 6,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 7,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 8,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 9,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 10,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 11,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 12,
    type: 'social' as const,
    socialName: '강릉 바다 여행',
    gatheringDate: '2024-09-01T09:00:00.000Z',
    joinedAt: '2024-08-20T18:00:00.000Z',
    address: '강원도 강릉시 경포해변',
    participantCount: {
      minPeople: 6,
      maxPeople: 20,
      currentPeople: 10,
    },
    imageUrl:
      'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
    tags: ['강릉', '여행'],
    participant: [
      {
        userName: 'user1',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user2',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user3',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user4',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user5',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user6',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user7',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user8',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user9',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
      {
        userName: 'user10',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464489246097448/card-default.png?ex=668f6a88&is=668e1908&hm=d1a656d4f16331c285ad5f5be60787761329c87cbab4ef06f0ccfc4b3ada558d&',
      },
    ],
    owner: {
      name: 'seasideFan',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
]

export default mockSocialProps
