'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GiveawayFormData } from '@/types/giveaway'
import { initialFormState } from '@/lib/storage/initial-form-state'

interface GiveawayStore {
    currentStep: number
    formData: GiveawayFormData

    hasHydrated: boolean
    setHasHydrated: (state: boolean) => void

    setCurrentStep: (step: number) => void

    updateFormData: (
        data: Partial<GiveawayFormData>
    ) => void

    nextStep: () => void
    previousStep: () => void

    resetForm: () => void
}

export const useGiveawayStore =
    create<GiveawayStore>()(
        persist(
            (set) => ({
                hasHydrated: false,

                setHasHydrated: (state) =>
                    set({ hasHydrated: state }),
                currentStep: 1,

                formData: initialFormState,

                setCurrentStep: (step) =>
                    set({ currentStep: step }),

                updateFormData: (data) =>
                    set((state) => ({
                        formData: {
                            ...state.formData,
                            ...data,
                        },
                    })),

                nextStep: () =>
                    set((state) => ({
                        currentStep: state.currentStep + 1,
                    })),

                previousStep: () =>
                    set((state) => ({
                        currentStep: state.currentStep - 1,
                    })),

                resetForm: () =>
                    set({
                        currentStep: 1,
                        formData: initialFormState,
                    }),
            }),
            {
                name: 'thrivelab-giveaway',

                onRehydrateStorage: () => (state) => {
                    state?.setHasHydrated(true)
                },
            }
        )
    )