'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  whyNotYetSchema,
  WhyNotYetFormData,
} from '@/lib/validations/why-not-yet.schema'

import { useGiveawayStore } from '@/store/giveaway.store'

import { CheckboxCard } from '@/components/ui/checkbox-card'
import { StepNavigation } from '@/components/ui/step-navigation'
import { ProgressIndicator } from '@/components/ui/progress-indicator'

const OPTIONS = [
  "I don't know who I can trust",
  "The cost of treatment",
  "I'm still learning more about it",
]

export function Step3() {
  const {
    formData,
    updateFormData,
    nextStep,
    previousStep,
  } = useGiveawayStore()

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<WhyNotYetFormData>({
    resolver: zodResolver(
      whyNotYetSchema
    ),

    mode: 'onChange',

    defaultValues: {
      whyNotYet:
        formData.whyNotYet || [],
    },
  })

  const selectedOptions =
    watch('whyNotYet')

  const toggleOption = (
    option: string
  ) => {
    const updatedOptions =
      selectedOptions.includes(option)
        ? selectedOptions.filter(
            (item) => item !== option
          )
        : [...selectedOptions, option]

    setValue(
      'whyNotYet',
      updatedOptions,
      {
        shouldValidate: true,
      }
    )
  }

  const onSubmit = (
    data: WhyNotYetFormData
  ) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <ProgressIndicator
        currentStep={3}
        totalSteps={4}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          Why haven't you already
          received a stem cell
          treatment?
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {OPTIONS.map((option) => (
          <CheckboxCard
            key={option}
            label={option}
            checked={selectedOptions.includes(
              option
            )}
            onClick={() =>
              toggleOption(option)
            }
          />
        ))}

        {errors.whyNotYet && (
          <p className="text-sm text-red-500">
            {
              errors.whyNotYet
                ?.message
            }
          </p>
        )}

        <StepNavigation
          onBack={previousStep}
          isNextDisabled={!isValid}
        />
      </form>
    </div>
  )
}