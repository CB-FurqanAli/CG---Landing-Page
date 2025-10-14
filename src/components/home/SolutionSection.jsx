// components/SolutionSection.tsx
'use client'
import { BarChart3, FileText, PlugZap, Shuffle } from 'lucide-react'

const features = [
  {
    icon: <Shuffle className="h-6 w-6 text-indigo-600" />,
    title: 'Dynamic Number Insertion (DNI)',
    description: (
      <>
        Stop guessing which of your ads actually drive phone calls. Dynamic
        Number Insertion automatically displays a unique phone number to each
        visitor based on their source, allowing you to track the exact origin of
        every lead with up to 98% attribution accuracy. This helps you
        reallocate your marketing spend instantly to the campaigns that deliver
        real ROI.
      </>
    ),
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    title: 'AI Call Summaries & Insights',
    description: (
      <>
        AI transforms your phone calls into concise, one-line summaries
        featuring key highlights, sentiment analysis and lead scores, all with
        over 95% transcription accuracy. Identify your high-value leads in
        seconds and focus your marketing on the campaigns that truly generate
        revenue.
      </>
    ),
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    title: 'Real-Time Analytics & ROI Attribution',
    description: (
      <>
        See your marketing performance come to life with instant dashboards that
        track call volume, conversions and ROI by source, all with up to 98%
        attribution accuracy. Finally, you can make confident, data-backed
        decisions knowing exactly where your marketing spend delivers real
        results.
      </>
    ),
  },
  {
    icon: <PlugZap className="h-6 w-6 text-indigo-600" />,
    title: 'Native Integrations',
    description: (
      <>
        Connect CallGauge AI directly with your existing marketing stack,
        including Google Ads, HubSpot, Salesforce and many more. With Zapier and
        over 5,000 ready to go apps, setup takes less than 5 minutes, allowing
        you to start tracking and attributing ROI instantly.
      </>
    ),
  },
]

export default function SolutionSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2">
          <span className="text-sm font-semibold text-green-800">
            💡 THE SOLUTION
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
          Complete Call Attribution: Accurate, Fast, and Actionable
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          Identify the campaigns, keywords and channels that drive every phone
          lead with up to 98% accuracy. Get started in just under 5 minutes and
          use AI insights to double down your marketing efforts on what drives
          ROI.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                {feature.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Result Section */}
        <div className="mt-12 rounded-2xl bg-gray-50 p-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            The Result: Complete Marketing Clarity
          </h3>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-gray-600">
            With CallGauge AI, you’ll finally see the full picture of your
            marketing performance:
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                stat: 'Maximize ROI',
                desc: 'Invest only in campaigns that drive real phone leads.',
                color: 'text-green-600 mt-2.5 text-[28px]',
              },
              {
                stat: '98%',
                desc: 'Attribution accuracy — every call tied to the exact campaign, keyword, and channel.',
                color: 'text-blue-600',
              },
              {
                stat: '5 min',
                desc: 'Setup time — be live faster than other call tracking tools.',
                color: 'text-purple-600',
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
