'use client'
import { Button } from '@/components/button'

const features = [
  {
    icon: '🎯',
    color: 'bg-blue-500',
    title: 'Call Flows & Smart Routing',
    description:
      'Stop losing leads to missed or\n' +
      'misdirected calls. With intelligent greetings, round-robin distribution,\n' +
      'multi-ring routing, and after-hours rules, CallGauge AI ensures every caller\n' +
      'reaches the right person or team.\n',
    lastline:
      '➡ Capture more opportunities and turn more conversations into revenue.',
    points: [
      'Intelligent Greetings and Menus',
      'Round-Robin and Multi-Ring Routing',
      'After-Hours and Fallback Rules',
    ],
  },
  {
    icon: '🤖',
    color: 'bg-green-500',
    title: 'Call Recording & AI Search',
    description:
      'Go beyond basic recordings. CallGauge AI captures every conversation in high quality with downloadable MP3 files, while AI-powered transcripts and summaries turn each call into searchable insights.',
    lastline:
      '➡ Turn every conversation into actionable insights that enhance compliance, training, and marketing performance.',
    points: [
      'High-Quality MP3 Recordings\n',
      'AI-Powered Transcripts and Summaries\n',
      'Searchable Call History\n',
    ],
  },
  {
    icon: '📈',
    color: 'bg-teal-500',
    title: 'Automations That Save Time',
    description:
      'Scale your marketing impact without adding extra work. CallGauge AI connects with your CRM, email, Slack, and over 5,000 apps through Zapier to trigger instant follow-ups, update records, and share call details automatically — all with zero coding required.',
    lastline:
      '➡ Eliminate busywork and focus on the activities that actually grow your ROI.',
    points: [
      'Instant Follow-Ups and Alerts\n',
      'CRM Updates and Data Sync\n',
      'Works with Over 5,000 Apps via Zapier\n',
    ],
  },
  {
    icon: '📊',
    color: 'bg-purple-500',
    title: 'Spam Blocking & Press‑1 Filters',
    description:
      'Don’t let spam calls drain your ad budget. CallGauge AI automatically blocks robo calls using AI-powered filters and Press-1 screening to keep your attribution clean and your budget optimized.',
    lastline:
      '➡ Protect your campaigns and ensure every dollar you spend delivers measurable performance.',
    points: [
      'AI-Powered Spam Detection\n',
      'Press-1 Caller Verification\n',
      'Accurate Attribution Protection\n',
    ],
  },
  {
    icon: '🔗',
    color: 'bg-orange-500',
    title: 'Client Portal and Branded Dashboards',
    description:
      'Give your clients full transparency with secure access to their performance data. The CallGauge AI Client Portal allows agencies to share real-time dashboards, detailed reports, and call insights under their own professional brand identity.',
    lastline:
      '➡ Build stronger client relationships through transparency, performance tracking, and effortless collaboration.',
    points: [
      'Custom Dashboards and Reports\n',
      'Client Logins and Access Controls\n',
      'White Label Branding (Coming Soon)\n',
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
