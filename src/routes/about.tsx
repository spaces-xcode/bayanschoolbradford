import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, HeartHandshake, ScrollText, ShieldCheck, Users } from 'lucide-react'
import { Divider, PageHero, SectionHeading } from '@/components/ui'
import { school } from '@/data/school'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: `About — ${school.nameFull}` },
      {
        name: 'description',
        content:
          'How Bayan Arabiya School Bradford is run: its ethos, level structure, governance, safeguarding and the people behind it.',
      },
    ],
  }),
  component: About,
})

const commitments = [
  {
    icon: ScrollText,
    title: 'A written curriculum',
    body: 'Every level has a scheme of work with termly objectives. Parents receive it at the start of the year, so there are no surprises about what is being taught or when.',
  },
  {
    icon: Users,
    title: 'Small teaching groups',
    body: 'Nine pupils on average, capped at fourteen. Large enough for pair work and discussion, small enough for every child to read aloud each week.',
  },
  {
    icon: ShieldCheck,
    title: 'Safeguarding first',
    body: 'All adults on site are DBS-checked. A designated safeguarding lead is on duty every Sunday, registers are taken each lesson, and pupils are released only to a named adult.',
  },
  {
    icon: HeartHandshake,
    title: 'Not-for-profit',
    body: 'Fees cover teaching, room hire and books — nothing else. Any surplus goes into resources, teacher training and hardship places.',
  },
]

const team = [
  {
    role: 'Head teacher',
    remit: 'Curriculum, teaching standards, placement assessments and parent meetings. Available after dismissal every Sunday.',
  },
  {
    role: 'Deputy head & safeguarding lead',
    remit: 'Attendance, pastoral care, safeguarding referrals and the pupil home diaries.',
  },
  {
    role: 'Qur’an coordinator',
    remit: 'Recitation circles, memorisation targets and tajwīd assessment across all levels.',
  },
  {
    role: 'Management committee',
    remit: 'Finance, room hire, staffing and compliance. Reports to parents each term with open accounts.',
  },
  {
    role: 'Parents’ council',
    remit: 'An advisory group of volunteer parents that feeds back on teaching, timings and events.',
  },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the school"
        title="Built by Bradford parents, for Bradford children."
        arabic="عن المدرسة"
        intro="Bayan Arabiya School began with a simple frustration: children were spending years in weekend classes and still could not write a sentence in Arabic. So we started a school that plans, assesses and reports — and keeps the warmth of a community project while doing it."
      />

      {/* Bilingual welcome — the Arabic column reads right-to-left as it should. */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Where the name comes from</h2>
            <div className="rule-gold my-6" />
            <p className="text-[1.02rem] text-ink-soft">
              <em>Bayān</em> means clear expression — language that says exactly what it means. That is the
              standard we hold ourselves to: children who can express themselves in Arabic, read the Qur’an
              accurately, and explain their faith in their own words.
            </p>
            <p className="mt-4 text-[1.02rem] text-ink-soft">
              We teach on {school.sessionDay.toLowerCase()} in term time, {school.sessionTime}, in {school.city}.
              Pupils come from across the district — Manningham, Girlington, Great Horton, Bradford Moor, Shipley and
              beyond — and from homes where Arabic is spoken daily as well as homes where it is not spoken at all.
              Both are equally welcome, and both have a pathway.
            </p>
          </div>

          <div dir="rtl" lang="ar" className="plate px-8 py-10 text-right">
            <p className="font-arabic text-3xl text-espresso">أهلاً وسهلاً بكم</p>
            <div className="rule-gold my-6" />
            <p className="font-arabic text-[1.15rem] leading-[2.2] text-ink-soft">
              المدرسة العربية بيان في برادفورد مدرسة تكميلية غير ربحية، تُعنى بتعليم اللغة العربية والقرآن الكريم
              والتربية الإسلامية للأطفال من سن الرابعة إلى السادسة عشرة. الدراسة يوم الأحد من الساعة العاشرة صباحاً
              حتى الثانية والنصف بعد الظهر، وفق منهج مكتوب ومستويات محددة.
            </p>
            <p className="font-arabic mt-4 text-[1.15rem] leading-[2.2] text-ink-soft">
              نرحب بأبناء الناطقين بالعربية وغير الناطقين بها على حدٍّ سواء، ويوضع كل طالب في المستوى المناسب له بعد
              اختبار تحديد المستوى.
            </p>
            <p className="font-arabic mt-6 text-lg text-gold-deep">
              للتسجيل والاستفسار: {school.phone}
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative border-y border-sand bg-parchment">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="How we work" title="Four commitments we keep." arabic="التزاماتنا" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {commitments.map((item, index) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className={`hairline bg-white/70 p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-gold-light md:p-8 ${
                    index % 2 === 1 ? 'md:translate-y-8' : ''
                  }`}
                >
                  <Icon size={24} strokeWidth={1.4} className="text-gold" />
                  <h3 className="mt-5 text-xl">{item.title}</h3>
                  <p className="mt-3 text-[0.97rem] text-ink-soft">{item.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who runs it */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Who runs the school"
          title="Roles, so you know who to ask."
          arabic="الهيئة الإدارية"
        >
          <p>
            Teaching staff are qualified Arabic and Qur’an teachers, several of them working in Bradford schools
            during the week. Every level has a lead teacher and, in the younger levels, a classroom assistant.
          </p>
        </SectionHeading>

        <dl className="mt-10 max-w-3xl">
          {team.map((member) => (
            <div key={member.role} className="grid gap-1 border-t border-sand py-5 last:border-b md:grid-cols-[15rem_1fr] md:gap-8">
              <dt className="font-display text-lg text-espresso">{member.role}</dt>
              <dd className="text-[0.97rem] text-ink-soft">{member.remit}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm text-muted">
          Interested in teaching or volunteering with us? Qualified teachers and helping hands are both needed — get
          in touch on{' '}
          <a href={school.phoneHref} className="link-quiet font-semibold">
            {school.phone}
          </a>{' '}
          or{' '}
          <a href={`mailto:${school.email}`} className="link-quiet font-semibold">
            {school.email}
          </a>
          .
        </p>
      </section>

      {/* Closing CTA */}
      <section className="plate-dark relative overflow-hidden">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <span className="arch-sm mx-auto flex h-28 w-28 items-center justify-center border border-gold/30 bg-ivory/95 p-3">
            <img
              src="/images/bayan-logo.png"
              alt=""
              width={652}
              height={652}
              className="h-full w-full object-contain"
            />
          </span>
          <Divider className="my-8" />
          <h2 className="text-3xl text-parchment md:text-4xl">Come and see a Sunday for yourself.</h2>
          <p className="mt-4 text-sand-deep">
            Parents are welcome to visit during a teaching Sunday, sit in on a lesson and meet the head teacher
            before deciding. Ring ahead so we know to expect you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/admissions" hash="register" className="btn btn-gold">
              Register a child <ArrowRight size={15} />
            </Link>
            <Link to="/curriculum" className="btn btn-outline border-white/25 text-parchment">
              See the curriculum
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
