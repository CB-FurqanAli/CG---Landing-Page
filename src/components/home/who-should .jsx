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
      'CallGauge helped us identify that our Facebook ads were driving 40% more qualified calls than Google Ads. We shifted $20K budget and increased our ROI by 180%.',
    initials: 'MJ',
    color: 'bg-blue-500',
    name: 'Michael Johnson',
    role: 'Marketing Director, TechFlow Inc',
  },
  {
    rating: 5,
    quote:
      'Setup took 10 minutes and we immediately started seeing which campaigns were working. The AI call analysis alone saved us 20 hours per week.',
    initials: 'SC',
    color: 'bg-green-500',
    name: 'Sarah Chen',
    role: 'CEO, Local Home Services',
  },
  {
    rating: 5,
    quote:
      'The AI call analysis is incredible. It automatically scores our leads and tells us which calls are most likely to convert. Our sales team is 3x more efficient now.',
    initials: 'DR',
    color: 'bg-purple-500',
    name: 'David Rodriguez',
    role: 'VP Marketing, Enterprise Solutions',
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
            Join 2,500+ Businesses Growing with CallGauge AI
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            See how companies like yours increased ROI and improved marketing
            performance with complete call attribution.
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
                "{t.quote}"
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

        {/* Logos */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="mb-8 text-center">
            <p className="mb-6 text-gray-500">
              Trusted by companies of all sizes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {Array(5)
                .fill('Company Logo')
                .map((logo, i) => (
                  <div
                    key={i}
                    className="flex h-12 w-20 items-center justify-center rounded bg-gray-200 text-xs font-medium text-gray-400"
                  >
                    {logo}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// export default function WhoShould() {
//   return (
//     <section className="relative bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-[41px]">
//             Who Is CallGauge AI For?
//           </h2>
//           <p className="mt-6 text-lg leading-relaxed text-gray-700">
//             Built for businesses that rely on calls—and want smarter, AI-powered
//             ways to track and grow.
//           </p>
//         </div>
//
//         {/* Audience Grid */}
//         <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Card 1 */}
//           <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
//             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white">
//               🔁
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               High-Volume Businesses
//             </h3>
//             <p className="mt-4 text-gray-600">
//               Track thousands of calls efficiently with intelligent automation.
//             </p>
//           </div>
//
//           {/* Card 2 */}
//           <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
//             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-xl text-white">
//               🎯
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               Lead Generation Teams
//             </h3>
//             <p className="mt-4 text-gray-600">
//               Optimize every lead with AI-powered call scoring and attribution.
//             </p>
//           </div>
//
//           {/* Card 3 */}
//           <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
//             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-xl text-white">
//               📈
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               Marketing & SEO Agencies
//             </h3>
//             <p className="mt-4 text-gray-600">
//               Offer clients smart tracking, reporting, and call
//               insights—automated.
//             </p>
//           </div>
//
//           {/* Card 4 */}
//           <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
//             <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-xl text-white">
//               🏪
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               Local Service Providers
//             </h3>
//             <p className="mt-4 text-gray-600">
//               Capture more calls, reduce missed opportunities, and grow
//               affordably.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
