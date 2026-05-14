import { z } from 'zod'

export const contactInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required'),

  lastName: z
    .string()
    .min(1, 'Last name is required'),

  instagramHandle: z.string(),

  email: z
    .email('Please enter a valid email'),

  phone: z
    .string()
    .min(14, 'Phone number is required'),
})

export type ContactInfoFormData =
  z.infer<typeof contactInfoSchema>