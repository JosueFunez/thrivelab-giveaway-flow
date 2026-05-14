import { z } from 'zod'

export const whyNotYetSchema = z.object({
  whyNotYet: z
    .array(z.string())
    .min(1, 'Please select at least one option'),
})

export type WhyNotYetFormData =
  z.infer<typeof whyNotYetSchema>