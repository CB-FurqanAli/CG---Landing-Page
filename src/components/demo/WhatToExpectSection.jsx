const THEME_STYLES = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
}

const ICONS = {
  calendar: CalendarIcon,
  play: PlayCircleIcon,
  trend: TrendUpIcon,
}

export default function WhatToExpectSection({
  title = 'What to Expect in Your Demo',
  subtitle = 'A 30-minute personalized walkthrough tailored to your marketing goals and challenges',
  steps = [
    {
      title: '1. Discovery (5 min)',
      desc: "We'll learn about your current attribution challenges, marketing channels, and ROI goals",
      theme: 'blue',
      icon: 'calendar',
    },
    {
      title: '2. Live Walkthrough (20 min)',
      desc: 'See CallGauge AI in action with real examples relevant to your industry and use case',
      theme: 'purple',
      icon: 'play',
    },
    {
      title: '3. Q&A & Next Steps (5 min)',
      desc: 'Get answers to your questions and discuss implementation, integrations, and pricing',
      theme: 'green',
      icon: 'trend',
    },
  ],
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3" role="list">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ title, desc, theme = 'blue', icon = 'calendar' }) {
  const Icon = ICONS[icon] || CalendarIcon
  const colors = THEME_STYLES[theme] || THEME_STYLES.blue

  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-8"
      role="listitem"
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}
      >
        <Icon className={`h-6 w-6 ${colors.text}`} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

/* ---------------- Icons ---------------- */
function CalendarIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

function PlayCircleIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function TrendUpIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  )
}
