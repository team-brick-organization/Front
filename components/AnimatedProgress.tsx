import React from 'react'
import * as Progress from '@radix-ui/react-progress'

interface AnimatedProgressProps {
  max: number
  min: number
  current: number
}
function AnimatedProgress({ current, max, min }: AnimatedProgressProps) {
  const [progress, setProgress] = React.useState(0)
  const ProgressbarColor = current > min ? 'bg-green-600' : 'bg-slate-400'

  React.useEffect(() => {
    const value = (current / max) * 100
    const timer = setTimeout(() => setProgress(value), 500)

    return () => clearTimeout(timer)
  }, [current, max])

  return (
    <Progress.Root
      className="relative h-15pxr w-full overflow-hidden bg-slate-100"
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className={`${ProgressbarColor} ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full transition-transform duration-[660ms]`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}

export default AnimatedProgress
