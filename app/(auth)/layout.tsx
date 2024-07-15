import { Gnb } from '@/components/index'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Gnb />
      <div
        style={{ height: 'calc(100vh - 4.5rem)' }}
        className="flex w-screen flex-col items-center justify-center bg-gray-02"
      >
        {children}
      </div>
    </>
  )
}
