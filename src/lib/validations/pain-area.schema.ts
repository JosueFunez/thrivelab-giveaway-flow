import { z } from 'zod'

export const painAreaOptions = [
  'Knee',
  'Shoulder',
  'Back',
  'Other',
] as const

export const painAreaSchema = z
  .object({
    painArea: z.enum(
      painAreaOptions
    ),

    painAreaOther: z.string(),
  })
  .superRefine((data, ctx) => {
    if (
      data.painArea === 'Other' &&
      !data.painAreaOther.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['painAreaOther'],
        message: 'Please specify',
      })
    }
  })

export type PainAreaFormData =
  z.infer<typeof painAreaSchema>