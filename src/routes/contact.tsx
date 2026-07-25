import { Link, createFileRoute } from '@tanstack/react-router'
import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui'
import { ContactForm } from '@/components/ContactForm'
import { faqs, school } from '@/data/school'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: `Contact — ${school.nameFull}` },
      {
        name: 'description',
        content: `Contact Bayan Arabiya School Bradford: ${school.phone}, ${school.email}. Sundays ${school.sessionTime} in term time.`,
      },
    ],
  }),
  component: Contact,
})

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the school."
        arabic="اتصل بنا"
        intro="Questions about places, levels, fees or teaching with us — ring, email, or send the form below. Messages are read after each teaching Sunday and answered within three days."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div>
            <SectionHeading eyebrow="Details" title="How to reach us." arabic="بيانات التواصل" />

            <ul className="mt-9 space-y-6">
              <li>
                <p className="field-label">Phone & text</p>
                <a
                  href={school.phoneHref}
                  className="flex items-center gap-3 font-display text-3xl text-espresso transition-colors hover:text-gold-deep"
                >
                  <Phone size={20} className="text-gold" /> {school.phone}
                </a>
                <p className="mt-1 text-sm text-muted">
                  Answered on {school.sessionDay.toLowerCase()} during school hours and weekday evenings after 6pm.
                </p>
              </li>
              <li>
                <p className="field-label">Email</p>
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-center gap-3 text-lg break-all text-espresso transition-colors hover:text-gold-deep"
                >
                  <Mail size={18} className="shrink-0 text-gold" /> {school.email}
                </a>
              </li>
              <li>
                <p className="field-label">Website</p>
                <a
                  href={school.websiteHref}
                  className="flex items-center gap-3 text-lg text-espresso transition-colors hover:text-gold-deep"
                >
                  <Globe size={18} className="shrink-0 text-gold" /> {school.website}
                </a>
              </li>
              <li>
                <p className="field-label">Where we teach</p>
                <p className="flex items-start gap-3 text-lg text-espresso">
                  <MapPin size={18} className="mt-1.5 shrink-0 text-gold" /> {school.city}
                </p>
                <p className="mt-1 text-sm text-muted">
                  The teaching venue and door arrangements are confirmed by text before your child’s first Sunday.
                </p>
              </li>
              <li>
                <p className="field-label">Teaching hours</p>
                <p className="flex items-start gap-3 text-lg text-espresso">
                  <Clock size={18} className="mt-1.5 shrink-0 text-gold" /> {school.sessionDay}, {school.sessionTime}
                </p>
                <p className="mt-1 text-sm text-muted">Doors open {school.doorsOpen}. Term time only.</p>
              </li>
            </ul>

            <div className="plate-dark mt-10 p-7">
              <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-light uppercase">Teach with us</p>
              <p className="mt-3 text-sm text-sand-deep">
                We are always glad to hear from qualified Arabic and Qur’an teachers, and from parents who can help
                with reception, break supervision or events. All adults working with pupils are DBS-checked. Choose
                “Teaching or volunteering” on the form.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading eyebrow="Send a message" title="We will come back to you." arabic="أرسل رسالة" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full FAQ */}
      <section className="relative border-t border-sand bg-parchment">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Questions & answers"
            title="Everything parents usually ask."
            arabic="الأسئلة الشائعة"
            align="center"
          />
          <div className="mt-12 divide-y divide-sand">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-xl text-espresso marker:content-none">
                  {faq.q}
                  <span
                    className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[0.97rem] text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Still unanswered? Ring{' '}
            <a href={school.phoneHref} className="link-quiet font-semibold">
              {school.phone}
            </a>{' '}
            or{' '}
            <Link to="/admissions" hash="register" className="link-quiet font-semibold">
              register a child
            </Link>{' '}
            and ask on the form.
          </p>
        </div>
      </section>
    </>
  )
}
