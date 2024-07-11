import { CategoryTagList } from '@/components'

export default function Home() {
  const categories1 = [
    '영화',
    '국내 여행',
    '해외 여행',
    '독서',
    '글쓰기',
    '한식',
    '중식',
    '일식',
    '양식',
  ]

  const categories2 = [
    '핸드드립',
    '제과/제빵',
    '와인',
    '칵테일',
    '주류제조',
    '뮤지컬',
    '오페라',
    '연극',
    '콘서트',
  ]

  const categories3 = [
    '전시회',
    '페스티벌',
    '운동',
    '스포츠 관람',
    '미술',
    '그림',
    '공예',
    '아트',
  ]

  const categories4 = [
    '투자/금융',
    '악기',
    '노래',
    '작사/작곡',
    '음악 감상',
    '사교/인맥',
    '스터디',
    '아웃도어',
  ]

  const categoryTagsConfig = [
    {
      categoryTag: categories1,
      className: 'px-34pxr',
    },
    {
      categoryTag: categories2,
      className: '',
    },
    {
      categoryTag: categories3,
      className: 'px-87pxr',
    },
    {
      categoryTag: categories4,
      className: 'px-43pxr',
    },
  ]
  return (
    <div className="flex h-224pxr w-1182pxr flex-col items-center gap-8pxr">
      {categoryTagsConfig.map((config) => {
        return (
          <CategoryTagList
            categories={config.categoryTag}
            className={config.className}
            key={config.className}
          />
        )
      })}
    </div>
  )
}
