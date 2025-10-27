'use client'

const features = [
  {
    id: '1',
    title: 'Advanced Call Tracking',
    description:
      'Stop guessing where calls come from. CallGauge AI combines Dynamic Number Insertion (DNI) and smart routing so every call is attributed with up to 98% accuracy and reaches the right team.',
    icon: '📞',
    color: {
      ring: 'from-blue-500 to-blue-600',
      accent: 'bg-blue-500',
      shadow: 'shadow-blue-100',
    },
    points: [
      'Local & toll-free numbers with area code search and real-time status',
      'Dynamic Number Insertion (DNI) with up to 98% attribution accuracy',
      'Complete call details: caller, duration, cost, status, and source',
    ],
  },
  {
    id: '2',
    title: 'Analytics & Reports',
    description:
      'Make data-driven decisions with analytics that match what you see in the app. CallGauge AI transforms raw call activity into actionable insights for smarter marketing and sales performance.',
    icon: '📊',
    color: {
      ring: 'from-rose-500 to-red-600',
      accent: 'bg-rose-500',
      shadow: 'shadow-rose-100',
    },
    points: [
      'Call volume and trends by day, week, or hour with top sources and numbers',
      'Attribution and ROI insights using DNI with conversion and cost analysis',
      'Team performance, caller locations, and demographics with automated scheduling',
    ],
  },
  {
    id: '3',
    title: 'Transcription & Voicemail',
    description:
      'Never miss context or a missed call. CallGauge AI gives you a centralized inbox for recordings and AI-powered transcripts so every conversation is easy to review and act on.',
    icon: '🤖',
    color: {
      ring: 'from-green-500 to-green-600',
      accent: 'bg-green-500',
      shadow: 'shadow-green-100',
    },
    points: [
      'Voicemail inbox with recordings, duration and source tracking',
      'AI transcripts with speaker identification when recording is enabled',
      'Forward SMS to email for centralized updates',
    ],
  },

  {
    id: '4',
    title: 'Number Porting',
    description:
      'Bring your existing numbers to CallGauge AI without downtime and keep your campaigns running seamlessly.',
    icon: '🔄',
    color: {
      ring: 'from-indigo-500 to-indigo-600',
      accent: 'bg-indigo-500',
      shadow: 'shadow-indigo-100',
    },
    points: [
      'Submit numbers, provider details, and Letter of Authorization directly in the app',
      'Choose to port voice-only or voice with messaging, depending on your setup',
      'Maintain uninterrupted service and marketing performance during the transfer',
    ],
  },
  {
    id: '5',
    title: 'Smart Call Flows & Routing',
    description:
      'Build reliable call flows that connect every caller to the right person fast. With drag and drop controls and intelligent routing, you will never miss an opportunity.',
    icon: '🎯',
    color: {
      ring: 'from-purple-500 to-purple-600',
      accent: 'bg-purple-500',
      shadow: 'shadow-purple-100',
    },
    points: [
      'Flow Builder including multi ring, and voicemail',
      'Recording and Whispering',
      'Spam filters and alerts',
    ],
  },
  {
    id: '6',
    title: 'Secure Access & Control',
    description:
      'Protect sensitive call data with enterprise-grade safeguards while giving clients the transparency they need.',
    icon: '🔐',
    color: {
      ring: 'from-amber-500 to-orange-600',
      accent: 'bg-amber-500',
      shadow: 'shadow-amber-100',
    },
    points: [
      'Role-based permissions to manage user access',
      'Encrypted storage and secure client portals',
      'Detailed activity logs for compliance and oversight',
    ],
  },
]

export default function CallTrackingSuite_Unique() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
      >
        <div className="absolute top-0 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100 to-transparent blur-2xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-100 to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-bold text-gray-600 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built for marketers & revenue teams
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Complete Call Tracking Suite
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Get end‑to‑end visibility into phone leads. Attribute every call,
            surface insights instantly, and prove ROI.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.id} className="h-full">
              <article
                className={`group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${f.color.shadow}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`relative grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200`}
                    title={f.title}
                  >
                    <span
                      className={`absolute -inset-[2px] rounded-[14px] bg-gradient-to-br ${f.color.ring} opacity-60 blur-[6px]`}
                      aria-hidden
                    />
                    <span className="relative text-xl">{f.icon}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {f.title}
                </h3>

                <p className="mb-5 text-[15px] leading-relaxed text-gray-600">
                  {f.description}
                </p>

                <ul className="mt-auto space-y-2 text-sm text-gray-600">
                  {f.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={`mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full ${f.color.accent}`}
                        aria-hidden
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div
                  aria-hidden
                  className={`pointer-events-none absolute right-8 -bottom-4 left-8 h-8 rounded-full bg-gradient-to-t from-gray-200/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
