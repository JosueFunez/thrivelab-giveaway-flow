import { z } from 'zod'

export const interestLevelSchema =
  z.object({
    interestLevel: z
      .string()
      .min(1, 'Please select an option'),
  })

export type InterestLevelFormData =
  z.infer<
    typeof interestLevelSchema
  >