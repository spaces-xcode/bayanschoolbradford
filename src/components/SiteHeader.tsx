import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, Phone, X } from 'lucide-react'
import { navigation, school } from '@/data/school'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        lifted
          ? 'border-b border-sand bg-ivory/92 shadow-[0_10px_30px_-26px_rgba(36,27,16,0.6)] backdrop-blur-md'
          : 'border-b border-transparent bg-ivory/70 backdrop-blur-sm'
      }`}
    >
      {/* Contact ribbon — the number families actually need, always in reach. */}
      <div className="hidden bg-espresso text-parchment md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2 text-[0.72rem] tracking-[0.14em] uppercase">
          <span lang="ar" className="font-arabic text-[0.95rem] tracking-normal text-gold-pale">
            {school.nameArabic}
          </span>
          <div className="flex items-center gap-6">
            <span className="text-sand-deep">
              {school.sessionDay} · {school.sessionTime}
            </span>
            <a href={school.phoneHref} className="flex items-center gap-2 text-gold-light hover:text-parchment">
              <Phone size={13} strokeWidth={2.2} />
              {school.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label={`${school.nameFull} — home`}>
          <img
            src="/images/bayan-logo.png"
            alt=""
            width={652}
            height={652}
            className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg text-espresso md:text-xl">Bayan Arabiya School</span>
            <span className="block text-[0.62rem] font-bold tracking-[0.28em] text-gold-deep uppercase">Bradford</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-active={pathname === item.to ? 'true' : 'false'}
              className="link-quiet text-[0.82rem] font-semibold tracking-[0.1em] uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/admissions" hash="register" className="btn btn-gold">
            Register a child
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="hairline flex h-11 w-11 items-center justify-center bg-white/60 text-espresso lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-sand bg-ivory px-6 pt-4 pb-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-sand/70 py-3 font-display text-xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link to="/admissions" hash="register" className="btn btn-gold w-full">
              Register a child
            </Link>
            <a href={school.phoneHref} className="btn btn-outline w-full">
              <Phone size={14} /> {school.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
