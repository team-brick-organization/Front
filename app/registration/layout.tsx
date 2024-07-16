import { Gnb } from '@/components/index'

export default function RegistrationLayout({
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
