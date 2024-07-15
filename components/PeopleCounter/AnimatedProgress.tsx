'use client'

import { useEffect, useState } from 'react'
import * as Progress from '@radix-ui/react-progress'

interface AnimatedProgressProps {
  max: number
  min: number
  current: number
}
function AnimatedProgress({ current, max, min }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0)
  const progressbarColor = current >= min ? 'bg-[#F64A19]' : 'bg-[#F64A19]'

  useEffect(() => {
    const value = (current / max) * 100
    const timer = setTimeout(() => setProgress(value), 500)

    return () => clearTimeout(timer)
  }, [current, max])

  return (
    <Progress.Root
      className="relative h-4pxr w-full overflow-hidden rounded-full bg-slate-100"
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className={`${progressbarColor} ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full transition-transform duration-[660ms]`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}

export default AnimatedProgress
