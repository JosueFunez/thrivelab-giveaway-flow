import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'w-full rounded-md bg-[#445131]',
        'py-3 text-white font-medium',
        'transition hover:opacity-90',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    />
  )
}