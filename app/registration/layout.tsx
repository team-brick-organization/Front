import { Gnb } from '@/components/index'

function RegistrationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Gnb />
      {children}
    </div>
  )
}

export default RegistrationLayout
