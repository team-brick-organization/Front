'use client'

import Image from 'next/image'
import penIcon from '@/public/images/svgs/pen.svg'
import usePortal from '@/hooks/usePortal'
import { Portal, QnaWriteModal, SocialQnaCardList } from './index'

export interface ISocialQnaComment {
  commentId: number
  name: string
  profileImageUrl: string
  createdAt: string
  content: string
}

export interface ISocialQnaContent {
  qnaId: number
  socialId: number
  title: string
  content: string
  profileImageUrl: string
  name: string
  commentCount: number
  comments: ISocialQnaComment[]
  createdAt: string
}

const contents: ISocialQnaContent[] = [
  {
    qnaId: 1,
    socialId: 1,
    title: '게시글 제목입니다.',
    content:
      '게시글 내용입니다. 게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.게시글 내용입니다.',
    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 2,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 3,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 4,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 0,
    comments: [],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 5,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 6,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 7,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 8,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 9,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 10,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 11,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 12,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 13,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 14,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 15,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 16,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 17,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 18,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 19,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 20,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 21,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
  {
    qnaId: 22,
    socialId: 1,
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다.',

    profileImageUrl: 'https://randomuser.me/api/port',
    name: '이땡땡',
    commentCount: 7,
    comments: [
      {
        commentId: 1,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 2,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 3,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 4,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 5,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 6,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
      {
        commentId: 7,
        name: '이땡땡',
        profileImageUrl: 'asdasd',
        createdAt: '2021-07-01T00:00:00',
        content: 'asdasd',
      },
    ],
    createdAt: '2021-07-01T00:00:00',
  },
] // 목데이터임 api 연결 시 삭제해야함

function SocialQna() {
  const { portalRef, isPortalOpen, setIsPortalOpen, handleOutsideClick } =
    usePortal()
  // api 연결해야함. 형식 달라질수도 있음
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-gray-10 font-title-04">
          게시글<span className="ml-4pxr text-gray-05">{contents.length}</span>
        </h3>
        <button
          className="flex items-center gap-4pxr"
          type="button"
          onClick={() => setIsPortalOpen(true)}
        >
          <Image src={penIcon} alt="펜 아이콘" /> 새 글 작성
        </button>
      </div>
      <div className="mt-24pxr">
        <SocialQnaCardList contents={contents} />
      </div>
      <Portal
        portalRef={portalRef}
        isPortalOpen={isPortalOpen}
        handleOutsideClick={handleOutsideClick}
        className="h-full w-full max-w-1017pxr px-20pxr pb-160pxr pt-80pxr"
      >
        <QnaWriteModal onClose={() => setIsPortalOpen(false)} />
      </Portal>
    </>
  )
}

export default SocialQna
