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
                w-full rounded-2xl border
                border-[#d8d2c7]
                bg-[#f6f5f1]
                p-5 text-left
                transition-all

                ${selected
                    ? 'border-[#3f4d2e]'
                    : 'hover:border-[#3f4d2e]'
                }
            `}
        >
            <div className="flex items-start justify-between">
                <span className="font-semibold text-l  text-[#3f4d2e]">
                    {label}
                </span>

                <div
                    className={`
                            h-5 w-5 rounded-md border
                            ${selected
                            ? 'border-[#3f4d2e] bg-[#3f4d2e]'
                            : 'border-[#d8d2c7]'
                        }
                     `}
                />
            </div>
        </button>
    )
}