import { useState } from 'react'
import { AlertCircle, ArrowRight, Check, Loader2 } from 'lucide-react'
import { levels, school } from '@/data/school'

const FORM_NAME = 'registration'
const SKELETON = '/__forms.html'

type Fields = {
  parentName: string
  relationship: string
  phone: string
  email: string
  childName: string
  childDob: string
  childSchool: string
  arabicAtHome: string
  levelInterest: string
  experience: string
  medical: string
  consent: string
}

const empty: Fields = {
  parentName: '',
  relationship: 'Mother',
  phone: '',
  email: '',
  childName: '',
  childDob: '',
  childSchool: '',
  arabicAtHome: 'Sometimes',
  levelInterest: 'Not sure — please assess',
  experience: '',
  medical: '',
  consent: '',
}

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (!fields.parentName.trim()) errors.parentName = 'Please give the parent or guardian’s name.'
  if (!/^[\d\s+()-]{9,}$/.test(fields.phone.trim())) errors.phone = 'Please give a contact number we can reach you on.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = 'Please give a valid email address.'
  if (!fields.childName.trim()) errors.childName = 'Please give the child’s full name.'
  if (!fields.childDob) errors.childDob = 'We need a date of birth to place the child in a level.'
  if (fields.consent !== 'yes') errors.consent = 'Please confirm you are happy for us to contact you.'
  return errors
}

export function RegistrationForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'failed'>('idle')

  const set = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    setStatus('submitting')
    try {
      const body = new URLSearchParams({
        'form-name': FORM_NAME,
        subject: `Registration enquiry — ${fields.childName}`,
        ...fields,
      })
      // Must POST to the static skeleton, not "/", or the SSR handler swallows it.
      const response = await fetch(SKELETON, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Unexpected status ${response.status}`)
      setStatus('done')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'done') {
    return (
      <div className="plate p-9 text-center md:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-pale text-gold-deep">
          <Check size={26} strokeWidth={2} />
        </span>
        <h3 className="mt-6 text-2xl">Registration received</h3>
        <p lang="ar" className="font-arabic mt-1 text-lg text-gold-deep">
          تم استلام طلب التسجيل
        </p>
        <p className="mt-4 text-[0.97rem] text-ink-soft">
          Thank you — we have {fields.childName}’s details. Expect a reply within three days with a placement time
          for the first Sunday. If you need us sooner, ring{' '}
          <a href={school.phoneHref} className="link-quiet font-semibold">
            {school.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty)
            setStatus('idle')
          }}
          className="btn btn-outline mt-8"
        >
          Register another child
        </button>
      </div>
    )
  }

  const busy = status === 'submitting'

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="plate p-7 md:p-10"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Do not fill this in <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={busy} className="contents">
        <p className="eyebrow">Step 1 — parent or guardian</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field
            label="Your full name"
            error={errors.parentName}
            input={
              <input
                className="field"
                name="parentName"
                autoComplete="name"
                value={fields.parentName}
                aria-invalid={errors.parentName ? 'true' : undefined}
                onChange={(e) => set('parentName', e.target.value)}
              />
            }
          />
          <Field
            label="Relationship to child"
            input={
              <select
                className="field"
                name="relationship"
                value={fields.relationship}
                onChange={(e) => set('relationship', e.target.value)}
              >
                {['Mother', 'Father', 'Grandparent', 'Guardian', 'Other'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            }
          />
          <Field
            label="Mobile number"
            error={errors.phone}
            input={
              <input
                className="field"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="07…"
                value={fields.phone}
                aria-invalid={errors.phone ? 'true' : undefined}
                onChange={(e) => set('phone', e.target.value)}
              />
            }
          />
          <Field
            label="Email address"
            error={errors.email}
            input={
              <input
                className="field"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                aria-invalid={errors.email ? 'true' : undefined}
                onChange={(e) => set('email', e.target.value)}
              />
            }
          />
        </div>

        <div className="rule-gold my-9" />

        <p className="eyebrow">Step 2 — about the child</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field
            label="Child’s full name"
            error={errors.childName}
            input={
              <input
                className="field"
                name="childName"
                value={fields.childName}
                aria-invalid={errors.childName ? 'true' : undefined}
                onChange={(e) => set('childName', e.target.value)}
              />
            }
          />
          <Field
            label="Date of birth"
            error={errors.childDob}
            input={
              <input
                className="field"
                name="childDob"
                type="date"
                value={fields.childDob}
                aria-invalid={errors.childDob ? 'true' : undefined}
                onChange={(e) => set('childDob', e.target.value)}
              />
            }
          />
          <Field
            label="Weekday school"
            input={
              <input
                className="field"
                name="childSchool"
                placeholder="Optional"
                value={fields.childSchool}
                onChange={(e) => set('childSchool', e.target.value)}
              />
            }
          />
          <Field
            label="Arabic spoken at home"
            input={
              <select
                className="field"
                name="arabicAtHome"
                value={fields.arabicAtHome}
                onChange={(e) => set('arabicAtHome', e.target.value)}
              >
                {['Yes, daily', 'Sometimes', 'No', 'Understands but does not speak'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            }
          />
          <Field
            label="Level you have in mind"
            input={
              <select
                className="field"
                name="levelInterest"
                value={fields.levelInterest}
                onChange={(e) => set('levelInterest', e.target.value)}
              >
                <option>Not sure — please assess</option>
                {levels.map((level) => (
                  <option key={level.code}>{`${level.code} — ${level.name} (${level.ages})`}</option>
                ))}
              </select>
            }
          />
          <Field
            label="Previous Arabic or Qur’an study"
            input={
              <input
                className="field"
                name="experience"
                placeholder="e.g. two years of madrasah reading"
                value={fields.experience}
                onChange={(e) => set('experience', e.target.value)}
              />
            }
          />
        </div>

        <div className="mt-5">
          <Field
            label="Medical, dietary or learning needs we should know about"
            input={
              <textarea
                className="field min-h-28 resize-y"
                name="medical"
                placeholder="Allergies, additional needs, anything that helps us support your child. Leave blank if none."
                value={fields.medical}
                onChange={(e) => set('medical', e.target.value)}
              />
            }
          />
        </div>

        <label className="mt-8 flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            checked={fields.consent === 'yes'}
            aria-invalid={errors.consent ? 'true' : undefined}
            onChange={(e) => set('consent', e.target.checked ? 'yes' : '')}
            className="mt-1 h-4 w-4 shrink-0 accent-[#c08b2b]"
          />
          <span>
            I am happy for the school to contact me about this registration by phone, text or email. Details are used
            only for admissions and are never shared.
          </span>
        </label>
        {errors.consent ? (
          <p className="field-error flex items-center gap-1.5">
            <AlertCircle size={13} /> {errors.consent}
          </p>
        ) : null}

        {status === 'failed' ? (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 border border-[#c98a72] bg-[#fdf1ec] p-4 text-sm text-[#8f3521]"
          >
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            <span>
              The form could not be sent just now. Please try again, or ring the school on{' '}
              <a href={school.phoneHref} className="font-semibold underline">
                {school.phone}
              </a>{' '}
              and we will take the details over the phone.
            </span>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="submit" className="btn btn-gold" disabled={busy}>
            {busy ? (
              <>
                <Loader2 size={15} className="animate-spin" /> Sending
              </>
            ) : (
              <>
                Send registration <ArrowRight size={15} />
              </>
            )}
          </button>
          <p className="text-xs text-muted">Registration is free. No payment is taken on this form.</p>
        </div>
      </fieldset>
    </form>
  )
}

function Field({
  label,
  input,
  error,
}: {
  label: string
  input: React.ReactNode
  error?: string
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {input}
      {error ? (
        <span className="field-error flex items-center gap-1.5">
          <AlertCircle size={13} /> {error}
        </span>
      ) : null}
    </label>
  )
}
