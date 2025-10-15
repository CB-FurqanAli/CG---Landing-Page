'use client'

const COLOR_MAP = {
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  green: 'bg-green-600',
  orange: 'bg-orange-600',
}

export default function OptimizeROISectionDynamic({
  title = 'Everything You Need to Optimize ROI',
  features = DEFAULT_FEATURES,
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">{title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" role="list">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, desc, theme = 'blue', icon = 'growth' }) {
  const Icon = ICONS[icon] || ICONS.growth
  const color = COLOR_MAP[theme] || COLOR_MAP.blue

  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-6"
      role="listitem"
    >
      <div
        className={`h-10 w-10 ${color} mb-4 flex items-center justify-center rounded-lg`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}

/* ---------------- Icons (inline SVG to match your originals) ---------------- */
const ICONS = {
  growth: ({ className = 'w-5 h-5' }) => (
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
  ),
  bars: ({ className = 'w-5 h-5' }) => (
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
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  arrows: ({ className = 'w-5 h-5' }) => (
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
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  ),
  clock: ({ className = 'w-5 h-5' }) => (
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
}

/* ---------------- Defaults ---------------- */
const DEFAULT_FEATURES = [
  {
    title: 'Dynamic Number Insertion',
    desc: 'Unique tracking numbers for every visitor and source',
    theme: 'blue',
    icon: 'growth',
  },
  {
    title: 'Call Recording & Search',
    desc: 'Record, transcribe, and search every conversation',
    theme: 'purple',
    icon: 'bars',
  },
  {
    title: '5+ Integrations',
    desc: 'Connect Google Ads, HubSpot, Salesforce & more',
    theme: 'green',
    icon: 'arrows',
  },
  {
    title: '5-Minute Setup',
    desc: 'Go live instantly with zero technical skills required',
    theme: 'orange',
    icon: 'clock',
  },
]
