interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) {
  const progress =
    (currentStep / totalSteps) * 100

  return (
    <div className="mb-6">
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-black transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}