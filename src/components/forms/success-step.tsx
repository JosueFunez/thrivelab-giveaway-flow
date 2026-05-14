'use client'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Button } from '@/components/ui/button'

export function SuccessStep() {
  const resetForm =
    useGiveawayStore(
      (state) => state.resetForm
    )

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          You’re in!
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