# Bayan Arabiya School Bradford — website

Marketing and admissions website for **Bayan Arabiya School Bradford** (المدرسة العربية بيان), a not-for-profit
supplementary school teaching Arabic language, Qur'an and Islamic studies to children aged 4–16 on Sundays.

The site covers what the school teaches, how classes are organised into levels, what a teaching Sunday looks like,
fees and term dates, and it takes registration and general enquiries through Netlify Forms.

- Phone: 07350 549991
- Email: info@bayanschoolbradford.org
- Web: www.bayanschoolbradford.org

## Pages

| Route         | Purpose                                                                              |
| ------------- | ------------------------------------------------------------------------------------ |
| `/`           | Hero, facts at a glance, ethos, four teaching strands, levels, Sunday timetable, fees |
| `/about`      | Story, bilingual English/Arabic welcome, commitments, who runs the school             |
| `/curriculum` | The four strands in detail, all seven levels, assessment and reporting, materials     |
| `/admissions` | Admissions process, registration form, fees, term dates, policy notes                 |
| `/contact`    | Contact details, enquiry form, full FAQ                                               |

## Tech stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | TanStack Start (React 19, TanStack Router v1)     |
| Build      | Vite 7                                            |
| Styling    | Tailwind CSS 4 with a custom token layer          |
| Icons      | lucide-react                                      |
| Forms      | Netlify Forms (`registration` and `contact`)      |
| Hosting    | Netlify                                           |
| Language   | TypeScript 5.9 (strict)                           |

Type: Marcellus (display), Karla (body), Amiri (Arabic), loaded from Google Fonts.

## Running locally

```bash
npm install
npm run dev            # http://localhost:3000
```

To exercise Netlify features (forms handling, redirects) locally:

```bash
netlify dev --port 8889
```

Note that **form submissions only work on a deployed Netlify site** (including deploy previews) — the build bot has
to register the forms first. Locally the form will post and report failure.

Production build:

```bash
npm run build          # output in dist/
```

## Editing content

Almost all copy that changes over time lives in `src/data/school.ts` — contact details, ages and session times, the
four teaching strands, the seven class levels, the Sunday timetable, fees, term dates and the FAQ. Editing that file
updates every page that uses it.

## Placeholders to confirm

The following were written as sensible defaults because they were not supplied, and should be checked before the
site goes live: fee amounts, term dates for 2026/27, the teaching venue address, and lesson start/finish times.
