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
              title: 'CRM Systems',
              desc: 'Salesforce, HubSpot, Pipedrive, Zoho, and more',
            },
            {
              icon: '📈',
              gradient: 'from-green-500 to-green-600',
              title: 'Analytics',
              desc: 'Google Analytics, Adobe Analytics, Mixpanel',
            },
            {
              icon: '🎯',
              gradient: 'from-purple-500 to-purple-600',
              title: 'Ad Platforms',
              desc: 'Google Ads, Facebook, LinkedIn, Microsoft Ads',
            },
            {
              icon: '⚡',
              gradient: 'from-red-500 to-red-600',
              title: 'Automation',
              desc: 'Zapier, Make, Custom APIs, Webhooks',
            },
          ].map((cat, i) => (
            <div key={i} className="text-center">
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

        {/* Popular Integrations */}
        <div className="rounded-3xl bg-gray-50 p-8 lg:p-12">
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Popular Integrations
          </h3>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {[
              { label: 'Salesforce', initials: 'SF', color: 'blue' },
              { label: 'HubSpot', initials: 'HS', color: 'orange' },
              { label: 'Pipedrive', initials: 'PD', color: 'green' },
              { label: 'Google Ads', initials: 'G', color: 'red' },
              { label: 'Facebook', initials: 'F', color: 'blue' },
              { label: 'LinkedIn', initials: 'Li', color: 'blue' },
              { label: 'Google Analytics', initials: 'GA', color: 'yellow' },
              { label: 'Zapier', initials: 'Z', color: 'purple' },
              { label: 'Shopify', initials: 'SH', color: 'indigo' },
              { label: 'WordPress', initials: 'WP', color: 'blue' },
              { label: 'Slack', initials: 'SL', color: 'green' },
              { label: 'More', initials: '+38', color: 'gray' },
            ].map((integration, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-2xl bg-white p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`h-12 w-12 bg-${integration.color}-100 mx-auto mb-3 flex items-center justify-center rounded-xl`}
                >
                  <span
                    className={`text-${integration.color}-600 text-lg font-bold`}
                  >
                    {integration.initials}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {integration.label}
                </div>
              </div>
            ))}
          </div>
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
