'use client'

import { RefObject } from 'react'

interface IBottomBarProps {
  registrationRef?: RefObject<HTMLButtonElement>
  children: string
}

function BottomBar({ registrationRef, children }: IBottomBarProps) {
  return (
    <div className="fixed bottom-0pxr left-0pxr right-0pxr flex h-72pxr items-center justify-end bg-gray-01 pr-370pxr mb:pr-20pxr tb:pr-80pxr">
      <button
        className="rounded-[0.3125rem] bg-gray-10 px-20pxr py-8pxr text-gray-01 font-title-02"
        type="button"
        onClick={() => {
          if (registrationRef?.current) {
            registrationRef.current.click()
          }
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default BottomBar
