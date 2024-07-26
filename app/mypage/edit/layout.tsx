import MyInfoSideMenu from '@/components/MyInfoSideMenu'

export default function MyPageEditLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex max-w-1180pxr flex-row gap-16pxr px-20pxr mb:flex-col">
      <MyInfoSideMenu />
      {children}
    </div>
  )
}
