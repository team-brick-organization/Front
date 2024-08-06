import { ReactNode, Suspense } from 'react'

interface ISearchLayoutProps {
  children: ReactNode
}

function SearchLayout({ children }: ISearchLayoutProps) {
  return <Suspense>{children}</Suspense>
}

export default SearchLayout
