import Link from 'next/link'

function CardRegistrationPage() {
  return (
    <div className="relative min-h-screen w-screen items-center justify-center bg-[#F9FAFC]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-5pxr">
          <h1 className="text-[#000000] font-headline-03">Welcome comment</h1>
          <p className="text-[#000000] font-body-02">Welcome comment</p>
        </div>

        <div className="mt-72pxr flex gap-x-20pxr">
          <Link href="/crew/register">
            <div className="h-145pxr w-280pxr gap-3pxr rounded-[10px] bg-white">
              <div className="flex flex-col gap-13pxr px-22pxr py-36pxr">
                <div className="text-[#000000] font-title-04">크루</div>
                <div className="text-[#000000] font-body-01">
                  크루를 만들어 정기모임을 통해 꾸준한
                  <br /> 커뮤니티를 이어나가세요 어쩌구
                </div>
              </div>
            </div>
          </Link>
          <Link href="/social/register">
            <div className="h-145pxr w-280pxr gap-3pxr rounded-[10px] bg-white">
              <div className="flex flex-col gap-20pxr px-22pxr py-36pxr">
                <div className="text-[#000000] font-title-04">소셜</div>
                <div className="text-[#000000] font-body-01">
                  일회성 모임으로 일상의 재미를 느껴보세요.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardRegistrationPage
