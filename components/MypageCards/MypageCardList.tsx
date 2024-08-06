import MypageCard from './MypageCard'

interface MypageCardListProps {
  data: MyPageSocial[]
}
function MypageCardList({ data }: MypageCardListProps) {
  return (
    <div className="min-w-540pxr max-w-880pxr justify-center divide-y divide-gray-04 max344:!grid-cols-1 max599:grid max599:w-full max599:min-w-0pxr max599:grid-cols-2 max599:gap-x-10pxr max599:gap-y-32pxr max599:divide-y-0 max599:px-20pxr max599:pt-24pxr">
      {data.map((item) => (
        <div
          className="pb-40pxr pt-40pxr first:pt-24pxr max599:w-full max599:pb-0pxr max599:pt-0pxr max599:first:pt-0pxr"
          key={item.id}
        >
          <MypageCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default MypageCardList
