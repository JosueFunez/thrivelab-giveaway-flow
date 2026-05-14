interface FormLayoutProps {
  children: React.ReactNode
}

export function FormLayout({
  children,
}: FormLayoutProps) {
  return (
    <div className="w-full max-w-[420px] px-4 py-10">
      <div className="mb-6 text-center">
        <p className="font-serif text-5xl text-[#3f4d2e]">
          thrivelab
        </p>
      </div>

      <div className="mb-6 text-center">
        <p className="text-sm font-semibold text-[#3f4d2e]">
          Exclusive Giveaway
        </p>

        <h1
          className="
            mt-4
            font-serif
            text-5xl
            leading-none
            tracking-tight
            text-[#3f4d2e]
          "
          style={{
            fontFamily:
              'var(--font-cormorant)',
          }}
        >
          Win a $10,000 in-home
          <br />
          stem cell treatment
        </h1>
      </div>

      {children}

      <p className="mt-10 text-center text-sm leading-6 text-[#b3afa7]">
        This is an in-home treatment.
        If you are not located in one
        of our service areas, travel
        will be required.
      </p>
    </div>
  )
}