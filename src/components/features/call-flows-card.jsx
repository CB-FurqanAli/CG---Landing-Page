// components/FeaturesSection.jsx
'use client'

const features = [
  {
    id: 'tracking',
    title: 'Advanced Call Tracking',
    description:
      'Dynamic and static phone number tracking with real-time call routing and international support.',
    icon: '📞',
    color: 'from-blue-500 to-blue-600',
    points: [
      'Dynamic number insertion',
      'Local & toll-free numbers',
      'Advanced call routing',
    ],
    dotColor: 'bg-blue-500',
  },
  {
    id: 'attribution',
    title: 'Source Attribution',
    description:
      'Multi-touch attribution modeling to understand your complete customer journey and marketing effectiveness.',
    icon: '🎯',
    color: 'from-purple-500 to-purple-600',
    points: [
      'Multi-touch attribution',
      'UTM parameter tracking',
      'Cross-device attribution',
    ],
    dotColor: 'bg-purple-500',
  },
  {
    id: 'ai-insights',
    title: 'AI-Powered Insights',
    description:
      'Advanced AI analysis for call transcription, sentiment analysis, and lead scoring to optimize conversions.',
    icon: '🤖',
    color: 'from-green-500 to-green-600',
    points: [
      'Real-time transcription',
      'Sentiment & intent analysis',
      'AI lead scoring',
    ],
    dotColor: 'bg-green-500',
  },
  {
    id: 'integrations',
    title: 'Platform Integrations',
    description:
      'Seamless connections with 50+ CRMs, ad platforms, and analytics tools for unified marketing operations.',
    icon: '🔗',
    color: 'from-orange-500 to-orange-600',
    points: ['CRM integrations', 'Ad platform sync', 'Webhook automation'],
    dotColor: 'bg-orange-500',
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description:
      'Comprehensive reporting and custom dashboards with real-time data and actionable insights.',
    icon: '📊',
    color: 'from-red-500 to-red-600',
    points: ['Custom dashboards', 'Real-time reporting', 'ROI calculations'],
    dotColor: 'bg-red-500',
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description:
      'Bank-level security with GDPR compliance, encryption, and enterprise-grade data protection.',
    icon: '🔒',
    color: 'from-indigo-500 to-indigo-600',
    points: [
      'End-to-end encryption',
      'GDPR & HIPAA compliant',
      '99.9% uptime SLA',
    ],
    dotColor: 'bg-indigo-500',
  },
]

export default function CallFlowsCard() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            Complete Call Tracking Suite
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Everything you need to track, attribute, analyze, and optimize phone
            call conversions across all your marketing channels.
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
