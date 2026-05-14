interface RadioCardProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function RadioCard({
  label,
  selected,
  onClick,
}: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full rounded-xl border p-4 text-left
        transition-all

        ${
          selected
            ? 'border-black bg-black text-white'
            : 'border-gray-300 bg-white hover:border-black'
        }
      `}
    >
      {label}
    </button>
  )
}