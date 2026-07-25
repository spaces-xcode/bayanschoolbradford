import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Check,
  Clock,
  Compass,
  MessagesSquare,
  Phone,
} from 'lucide-react'
import { Divider, Lozenge, SectionHeading } from '@/components/ui'
import { faqs, fees, glance, levels, pillars, school, sundayShape, termDates } from '@/data/school'

export const Route = createFileRoute('/')({
  component: Home,
})

const pillarIcons = {
  language: BookOpen,
  quran: BookMarked,
  'islamic-studies': Compass,
  'non-native': MessagesSquare,
} as const

function Home() {
  return (
    <>
      <Hero />
      <GlanceStrip />
      <Welcome />
      <Pillars />
      <Levels />
      <SundayShape />
      <FeesAndTerms />
      <FaqPreview />
    </>
  )
}

/* ----------------------------------------------------------------- hero --- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[-18rem] right-[-14rem] h-[42rem] w-[42rem] rounded-full bg-gold-pale/40 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="rise d1 flex items-center gap-3">
              <Lozenge className="h-2.5 w-2.5 text-gold" />
              <p className="eyebrow">Supplementary school · {school.city}</p>
            </div>

            <h1 className="rise d2 mt-6 text-[2.6rem] leading-[1.04] md:text-[4.1rem]">
              Arabic taught properly —<br />
              <span className="gilt">from the first letter</span>
              <br />
              to GCSE.
            </h1>

            <p lang="ar" className="font-arabic rise d3 mt-5 text-2xl text-gold-deep md:text-[1.75rem]">
              {school.taglineArabic}
            </p>

            <p className="lede rise d4 mt-6 max-w-xl">
              Bayan Arabiya School teaches children aged 4 to 16 to read, write and speak Arabic, to recite the
              Qur’an with tajwīd, and to understand the faith behind the language. One focused Sunday a week, taught
              in small level groups by teachers who know each child by name.
            </p>

            <div className="rise d5 mt-9 flex flex-wrap items-center gap-3">
              <Link to="/admissions" hash="register" className="btn btn-gold">
                Register a child <ArrowRight size={15} />
              </Link>
              <a href={school.phoneHref} className="btn btn-outline">
                <Phone size={14} /> {school.phone}
              </a>
            </div>

            <p className="rise d6 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-gold" /> No fee until a place is confirmed
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-gold" /> Beginners welcome at every level
              </span>
            </p>
          </div>

          {/* Emblem plate: arch-framed, sheen on load, gently drifting session card. */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="arch sheen unveil relative border border-sand bg-gradient-to-b from-white via-ivory to-parchment px-10 pt-14 pb-12 shadow-[var(--shadow-plate)]">
              <div
                className="pattern-scallop pointer-events-none absolute inset-x-0 bottom-0 h-5 opacity-25"
                aria-hidden="true"
              />
              <img
                src="/images/bayan-logo.png"
                alt={`${school.nameFull} emblem`}
                width={652}
                height={652}
                className="mx-auto w-full max-w-[16rem] object-contain"
              />
              <Divider className="mt-2" />
              <p className="mt-5 text-center text-[0.68rem] font-bold tracking-[0.28em] text-gold-deep uppercase">
                {school.ages} · {school.sessionDay}
              </p>
            </div>

            <div className="drift plate absolute -bottom-8 -left-4 w-56 px-5 py-4 md:-left-10">
              <p className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.2em] text-gold-deep uppercase">
                <Clock size={13} /> Term time Sundays
              </p>
              <p className="mt-2 font-display text-2xl text-espresso">{school.sessionTime}</p>
              <p className="mt-1 text-xs text-muted">Doors open {school.doorsOpen} · assembly at 10:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- glance --- */

function GlanceStrip() {
  return (
    <section className="plate-dark relative overflow-hidden">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:divide-x md:divide-white/12">
        {glance.map((item) => (
          <div key={item.figure} className="px-2 md:px-6">
            <dt className="font-display text-2xl text-gold-light md:text-3xl">{item.figure}</dt>
            <dd className="mt-1.5 text-[0.82rem] leading-snug text-sand-deep">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* -------------------------------------------------------------- welcome --- */

function Welcome() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <div className="plate relative px-8 py-10">
            <Lozenge className="absolute top-5 right-5 h-3 w-3 text-gold-pale" />
            <p lang="ar" className="font-arabic text-[1.6rem] leading-[2.1] text-espresso">
              إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
            </p>
            <div className="rule-gold my-6" />
            <p className="text-sm text-ink-soft italic">
              “We have sent it down as an Arabic Qur’an, so that you may understand.”
            </p>
            <p className="mt-2 text-xs tracking-[0.16em] text-muted uppercase">Sūrah Yūsuf, 12:2</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Who we are" title="A weekend school with a weekday standard." arabic="من نحن">
            <p>
              Bayan Arabiya School was set up by Bradford families who wanted more than an hour of rote reading for
              their children. We run to a written scheme of work, assess pupils on entry, group them by ability
              rather than by age, and report to parents twice a year — the same expectations a good day school
              would set for itself.
            </p>
          </SectionHeading>

          <div className="mt-9 space-y-6">
            {[
              {
                title: 'Placed by assessment, taught in small groups',
                body: 'Every new pupil sits a short reading and speaking assessment so they start in the right level. Groups average nine pupils, which means each child reads aloud to a teacher every single Sunday.',
              },
              {
                title: 'A curriculum that goes somewhere',
                body: 'Seven levels lead from letter sounds to GCSE Arabic. Parents can see exactly what their child covers this term and what comes next year — nothing is improvised on the day.',
              },
              {
                title: 'Run by the families who use it',
                body: 'The school is not-for-profit. Fees pay teachers, room hire and books; a parents’ council advises the management committee each term, and the accounts are shared openly.',
              },
            ].map((item, index) => (
              <article key={item.title} className="hairline group bg-white/55 p-6 transition-colors hover:border-gold-light md:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl text-gold">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-2 text-[0.97rem] text-ink-soft">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link to="/about" className="link-quiet mt-9 inline-flex items-center gap-2 font-semibold">
            More about the school <ArrowRight size={15} className="text-gold" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- pillars --- */

function Pillars() {
  return (
    <section className="relative border-y border-sand bg-parchment">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading eyebrow="What pupils study" title="Four strands, taught every week." arabic="ما ندرّس" />

        {/* Deliberately uneven grid: the two language strands take more room. */}
        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.id]
            const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7']
            return (
              <article
                key={pillar.id}
                className={`hairline group relative overflow-hidden bg-white/70 p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-gold-light hover:shadow-[var(--shadow-lift)] md:p-9 ${spans[index]}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Icon size={26} strokeWidth={1.4} className="text-gold" />
                    <h3 className="mt-5 text-2xl">{pillar.title}</h3>
                    <p lang="ar" className="font-arabic mt-1 text-lg text-gold-deep">
                      {pillar.titleArabic}
                    </p>
                  </div>
                  <span className="font-display text-5xl text-sand-deep/60 transition-colors group-hover:text-gold-pale">
                    {String(index + 1)}
                  </span>
                </div>
                <p className="mt-5 text-[0.97rem] text-ink-soft">{pillar.summary}</p>
                <p className="mt-3 text-sm text-muted">{pillar.detail}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- levels --- */

function Levels() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Class levels" title="Seven levels, one clear route." arabic="المستويات الدراسية" />
        <Link to="/curriculum" className="btn btn-outline shrink-0">
          Full curriculum <ArrowRight size={14} />
        </Link>
      </div>

      <ol className="mt-12">
        {levels.map((level, index) => (
          <li
            key={level.code}
            className="group grid gap-2 border-t border-sand py-6 transition-colors last:border-b hover:bg-white/60 md:grid-cols-[10rem_12rem_1fr] md:items-baseline md:gap-6 md:px-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-xs text-sand-deep">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-display text-xl text-espresso transition-colors group-hover:text-gold-deep">
                {level.code}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.1em] text-gold-deep uppercase">{level.name}</p>
              <p className="text-xs text-muted">{level.ages}</p>
            </div>
            <p className="text-[0.97rem] text-ink-soft">{level.focus}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* --------------------------------------------------------- sunday shape --- */

function SundayShape() {
  return (
    <section className="plate-dark relative overflow-hidden">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-light">The school day</p>
          <h2 className="mt-3 text-3xl text-parchment md:text-[2.6rem]">A Sunday at Bayan, hour by hour.</h2>
          <p lang="ar" className="font-arabic mt-2 text-xl text-gold-pale">
            يوم الأحد في مدرسة بيان
          </p>
        </div>

        <ol className="mt-14 grid gap-x-14 gap-y-9 md:grid-cols-2">
          {sundayShape.map((slot, index) => (
            <li
              key={slot.time}
              className={`relative border-l border-white/15 pl-7 ${index % 2 === 1 ? 'md:mt-6' : ''}`}
            >
              <span
                className="absolute top-2 left-[-4.5px] h-2 w-2 rotate-45 bg-gold"
                aria-hidden="true"
              />
              <p className="font-display text-lg text-gold-light">{slot.time}</p>
              <p className="mt-1 font-display text-xl text-parchment">{slot.title}</p>
              <p className="mt-1.5 text-sm text-sand-deep">{slot.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- fees --- */

function FeesAndTerms() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Fees" title="What a place costs." arabic="الرسوم الدراسية">
            <p>{fees.note}</p>
          </SectionHeading>

          <dl className="mt-8">
            {fees.items.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-t border-sand py-4 last:border-b"
              >
                <dt className="text-[0.97rem] text-ink">{item.label}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-espresso">{item.amount}</span>
                  <span className="text-xs tracking-[0.12em] text-muted uppercase">{item.period}</span>
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 space-y-2.5">
            {fees.extras.map((extra) => (
              <li key={extra} className="flex gap-3 text-sm text-ink-soft">
                <Check size={15} className="mt-1 shrink-0 text-gold" />
                {extra}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-14">
          <div className="hairline bg-white/60 p-8">
            <p className="eyebrow">Term dates 2026/27</p>
            <ul className="mt-6 space-y-5">
              {termDates.map((term) => (
                <li key={term.term} className="border-b border-sand pb-5 last:border-0 last:pb-0">
                  <p className="font-display text-xl text-espresso">{term.term}</p>
                  <p className="mt-1 text-[0.95rem] text-ink-soft">{term.range}</p>
                  <p className="mt-0.5 text-xs text-muted">{term.breaks}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="plate-dark mt-6 p-8">
            <h3 className="text-2xl text-parchment">Places for the autumn term are open now.</h3>
            <p className="mt-3 text-sm text-sand-deep">
              Registration takes about five minutes and costs nothing. We reply within three days with a placement
              time for the first Sunday.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/admissions" hash="register" className="btn btn-gold">
                Register a child
              </Link>
              <a href={`mailto:${school.email}`} className="btn btn-outline border-white/25 text-parchment">
                Email the office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ faq --- */

function FaqPreview() {
  return (
    <section className="relative border-t border-sand bg-parchment">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Common questions"
          title="Asked by most parents before they visit."
          arabic="أسئلة متكررة"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sand">
          {faqs.slice(0, 3).map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl text-espresso marker:content-none">
                {faq.q}
                <span className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[0.97rem] text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn btn-outline">
            All questions & contact <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
