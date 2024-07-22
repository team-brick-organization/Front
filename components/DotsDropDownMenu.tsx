'use client'

import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

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

  return (
    <div className="relative">
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
        <ul>
          {menuItems.map((menuItem) => {
            return (
              <li key={menuItem.menuItem}>
                <button type="button" onClick={menuItem.onClick}>
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
