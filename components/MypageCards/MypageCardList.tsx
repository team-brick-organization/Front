import MypageCard from './MypageCard'

interface MypageCardListProps {
  data: MyPageSocial[]
}
function MypageCardList({ data }: MypageCardListProps) {
  return (
    <div className="min-w-540pxr max-w-880pxr justify-center divide-y divide-gray-04 mb:grid mb:w-full mb:min-w-0pxr mb:grid-cols-[repeat(auto-fit,minmax(212px,212px))] mb:gap-x-10pxr mb:gap-y-32pxr mb:divide-y-0 mb:pt-24pxr">
      {data.map((item) => (
        <div
          className="pb-40pxr pt-40pxr first:pt-24pxr mb:w-fit mb:pb-0pxr mb:pt-0pxr mb:first:pt-0pxr"
          key={item.id}
        >
          <MypageCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default MypageCardList
