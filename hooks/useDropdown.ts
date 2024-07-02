'use client'

import { useState } from 'react'

interface IUseDropdown {
  dropDownNames: string[]
}

function useDropdown({ dropDownNames }: IUseDropdown) {
  const [activeDropdown, setActiveDropdown] = useState(0)

  return {
    activeDropdown,
    setActiveDropdown,
    dropDownNames,
  }
}

export default useDropdown
