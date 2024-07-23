import { ButtonHTMLAttributes, forwardRef } from 'react'
import classnames from 'classnames'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'L' | 'M' | 'S' | 'XS' | 'FAB'
  disabled?: boolean
}
const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, size, disabled, ...props }, ref) => {
    const sizeClasses = {
      L: 'w-full max-w-400pxr py-12pxr px-16pxr font-title-04',
      M: 'w-full max-w-232pxr py-10pxr px-16pxr font-title-02',
      S: 'w-full max-w-120pxr py-10pxr px-16pxr font-title-02',
      XS: 'w-full max-w-78pxr py-8pxr px-16pxr font-body-01',
      FAB: 'w-full max-w-48pxr !rounded-full h-full min-h-48pxr font-body-01',
    }
    const defaultClasses = 'text-gray-01 bg-gray-10 rounded-[10px]'
    const hoverClasses = 'hover:bg-gray-08'
    const pressedClasses = 'active:bg-gray-08'
    const disabledClasses = 'disabled:bg-gray-04'

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref}
        className={classnames(
          defaultClasses,
          sizeClasses[size],
          hoverClasses,
          pressedClasses,
          disabledClasses,
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {props.children}
      </button>
    )
  },
)
Button.displayName = 'Button'

export default Button
