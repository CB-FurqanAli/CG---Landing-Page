// components/FeaturesSection.jsx
'use client'

const features = [
  {
    title: 'Advanced Call Tracking',
    description:
      '\n' +
      'Advanced Call Tracking\n' +
      'Stop guessing where calls come from. CallGauge AI uses Dynamic Number Insertion (DNI) and smart routing so every caller reaches the right team and every call is attributed.',
    icon: '📞',
    color: 'from-blue-500 to-blue-600',
    points: [
      'Dynamic number insertion (98% attribution accuracy)\n',
      'Local & toll-free numbers with instant porting\n',
      'Round-robin, multi-ring, after-hours rules\n',
    ],
    dotColor: 'bg-blue-500',
  },
  {
    title: 'Attribution & ROI Reporting\n',
    description:
      'Stop wasting budget on campaigns that don’t deliver. CallGauge AI shows exactly which channels, ads, and keywords generate real revenue, so you can double down on what works.\n' +
      '\n',
    icon: '🎯',
    color: 'from-purple-500 to-purple-600',
    points: [
      'Source & keyword tracking with UTM capture\n',
      'ROI reporting tied directly to conversions\n',
      'Channel & campaign performance comparison\n',
    ],
    dotColor: 'bg-purple-500',
  },
  {
    title: 'AI-Powered Insights\n',
    description:
      'Go beyond call logs. CallGauge AI transcribes every conversation with 95%+ accuracy, detects customer sentiment and scores leads automatically, so your team knows where to focus.\n' +
      '\n',
    icon: '🤖',
    color: 'from-green-500 to-green-600',
    points: [
      'Real-time transcription with speaker detection\n',
      'Sentiment & intent analysis for buying signals\n',
      'AI lead scoring to identify high-value leads\n',
    ],
    dotColor: 'bg-green-500',
  },
  {
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

export default function CallFlowsCard() {
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
