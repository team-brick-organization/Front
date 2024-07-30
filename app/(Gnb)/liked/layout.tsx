import { ReactNode, Suspense } from 'react'

interface ILikedLayoutProps {
  children: ReactNode
}

function LikedLayout({ children }: ILikedLayoutProps) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default LikedLayout
