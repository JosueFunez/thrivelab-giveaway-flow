'use client'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Button } from '@/components/ui/button'

export function SuccessStep() {
  const resetForm =
    useGiveawayStore(
      (state) => state.resetForm
    )

  return (
    <div
      className="
        rounded-3xl
        bg-gradient-to-br
        from-[#eef3df]
        to-[#cce9ff]
        p-10
        text-center
      "
    >
      <div className="space-y-4">
        <h1
          className="
            font-serif
            text-6xl
            text-[#3f4d2e]
          "
          style={{
            fontFamily:
              'var(--font-cormorant)',
          }}
        >
          Youre In!
        </h1>

        <p className="text-gray-600">
          Your giveaway entry has been
          submitted successfully.
        </p>

        <Button onClick={resetForm}>
          Submit another response
        </Button>
      </div>
    </div>
  )
}