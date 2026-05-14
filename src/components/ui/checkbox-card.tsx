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
      className={`
        w-full rounded-xl border p-4 text-left
        transition-all

        ${
          checked
            ? 'border-black bg-black text-white'
            : 'border-gray-300 bg-white hover:border-black'
        }
      `}
    >
      {label}
    </button>
  )
}