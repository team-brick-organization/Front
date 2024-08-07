'use client'

import { useState } from 'react'

interface IUseDropdown {
  dropDownNames: string[]
}

function useDropdown({ dropDownNames }: IUseDropdown) {
  const [onActiveDropdown, setActiveDropdown] = useState(0)

  return {
    onActiveDropdown,
    setActiveDropdown,
    dropDownNames,
  }
}

export default useDropdown
