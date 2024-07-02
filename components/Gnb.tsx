import Link from 'next/link'

export default function Gnb() {
  return (
    <main className="flex h-60pxr w-full flex-row items-center justify-between bg-gray-400 px-50pxr">
      <Link href="/">
        <p className="font-19pxr">같이달램</p>
      </Link>
      <section className="flex flex-row gap-40pxr">
        <Link href="/search">
          <p className="font-19pxr">모임 찾기</p>
        </Link>
        <Link href="/my">
          <p className="font-19pxr">찜한 모임</p>
        </Link>
        <a href="/login">
          <p className="font-19pxr">로그인</p>
        </a>
      </section>
    </main>
  )
}
