'use client'

import { Button } from '@/components/button'

export default function ComparisonPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            CallGauge vs CallScaler vs CallRail
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            See how{' '}
            <span className="font-semibold text-blue-600">CallGauge</span>
            outperforms the competition with better pricing, powerful features,
            and more value for agencies and businesses.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse bg-white text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-6 py-4 font-semibold text-blue-600 text-gray-900">
                  CallGauge ⭐
                </th>
                <th className="px-6 py-4 font-semibold text-gray-900">
                  CallScaler
                </th>
                <th className="px-6 py-4 font-semibold text-gray-900">
                  CallRail
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Transparent Pricing */}
              <tr>
                <td className="px-6 py-4">Transparent Pricing</td>
                <td className="px-6 py-4">✅ Clear per-minute & per-SMS</td>
                <td className="px-6 py-4">⚠ Limited</td>
                <td className="px-6 py-4">❌ Hidden add-ons</td>
              </tr>

              {/* Free Credits */}
              <tr>
                <td className="px-6 py-4">Free Usage Credits</td>
                <td className="px-6 py-4">✅ $20-$250 depending on plan</td>
                <td className="px-6 py-4">❌ None</td>
                <td className="px-6 py-4">❌ None</td>
              </tr>

              {/* AI Call Tracking */}
              <tr>
                <td className="px-6 py-4">AI Call Tracking & Transcription</td>
                <td className="px-6 py-4">✅ Advanced AI summaries</td>
                <td className="px-6 py-4">❌ Not included</td>
                <td className="px-6 py-4">⚠ Basic add-on</td>
              </tr>

              {/* Local Numbers */}
              <tr>
                <td className="px-6 py-4">Unlimited Local Numbers</td>
                <td className="px-6 py-4">✅ $0.50/month</td>
                <td className="px-6 py-4">⚠ Limited availability</td>
                <td className="px-6 py-4">❌ Extra cost</td>
              </tr>

              {/* Client Portal */}
              <tr>
                <td className="px-6 py-4">Client Portal & White-Label</td>
                <td className="px-6 py-4">✅ Yes (with Pro+ plans)</td>
                <td className="px-6 py-4">⚠ Limited</td>
                <td className="px-6 py-4">❌ No</td>
              </tr>

              {/* Pay per Call Billing */}
              <tr>
                <td className="px-6 py-4">Pay-Per-Call Billing Suite</td>
                <td className="px-6 py-4">✅ Included (Pro+)</td>
                <td className="px-6 py-4">❌</td>
                <td className="px-6 py-4">❌</td>
              </tr>

              {/* Advanced Call Flows */}
              <tr>
                <td className="px-6 py-4">
                  Advanced Call Flows (IVR, Multi-ring)
                </td>
                <td className="px-6 py-4">✅ Included in Unlimited</td>
                <td className="px-6 py-4">⚠ Basic</td>
                <td className="px-6 py-4">⚠ Basic</td>
              </tr>

              {/* Priority Support */}
              <tr>
                <td className="px-6 py-4">Priority Support</td>
                <td className="px-6 py-4">✅ 24/7 Priority</td>
                <td className="px-6 py-4">❌ Standard only</td>
                <td className="px-6 py-4">⚠ Paid upgrade</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button href="#" className="py-4">
            Get Started with CallGauge
          </Button>
        </div>
      </div>
    </section>
  )
}
