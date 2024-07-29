import { ReactNode, Suspense } from 'react'

interface ISocialsLayoutProps {
  children: ReactNode
}

function SocialsLayout({ children }: ISocialsLayoutProps) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default SocialsLayout
