'use client'

import AnimatedProgress from './AnimatedProgress'

interface PeopleCounterProps {
  current: number
  min: number
  max: number
}
function PeopleCounter({ current, min, max }: PeopleCounterProps) {
  const minPercent = (min / max) * 100

  return (
    <div className="flex h-fit justify-center">
      <div className="flex w-200pxr flex-col gap-2pxr">
        <div className="relative">
          <AnimatedProgress
            min={min}
            current={current}
            max={max}
            key="프로그레스바"
          />
          <div className="h-10pxr w-full border-x-[2px]">
            <div
              className="absolute h-10pxr -translate-x-1/2 border-x-[1px]"
              style={{ left: `${minPercent}%` }}
            />
          </div>
          <p className="font-6pxr absolute -translate-x-1/2 transform">0</p>
          <p
            className="font-6pxr absolute -translate-x-1/2"
            style={{ left: `${minPercent}%` }}
          >
            {min}
          </p>
          <p className="font-6pxr absolute right-0pxr translate-x-1/2 transform">
            {max}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PeopleCounter
