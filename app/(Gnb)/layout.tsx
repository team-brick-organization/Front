import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css'
import '@/styles/globals.css'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Gnb, KakaoScript } from '@/components'
import { Suspense } from 'react'

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

const DAUM_POST_CODE_URL =
  '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable}`}>
      <body className={`h-full ${pretendard.className}`}>
        <Theme className="h-full">
          <ToastContainer className="!w-full max-w-400pxr bg-none p-0pxr opacity-100 shadow-none" />
          <Script src={DAUM_POST_CODE_URL} />
          <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
          <KakaoScript />
          <Suspense>
            <Gnb />
          </Suspense>
          {children}
          <div id="portal" className="flex" />
        </Theme>
      </body>
    </html>
  )
}
