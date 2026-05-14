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
                    'w-full rounded-xl',
                    'border border-[#d8d2c7]',
                    'bg-[#f6f5f1]',
                    'px-4 py-4',
                    'text-[#3f4d2e]',
                    'outline-none',
                    'transition-all',
                    'placeholder:text-[#c8c1b7]',
                    'focus:border-[#3f4d2e]',
                    error && 'border-red-400',
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