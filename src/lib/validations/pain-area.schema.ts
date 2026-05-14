import { z } from 'zod'

export const painAreaSchema = z
  .object({
    painArea: z.string().min(1),

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