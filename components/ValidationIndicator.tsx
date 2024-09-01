import Image from 'next/image'
import checkedIcon from '@/public/images/svgs/checked.svg'
import unCheckedIcon from '@/public/images/svgs/unChecked.svg'

interface IValidationIndicatorProps {
  isValidate: boolean
  children: string
}

function ValidationIndicator({
  isValidate,
  children,
}: IValidationIndicatorProps) {
  return (
    <div className="flex gap-2pxr">
      <Image
        src={isValidate ? checkedIcon : unCheckedIcon}
        alt={isValidate ? 'checkedIcon' : 'unCheckedIcon'}
        width={14}
        height={14}
      />
      <span
        className={`font-caption-02 ${isValidate ? 'text-gray-10' : 'text-gray-08'}`}
      >
        {children}
      </span>
    </div>
  )
}

export default ValidationIndicator
