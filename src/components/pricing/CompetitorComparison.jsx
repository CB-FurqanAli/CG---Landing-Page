export default function CompetitorComparison() {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-black text-gray-900">
            How CallGauge AI Compares
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            See why thousands of businesses choose CallGauge AI over the
            competition
          </p>
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex items-center justify-center gap-3 text-blue-800">
              <span className="text-2xl" aria-hidden="true">
                💡
              </span>
              <span className="font-semibold">
                All competitor pricing verified as of September 2025
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="p-6 text-left font-bold">Platform</th>
                  <th className="p-6 text-center font-bold">Starter Plan</th>
                  <th className="p-6 text-center font-bold">Business Plan</th>
                  <th className="p-6 text-center font-bold">Per Number Cost</th>
                  <th className="p-6 text-center font-bold">Per Minute Cost</th>
                  <th className="p-6 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {/* CallGauge AI */}
                <tr className="border-4 border-green-500 bg-green-50">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                        ✓
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          CallGauge AI
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          ⭐ BEST VALUE
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $99/month
                    </div>
                    <div className="text-sm text-gray-600">
                      10 numbers, 1K minutes
                    </div>
                    <div className="text-xs font-semibold text-green-600">
                      30-day free trial
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $299/month
                    </div>
                    <div className="text-sm text-gray-600">
                      50 numbers, 5K minutes
                    </div>
                    <div className="text-xs font-semibold text-green-600">
                      AI transcription included
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-green-600">
                      $2.00
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-green-600">
                      $0.03
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">
                      Custom
                    </div>
                    <div className="text-xs text-green-600">
                      Volume discounts
                    </div>
                  </td>
                </tr>

                {/* CallRail */}
                <tr className="border-b border-gray-200">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white">
                        CR
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          CallRail
                        </div>
                        <div className="text-sm text-gray-500">
                          Market leader
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $165/month
                    </div>
                    <div className="text-sm text-gray-600">
                      5 numbers, 500 minutes
                    </div>
                    <div className="text-xs text-red-600">❌ No free trial</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $395/month
                    </div>
                    <div className="text-sm text-gray-600">
                      25 numbers, 2.5K minutes
                    </div>
                    <div className="text-xs text-orange-600">
                      ⚠️ Transcription extra
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-red-600">$5.00</div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-red-600">$0.05</div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">
                      $1,200+
                    </div>
                    <div className="text-xs text-red-600">Expensive</div>
                  </td>
                </tr>

                {/* Invoca */}
                <tr className="border-b border-gray-200">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white">
                        IN
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          Invoca
                        </div>
                        <div className="text-sm text-gray-500">
                          Enterprise focused
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-red-600">
                      No starter plan
                    </div>
                    <div className="text-sm text-gray-600">Enterprise only</div>
                    <div className="text-xs text-red-600">
                      ❌ No small business
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-red-600">
                      $1,500+/month
                    </div>
                    <div className="text-sm text-gray-600">Custom setup</div>
                    <div className="text-xs text-red-600">❌ Complex setup</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-red-600">$8.00+</div>
                    <div className="text-xs text-gray-600">Enterprise rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-red-600">$0.08+</div>
                    <div className="text-xs text-gray-600">Enterprise rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">
                      $5,000+
                    </div>
                    <div className="text-xs text-gray-600">Custom pricing</div>
                  </td>
                </tr>

                {/* CallTrackingMetrics */}
                <tr className="border-b border-gray-200">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white">
                        CTM
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          CallTrackingMetrics
                        </div>
                        <div className="text-sm text-gray-500">
                          Mid-market solution
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $139/month
                    </div>
                    <div className="text-sm text-gray-600">
                      5 numbers, 1K minutes
                    </div>
                    <div className="text-xs text-orange-600">
                      ⚠️ Limited features
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $349/month
                    </div>
                    <div className="text-sm text-gray-600">
                      25 numbers, 3K minutes
                    </div>
                    <div className="text-xs text-orange-600">
                      ⚠️ Basic AI features
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-orange-600">
                      $3.50
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-orange-600">
                      $0.04
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">$899+</div>
                    <div className="text-xs text-orange-600">
                      Limited customization
                    </div>
                  </td>
                </tr>

                {/* WhatConverts */}
                <tr className="border-b border-gray-200">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white">
                        WC
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          WhatConverts
                        </div>
                        <div className="text-sm text-gray-500">
                          Attribution focused
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $99/month
                    </div>
                    <div className="text-sm text-gray-600">
                      5 numbers, 500 minutes
                    </div>
                    <div className="text-xs text-red-600">
                      ❌ No call recording
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-xl font-bold text-gray-900">
                      $299/month
                    </div>
                    <div className="text-sm text-gray-600">
                      15 numbers, 1.5K minutes
                    </div>
                    <div className="text-xs text-red-600">
                      ❌ Limited AI features
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-orange-600">
                      $4.00
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-orange-600">
                      $0.06
                    </div>
                    <div className="text-xs text-gray-600">Overage rate</div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">$799+</div>
                    <div className="text-xs text-orange-600">
                      Basic enterprise
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center text-white">
            <h3 className="mb-2 text-3xl font-bold">Feature Comparison</h3>
            <p className="text-lg opacity-90">
              See what you get with CallGauge AI vs the competition
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-6 text-left font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="p-6 text-center font-semibold text-green-600">
                    CallGauge AI
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600">
                    CallRail
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600">
                    Invoca
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600">
                    CTM
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600">
                    WhatConverts
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium">AI Call Transcription</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">Included</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      $
                    </span>
                    <div className="mt-1 text-xs text-orange-600">
                      Extra cost
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">Included</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">
                      Basic only
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Not available
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-6 font-medium">AI Call Summaries</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Advanced AI
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">Manual only</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Basic</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Not available
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Not available
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium">White-Label Client Portal</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Agency plan
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Not available
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      $
                    </span>
                    <div className="mt-1 text-xs text-orange-600">
                      Enterprise only
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Limited</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      ✗
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Not available
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-6 font-medium">Multi-Touch Attribution</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Advanced models
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Basic</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Enterprise level
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Basic</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Core feature
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-6 font-medium">Real-Time Alerts</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Customizable
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Basic alerts
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">Advanced</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">Standard</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Limited</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-6 font-medium">API Access</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Full REST API
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      $
                    </span>
                    <div className="mt-1 text-xs text-orange-600">
                      Higher plans
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      ✓
                    </span>
                    <div className="mt-1 text-xs text-green-600">
                      Enterprise
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      $
                    </span>
                    <div className="mt-1 text-xs text-orange-600">
                      Extra cost
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      ~
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Limited</div>
                  </td>
                </tr>

                <tr>
                  <td className="p-6 font-medium">Setup Complexity</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                      5
                    </span>
                    <div className="mt-1 text-xs text-green-600">Minutes</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      30
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Minutes</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                      Days
                    </span>
                    <div className="mt-1 text-xs text-red-600">
                      Complex setup
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      20
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Minutes</div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      15
                    </span>
                    <div className="mt-1 text-xs text-orange-600">Minutes</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
            <div className="mb-4 text-center text-4xl" aria-hidden="true">
              💰
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-green-800">
              Save 40-60% vs Competitors
            </h3>
            <div className="space-y-3 text-sm text-green-700">
              <div className="flex justify-between">
                <span>CallRail equivalent:</span>
                <span className="font-semibold">$395/month</span>
              </div>
              <div className="flex justify-between">
                <span>CallGauge AI Business:</span>
                <span className="font-semibold">$299/month</span>
              </div>
              <div className="flex justify-between border-t border-green-300 pt-2">
                <span>Annual savings:</span>
                <span className="font-bold text-green-800">$1,152</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <div className="mb-4 text-center text-4xl" aria-hidden="true">
              🚀
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-blue-800">
              5x Faster Setup
            </h3>
            <div className="space-y-3 text-sm text-blue-700">
              <div className="flex justify-between">
                <span>Invoca setup:</span>
                <span className="font-semibold">2-4 weeks</span>
              </div>
              <div className="flex justify-between">
                <span>CallGauge AI setup:</span>
                <span className="font-semibold">5 minutes</span>
              </div>
              <div className="flex justify-between border-t border-blue-300 pt-2">
                <span>Time to value:</span>
                <span className="font-bold text-blue-800">Same day</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 p-8">
            <div className="mb-4 text-center text-4xl" aria-hidden="true">
              🤖
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-purple-800">
              AI-First Platform
            </h3>
            <div className="space-y-3 text-sm text-purple-700">
              <div className="flex justify-between">
                <span>AI transcription:</span>
                <span className="font-semibold">✓ Included</span>
              </div>
              <div className="flex justify-between">
                <span>AI call summaries:</span>
                <span className="font-semibold">✓ Included</span>
              </div>
              <div className="flex justify-between border-t border-purple-300 pt-2">
                <span>Competitors:</span>
                <span className="font-bold text-purple-800">Extra cost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
