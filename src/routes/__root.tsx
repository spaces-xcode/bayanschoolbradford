import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Divider } from '@/components/ui'
import { school } from '@/data/school'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${school.nameFull} — Arabic, Qur’an & Islamic studies` },
      {
        name: 'description',
        content: `${school.nameFull}: Arabic language, Qur’an and Islamic studies for children aged 4 to 16, ${school.sessionDay} ${school.sessionTime}. Call ${school.phone}.`,
      },
      { name: 'theme-color', content: '#fbf6ec' },
      { property: 'og:title', content: `${school.nameFull}` },
      { property: 'og:description', content: school.tagline },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/images/bayan-logo.png' },
    ],
    links: [
      { rel: 'icon', href: '/images/bayan-logo.png', type: 'image/png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Marcellus&family=Karla:ital,wght@0,400;0,500;0,700;1,400&family=Amiri:wght@400;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:bg-espresso focus:px-4 focus:py-2 focus:text-parchment"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <img src="/images/bayan-logo.png" alt="" width={652} height={652} className="h-24 w-24 object-contain" />
      <p className="eyebrow mt-8">404</p>
      <h1 className="mt-3 text-4xl">This page has moved on</h1>
      <p lang="ar" className="font-arabic mt-2 text-xl text-gold-deep">
        الصفحة غير موجودة
      </p>
      <Divider className="my-7" />
      <p className="lede">
        The page you were looking for is not here. Try the main pages below, or call the school on{' '}
        <a href={school.phoneHref} className="link-quiet font-semibold">
          {school.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-gold">
          Home
        </Link>
        <Link to="/admissions" className="btn btn-outline">
          Admissions
        </Link>
      </div>
    </div>
  )
}
