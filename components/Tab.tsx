import { ReactNode, useEffect, useRef, useState } from 'react'

interface ITabProps {
  tabNames: string[]
  activeTab: number
  onTabClick: (index: number) => void
  children: ReactNode
}

const TAB_UNDERLINE_WIDTH = 64

function Tab({ tabNames, activeTab, onTabClick, children }: ITabProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    offsetWidth: 0,
  })

  const tabVerticalCenter =
    underlineStyle.left +
    underlineStyle.offsetWidth / 2 -
    TAB_UNDERLINE_WIDTH / 2

  useEffect(() => {
    const updateUnderlineStyle = () => {
      if (tabRefs.current[activeTab]) {
        const { offsetLeft, offsetWidth } = tabRefs.current[activeTab]!
        setUnderlineStyle({
          width: TAB_UNDERLINE_WIDTH,
          left: offsetLeft,
          offsetWidth,
        })
      }
    }

    updateUnderlineStyle()
  }, [activeTab, tabRefs])

  return (
    <div className="flex w-full flex-col gap-3pxr">
      <ul className="relative flex h-34pxr w-full items-center justify-center gap-166pxr border-b border-[#DDDEE0]">
        {tabNames.map((tabName, index) => (
          <li key={tabName}>
            <button
              className="w-64pxr font-title-04"
              type="button"
              onClick={() => onTabClick(index)}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
            >
              {tabName}
            </button>
          </li>
        ))}
        {(underlineStyle.left !== 0 || underlineStyle.width !== 0) && (
          <li
            style={{
              width: `${TAB_UNDERLINE_WIDTH}px`,
              transform: `translateX(${tabVerticalCenter}px)`,
            }}
            className="absolute -bottom-1pxr left-0pxr h-2pxr bg-[#1E1F20] transition-all duration-300"
          />
        )}
      </ul>
      <div className="w-full overflow-y-scroll">{children}</div>
    </div>
  )
}

export default Tab
