import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'

import { AlertCircleIcon } from '@/assets/icons/icons'
import { twMergeApp } from '@/config/twMerge'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  Prefix?: ReactNode
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, Icon, error, Prefix, ...props }: InputProps, ref) => {
    const id = useId()

    return (
      <div className="group w-full">
        {label && (
          <label
            className="text-label-md font-medium uppercase text-gray-300 group-focus-within:text-orange-base"
            htmlFor={id}
          >
            {label}
          </label>
        )}

        <div className="flex flex-row-reverse items-center justify-start gap-2 border-b border-b-gray-100 px-0.5 group-focus-within:border-b-gray-400">
          <input
            type={type}
            id={id}
            ref={ref}
            className="peer h-full w-full py-3 text-gray-400 outline-none placeholder:text-gray-200"
            {...props}
          />

          {Icon && (
            <Icon
              className={twMergeApp(
                'size-6 text-gray-200 peer-focus:text-orange-base peer-[:not(:placeholder-shown)]:text-orange-base',
                error &&
                  'text-danger peer-[:not(:placeholder-shown)]:text-danger',
              )}
            />
          )}

          {Prefix}
        </div>

        {error && (
          <div className="mt-1.5 flex items-center justify-start gap-1">
            <AlertCircleIcon className="size-4 text-danger" />

            <p className="text-body-xs text-danger" role="alert">
              {error}
            </p>
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
