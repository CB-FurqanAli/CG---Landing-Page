'use client'
import { Button } from '@/components/button'

const features = [
  {
    icon: '🎯',
    color: 'bg-blue-500',
    title: 'Call Flows & Smart Routing',
    description:
      'Stop losing leads to missed or misdirected calls. With intelligent greetings, round-robin, multi-ring, and after-hours rules, CallGauge AI ensures every caller reaches the right person or team.',
    lastline:
      '➡ Capture more opportunities and convert more conversations into revenue.',
    points: [
      'Intelligent greetings & menus',
      'Round-robin & multi-ring routing',
      'After-hours & fallback rules',
    ],
  },
  {
    icon: '🤖',
    color: 'bg-green-500',
    title: 'Call Recording & AI Search',
    description:
      'Go beyond basic recordings. CallGauge AI captures every conversation in high quality with MP3 downloads, while AI‑powered transcripts and summaries turn calls into searchable insights.',
    lastline:
      '➡ Turn conversations into insights that improve compliance, training, and marketing impact.',
    points: [
      'High‑quality MP3 recordings',
      'AI‑powered transcripts & summaries',
      'Searchable call history',
    ],
  },
  {
    icon: '📈',
    color: 'bg-teal-500',
    title: 'Automations That Save Time',
    description:
      'Scale your marketing impact without adding extra work. CallGauge AI connects to your CRM, email, Slack, and 5,000+ apps through Zapier to trigger instant follow‑ups, update records, and share call details — all with zero coding.',
    lastline:
      '➡ Eliminate busywork and focus on the activities that actually grow your ROI.',
    points: [
      'Instant follow‑ups & alerts',
      'CRM updates & data sync',
      'Works with 5,000+ apps via Zapier',
    ],
  },
  {
    icon: '📊',
    color: 'bg-purple-500',
    title: 'Spam Blocking & Press‑1 Filters',
    description:
      'Don’t let spam eat into your ad budget. CallGauge AI blocks robo‑calls with AI filters and press‑1 screening, keeping your attribution clean and budgets optimize.',
    lastline:
      '➡ Protect your campaigns and ensure every dollar spent delivers real performance.',
    points: [
      'AI-powered spam detection',
      'Press‑1 caller verification',
      'Accurate attribution protection',
    ],
  },
  {
    icon: '🔗',
    color: 'bg-orange-500',
    title: 'White Label & Client Portal',
    description:
      'Give clients full transparency under your own brand. Agencies can deliver dashboards, branded reports, and secure logins while keeping CallGauge AI invisible.',
    lastline:
      '➡ Protect your campaigns and ensure every dollar spent delivers real performance.',
    points: [
      'Custom dashboards & reports',
      'Client logins & permissions',
      'White‑label branding',
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2">
            <span className="text-sm font-semibold text-blue-800">
              🚀 POWERFUL FEATURES
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Features That Turn Every Call Into Measurable ROI
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            From call routing to reporting, <strong> CallGauge AI </strong>{' '}
            ensures every lead is tracked, attributed, and optimized for maximum
            ROI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`h-12 w-12 ${feature.color} mb-6 flex items-center justify-center rounded-xl text-white`}
              >
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-6 text-gray-600">{feature.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium">{feature.lastline}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Try All Features Free for 14 Days
          </Button>
        </div>
      </div>
    </section>
  )
}
