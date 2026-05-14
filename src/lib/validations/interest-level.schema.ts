import { z } from 'zod'

export const interestLevelOptions = [
  "Yes, I'd like to explore treatment options",
  "Possibly, depending on financing",
  "I'm only interested if I win the giveaway",
] as const

export const interestLevelSchema =
  z.object({
    interestLevel: z.enum(
      interestLevelOptions
    ),
  })

export type InterestLevelFormData =
  z.infer<
    typeof interestLevelSchema
  >