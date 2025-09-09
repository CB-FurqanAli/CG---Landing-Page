'use client'
// app/components/CallAttributionSolution.tsx
export default function CallAttributionSolution() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2">
            <span className="text-sm font-semibold text-green-800">
              💡 THE SOLUTION
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Complete Call Attribution That Actually Works
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            See exactly which marketing campaigns, keywords, and channels drive
            your most valuable phone leads with 98% accuracy.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2">
              <span className="text-sm font-semibold text-blue-800">
                🎯 SMART ATTRIBUTION
              </span>
            </div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Dynamic Number Insertion (DNI)
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Automatically show different phone numbers to visitors from
              different campaigns. Track calls from Google Ads, Facebook,
              organic search, email, and more with 98% accuracy.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: 'JavaScript-free option',
                  desc: 'Works on any website without complex implementations',
                },
                {
                  title: 'Multi-touch attribution',
                  desc: 'Credit all touchpoints in the customer journey',
                },
                {
                  title: 'Real-time insights',
                  desc: 'See call attribution instantly, no delays',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8
                      12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <h4 className="mb-4 font-bold text-gray-900">
                  Live Attribution Dashboard
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      label: 'Google Ads → (555) 123-4567',
                      revenue: '$2,450 revenue',
                      color: 'text-green-600',
                      bg: 'bg-green-50',
                    },
                    {
                      label: 'SEO → (555) 123-4568',
                      revenue: '$1,890 revenue',
                      color: 'text-blue-600',
                      bg: 'bg-blue-50',
                    },
                    {
                      label: 'Facebook → (555) 123-4569',
                      revenue: '$890 revenue',
                      color: 'text-purple-600',
                      bg: 'bg-purple-50',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 ${item.bg} rounded-lg`}
                    >
                      <span className="text-sm">{item.label}</span>
                      <span className={`${item.color} font-semibold`}>
                        {item.revenue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="rounded-2xl bg-gray-50 p-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            The Result: Complete Marketing Clarity
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                stat: '247%',
                desc: 'Average ROI Increase',
                color: 'text-green-600',
              },
              {
                stat: '98%',
                desc: 'Attribution Accuracy',
                color: 'text-blue-600',
              },
              { stat: '5', desc: 'Minutes Setup', color: 'text-purple-600' },
              {
                stat: '2,500+',
                desc: 'Happy Customers',
                color: 'text-orange-600',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className={`text-4xl font-bold ${item.color} mb-2`}>
                  {item.stat}
                </div>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// import { Button } from '@/components/button'
//
// export const TrackMoreNumbers = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-32 pb-20">
//       <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
//         {/* Heading */}
//         <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-[41px]">
//           Track <span className="text-indigo-600">6x More Numbers</span> — Stay
//           Within Budget
//         </h2>
//
//         {/* Subtext */}
//         <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
//           CallGauge AI redefines call tracking by offering industry-low pricing
//           that lets you scale without limits. Monitor more campaigns, support
//           more clients, and cover more websites—without stretching your budget.
//         </p>
//
//         {/* Highlight Card */}
//         <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
//           <p className="text-xl font-semibold text-gray-900">
//             Experience call tracking freedom with
//             <span className="block text-indigo-600">
//               no hidden fees, no caps, and just $0.50 per number.
//             </span>
//           </p>
//         </div>
//
//         {/* CTA Buttons */}
//         <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
//           <Button href="#" className="px-8 py-3 text-lg font-semibold">
//             Start for free
//           </Button>
//           <Button
//             variant="secondary"
//             href="#"
//             className="px-8 py-3 text-lg font-semibold"
//           >
//             Watch a demo
//           </Button>
//         </div>
//         {/* Footnote */}
//         <p className="mt-4 text-sm font-medium text-red-500 italic">
//           *No credit card needed
//         </p>
//       </div>
//     </section>
//   )
// }
