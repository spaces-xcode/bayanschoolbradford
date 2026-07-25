import { Link } from '@tanstack/react-router'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { navigation, school } from '@/data/school'

export function SiteFooter() {
  return (
    <footer className="plate-dark relative overflow-hidden">
      <div
        className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              {/* The emblem's lettering is pale gold, so it gets an ivory plate on dark. */}
              <span className="arch-sm flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center border border-gold/30 bg-ivory/95 p-2.5">
                <img
                  src="/images/bayan-logo.png"
                  alt=""
                  width={652}
                  height={652}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="font-display text-2xl text-parchment">Bayan Arabiya School</p>
                <p className="text-[0.62rem] font-bold tracking-[0.3em] text-gold-light uppercase">Bradford</p>
              </div>
            </div>
            <p lang="ar" className="font-arabic mt-6 text-xl text-gold-pale">
              {school.nameArabic}
            </p>
            <p className="mt-3 max-w-sm text-sm text-sand-deep">{school.tagline}.</p>
          </div>

          <div>
            <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-light uppercase">Pages</p>
            <ul className="mt-5 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-parchment/85 transition-colors hover:text-gold-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-light uppercase">Contact</p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={school.phoneHref}
                  className="flex items-start gap-3 text-parchment transition-colors hover:text-gold-light"
                >
                  <Phone size={15} className="mt-1 shrink-0 text-gold" />
                  {school.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${school.email}`}
                  className="flex items-start gap-3 break-all text-parchment transition-colors hover:text-gold-light"
                >
                  <Mail size={15} className="mt-1 shrink-0 text-gold" />
                  {school.email}
                </a>
              </li>
              <li>
                <a
                  href={school.websiteHref}
                  className="flex items-start gap-3 text-parchment transition-colors hover:text-gold-light"
                >
                  <Globe size={15} className="mt-1 shrink-0 text-gold" />
                  {school.website}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sand-deep">
                <MapPin size={15} className="mt-1 shrink-0 text-gold" />
                {school.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-sand-deep md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {school.nameFull}. A not-for-profit supplementary school.
          </p>
          <p lang="ar" className="font-arabic text-sm text-gold-pale">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  )
}
