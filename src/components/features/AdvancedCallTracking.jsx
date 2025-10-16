// components/TrackingSection.tsx
import { Screenshot } from '@/components/screenshot'
import Link from 'next/link'
export default function AdvancedCallTracking() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-6 py-3">
              <span className="font-bold text-blue-800">
                📞 Advanced Call Tracking
              </span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Never Miss Another{' '}
              <span className="bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Conversion Opportunity
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Stop guessing where your calls come from or losing leads along the
              way. CallGauge AI combines static numbers, DNI pools, and smart
              call flows to ensure every call is tracked with up to 98%
              accuracy, attributed to the right source and routed to the right
              person in real time.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  title: 'Dynamic Number Insertion (DNI)',
                  desc: ' Automatically swap numbers on your site using pools to capture campaign and channel tracking tags with up to 98% attribution accuracy.',
                  link: 'features/dni',
                },
                {
                  title: 'Call Detail Capture',
                  desc: 'Get full visibility into each call, including caller and destination, direction, duration, cost, status, and source (Google Ads, Organic, Direct, Radio, etc.).',
                },
                {
                  title: 'Call Tracking Numbers',
                  desc: 'Set up local or toll-free numbers in the U.S. & Canada as your campaigns grow, with area code search, pattern matching, and real-time status tracking.',
                  link: 'features/tracking-numbers',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">{item.desc}</p>
                    {/* only show Learn More if link exists */}
                    {item.link && (
                      <Link
                        href={item.link}
                        className="mt-2 inline-block font-bold text-blue-600 hover:underline"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Right Mockup*/}
          <div className="relative flex items-center justify-center">
            <div className="rotate-2 transform-gpu overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl transition-transform duration-500 hover:rotate-0">
              <Screenshot
                width={1116}
                height={686}
                alt="Never Miss Another Conversion Opportunity"
                src="/features/conversion-opportunity.png"
                className="h-auto w-full rounded-3xl sm:max-w-[76rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
