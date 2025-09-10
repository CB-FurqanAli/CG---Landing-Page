// components/SolutionSection.tsx
'use client'
import { BarChart3, FileText, PlugZap, Shuffle } from 'lucide-react'

const features = [
  {
    icon: <Shuffle className="h-6 w-6 text-indigo-600" />,
    title: 'Dynamic Number Insertion (DNI)',
    description: (
      <>
        Stop guessing which ads actually drive phone calls. DNI automatically
        shows a unique number to each visitor based on their source, so you know
        exactly where every lead comes from — with{' '}
        <span className="font-semibold">98% attribution accuracy</span>.
        Reallocate your spend instantly to the campaigns that deliver real ROI.
      </>
    ),
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    title: 'AI Call Summaries & Insights',
    description: (
      <>
        AI turns raw phone calls into clear, one-line summaries with key
        highlights, sentiment and lead scores — with{' '}
        <span className="font-semibold">95%+ transcription accuracy</span>.
        Identify your high-value leads in seconds and double down on the
        campaigns that actually generate revenue.
      </>
    ),
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    title: 'Real-Time Analytics & ROI Attribution',
    description: (
      <>
        Instant dashboards track call volume, conversions, and ROI by source
        with <span className="font-semibold">98% attribution accuracy</span>.
        Finally, make your spend decisions confidently based on complete data —
        not guesswork.
      </>
    ),
  },
  {
    icon: <PlugZap className="h-6 w-6 text-indigo-600" />,
    title: 'Native Integrations',
    description: (
      <>
        Plug CallGauge AI directly into your marketing stack — from Google Ads
        to HubSpot, Salesforce and more. With Zapier and{' '}
        <span className="font-semibold">5,000+ apps</span> ready to go, setup
        takes less than 5 minutes, so you can start attributing ROI instantly.
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
          Complete Call Attribution — Accurate, Fast, Actionable
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          Identify the campaigns, keywords and channels behind every phone lead
          with <span className="font-semibold">98% accuracy</span>. Go live in
          less than 5 minutes and use AI insights to double down on what drives
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
