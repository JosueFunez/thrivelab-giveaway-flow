'use client'

import { forwardRef } from 'react'
import { useMask } from '@react-input/mask'
import clsx from 'clsx'

interface MaskedInputProps {
  value?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  placeholder?: string
  error?: string
}

export const MaskedInput = forwardRef<
  HTMLInputElement,
  MaskedInputProps
>(
  (
    {
      value,
      onChange,
      placeholder,
      error,
    },
    ref
  ) => {
    const maskRef = useMask({
      mask: '(___) ___-____',
      replacement: {
        _: /\d/,
      },
    })

    return (
      <div className="space-y-1">
        <input
            ref={(node) => {
            if (node) {
                maskRef.current = node
            }

            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(
            'w-full rounded-2xl',
            'border border-[#d8d2c7]',
            'bg-[#f6f5f1]',
            'px-4 py-4',
            'text-[#3f4d2e]',
            'placeholder:text-[#c8c1b7]',
            'placeholder:opacity-100',
            'outline-none',
            'transition-all',
            'appearance-none',
            'focus:border-[#3f4d2e]',
            'focus:ring-0',
            error && 'border-red-400'
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
)

MaskedInput.displayName = 'MaskedInput'