import { createFileRoute } from '@tanstack/react-router'
import { Check, Mail, Phone } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui'
import { RegistrationForm } from '@/components/RegistrationForm'
import { fees, school, termDates } from '@/data/school'

export const Route = createFileRoute('/admissions')({
  head: () => ({
    meta: [
      { title: `Admissions & registration — ${school.nameFull}` },
      {
        name: 'description',
        content: `Register a child at Bayan Arabiya School Bradford. Free registration, placement by assessment, fees from £26 per month. Call ${school.phone}.`,
      },
    ],
  }),
  component: Admissions,
})

const steps = [
  {
    title: 'Send the registration form',
    body: 'Five minutes, no payment, no obligation. Everything we need to find your child the right level.',
  },
  {
    title: 'We reply within three days',
    body: 'By phone or email, with a placement time on the first Sunday and confirmation of a place in the level.',
  },
  {
    title: 'Placement assessment',
    body: 'A ten-minute reading and speaking check with the head teacher. Complete beginners simply start at the beginning.',
  },
  {
    title: 'First Sunday',
    body: 'Books issued, home diary set up, teacher introduced. Fees begin from the term the child joins.',
  },
]

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Register a child."
        arabic="التسجيل والقبول"
        intro="Places are offered whenever a level has room, including partway through the year. Registration is free — you pay nothing until a place is confirmed and your child has been placed in a level."
      />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-18 md:py-24">
        <SectionHeading eyebrow="How it works" title="Four steps, start to first lesson." arabic="خطوات التسجيل" />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={`hairline bg-white/65 p-6 ${index % 2 === 1 ? 'lg:translate-y-6' : ''}`}
            >
              <span className="font-display text-3xl text-gold">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Form + sidebar */}
      <section id="register" className="relative scroll-mt-32 border-y border-sand bg-parchment">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <SectionHeading
                eyebrow="Registration form"
                title="Tell us about your child."
                arabic="استمارة التسجيل"
              >
                <p>
                  One form per child. If you are registering siblings, send the form again for each — the sibling
                  discount is applied automatically once we match the family.
                </p>
              </SectionHeading>
              <div className="mt-8">
                <RegistrationForm />
              </div>
            </div>

            <aside className="space-y-6 lg:pt-8">
              <div className="plate-dark p-7">
                <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-light uppercase">
                  Rather speak to someone?
                </p>
                <a
                  href={school.phoneHref}
                  className="mt-4 flex items-center gap-3 font-display text-2xl text-parchment transition-colors hover:text-gold-light"
                >
                  <Phone size={18} className="text-gold" /> {school.phone}
                </a>
                <a
                  href={`mailto:${school.email}`}
                  className="mt-3 flex items-center gap-3 text-sm break-all text-sand-deep transition-colors hover:text-gold-light"
                >
                  <Mail size={16} className="shrink-0 text-gold" /> {school.email}
                </a>
                <p className="mt-4 text-xs text-sand-deep">
                  Calls are answered on {school.sessionDay.toLowerCase()} during school hours, and on weekday evenings
                  after 6pm.
                </p>
              </div>

              <div className="hairline bg-white/70 p-7">
                <p className="eyebrow">Fees at a glance</p>
                <dl className="mt-4">
                  {fees.items.map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between gap-3 border-b border-sand py-2.5 last:border-0">
                      <dt className="text-sm text-ink-soft">{item.label}</dt>
                      <dd className="font-display text-lg text-espresso">
                        {item.amount}
                        <span className="ml-1 text-[0.62rem] tracking-[0.1em] text-muted uppercase">
                          {item.period}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-4 space-y-2">
                  {fees.extras.map((extra) => (
                    <li key={extra} className="flex gap-2.5 text-xs text-muted">
                      <Check size={13} className="mt-0.5 shrink-0 text-gold" />
                      {extra}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline bg-white/70 p-7">
                <p className="eyebrow">Term dates 2026/27</p>
                <ul className="mt-4 space-y-3.5">
                  {termDates.map((term) => (
                    <li key={term.term}>
                      <p className="font-display text-lg text-espresso">{term.term}</p>
                      <p className="text-sm text-ink-soft">{term.range}</p>
                      <p className="text-xs text-muted">{term.breaks}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline bg-white/70 p-7">
                <p className="eyebrow">What to bring</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {[
                    'Pencil case and the issued workbooks',
                    'A water bottle and a nut-free snack',
                    'The home diary, signed each week',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check size={14} className="mt-1 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Policy notes */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Good to know" title="A few practical points." arabic="ملاحظات مهمة" align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'Attendance',
              body: 'One Sunday a week is short, so attendance matters. Please text absences before 10:00. Pupils missing more than a third of a term may be asked to repeat topics.',
            },
            {
              title: 'Waiting lists',
              body: 'When a level is full, registrations join a waiting list in date order and we contact you as soon as a place opens — usually at the start of a term.',
            },
            {
              title: 'Data & privacy',
              body: 'Registration details are used for admissions, attendance and safeguarding only. They are not shared with third parties and are kept while your child is enrolled.',
            },
            {
              title: 'Withdrawing a place',
              body: 'Please give a term’s notice in writing so the place can be offered to a family on the waiting list. Fees already paid for the term are not refunded.',
            },
          ].map((note) => (
            <article key={note.title} className="hairline bg-white/60 p-6">
              <h3 className="text-lg">{note.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
