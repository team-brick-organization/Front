import { ReactNode, Suspense } from 'react'

interface ISocialsLayoutProps {
  children: ReactNode
}

function SocialsLayout({ children }: ISocialsLayoutProps) {
  return <Suspense>{children}</Suspense>
}

export default SocialsLayout
