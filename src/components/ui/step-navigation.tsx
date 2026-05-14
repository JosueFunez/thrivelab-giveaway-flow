import { Button } from './button'

interface StepNavigationProps {
  onBack?: () => void
  isNextDisabled?: boolean
}

export function StepNavigation({
  onBack,
  isNextDisabled,
}: StepNavigationProps) {
  return (
    <div className="flex gap-3 pt-4">
      {onBack && (
        <Button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-black"
        >
          Back
        </Button>
      )}

      <Button
        type="submit"
        disabled={isNextDisabled}
      >
        Continue
      </Button>
    </div>
  )
}