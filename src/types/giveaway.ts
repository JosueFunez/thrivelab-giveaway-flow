export type PainArea =
  | 'Knee'
  | 'Shoulder'
  | 'Back'
  | 'Other'

export type InterestLevel =
  | "Yes, I'd like to explore treatment options"
  | "Possibly, depending on financing"
  | "I'm only interested if I win the giveaway"

export interface GiveawayFormData {
  firstName: string
  lastName: string
  instagramHandle: string
  email: string
  phone: string

  painArea: PainArea | ''
  painAreaOther: string

  whyNotYet: string[]

  interestLevel: InterestLevel | ''
}