'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormLayout } from './form-layout'

import {
  painAreaSchema,
  PainAreaFormData,
} from '@/lib/validations/pain-area.schema'
import {
  painAreaOptions,
} from '@/lib/validations/pain-area.schema'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Input } from '@/components/ui/input'
import { RadioCard } from '@/components/ui/radio-card'
import { StepNavigation } from '@/components/ui/step-navigation'
import { ProgressIndicator } from '@/components/ui/progress-indicator'

const OPTIONS = painAreaOptions

export function Step2() {
  const {
    formData,
    updateFormData,
    nextStep,
    previousStep,
  } = useGiveawayStore()

  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PainAreaFormData>({
    resolver: zodResolver(painAreaSchema),

    mode: 'onChange',

  defaultValues: {
    painArea:
      formData.painArea || undefined,
      painAreaOther:
        formData.painAreaOther,
    },
  })

  const selectedPainArea =
    watch('painArea')

  const onSubmit = (
    data: PainAreaFormData
  ) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <FormLayout>

      <div className="mb-8 mt-8">
        <h1   className="
              text-[34px] sm:text-[38px]
              leading-[38px] sm:leading-[42px]
              tracking-tight
              text-[#2f3728]
              font-medium"
            style={{
              fontFamily:
                'var(--font-cormorant)',
            }}>
          What area of your body are
          you experiencing pain or
          discomfort in?
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {OPTIONS.map((option) => (
          <RadioCard
            key={option}
            label={option}
            selected={
              selectedPainArea === option
            }
            onClick={() =>
              setValue(
                'painArea',
                option,
                {
                  shouldValidate: true,
                }
              )
            }
          />
        ))}

        {selectedPainArea ===
          'Other' && (
          <Input
            placeholder="Please specify"
            {...register(
              'painAreaOther'
            )}
            error={
              errors.painAreaOther
                ?.message
            }
          />
        )}

        <StepNavigation
          onBack={previousStep}
          isNextDisabled={!isValid}
        />
      </form>
    </FormLayout>
  )
}