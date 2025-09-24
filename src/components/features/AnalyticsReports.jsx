'use client'

export default function AnalyticsReports() {
  const categories = [
    {
      icon: '🏢',
      gradient: 'from-blue-500 to-blue-600',
      title: 'Call Volume & Trends',
      desc: 'Track calls by day, week, or hour and instantly spot top-performing sources and numbers.',
    },
    {
      icon: '📈',
      gradient: 'from-green-500 to-green-600',
      title: 'Attribution & ROI Insights',
      desc: 'Measure revenue impact with DNI and UTM tracking, linking calls directly to campaigns, keywords, and costs.',
    },
    {
      icon: '🎯',
      gradient: 'from-purple-500 to-purple-600',
      title: 'Team & Geo Reporting',
      desc: 'Monitor agent performance, caller locations, and demographics with automated, scheduled reports.',
    },
    {
      icon: '🤖',
      gradient: 'from-pink-500 to-rose-500',
      title: 'AI-Powered Transcription',
      desc: 'Unlock insights with automated summaries, sentiment analysis, and searchable call transcripts.',
    },
  ]

  return (
    <section id="integrations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-orange-100 px-6 py-3">
            <span className="font-bold text-orange-800">
              🔗 Analytics & Reports
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Turn Call Data Into Clear,{' '}
            <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Stop guessing where performance gaps exist. With CallGauge AI’s
            real-time analytics and reporting, every call is tracked,
            attributed, and presented in dashboards that match what you see in
            the app. Make smarter, data-driven decisions, prove ROI, and scale
            campaigns with confidence.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div
                className={`h-20 w-20 bg-gradient-to-br ${cat.gradient} flex items-center justify-center rounded-3xl`}
              >
                <span className="text-3xl text-white">{cat.icon}</span>
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold text-gray-900">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
