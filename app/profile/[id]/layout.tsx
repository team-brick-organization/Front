import { Gnb } from '@/components/index'

export default function ProfilePageLayout({
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
