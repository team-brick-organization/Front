export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="flex flex-grow items-center justify-center bg-gray-02">
        {children}
      </div>
    </div>
  )
}
