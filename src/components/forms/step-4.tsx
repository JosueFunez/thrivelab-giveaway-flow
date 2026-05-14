'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  interestLevelSchema,
  InterestLevelFormData,
} from '@/lib/validations/interest-level.schema'

import { useGiveawayStore } from '@/store/giveaway.store'

import { RadioCard } from '@/components/ui/radio-card'
import { StepNavigation } from '@/components/ui/step-navigation'
import { ProgressIndicator } from '@/components/ui/progress-indicator'

const OPTIONS = [
  "Yes, I'd like to explore treatment options",
  "Possibly, depending on financing",
  "I'm only interested if I win the giveaway",
]

export function Step4() {
  const {
    formData,
    updateFormData,
    previousStep,
    nextStep,
  } = useGiveawayStore()

  const [apiError, setApiError] =
    useState('')

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isValid },
  } =
    useForm<InterestLevelFormData>({
      resolver: zodResolver(
        interestLevelSchema
      ),

      mode: 'onChange',

      defaultValues: {
        interestLevel:
          formData.interestLevel,
      },
    })

  const selectedInterest =
    watch('interestLevel')

  const onSubmit = async (
    data: InterestLevelFormData
  ) => {
    try {
      setApiError('')
      setIsSubmitting(true)

      updateFormData(data)

      const payload = {
        ...formData,
        ...data,
      }

      const response = await fetch(
        '/api/giveaway',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify(
            payload
          ),
        }
      )

      const result =
        await response.json()

      if (!response.ok) {
        throw new Error(
          result.message
        )
      }

      nextStep()
    } catch (error) {
      if (error instanceof Error) {
        setApiError(error.message)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <ProgressIndicator
        currentStep={4}
        totalSteps={4}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          If you don't win the
          giveaway, would you still
          be interested in learning
          more or receiving
          treatment?
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        {OPTIONS.map((option) => (
          <RadioCard
            key={option}
            label={option}
            selected={
              selectedInterest ===
              option
            }
            onClick={() =>
              setValue(
                'interestLevel',
                option,
                {
                  shouldValidate: true,
                }
              )
            }
          />
        ))}

        {apiError && (
          <p className="text-sm text-red-500">
            {apiError}
          </p>
        )}

        <StepNavigation
          onBack={previousStep}
          isNextDisabled={
            !isValid || isSubmitting
          }
        />
      </form>
    </div>
  )
}