import { useEffect, useRef, useState } from 'react'

interface ITabProps {
  tabNames: string[]
  activeTab: number
  onActiveTab: (index: number) => void
}

function Tab({ tabNames, activeTab, onActiveTab }: ITabProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 })

  const isActiveTab = (index: number) => activeTab === index

  useEffect(() => {
    const updateUnderlineStyle = () => {
      if (tabRefs.current[activeTab]) {
        const { offsetWidth, offsetLeft } = tabRefs.current[activeTab]!
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft })
      }
    }

    updateUnderlineStyle()
  }, [activeTab, tabRefs])

  return (
    <div className="relative flex flex-col">
      <ul className="flex gap-12pxr">
        {tabNames.map((tabName, index) => (
          <li key={tabName}>
            <button
              className={`text-24pxr ${isActiveTab(index) ? 'font-bold' : 'font-medium'}`}
              type="button"
              onClick={() => onActiveTab(index)}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
            >
              {tabName}
            </button>
          </li>
        ))}
      </ul>
      <div
        style={{
          width: `${underlineStyle.width}px`,
          transform: `translateX(${underlineStyle.left}px)`,
        }}
        className="absolute -bottom-3pxr h-4pxr border-2 border-black transition-all duration-300"
      />
    </div>
  )
}

export default Tab
