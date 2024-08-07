import { ReactNode, Suspense } from 'react'

interface ILikedLayoutProps {
  children: ReactNode
}

function LikedLayout({ children }: ILikedLayoutProps) {
  return <Suspense>{children}</Suspense>
}

export default LikedLayout
