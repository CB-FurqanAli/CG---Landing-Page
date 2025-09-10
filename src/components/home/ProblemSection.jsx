'use client'
// app/components/CallAttributionProblem.tsx
export default function ProblemSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            The Call Attribution Gap That’s Costing Marketing ROI
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            You spend thousands on ads, but without call attribution you can’t
            see which campaigns actually drive phone calls. That blind spot
            wastes ad spend, hides real performance, and eats away at your ROI.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: '😵',
              title: 'No Call Attribution',
              text: 'Without attribution, $100K in phone leads can look like $0 in your reports — leaving your best campaigns invisible.',
              bg: 'bg-red-100',
            },
            {
              icon: '💸',
              title: 'Wasted Ad Spend',
              text: 'Thousands wasted on ads that don’t convert — while the ones driving real revenue go unnoticed.',
              bg: 'bg-yellow-100',
            },
            {
              icon: '📊',
              title: 'Incomplete Data',
              text: 'Up to 60% of revenue from phone calls is missing in your reports — decisions made blind, ROI lost.',
              bg: 'bg-blue-100',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className={`h-16 w-16 ${item.bg} mx-auto mb-6 flex items-center justify-center rounded-full`}
              >
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Result Section */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">The Result?</h3>
          <p className="mb-6 text-lg text-gray-600">
            Without call attribution, you’re flying blind, making decisions
            based on incomplete data, wasting ad spend and losing out on
            thousands in revenue.
          </p>

          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {[
              {
                stat: '78%',
                desc: 'of mobile searches result in phone calls, yet most go unattributed.',
                color: 'text-red-600',
              },
              {
                stat: '65%',
                desc: 'of marketing budgets lack proper attribution to phone leads.',
                color: 'text-yellow-600',
              },
              {
                stat: '10-15x',
                desc: 'higher conversion rate for phone calls compared to web forms.',
                color: 'text-blue-600',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className={`text-2xl font-bold ${item.color} mb-1`}>
                  {item.stat}
                </div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
