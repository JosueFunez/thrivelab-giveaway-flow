interface CheckboxCardProps {
  label: string
  checked: boolean
  onClick: () => void
}

export function CheckboxCard({
  label,
  checked,
  onClick,
}: CheckboxCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full rounded-2xl
        border border-[#d8d2c7]
        bg-[#f6f5f1]
        p-5 text-left
        transition-all
        hover:border-[#3f4d2e]
      "
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-l font-semibold text-[#3f4d2e]">
          {label}
        </span>

        <div
          className={`
            h-6 w-6 rounded-md border
            transition-all

            ${
              checked
                ? 'border-[#3f4d2e] bg-[#3f4d2e]'
                : 'border-[#d8d2c7]'
            }
          `}
        />
      </div>
    </button>
  )
}