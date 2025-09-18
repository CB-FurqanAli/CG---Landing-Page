'use client'
export default function AnalyticsSection2() {
  return (
    <section id="analytics" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-full bg-red-100 px-6 py-3">
              <span className="font-bold text-red-800">📊 ANALYTICS</span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Analytics &{' '}
              <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Dashboards
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Turn call data into actionable insights. CallGauge AI gives you
              real-time dashboards and automated reports that track ROI,
              conversions, and channel performance, so you can make smarter
              decisions, faster.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Custom Dashboards',
                  desc: 'Build client- or campaign-specific dashboards to visualize call volume, conversions, and ROI in one place.',
                },
                {
                  title: 'Automated Reporting',
                  desc: 'Save hours of manual work with branded, scheduled reports delivered straight to your inbox or your clients.',
                },
                {
                  title: 'Revenue & ROI Tracking',
                  desc: 'Go beyond call counts. Track CPA, ROAS, and revenue by channel in real time to prove marketing impact.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl">
                Explore Analytics Suite
              </button>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          {/*<div>*/}
          {/*  <div className="-rotate-2 transform rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl transition-transform duration-500 hover:rotate-0">*/}
          {/*    /!* Header *!/*/}
          {/*    <div className="mb-6 flex items-center justify-between">*/}
          {/*      <h3 className="text-xl font-bold text-gray-900">*/}
          {/*        Marketing Performance Dashboard*/}
          {/*      </h3>*/}
          {/*      <div className="flex space-x-2">*/}
          {/*        <div className="h-3 w-3 rounded-full bg-red-400"></div>*/}
          {/*        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>*/}
          {/*        <div className="h-3 w-3 rounded-full bg-green-400"></div>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    /!* Key Metrics *!/*/}
          {/*    <div className="mb-6 grid grid-cols-3 gap-4">*/}
          {/*      <div className="rounded-xl bg-green-50 p-4 text-center">*/}
          {/*        <div className="text-2xl font-bold text-green-600">247</div>*/}
          {/*        <div className="text-xs text-gray-600">Total Calls</div>*/}
          {/*        <div className="text-xs text-green-600">↑ 23%</div>*/}
          {/*      </div>*/}
          {/*      <div className="rounded-xl bg-blue-50 p-4 text-center">*/}
          {/*        <div className="text-2xl font-bold text-blue-600">68%</div>*/}
          {/*        <div className="text-xs text-gray-600">Conversion Rate</div>*/}
          {/*        <div className="text-xs text-blue-600">↑ 12%</div>*/}
          {/*      </div>*/}
          {/*      <div className="rounded-xl bg-purple-50 p-4 text-center">*/}
          {/*        <div className="text-2xl font-bold text-purple-600">$47k</div>*/}
          {/*        <div className="text-xs text-gray-600">Revenue</div>*/}
          {/*        <div className="text-xs text-purple-600">↑ 34%</div>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    /!* Channels *!/*/}
          {/*    <div className="mb-4 rounded-xl bg-gray-50 p-4">*/}
          {/*      <h4 className="mb-3 text-sm font-bold text-gray-900">*/}
          {/*        Top Performing Channels*/}
          {/*      </h4>*/}
          {/*      <div className="space-y-3">*/}
          {/*        {[*/}
          {/*          {*/}
          {/*            color: 'bg-blue-500',*/}
          {/*            label: 'Google Ads',*/}
          {/*            stats: '89 calls • $18.2k revenue',*/}
          {/*          },*/}
          {/*          {*/}
          {/*            color: 'bg-purple-500',*/}
          {/*            label: 'Facebook Ads',*/}
          {/*            stats: '64 calls • $12.1k revenue',*/}
          {/*          },*/}
          {/*          {*/}
          {/*            color: 'bg-green-500',*/}
          {/*            label: 'Organic Search',*/}
          {/*            stats: '53 calls • $8.7k revenue',*/}
          {/*          },*/}
          {/*        ].map((ch, idx) => (*/}
          {/*          <div*/}
          {/*            key={idx}*/}
          {/*            className="flex items-center justify-between"*/}
          {/*          >*/}
          {/*            <div className="flex items-center space-x-2">*/}
          {/*              <div className={`h-3 w-3 ${ch.color} rounded-full`} />*/}
          {/*              <span className="text-sm text-gray-700">*/}
          {/*                {ch.label}*/}
          {/*              </span>*/}
          {/*            </div>*/}
          {/*            <div className="text-sm font-medium text-gray-900">*/}
          {/*              {ch.stats}*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        ))}*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    /!* Mini Chart *!/*/}
          {/*    <div className="rounded-xl bg-gray-50 p-4">*/}
          {/*      <div className="mb-2 flex items-center justify-between">*/}
          {/*        <span className="text-sm font-medium text-gray-700">*/}
          {/*          Calls This Week*/}
          {/*        </span>*/}
          {/*        <span className="text-xs text-gray-500">Daily breakdown</span>*/}
          {/*      </div>*/}
          {/*      <div className="flex h-12 items-end space-x-1">*/}
          {/*        {['60%', '80%', '45%', '90%', '70%', '100%', '30%'].map(*/}
          {/*          (h, idx) => (*/}
          {/*            <div*/}
          {/*              key={idx}*/}
          {/*              className={`bg-blue-${idx === 5 ? '500' : idx === 6 ? '300' : '400'} rounded-t`}*/}
          {/*              style={{ height: h, width: '12px' }}*/}
          {/*            />*/}
          {/*          ),*/}
          {/*        )}*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )
}
