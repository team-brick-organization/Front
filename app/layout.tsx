import type { Metadata } from 'next'
import { Theme, ThemePanel } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Theme>
          {children}
          <ThemePanel defaultOpen={false} />
        </Theme>
      </body>
    </html>
  )
}
