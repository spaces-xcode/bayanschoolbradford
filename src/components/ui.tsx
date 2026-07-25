import type { ReactNode } from 'react'

/** Small gold lozenge motif borrowed from the emblem's diamond. */
export function Lozenge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true" fill="currentColor">
      <path d="M6 0l2.6 6L6 12 3.4 6z" />
    </svg>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="rule-gold w-16 md:w-28" />
      <Lozenge className="h-2.5 w-2.5 text-gold" />
      <span className="rule-gold w-16 md:w-28" />
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  arabic,
  align = 'left',
  children,
}: {
  eyebrow: string
  title: ReactNode
  arabic?: string
  align?: 'left' | 'center'
  children?: ReactNode
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-[2.6rem]">{title}</h2>
      {arabic ? (
        <p lang="ar" className="font-arabic mt-2 text-xl text-gold-deep">
          {arabic}
        </p>
      ) : null}
      {children ? <div className="lede mt-5">{children}</div> : null}
    </div>
  )
}

/** Shared banner for interior pages: arch-framed emblem plus title. */
export function PageHero({
  eyebrow,
  title,
  arabic,
  intro,
}: {
  eyebrow: string
  title: string
  arabic: string
  intro: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-sand bg-parchment">
      <div
        className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-pale/45 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
        <div>
          <p className="eyebrow rise d1">{eyebrow}</p>
          <h1 className="rise d2 mt-4 text-4xl md:text-6xl">{title}</h1>
          <p lang="ar" className="font-arabic rise d3 mt-3 text-2xl text-gold-deep">
            {arabic}
          </p>
          <p className="lede rise d4 mt-6 max-w-xl">{intro}</p>
        </div>
        <div className="arch-sm hairline unveil hidden bg-white/70 p-6 md:block" aria-hidden="true">
          <img src="/images/bayan-logo.png" alt="" width={652} height={652} className="h-32 w-32 object-contain" />
        </div>
      </div>
    </section>
  )
}
