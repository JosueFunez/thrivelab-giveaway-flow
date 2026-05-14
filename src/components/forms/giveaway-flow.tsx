'use client'

import { useGiveawayStore } from '@/store/giveaway.store'

import { Step1 } from './step-1'
import { Step2 } from './step-2'
import { Step3 } from './step-3'
import { Step4 } from './step-4'
import { SuccessStep } from './success-step'

export function GiveawayFlow() {
    const currentStep = useGiveawayStore(
        (state) => state.currentStep
    )

    const hasHydrated = useGiveawayStore(
        (state) => state.hasHydrated
    )

    if (!hasHydrated) {
        return null
    }

    return (
        <div className="animate-fade-in">
            <>
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
                {currentStep === 4 && <Step4 />}
                {currentStep === 5 && <SuccessStep />}
            </>
        </div>

    )
}