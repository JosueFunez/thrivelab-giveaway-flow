import { Button } from './button'

interface StepNavigationProps {
    onBack?: () => void
    isNextDisabled?: boolean
    isLoading?: boolean
}

export function StepNavigation({
    onBack,
    isNextDisabled,
    isLoading,
}: StepNavigationProps) {
    return (
        <div className="flex gap-3 pt-4">
            {onBack && (
              <Button
                type="button"
                onClick={onBack}
                className="
                    border border-[#d8d2c7]
                    bg-[#ebe9e4]
                    !text-[#3f4d2e]
                    hover:bg-[#dfdbd3]
                "
                >
                Back
                </Button>
            )}

            <Button
                type="submit"
                disabled={isNextDisabled}
            >
                {isLoading
                    ? 'Submitting...'
                    : 'Continue'}
            </Button>
        </div>
    )
}