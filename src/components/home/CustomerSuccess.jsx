const stats = [
  { value: '247%', label: 'Average ROI Increase', color: 'text-green-600' },
  { value: '98%', label: 'Attribution Accuracy', color: 'text-blue-600' },
  { value: '1M+', label: 'Calls Tracked Monthly', color: 'text-purple-600' },
  { value: '2.5K+', label: 'Happy Customers', color: 'text-orange-600' },
]

const testimonials = [
  {
    rating: 5,
    quote:
      'Within the first week, we discovered which campaigns were actually driving high-quality calls. Shifting our budget stopped the waste and boosted ROI immediately.',
    initials: 'MJ',
    color: 'bg-blue-500',
    name: 'Michael Johnson',
    role: 'Marketing Director, TechFlow Inc',
  },
  {
    rating: 5,
    quote:
      'Setup took minutes, not hours. With AI call analysis, we finally see which ads convert into real revenue — and our team saves dozens of hours every month.',
    initials: 'SC',
    color: 'bg-green-500',
    name: 'Sarah Chen',
    role: 'CEO, Local Home Services',
  },
  {
    rating: 5,
    quote:
      'CallGauge AI gave us the attribution clarity we’d been missing. Now we can prove marketing ROI with hard data, not assumptions — and leadership trusts our reports.',
    initials: 'DR',
    color: 'bg-purple-500',
    name: 'David Rodriguez',
    role: 'VP Marketing, Enterprise Solutions ',
  },
]

export default function CustomerSuccess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2">
            <span className="text-sm font-semibold text-green-800">
              ⭐ CUSTOMER SUCCESS
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            See How Teams Improve ROI with CallGauge AI
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Businesses of all sizes use CallGauge AI to eliminate wasted ad
            spend, optimize campaigns, and prove ROI with AI-powered
            attribution. Here’s what real results look like when you track every
            call with confidence.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mb-16 grid grid-cols-1 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <div
                className={`metric-counter mb-2 text-4xl font-bold ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="transform rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-6 flex items-center">
                <div className="flex text-lg text-yellow-400">
                  {'★★★★★'.slice(0, t.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">{t.rating}.0</span>
              </div>
              <p className="mb-6 leading-relaxed text-gray-600 italic">
                {t.quote}
              </p>
              <div className="flex items-center">
                <div
                  className={`h-12 w-12 ${t.color} mr-4 flex items-center justify-center rounded-full text-white`}
                >
                  <span className="font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
