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
            maskRef.current = node

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
            'w-full rounded-md border px-4 py-3 outline-none',
            'focus:ring-2 focus:ring-black',
            error
              ? 'border-red-500'
              : 'border-gray-300'
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