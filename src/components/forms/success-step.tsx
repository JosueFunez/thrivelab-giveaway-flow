'use client'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Button } from '@/components/ui/button'

export function SuccessStep() {
  const resetForm =
    useGiveawayStore(
      (state) => state.resetForm
    )

  const handleReset = () => {
    localStorage.removeItem(
      'thrivelab-giveaway'
    )

    resetForm()
  }

  return (
    <div className="w-full max-w-[420px] px-4 py-10">
      <div className="mb-28 text-center">
        <p className="font-serif text-5xl text-[#3f4d2e]">
          thrivelab
        </p>
      </div>

      <div
        className="
          rounded-[28px]
          bg-gradient-to-br
          from-[#eef3df]
          to-[#cce9ff]
          px-6 py-10
          text-center
        "
      >
        <h1
          className="
            text-[54px]
            leading-[52px]
            tracking-tight
            text-[#3f4d2e]
          "
          style={{
            fontFamily:
              'var(--font-cormorant)',
          }}
        >
          You’re In!
        </h1>

        <p className="mt-5 mx-auto max-w-[320px] text-[18px] leading-8 text-[#2f3728]">
          The winner will be announced
          on our instagram page
          @mythrivelab
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="mx-auto max-w-[340px] text-[16px] leading-8 text-[#2f3728]">
          Thank you for sharing more
          about your health goals.
          Whether you’re the giveaway
          winner or not, this is the
          first step toward exploring
          what’s possible with
          regenerative medicine.
        </p>

        <p className="mt-10 text-[16px] text-[#2f3728]">
          We’ll be in touch with the
          results soon.
        </p>
      </div>

      <Button
        onClick={handleReset}
        className="mt-10"
      >
        Submit another response
      </Button>
    </div>
  )
}