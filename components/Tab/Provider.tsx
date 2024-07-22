'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import createTabStore from '@/stores/createTabStore'
import { ReactNode, useEffect } from 'react'

interface ITabProviderProps {
  tabUnderlineWidthFit?: boolean
  tabUnderlineWidth?: number
  store: ReturnType<typeof createTabStore>
  children: ReactNode
}

function Provider({
  tabUnderlineWidthFit,
  tabUnderlineWidth = 64,
  store,
  children,
}: ITabProviderProps) {
  const { activeTab, setActiveTab, tabRefs, setUnderlineStyle } = store()
  const windowWidth = useWindowWidth()
  useEffect(() => {
    const updateUnderlineStyle = () => {
      if (tabRefs.current[activeTab]) {
        const { offsetLeft, offsetWidth } = tabRefs.current[activeTab]!
        setUnderlineStyle({
          width: tabUnderlineWidthFit ? offsetWidth : tabUnderlineWidth,
          left: offsetLeft,
          offsetWidth,
        })
      }
    }

    updateUnderlineStyle()
  }, [
    activeTab,
    tabUnderlineWidth,
    tabUnderlineWidthFit,
    tabRefs,
    setUnderlineStyle,
    windowWidth,
  ])

  useEffect(() => {
    setActiveTab(activeTab)
  }, [activeTab, setActiveTab])

  return children
}

export default Provider
