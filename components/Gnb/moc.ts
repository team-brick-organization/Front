import { Social } from '../MypageCards/MypageCard'

const mockSocialProps: Social[] = [
  {
    id: 1,
    type: 'social',
    socialName: '해변 바비큐',
    gatheringDate: '2024-08-01T18:00:00Z',
    joinedAt: '2024-07-15T14:00:00Z',
    address: '부산광역시 해운대구 해운대해변로 140',
    participantCount: {
      minPeople: 8,
      maxPeople: 15,
      currentPeople: 8,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['바비큐', '해변', '여름'],
    participant: [
      {
        userName: '민호',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하늘',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '지윤',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '승현',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '보라',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '영진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '경민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '소연',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '준호',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 2,
    type: 'social',
    socialName: '등산 클럽',
    gatheringDate: '2024-08-07T09:00:00Z',
    joinedAt: '2024-07-20T10:00:00Z',
    address: '강원도 춘천시 북한강로 256',
    participantCount: {
      minPeople: 5,
      maxPeople: 12,
      currentPeople: 5,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['등산', '자연', '건강'],
    participant: [
      {
        userName: '수현',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '정민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '유진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '은지',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '재훈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '민석',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 3,
    type: 'social',
    socialName: '카페 탐방',
    gatheringDate: '2024-08-12T15:00:00Z',
    joinedAt: '2024-07-25T16:00:00Z',
    address: '경기도 성남시 분당구 중앙공원로 65',
    participantCount: {
      minPeople: 6,
      maxPeople: 10,
      currentPeople: 6,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['카페', '탐방', '음료'],
    participant: [
      {
        userName: '지혜',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '태영',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '유빈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '서연',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '미래',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '예린',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '정훈',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 4,
    type: 'social',
    socialName: '야구 경기 관람',
    gatheringDate: '2024-08-20T18:00:00Z',
    joinedAt: '2024-07-30T17:00:00Z',
    address: '대구광역시 중구 동성로 120',
    participantCount: {
      minPeople: 7,
      maxPeople: 12,
      currentPeople: 7,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['야구', '경기', '스포츠'],
    participant: [
      {
        userName: '민재',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '지수',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '세진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '정훈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '주희',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '다솜',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '호준',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '영호',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 5,
    type: 'social',
    socialName: '자전거 투어',
    gatheringDate: '2024-08-25T10:00:00Z',
    joinedAt: '2024-07-18T11:00:00Z',
    address: '전라북도 전주시 완산구 전주천변 73',
    participantCount: {
      minPeople: 7,
      maxPeople: 15,
      currentPeople: 7,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['자전거', '투어', '운동'],
    participant: [
      {
        userName: '호영',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '예진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '태호',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하은',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '재이',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '세훈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '진우',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '민주',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 6,
    type: 'social',
    socialName: '음악 페스티벌',
    gatheringDate: '2024-08-28T17:00:00Z',
    joinedAt: '2024-07-22T13:00:00Z',
    address: '광주광역시 동구 필문대로 119',
    participantCount: {
      minPeople: 10,
      maxPeople: 15,
      currentPeople: 10,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['음악', '페스티벌', '공연'],
    participant: [
      {
        userName: '진희',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하영',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '보람',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '소정',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '주연',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '가은',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하늘',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '시은',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하영',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '주희',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '지후',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 7,
    type: 'social',
    socialName: '강릉 소규모 독서 모임',
    gatheringDate: '2024-09-10T14:00:00Z',
    joinedAt: '2024-08-20T11:00:00Z',
    address: '강원도 강릉시 성덕동 231-12',
    participantCount: {
      minPeople: 6,
      maxPeople: 10,
      currentPeople: 6,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['독서', '토론', '소규모'],
    participant: [
      {
        userName: '서진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '윤정',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '진아',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '상우',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '예린',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '호준',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '민재',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 8,
    type: 'social',
    socialName: '제주도 다이빙 투어',
    gatheringDate: '2024-09-20T08:00:00Z',
    joinedAt: '2024-08-15T12:00:00Z',
    address: '제주특별자치도 제주시 연동 123-67',
    participantCount: {
      minPeople: 4,
      maxPeople: 8,
      currentPeople: 4,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['다이빙', '제주도', '해양'],
    participant: [
      {
        userName: '다은',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '성민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '재희',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '도영',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '정우',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 9,
    type: 'social',
    socialName: '부산 야경 투어',
    gatheringDate: '2024-09-25T19:00:00Z',
    joinedAt: '2024-08-22T17:00:00Z',
    address: '부산광역시 부산진구 부전동 238-14',
    participantCount: {
      minPeople: 7,
      maxPeople: 12,
      currentPeople: 7,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['야경', '투어', '부산'],
    participant: [
      {
        userName: '지민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '현수',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '경수',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '예나',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '지훈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '세연',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '현정',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '지후',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 10,
    type: 'social',
    socialName: '대전 커피 페스티벌',
    gatheringDate: '2024-10-01T13:00:00Z',
    joinedAt: '2024-09-05T15:00:00Z',
    address: '대전광역시 유성구 유성대로 168',
    participantCount: {
      minPeople: 5,
      maxPeople: 9,
      currentPeople: 5,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['커피', '페스티벌', '대전'],
    participant: [
      {
        userName: '시우',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '나래',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '채린',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하늘',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '태훈',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '수빈',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 11,
    type: 'social',
    socialName: '서울 종로 구경 투어',
    gatheringDate: '2024-10-05T10:00:00Z',
    joinedAt: '2024-09-10T08:00:00Z',
    address: '서울특별시 종로구 종로1길 11',
    participantCount: {
      minPeople: 4,
      maxPeople: 7,
      currentPeople: 4,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['종로', '투어', '서울'],
    participant: [
      {
        userName: '민석',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '지우',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '소민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '도연',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '상민',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
  {
    id: 12,
    type: 'social',
    socialName: '천안 명소 탐방',
    gatheringDate: '2024-10-10T09:00:00Z',
    joinedAt: '2024-09-15T14:00:00Z',
    address: '충청남도 천안시 동남구 원성동 234-67',
    participantCount: {
      minPeople: 5,
      maxPeople: 8,
      currentPeople: 5,
    },
    imageUrl:
      'https://media.istockphoto.com/id/944812540/ko/%EC%82%AC%EC%A7%84/%EC%82%B0-%ED%94%84%EB%A6%AC-%ED%8F%B0-%ED%83%80-%EB%8D%B8%EA%B0%80-%EB%8B%A4-%EC%84%AC-%EC%95%84%EC%A1%B0%EB%A0%88%EC%8A%A4-%EC%A0%9C%EB%8F%84.jpg?s=612x612&w=0&k=20&c=DQJ6eA0Wnxqt1yDdJChcoyuJ_5r0IQBduoIFZY0QV78=',
    tags: ['탐방', '천안', '명소'],
    participant: [
      {
        userName: '유나',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '민철',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '수진',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '정민',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
      {
        userName: '하은',
        userProfileImg:
          'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
      },
    ],
    owner: {
      name: '미래',
      profileImageUrl:
        'https://cdn.discordapp.com/attachments/1194636282295484497/1260464890213040190/addfri.png?ex=668f6ae8&is=668e1968&hm=ecba85bf01f32bf2fb4d686827d521215db9fd6ccffa27cfe9ed8a8d96dc8c36&',
    },
  },
]

export default mockSocialProps
