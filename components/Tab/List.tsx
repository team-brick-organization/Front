'use client'

import createTabStore from '@/stores/createTabStore'
import { ReactNode } from 'react'

interface ITabListProps {
  ulClassName?: string
  underlineClassName?: string
  store: ReturnType<typeof createTabStore>
  children: ReactNode
}

function List({
  ulClassName,
  underlineClassName,
  store,
  children,
}: ITabListProps) {
  const { underlineStyle } = store()

  const tabVerticalCenter =
    underlineStyle.left +
    underlineStyle.offsetWidth / 2 -
    underlineStyle.width / 2

  return (
    <ul
      className={`relative flex h-34pxr w-full items-center justify-center gap-166pxr border-b border-[#DDDEE0] ${ulClassName}`}
    >
      {children}
      {(underlineStyle.left !== 0 || underlineStyle.width !== 0) && (
        <li
          style={{
            width: `${underlineStyle.width}px`,
            transform: `translateX(${tabVerticalCenter}px)`,
          }}
          className={`absolute -bottom-1pxr left-0pxr h-2pxr bg-[#1E1F20] transition-all duration-300 ${underlineClassName}`}
        />
      )}
    </ul>
  )
}

export default List
