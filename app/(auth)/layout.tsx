import { Gnb } from '@/components/index'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Gnb />
      <div className="flex flex-grow items-center justify-center bg-gray-02">
        {children}
      </div>
    </div>
  )
}
