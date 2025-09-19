// components/TrackingSection.tsx
import Link from 'next/link'
export default function TrackingSection2() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-6 py-3">
              <span className="font-bold text-blue-800">📞 CALL TRACKING</span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Advanced Call{' '}
              <span className="bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Tracking
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Stop guessing where your calls come from or losing leads along the
              way. CallGauge AI combines static numbers, DNI pools, and smart
              call flows to ensure every call is tracked with 98% accuracy,
              attributed to the right source and routed to the right person in
              real time.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  title: 'Dynamic Number Insertion (DNI)',
                  desc: ' Automatically swap numbers on your site using pools to capture campaign and channel tracking tags with 98% attribution accuracy.',
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

            {/* CTA */}
            {/*<div className="mt-10">*/}
            {/*  <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">*/}
            {/*    Start Tracking Calls Now*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>

          {/* Right Mockup */}
          {/*<div className="relative">*/}
          {/*  <div className="rotate-2 transform rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl transition-transform duration-500 hover:rotate-0">*/}
          {/*    <div className="mb-6 flex items-center justify-between">*/}
          {/*      <h3 className="text-xl font-bold text-gray-900">*/}
          {/*        Active Tracking Numbers*/}
          {/*      </h3>*/}
          {/*      <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-600">*/}
          {/*        + Add Number*/}
          {/*      </button>*/}
          {/*    </div>*/}

          {/*    <div className="space-y-4">*/}
          {/*      /!* Number 1 *!/*/}
          {/*      <div className="rounded-xl bg-gray-50 p-4">*/}
          {/*        <div className="mb-2 flex items-center justify-between">*/}
          {/*          <span className="font-bold text-gray-900">*/}
          {/*            (555) 123-CALL*/}
          {/*          </span>*/}
          {/*          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">*/}
          {/*            Active*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*        <div className="mb-3 text-sm text-gray-600">*/}
          {/*          Google Ads → Landing Page A*/}
          {/*        </div>*/}
          {/*        <div className="flex items-center space-x-4 text-xs text-gray-500">*/}
          {/*          <span>47 calls today</span>*/}
          {/*          <span>•</span>*/}
          {/*          <span>68% conversion rate</span>*/}
          {/*          <span>•</span>*/}
          {/*          <span>$2,340 revenue</span>*/}
          {/*        </div>*/}
          {/*      </div>*/}

          {/*      /!* Number 2 *!/*/}
          {/*      <div className="rounded-xl bg-gray-50 p-4">*/}
          {/*        <div className="mb-2 flex items-center justify-between">*/}
          {/*          <span className="font-bold text-gray-900">*/}
          {/*            (555) 456-SALE*/}
          {/*          </span>*/}
          {/*          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">*/}
          {/*            Active*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*        <div className="mb-3 text-sm text-gray-600">*/}
          {/*          Facebook Ads → Product Page*/}
          {/*        </div>*/}
          {/*        <div className="flex items-center space-x-4 text-xs text-gray-500">*/}
          {/*          <span>23 calls today</span>*/}
          {/*          <span>•</span>*/}
          {/*          <span>52% conversion rate</span>*/}
          {/*          <span>•</span>*/}
          {/*          <span>$1,180 revenue</span>*/}
          {/*        </div>*/}
          {/*      </div>*/}

          {/*      /!* Number 3 *!/*/}
          {/*      <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4">*/}
          {/*        <div className="mb-2 flex items-center justify-between">*/}
          {/*          <span className="font-bold text-gray-900">*/}
          {/*            (555) 789-INFO*/}
          {/*          </span>*/}
          {/*          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">*/}
          {/*            Ringing*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*        <div className="mb-3 text-sm text-gray-600">*/}
          {/*          🔴 LIVE: Organic Search → Contact Page*/}
          {/*        </div>*/}
          {/*        <div className="text-xs font-medium text-blue-600">*/}
          {/*          Call in progress - 0:43*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )
}
