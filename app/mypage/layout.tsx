import { Gnb } from '@/components/index'

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Gnb />
      {children}
    </>
  )
}
