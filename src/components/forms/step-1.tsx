'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MaskedInput } from '@/components/ui/masked-input'

import { contactInfoSchema, ContactInfoFormData } from '@/lib/validations/contact-info.schema'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Step1() {
  const {
    formData,
    updateFormData,
    nextStep,
  } = useGiveawayStore()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<ContactInfoFormData>({
    resolver: zodResolver(contactInfoSchema),
    mode: 'onChange',

    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      instagramHandle:
        formData.instagramHandle,
      email: formData.email,
      phone: formData.phone,
    },
  })

const phoneValue = watch('phone')
  const onSubmit = (
    data: ContactInfoFormData
  ) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Win a $10,000 in-home
          stem cell treatment
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <Input
          placeholder="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
        />

        <Input
          placeholder="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />

        <Input
          placeholder="Instagram Handle"
          {...register('instagramHandle')}
          error={
            errors.instagramHandle?.message
          }
        />

        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          error={errors.email?.message}
        />

<div>
<MaskedInput
  value={phoneValue}
  onChange={(e) =>
    setValue('phone', e.target.value, {
      shouldValidate: true,
    })
  }
  placeholder="Phone Number"
  error={errors.phone?.message}
/>
</div>

        <Button
          type="submit"
          disabled={!isValid}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}