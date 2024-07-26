import logo from '@/public/images/svgs/logo.svg'
import Image from 'next/image'

function Page404() {
  return (
    <div className="mx-auto flex w-fit flex-row items-center justify-center pt-250pxr">
      <div className="h-fit w-fit">
        <Image src={logo} alt="로고이미지" width={400} height={200} />
      </div>
      <h1 className="text-[190px] font-extralight">|</h1>
      <div className="flex flex-col">
        <h1 className="text-[128px] leading-[128px]">404</h1>
        <h1 className="text-[30px]">페이지를 찾을 수 없습니다.</h1>
      </div>
    </div>
  )
}
export default Page404
