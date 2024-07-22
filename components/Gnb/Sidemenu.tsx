import { ChevronRightIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import useUserStore from '@/stores/useUserStore'
import getSignOut from '@/apis/getSignOut'

interface SidemenuProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const menus = [
  {
    name: '모집 중',
    link: '/socials',
  },
  {
    name: '모집 마감',
    link: '/socials?type=imminent',
  },
  {
    name: '찜한 소셜',
    link: '/liked',
  },
]

function Sidemenu({ isOpen = false, setIsOpen }: SidemenuProps) {
  const {
    accessToken,
    setAccessToken,
    name,
    setName,
    setEmail,
    profileImageUrl,
    setProfileImageUrl,
  } = useUserStore()

  const handleOnClose = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`${isOpen ? '' : 'translate-x-full'} fixed left-0pxr top-0pxr hidden h-screen w-full bg-gray-01 transition-transform duration-300 ease-in-out mb:block`}
    >
      <section className="left-0pxr top-0pxr flex h-70pxr w-full flex-row items-center justify-between bg-gray-02 px-20pxr">
        <div className="flex flex-row items-center gap-16pxr">
          {accessToken && (
            <Avatar
              src={profileImageUrl}
              fallback={name?.slice(0, 1)}
              className="rounded-full"
            />
          )}
          <div className="item-center flex flex-row gap-4pxr">
            {accessToken ? (
              <p className="text-gray-10 font-title-04">{name}</p>
            ) : (
              <Link href="/signin">
                <p className="text-gray-10 font-title-04">로그인</p>
              </Link>
            )}

            <Link href="/mypage">
              <ChevronRightIcon width={26} height={26} />
            </Link>
          </div>
        </div>
        <button type="button" onClick={handleOnClose}>
          <Cross2Icon width={30} height={30} />
        </button>
      </section>
      <section className="flex flex-col gap-40pxr px-20pxr pt-40pxr">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            className="text-left text-gray-10 font-headline-02"
            key={`menu-${index + 0}`}
          >
            {menu.name}
          </Link>
        ))}
      </section>
      {name && (
        <button
          type="button"
          className="px-20pxr pt-400pxr text-left text-gray-10 font-headline-02"
          onClick={async () => {
            await getSignOut({ accessToken })
            setAccessToken('')
            setName('')
            setEmail('')
            setProfileImageUrl('')
          }}
        >
          로그아웃
        </button>
      )}
    </div>
  )
}
export default Sidemenu
