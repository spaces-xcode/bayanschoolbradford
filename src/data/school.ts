/**
 * Single source of truth for school details, contact routes and curriculum
 * content. Every page pulls from here so a change to a phone number, a fee or
 * a term date only ever needs to be made once.
 */

export const school = {
  name: 'Bayan Arabiya School',
  nameFull: 'Bayan Arabiya School Bradford',
  nameArabic: 'المدرسة العربية بيان',
  tagline: 'Arabic language, Qur’an and Islamic studies for Bradford families',
  taglineArabic: 'تعليم اللغة العربية والقرآن الكريم لأبناء الجيل الناشئ في برادفورد',
  ages: 'Ages 4 – 16',
  city: 'Bradford, West Yorkshire',
  sessionDay: 'Sundays',
  sessionTime: '10:00 – 14:30',
  doorsOpen: '9:45',
  phone: '07350 549991',
  phoneHref: 'tel:+447350549991',
  email: 'info@bayanschoolbradford.org',
  website: 'www.bayanschoolbradford.org',
  websiteHref: 'https://www.bayanschoolbradford.org',
} as const

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
] as const

/** Short factual figures for the hero strip. */
export const glance = [
  { figure: 'Ages 4–16', label: 'Foundation through to GCSE Arabic' },
  { figure: 'Sundays', label: '10:00 – 14:30, term time only' },
  { figure: '6 levels', label: 'Placed by assessment, not by age alone' },
  { figure: '1:9', label: 'Average teacher to pupil ratio' },
] as const

export const pillars = [
  {
    id: 'language',
    title: 'Arabic language',
    titleArabic: 'اللغة العربية',
    summary:
      'Reading, handwriting, listening and conversation taught as a living language — pupils speak from the first lesson, not the third year.',
    detail:
      'Lessons follow a spiral scheme of work: each level revisits the same grammar with harder texts, so a pupil who joins late is never left guessing. Handwriting is taught with proper naskh letter forms, joined from the outset.',
  },
  {
    id: 'quran',
    title: 'Qur’an & tajwīd',
    titleArabic: 'القرآن والتجويد',
    summary:
      'Recitation, memorisation and the rules of tajwīd, taught in small circles so every child recites aloud to a teacher each week.',
    detail:
      'Pupils progress through short sūrahs and juz’ ‘Amma before longer portions. Memorisation targets are set per pupil and recorded in the home diary so parents can hear the same passage during the week.',
  },
  {
    id: 'islamic-studies',
    title: 'Islamic studies',
    titleArabic: 'التربية الإسلامية',
    summary:
      '‘Aqīdah, fiqh of worship, sīrah and character, delivered in age-appropriate English with the key vocabulary always given in Arabic.',
    detail:
      'The syllabus is deliberately non-sectarian and mainstream, focused on the fundamentals of belief and practice, honesty, respect for parents and neighbours, and the life of the Prophet ﷺ.',
  },
  {
    id: 'non-native',
    title: 'Arabic for non-native speakers',
    titleArabic: 'العربية لغير الناطقين بها',
    summary:
      'A parallel pathway for children who hear little or no Arabic at home, starting with the alphabet and everyday phrases.',
    detail:
      'Roughly a third of our pupils come from homes where Arabic is not spoken. These classes use picture-led vocabulary, structured phonics and paired speaking tasks so they are reading unvowelled words by the end of the second year.',
  },
] as const

export const levels = [
  {
    code: 'Tamhīdī',
    name: 'Foundation',
    ages: 'Ages 4–5',
    focus: 'Letter recognition and sounds, short sūrahs by ear, classroom routines through play and song.',
  },
  {
    code: 'Level 1',
    name: 'Early reading',
    ages: 'Ages 5–7',
    focus: 'Joining letters, short vowels, first fifty words, sūrah al-Fātiḥah with tajwīd basics.',
  },
  {
    code: 'Level 2',
    name: 'Fluency',
    ages: 'Ages 7–8',
    focus: 'Reading vowelled sentences aloud, writing from dictation, juz’ ‘Amma memorisation.',
  },
  {
    code: 'Level 3',
    name: 'Grammar foundations',
    ages: 'Ages 8–10',
    focus: 'Nouns, verbs and sentence types, guided paragraph writing, fiqh of ṣalāh and wuḍū’.',
  },
  {
    code: 'Level 4',
    name: 'Composition',
    ages: 'Ages 10–12',
    focus: 'Past and present tense across all persons, comprehension of unseen texts, sīrah in Arabic.',
  },
  {
    code: 'Level 5',
    name: 'Pre-GCSE',
    ages: 'Ages 12–14',
    focus: 'Extended writing, listening exercises, vocabulary building towards exam themes.',
  },
  {
    code: 'Level 6',
    name: 'GCSE Arabic',
    ages: 'Ages 14–16',
    focus: 'Full exam preparation across speaking, listening, reading and writing, with mock papers each half term.',
  },
] as const

export const sundayShape = [
  { time: '09:45', title: 'Doors open', detail: 'Pupils signed in at the front desk by a parent or named adult.' },
  { time: '10:00', title: 'Assembly', detail: 'Recitation, a short reminder, and the week’s notices in Arabic and English.' },
  { time: '10:15', title: 'First lesson', detail: 'Arabic language — reading, handwriting and speaking in level groups.' },
  { time: '11:30', title: 'Break', detail: 'Supervised break in the hall. Pupils bring their own snack; nut-free site.' },
  { time: '11:50', title: 'Second lesson', detail: 'Qur’an circles — every child recites to a teacher and has targets recorded.' },
  { time: '13:00', title: 'Ẓuhr & lunch', detail: 'Congregational prayer for those old enough, then supervised lunch.' },
  { time: '13:35', title: 'Third lesson', detail: 'Islamic studies, or GCSE exam workshop for Level 6.' },
  { time: '14:30', title: 'Dismissal', detail: 'Released level by level to a named adult at the main door.' },
] as const

export const fees = {
  note: 'Fees cover teaching staff, room hire and printed resources. The school is run on a not-for-profit basis.',
  items: [
    { label: 'One child', amount: '£32', period: 'per month' },
    { label: 'Second child', amount: '£26', period: 'per month' },
    { label: 'Third child onwards', amount: '£18', period: 'per month' },
    { label: 'Books & workbooks', amount: '£15', period: 'once per year' },
  ],
  extras: [
    'Fees are collected termly in advance, by bank transfer or standing order.',
    'Registration itself is free — you pay nothing until a place is confirmed.',
    'Hardship support is available in confidence; ask the head teacher.',
  ],
} as const

export const termDates = [
  { term: 'Autumn term', range: 'Sun 6 Sep – Sun 13 Dec 2026', breaks: 'Half-term break: 25 Oct' },
  { term: 'Spring term', range: 'Sun 10 Jan – Sun 28 Mar 2027', breaks: 'Half-term break: 14 Feb' },
  { term: 'Summer term', range: 'Sun 18 Apr – Sun 11 Jul 2027', breaks: 'Eid closure confirmed by text' },
] as const

export const faqs = [
  {
    q: 'My child does not speak any Arabic. Is that a problem?',
    a: 'Not at all. About a third of our pupils come from homes where Arabic is not spoken, and there is a dedicated pathway for them that starts from the alphabet. Placement is by short assessment on the first Sunday, so nobody sits in a class that is too fast or too slow.',
  },
  {
    q: 'Can my child join partway through the year?',
    a: 'Yes, places are offered whenever a level has room. Joining in January or after Easter is common, and the teacher will set catch-up work for the topics already covered.',
  },
  {
    q: 'Do you enter pupils for GCSE Arabic?',
    a: 'Level 6 is a full GCSE preparation course covering speaking, listening, reading and writing, with mock papers each half term. Pupils are entered as private candidates at a local exam centre, and we guide families through the entry process.',
  },
  {
    q: 'Is there separate provision for girls and boys?',
    a: 'Classes are taught together in the Foundation and lower levels. From Level 4 upwards, teaching groups are separate, in line with what most of our families prefer.',
  },
  {
    q: 'What do pupils need to bring?',
    a: 'A pencil case, their workbooks, a water bottle and a nut-free snack. Books are issued at the start of the year and stay with the pupil.',
  },
  {
    q: 'Can I help at the school?',
    a: 'Yes. We are always glad to hear from qualified Arabic and Qur’an teachers, and from parents who can help with reception, break supervision or events. All adults working with pupils are DBS-checked.',
  },
] as const
