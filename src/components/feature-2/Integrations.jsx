'use client'

export default function Integrations2() {
  return (
    <section id="integrations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-orange-100 px-6 py-3">
            <span className="font-bold text-orange-800">🔗 INTEGRATIONS</span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            Connect With Your{' '}
            <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Entire Tech Stack
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Seamlessly integrate CallGauge AI with 50+ CRMs, ad platforms,
            analytics tools, and marketing automation systems for unified
            operations.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🏢',
              gradient: 'from-blue-500 to-blue-600',
              title: 'AI Transcription',
              desc: 'Get 95%+ accurate transcriptions with speaker detection, timestamps, and keyword search to analyze conversations faster.',
            },
            {
              icon: '📈',
              gradient: 'from-green-500 to-green-600',
              title: 'Sentiment & Intent Analysis',
              desc: 'Detect emotions and buying signals automatically, so your team can prioritize urgent leads and respond with the right context.',
            },
            {
              icon: '🎯',
              gradient: 'from-purple-500 to-purple-600',
              title: 'AI Lead Scoring',
              desc: 'Automatically rank calls based on intent, sentiment, and past conversion patterns, helping sales focus on the highest-value opportunities.',
            },
            {
              icon: '⚡',
              gradient: 'from-red-500 to-red-600',
              title: 'Direct CRM Sync',
              desc: 'Keep sales teams aligned with native integrations for Salesforce, HubSpot, Zoho, and more, so call data flows directly into your CRM.',
            },
            {
              icon: '👇',
              gradient: 'from-pink-500 to-pink-600',
              title: 'Ad Platform Integration',
              desc: 'Connect with Google Ads, Meta, and LinkedIn to track ROI and optimize campaigns with complete attribution data.',
            },
            {
              icon: '🖥️',
              gradient: 'from-orange-500 to-orange-600',
              title: 'Webhooks & APIs',
              desc: 'Build custom workflows and real-time automations at scale using CallGauge AI’s flexible APIs and webhook support.',
            },
          ].map((cat, i) => (
            <div key={i} className="mt-4 text-center">
              <div
                className={`h-20 w-20 bg-gradient-to-br ${cat.gradient} mx-auto mb-4 flex items-center justify-center rounded-3xl`}
              >
                <span className="text-2xl text-white">{cat.icon}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-xl bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl">
            Browse All Integrations
          </button>
        </div>
      </div>
    </section>
  )
}
