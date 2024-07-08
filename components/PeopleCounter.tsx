'use client'

import AnimatedProgress from './AnimatedProgress'

interface PeopleCounterProps {
  current: number
  min: number
  max: number
  size: 'pc' | 'tablet' | 'mobile'
}

/**
 * 참여중인 사람들 수를 나타내는 컴포넌트 (나중에 색상변경, 크기조정필요)
 * @param current 현재인원
 * @param min 최소인원
 * @param max 최대인원
 * @param size 'pc', 'tablet', 'mobile' 사이즈 입력
 */

function PeopleCounter({ current, min, max, size }: PeopleCounterProps) {
  const elementSize = {
    barWidth: 'w-432pxr',
    fontSize: 'text-12pxr',
  }
  switch (size) {
    case 'pc':
      elementSize.barWidth = 'w-432pxr'
      elementSize.fontSize = 'text-12pxr'
      break
    case 'tablet':
      elementSize.barWidth = 'w-200pxr'
      elementSize.fontSize = 'text-7pxr'
      break
    case 'mobile':
      elementSize.barWidth = 'w-100pxr'
      elementSize.fontSize = 'text-7pxr'
      break
    default:
      break
  }

  return (
    <div className="flex h-fit justify-center">
      <div>
        <div className={`${elementSize.barWidth} flex flex-col gap-8pxr`}>
          <AnimatedProgress
            min={min}
            current={current}
            max={max}
            key="프로그레스바"
          />
          <div className="flex justify-between">
            <p className={`${elementSize.fontSize} text-neutral-500`}>
              최소인원 {min}명
            </p>
            <p className={`${elementSize.fontSize} text-neutral-500`}>
              최대인원 {max}명
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleCounter
