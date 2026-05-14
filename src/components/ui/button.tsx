import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                'w-full rounded-xl',
                'bg-[#3f4d2e]',
                'py-5',
                'text-lg font-semibold text-white',
                'transition-all',
                'hover:opacity-95',
                'disabled:opacity-50',
                'disabled:cursor-not-allowed',
                className
            )}
        />
    )
}