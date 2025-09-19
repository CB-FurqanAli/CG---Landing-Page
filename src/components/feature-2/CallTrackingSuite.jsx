// components/FeaturesSection.jsx
'use client'

const features = [
  {
    id: '1',
    title: ' Advanced Call Tracking',
    description:
      ' Stop guessing where calls come from. CallGauge AI combines Dynamic Number Insertion (DNI) and smart routing so every call is attributed with 98% accuracy and reaches the right team.',
    icon: '📞',
    color: 'from-blue-500 to-blue-600',
    points: [
      'Local & toll-free numbers with area code search and real-time status',
      'Dynamic Number Insertion (DNI) with 98% attribution accuracy',
      'Complete call details: caller, duration, cost, status, and source',
    ],
    dotColor: 'bg-blue-500',
  },
  {
    id: '2',
    title: 'calling: Smart Call Flows & Routing',
    description:
      'Build reliable call flows that connect every caller to the right person fast. With drag and drop controls and intelligent routing, you will never miss an opportunity.',
    icon: '🎯',
    color: 'from-purple-500 to-purple-600',
    points: [
      'Flow Builder including IVR, multi ring, and voicemail',
      'Recording and Whispering',
      'Spam Filters and Alerts',
    ],
    dotColor: 'bg-purple-500',
  },
  {
    id: '3',
    title: 'Transcription & Voicemail',
    description:
      'Never miss context or a missed call. CallGauge AI gives you a centralized inbox for recordings and AI-powered transcripts so every conversation is easy to review and act on.',
    icon: '🤖',
    color: 'from-green-500 to-green-600',
    points: [
      'Voicemail inbox with recordings, duration and source tracking',
      ' AI transcripts with speaker identification when recording is enabled',
      ' Forward SMS to email for centralized updates',
    ],
    dotColor: 'bg-green-500',
  },
  {
    id: '4',
    title: 'Seamless Integrations\n',
    description:
      'Eliminate silos. CallGauge AI connects natively to CRMs, ad platforms and 5,000+ apps keeping your data in sync and your team in flow.\n' +
      '\n',
    icon: '🔗',
    color: 'from-orange-500 to-orange-600',
    points: [
      'Direct CRM integrations (HubSpot, Salesforce, Zoho)\n',
      'Ad platform sync (Google, Facebook, LinkedIn)\n',
      'Automations via Zapier, Slack & webhooks\n',
    ],
    dotColor: 'bg-orange-500',
  },
  {
    id: '5',
    title: 'Analytics & Dashboards\n',
    description:
      'Get clarity at a glance. CallGauge AI delivers real-time dashboards and automated reports that reveal ROI, conversions and call performance across every channel.\n' +
      '\n',
    icon: '📊',
    color: 'from-red-500 to-red-600',
    points: [
      'Custom dashboards by client or campaign\n',
      'Automated branded reports on schedule\n',
      'ROI, CPA, and revenue tracking by channel\n',
    ],
    dotColor: 'bg-red-500',
  },
  {
    id: '6',
    title: 'Spam Blocking & Call Filtering\n',
    description:
      'Keep your reports clean and budgets safe. CallGauge AI blocks spam and robo-calls with AI detection and Press-1 filters, so only real leads show up in your attribution.\n' +
      '\n',
    icon: '🔒',
    color: 'from-indigo-500 to-indigo-600',
    points: [
      'AI-powered spam & robo-call detection\n',
      'Press-1 filters to screen low-quality calls\n',
      'Accurate data for reliable attribution',
    ],
    dotColor: 'bg-indigo-500',
  },
]

export default function CallTrackingSuite2() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Complete Call Tracking Suite
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            CallGauge AI gives you complete visibility into every phone lead,
            turning calls into measurable ROI with accurate attribution and
            real-time analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group cursor-pointer rounded-3xl border border-gray-200 p-8 transition-all duration-1000 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`h-16 w-16 bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
              >
                <span className="text-2xl text-white">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-600">
                {feature.description}
              </p>

              {/* Points */}
              <div className="space-y-2 text-sm text-gray-500">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${feature.dotColor}`}
                    ></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
