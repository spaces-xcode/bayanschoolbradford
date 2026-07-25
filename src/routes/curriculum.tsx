import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ClipboardList, GraduationCap, NotebookPen } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui'
import { levels, pillars, school, sundayShape } from '@/data/school'

export const Route = createFileRoute('/curriculum')({
  head: () => ({
    meta: [
      { title: `Curriculum & classes — ${school.nameFull}` },
      {
        name: 'description',
        content:
          'Seven levels from Foundation to GCSE Arabic: Arabic language, Qur’an and tajwīd, Islamic studies, plus a pathway for non-native speakers.',
      },
    ],
  }),
  component: Curriculum,
})

const assessment = [
  {
    icon: ClipboardList,
    title: 'Placement on entry',
    body: 'A ten-minute reading and speaking assessment on the first Sunday decides the level. Age is a guide, not the rule — a nine-year-old beginner starts where the beginners are.',
  },
  {
    icon: NotebookPen,
    title: 'Weekly home diary',
    body: 'Each pupil carries a diary with the week’s Qur’an target, homework and the teacher’s note. Twenty minutes of practice on three evenings is worth more than an hour the night before.',
  },
  {
    icon: GraduationCap,
    title: 'Reports twice a year',
    body: 'A written report in February and July covers reading, writing, speaking, memorisation and effort, followed by a parents’ evening slot with the level teacher.',
  },
]

function Curriculum() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum & classes"
        title="Seven levels, one clear route."
        arabic="المنهج والمستويات"
        intro="Pupils progress through a written scheme of work that runs from letter sounds in Foundation to a full GCSE Arabic course in Level 6. Each level revisits the previous year's grammar with harder texts, so joining late never means being lost."
      />

      {/* The four strands, in detail */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="The four strands" title="What is taught, and how." arabic="المواد الدراسية" />

        <div className="mt-12 space-y-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className={`hairline grid gap-6 bg-white/60 p-7 md:grid-cols-[16rem_1fr] md:p-9 ${
                index % 2 === 1 ? 'md:ml-10' : 'md:mr-10'
              }`}
            >
              <div>
                <span className="font-display text-4xl text-sand-deep/70">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-2xl">{pillar.title}</h3>
                <p lang="ar" className="font-arabic mt-1 text-lg text-gold-deep">
                  {pillar.titleArabic}
                </p>
              </div>
              <div>
                <p className="text-[1.02rem] text-ink">{pillar.summary}</p>
                <div className="rule-gold my-5" />
                <p className="text-[0.95rem] text-ink-soft">{pillar.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Levels table */}
      <section className="relative border-y border-sand bg-parchment">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Level by level" title="From letter sounds to exam papers." arabic="من الحرف إلى الامتحان" />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {levels.map((level, index) => (
              <article
                key={level.code}
                className={`hairline bg-white/75 p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-gold-light ${
                  index === levels.length - 1 ? 'md:col-span-2 md:bg-white' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{level.code}</h3>
                  <span className="text-[0.68rem] font-bold tracking-[0.18em] text-gold-deep uppercase">
                    {level.ages}
                  </span>
                </div>
                <p className="mt-1 text-sm font-bold tracking-[0.1em] text-muted uppercase">{level.name}</p>
                <p className="mt-4 text-[0.97rem] text-ink-soft">{level.focus}</p>
                {index === levels.length - 1 ? (
                  <p className="mt-4 border-t border-sand pt-4 text-sm text-ink-soft">
                    Level 6 pupils are entered for GCSE Arabic as private candidates at a local exam centre. Mock
                    papers run each half term, and speaking practice is one-to-one with a native speaker.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & reporting */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="Assessment & reporting" title="How progress is tracked." arabic="التقييم والمتابعة" />
            <div className="mt-9 space-y-4">
              {assessment.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="hairline flex gap-5 bg-white/60 p-6">
                    <Icon size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-gold" />
                    <div>
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="mt-2 text-[0.97rem] text-ink-soft">{item.body}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="plate p-8">
              <p className="eyebrow">The teaching day</p>
              <p className="mt-3 font-display text-2xl text-espresso">
                {school.sessionDay} · {school.sessionTime}
              </p>
              <div className="rule-gold my-6" />
              <ol className="space-y-4">
                {sundayShape.map((slot) => (
                  <li key={slot.time} className="grid grid-cols-[3.5rem_1fr] gap-4">
                    <span className="font-display text-sm text-gold-deep">{slot.time}</span>
                    <span className="text-[0.95rem] text-ink-soft">
                      <strong className="font-normal text-espresso">{slot.title}</strong> — {slot.detail}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="hairline mt-6 bg-white/60 p-8">
              <p className="eyebrow">Books & materials</p>
              <p className="mt-3 text-[0.97rem] text-ink-soft">
                Textbooks and workbooks are issued in the first two Sundays and stay with the pupil for the year. A
                one-off charge of £15 covers the set. Muṣḥafs are available to borrow on site, and worksheets are
                printed by the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="plate-dark relative overflow-hidden">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl text-parchment">Not sure which level fits your child?</h2>
            <p className="mt-3 max-w-xl text-sm text-sand-deep">
              Register and we will place them by assessment on the first Sunday — no prior Arabic is assumed at any
              point in the process.
            </p>
          </div>
          <Link to="/admissions" hash="register" className="btn btn-gold shrink-0">
            Register a child <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
