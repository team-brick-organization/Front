'use client'

import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { useEffect, useRef, useState } from 'react'

interface MenuItems {
  menuItem: string
  onClick: () => void
}

interface IDotsDropDownMenuProps {
  direction: 'vertical' | 'horizontal'
  menuItems: MenuItems[]
}

function DotsDropDownMenu({ direction, menuItems }: IDotsDropDownMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative h-22pxr w-22pxr" ref={dropdownRef}>
      <button
        title="드롭다운 메뉴 버튼"
        type="button"
        onClick={() => setIsDropdownOpen(true)}
      >
        {direction === 'vertical' ? (
          <DotsVerticalIcon width={22} height={22} fill="#1E1F20" />
        ) : (
          <DotsHorizontalIcon width={22} height={22} fill="#1E1F20" />
        )}
      </button>
      {isDropdownOpen && (
        <ul className="absolute -bottom-82pxr right-0pxr w-145pxr overflow-hidden rounded-[0.3125rem] bg-white shadow-[0rem_0.25rem_0.625rem_0rem_rgba(0,0,0,0.10)]">
          {menuItems.map((menuItem, index) => {
            return (
              <li key={menuItem.menuItem}>
                <button
                  className={`w-full px-24pxr py-11pxr text-start text-gray-08 font-caption-03 ${index === 0 ? 'border-b border-gray-04' : ''}`}
                  type="button"
                  onClick={menuItem.onClick}
                >
                  {menuItem.menuItem}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default DotsDropDownMenu
