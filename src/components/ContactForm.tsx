import { useState } from 'react'
import { AlertCircle, ArrowRight, Check, Loader2 } from 'lucide-react'
import { school } from '@/data/school'

const FORM_NAME = 'contact'
const SKELETON = '/__forms.html'

type Fields = {
  name: string
  email: string
  phone: string
  topic: string
  message: string
}

const empty: Fields = { name: '', email: '', phone: '', topic: 'General enquiry', message: '' }

const topics = [
  'General enquiry',
  'Admissions & places',
  'Fees & payments',
  'Teaching or volunteering',
  'Absence or attendance',
  'Feedback or concern',
]

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'failed'>('idle')

  const set = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found: Partial<Record<keyof Fields, string>> = {}
    if (!fields.name.trim()) found.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) found.email = 'Please give a valid email address.'
    if (fields.message.trim().length < 12) found.message = 'A sentence or two helps us answer properly.'
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch(SKELETON, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': FORM_NAME,
          subject: `Website enquiry — ${fields.topic}`,
          ...fields,
        }).toString(),
      })
      if (!response.ok) throw new Error(`Unexpected status ${response.status}`)
      setStatus('done')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'done') {
    return (
      <div className="plate p-9 text-center">
        <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-full bg-gold-pale p-3.5 text-gold-deep">
          <Check size={24} strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-2xl">Message sent</h3>
        <p className="mt-3 text-[0.97rem] text-ink-soft">
          We read messages after each teaching Sunday and reply within three days. For anything urgent, ring{' '}
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
          className="btn btn-outline mt-7"
        >
          Send another message
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
      className="plate p-7 md:p-9"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Do not fill this in <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset disabled={busy} className="contents">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="field-label">Your name</span>
            <input
              className="field"
              name="name"
              autoComplete="name"
              value={fields.name}
              aria-invalid={errors.name ? 'true' : undefined}
              onChange={(e) => set('name', e.target.value)}
            />
            {errors.name ? (
              <span className="field-error flex items-center gap-1.5">
                <AlertCircle size={13} /> {errors.name}
              </span>
            ) : null}
          </label>

          <label className="block">
            <span className="field-label">Email address</span>
            <input
              className="field"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              aria-invalid={errors.email ? 'true' : undefined}
              onChange={(e) => set('email', e.target.value)}
            />
            {errors.email ? (
              <span className="field-error flex items-center gap-1.5">
                <AlertCircle size={13} /> {errors.email}
              </span>
            ) : null}
          </label>

          <label className="block">
            <span className="field-label">Phone (optional)</span>
            <input
              className="field"
              name="phone"
              type="tel"
              inputMode="tel"
              value={fields.phone}
              onChange={(e) => set('phone', e.target.value)}
            />
          </label>

          <label className="block">
            <span className="field-label">What is it about?</span>
            <select className="field" name="topic" value={fields.topic} onChange={(e) => set('topic', e.target.value)}>
              {topics.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-5 block">
          <span className="field-label">Message</span>
          <textarea
            className="field min-h-36 resize-y"
            name="message"
            placeholder="Tell us how we can help. If it is about a pupil, please include their name and level."
            value={fields.message}
            aria-invalid={errors.message ? 'true' : undefined}
            onChange={(e) => set('message', e.target.value)}
          />
          {errors.message ? (
            <span className="field-error flex items-center gap-1.5">
              <AlertCircle size={13} /> {errors.message}
            </span>
          ) : null}
        </label>

        {status === 'failed' ? (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 border border-[#c98a72] bg-[#fdf1ec] p-4 text-sm text-[#8f3521]"
          >
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            <span>
              That did not send. Please try again, or email{' '}
              <a href={`mailto:${school.email}`} className="font-semibold underline">
                {school.email}
              </a>
              .
            </span>
          </div>
        ) : null}

        <button type="submit" className="btn btn-gold mt-7" disabled={busy}>
          {busy ? (
            <>
              <Loader2 size={15} className="animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <ArrowRight size={15} />
            </>
          )}
        </button>
      </fieldset>
    </form>
  )
}
