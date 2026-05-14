import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export function Input({
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      <input
        {...props}
        className={clsx(
          'w-full rounded-md border px-4 py-3 outline-none',
          'focus:ring-2 focus:ring-black',
          error
            ? 'border-red-500'
            : 'border-gray-300',
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}