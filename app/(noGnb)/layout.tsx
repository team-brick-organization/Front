import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'

export const metadata: Metadata = {
  title: 'Brick',
  description: '사람들과의 새로운 연결',
  icons: '../favicon.ico',
}

const pretendard = localFont({
  src: '../../public/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export default function NoGnbLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable}`}>
      <body className={`h-full ${pretendard.className}`}>
        <Theme className="h-full">
          {children}
          <div id="portal" className="flex" />
        </Theme>
      </body>
    </html>
  )
}
