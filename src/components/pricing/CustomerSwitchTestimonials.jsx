'use client'

function avatarDataUrl(initials, hex) {
  const svg = `
<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="24" fill="${hex}"/>
  <text x="24" y="30" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${initials}</text>
</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function CustomerSwitchTestimonials() {
  const cards = [
    {
      initials: 'SM',
      avatarHex: '#10b981',
      name: 'Sarah Mitchell',
      role: 'Marketing Director, LegalEagle Law',
      switchedFrom: 'CallRail',
      tone: 'green',
      quote:
        'We were paying $450/month with CallRail for basic features. CallGauge AI gives us everything we need for $299, plus AI summaries that CallRail charged extra for. The savings alone paid for our annual subscription.',
      statIcon: '💰',
      statText: 'Saving $1,800+ annually',
    },
    {
      initials: 'MR',
      avatarHex: '#3b82f6',
      name: 'Mike Rodriguez',
      role: 'Agency Owner, Growth Digital',
      switchedFrom: 'CTM',
      tone: 'blue',
      quote:
        "CallTrackingMetrics was clunky and expensive for our agency needs. CallGauge AI's white-label portal lets us manage 25+ clients seamlessly. Setup took 5 minutes vs. hours with CTM.",
      statIcon: '⚡',
      statText: '10x faster client onboarding',
    },
    {
      initials: 'JC',
      avatarHex: '#8b5cf6',
      name: 'Jennifer Chen',
      role: 'VP Marketing, TechFlow Solutions',
      switchedFrom: 'Invoca',
      tone: 'purple',
      quote:
        'Invoca was overkill and cost us $3,000/month with a 6-month setup. CallGauge AI delivers the same attribution insights for under $800 and was live the same day. No regrets.',
      statIcon: '🚀',
      statText: 'Same-day implementation',
    },
  ]

  const toneStyles = {
    green: {
      card: 'from-green-50 to-emerald-50 border-green-200',
      pill: 'bg-green-100 text-green-800',
      stat: 'text-green-600',
    },
    blue: {
      card: 'from-blue-50 to-indigo-50 border-blue-200',
      pill: 'bg-blue-100 text-blue-800',
      stat: 'text-blue-600',
    },
    purple: {
      card: 'from-purple-50 to-violet-50 border-purple-200',
      pill: 'bg-purple-100 text-purple-800',
      stat: 'text-purple-600',
    },
  }

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">
            What Customers Say About Switching
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from businesses who made the switch to CallGauge AI
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((c) => {
            const t = toneStyles[c.tone]
            return (
              <article
                key={c.name}
                className={`rounded-2xl border bg-gradient-to-br p-8 ${t.card}`}
              >
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={avatarDataUrl(c.initials, c.avatarHex)}
                    alt={`${c.name} avatar`}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{c.name}</div>
                    <div className="text-sm text-gray-600">{c.role}</div>
                  </div>
                </div>

                {/* Switch pill */}
                <div className="mb-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm ${t.pill}`}
                  >
                    Switched from {c.switchedFrom}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mb-4 text-gray-700 italic">
                  “{c.quote}”
                </blockquote>

                {/* Stat */}
                <div className={`${t.stat} text-sm font-semibold`}>
                  <span aria-hidden="true">{c.statIcon}</span>{' '}
                  <span>{c.statText}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
