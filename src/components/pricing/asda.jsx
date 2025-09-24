'use client'

import { CheckCircle, DollarSign, Star, Users, Zap } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses testing call tracking',
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      '5 tracking numbers',
      '500 minutes included',
      'Call recording & transcription',
      'Basic reporting',
      'Email support',
    ],
    included: { numbers: 5, minutes: 500 },
    additionalRates: { number: '$0.50', minute: '$0.05', sms: '$0.02' },
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Business',
    description: 'Ideal for growing businesses with multiple campaigns',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      '25 tracking numbers',
      '2,000 minutes included',
      'AI call summaries',
      'Advanced attribution',
      'CRM integrations',
      'Priority support',
    ],
    included: { numbers: 25, minutes: 2000 },
    additionalRates: { number: '$0.40', minute: '$0.04', sms: '$0.015' },
    isPopular: true,
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Agency',
    description: 'Built for agencies managing multiple clients',
    monthlyPrice: 299,
    annualPrice: 239,
    features: [
      '100 tracking numbers',
      '8,000 minutes included',
      'White-label client portal',
      'Multi-client management',
      'Custom reporting',
      'Dedicated support',
    ],
    included: { numbers: 100, minutes: 8000 },
    additionalRates: { number: '$0.30', minute: '$0.03', sms: '$0.01' },
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Unlimited numbers & minutes',
      'Custom integrations',
      'SLA guarantees',
      'Dedicated account manager',
      '24/7 phone support',
      'On-premise deployment',
    ],
    included: { numbers: Infinity, minutes: Infinity },
    additionalRates: { number: 'Volume', minute: 'Volume', sms: 'Volume' },
    buttonText: 'Contact Sales',
  },
]

const competitors = [
  {
    name: 'CallGauge AI',
    logo: '✓',
    starter: '$99/month',
    business: '$299/month',
    perNumber: '$2.00',
    perMinute: '$0.03',
    enterprise: 'Custom',
    isRecommended: true,
  },
  {
    name: 'CallRail',
    logo: 'CR',
    starter: '$165/month',
    business: '$395/month',
    perNumber: '$5.00',
    perMinute: '$0.05',
    enterprise: '$1,200+',
  },
  {
    name: 'Invoca',
    logo: 'IN',
    starter: 'No starter plan',
    business: '$1,500+/month',
    perNumber: '$8.00+',
    perMinute: '$0.08+',
    enterprise: '$5,000+',
  },
  {
    name: 'CallTrackingMetrics',
    logo: 'CTM',
    starter: '$139/month',
    business: '$349/month',
    perNumber: '$3.50',
    perMinute: '$0.04',
    enterprise: '$899+',
  },
]

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [calculatorData, setCalculatorData] = useState({
    numbers: 10,
    minutes: 1000,
    sms: 200,
  })

  const calculateCost = () => {
    const { numbers, minutes, sms } = calculatorData

    let baseCost = 0
    let plan = 'Starter'

    if (numbers <= 5 && minutes <= 500) {
      baseCost = 29
      plan = 'Starter'
    } else if (numbers <= 25 && minutes <= 2000) {
      baseCost = 99
      plan = 'Business'
    } else if (numbers <= 100 && minutes <= 8000) {
      baseCost = 299
      plan = 'Agency'
    } else {
      baseCost = 599
      plan = 'Enterprise'
    }

    const extraNumbers = Math.max(
      0,
      numbers -
        (plan === 'Starter'
          ? 5
          : plan === 'Business'
            ? 25
            : plan === 'Agency'
              ? 100
              : 999),
    )
    const extraMinutes = Math.max(
      0,
      minutes -
        (plan === 'Starter'
          ? 500
          : plan === 'Business'
            ? 2000
            : plan === 'Agency'
              ? 8000
              : 999999),
    )

    const numberCost = extraNumbers * 0.4
    const minuteCost = extraMinutes * 0.04
    const smsCost = sms * 0.015

    return {
      total: Math.round(baseCost + numberCost + minuteCost + smsCost),
      plan,
    }
  }

  const { total, plan } = calculateCost()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl">
            Start tracking calls in minutes with pricing that scales with your
            business. No hidden fees, no surprise charges, no long-term
            contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {['30-day free trial', 'No setup fees', 'Cancel anytime'].map(
              (feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>{feature}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex justify-center">
            <div className="flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  !isAnnual
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  isAnnual
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual{' '}
                <span className="ml-1 text-xs text-green-600">(Save 20%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.isPopular
                    ? 'border-2 border-purple-500 shadow-xl shadow-purple-500/20'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <div className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600">{plan.description}</p>
                  <div>
                    {plan.name === 'Enterprise' ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900">
                          Custom
                        </span>
                        <div className="mt-2 text-sm text-gray-600">
                          Volume pricing available
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-lg text-gray-600">/month</span>
                        {isAnnual && (
                          <div className="mt-1 text-sm text-green-600">
                            Billed annually
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="text-sm font-medium text-gray-700">
                    {plan.name === 'Business'
                      ? 'Everything in Starter, plus:'
                      : plan.name === 'Agency'
                        ? 'Everything in Business, plus:'
                        : plan.name === 'Enterprise'
                          ? 'Everything in Agency, plus:'
                          : 'Included:'}
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 text-xs text-gray-500">
                  {plan.name === 'Enterprise'
                    ? 'Volume discounts start at 1,000+ numbers'
                    : `Additional: ${plan.additionalRates.number}/number, ${plan.additionalRates.minute}/minute, ${plan.additionalRates.sms}/SMS`}
                </div>

                <button
                  className={`w-full rounded-xl py-3 font-semibold transition-colors duration-300 ${
                    plan.isPopular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Pricing Transparency */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Transparent Usage Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No surprises. No hidden fees. Pay only for what you use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 text-3xl">📞</div>
              <h3 className="mb-2 text-xl font-bold">Tracking Numbers</h3>
              <div className="mb-2 text-2xl font-bold text-blue-600">
                $0.30 - $0.50
              </div>
              <div className="text-sm text-gray-600">per number per month</div>
              <div className="mt-2 text-xs text-gray-500">
                Local & toll-free available
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 text-3xl">⏱️</div>
              <h3 className="mb-2 text-xl font-bold">Call Minutes</h3>
              <div className="mb-2 text-2xl font-bold text-blue-600">
                $0.03 - $0.05
              </div>
              <div className="text-sm text-gray-600">per minute</div>
              <div className="mt-2 text-xs text-gray-500">
                Bulk discounts available
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 text-3xl">💬</div>
              <h3 className="mb-2 text-xl font-bold">SMS Messages</h3>
              <div className="mb-2 text-2xl font-bold text-blue-600">
                $0.01 - $0.02
              </div>
              <div className="text-sm text-gray-600">per message</div>
              <div className="mt-2 text-xs text-gray-500">
                Inbound & outbound
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  Volume Discounts Available
                </h4>
                <p className="text-sm text-gray-600">
                  Higher-tier plans include more included usage and lower
                  per-unit costs. Enterprise customers get volume discounts
                  starting at 1,000+ numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Tool */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Pricing Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Estimate your monthly costs based on your usage
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Tracking Numbers
                </label>
                <input
                  type="number"
                  value={calculatorData.numbers}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      numbers: parseInt(e.target.value) || 0,
                    })
                  }
                  min="1"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Monthly Minutes
                </label>
                <input
                  type="number"
                  value={calculatorData.minutes}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      minutes: parseInt(e.target.value) || 0,
                    })
                  }
                  min="0"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Monthly SMS
                </label>
                <input
                  type="number"
                  value={calculatorData.sms}
                  onChange={(e) =>
                    setCalculatorData({
                      ...calculatorData,
                      sms: parseInt(e.target.value) || 0,
                    })
                  }
                  min="0"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
              <div className="mb-2 text-lg">Estimated Monthly Cost</div>
              <div className="text-4xl font-bold">${total}</div>
              <div className="mt-2 text-sm opacity-90">
                Recommended Plan: <span className="font-semibold">{plan}</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-800">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600">
              See what&#39;s included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl bg-white shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-left font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="bg-purple-50 p-6 text-center font-semibold text-gray-900">
                    Business
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-900">
                    Agency
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-6 font-medium">Tracking Numbers</td>
                  <td className="p-6 text-center">5</td>
                  <td className="bg-purple-50 p-6 text-center">25</td>
                  <td className="p-6 text-center">100</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-6 font-medium">Included Minutes</td>
                  <td className="p-6 text-center">500</td>
                  <td className="bg-purple-50 p-6 text-center">2,000</td>
                  <td className="p-6 text-center">8,000</td>
                  <td className="p-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-6 font-medium">AI Call Transcription</td>
                  <td className="p-6 text-center text-green-600">✓</td>
                  <td className="bg-purple-50 p-6 text-center text-green-600">
                    ✓
                  </td>
                  <td className="p-6 text-center text-green-600">✓</td>
                  <td className="p-6 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-6 font-medium">CRM Integrations</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="bg-purple-50 p-6 text-center text-green-600">
                    ✓
                  </td>
                  <td className="p-6 text-center text-green-600">✓</td>
                  <td className="p-6 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-6 font-medium">White-Label Portal</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="bg-purple-50 p-6 text-center text-gray-400">
                    —
                  </td>
                  <td className="p-6 text-center text-green-600">✓</td>
                  <td className="p-6 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-6 font-medium">24/7 Phone Support</td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="bg-purple-50 p-6 text-center text-gray-400">
                    —
                  </td>
                  <td className="p-6 text-center text-gray-400">—</td>
                  <td className="p-6 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              What Customers Say About Switching
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from businesses who made the switch to CallGauge AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Mitchell
                  </div>
                  <div className="text-sm text-gray-600">
                    Marketing Director, LegalEagle Law
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                  Switched from CallRail
                </div>
              </div>
              <blockquote className="mb-4 text-gray-700 italic">
                We were paying $450/month with CallRail for basic features.
                CallGauge AI gives us everything we need for $299, plus AI
                summaries that CallRail charged extra for. The savings alone
                paid for our annual subscription.
              </blockquote>
              <div className="text-sm font-semibold text-green-600">
                💰 Saving $1,800+ annually
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Mike Rodriguez
                  </div>
                  <div className="text-sm text-gray-600">
                    Agency Owner, Growth Digital
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Switched from CTM
                </div>
              </div>
              <blockquote className="mb-4 text-gray-700 italic">
                CallTrackingMetrics was clunky and expensive for our agency
                needs. CallGauge AI&#39;s white-label portal lets us manage 25+
                clients seamlessly. Setup took 5 minutes vs. hours with CTM.
              </blockquote>
              <div className="text-sm font-semibold text-blue-600">
                ⚡ 10x faster client onboarding
              </div>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 font-bold text-white">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Jennifer Chen
                  </div>
                  <div className="text-sm text-gray-600">
                    VP Marketing, TechFlow Solutions
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                  Switched from Invoca
                </div>
              </div>
              <blockquote className="mb-4 text-gray-700 italic">
                Invoca was overkill and cost us $3,000/month with a 6-month
                setup. CallGauge AI delivers the same attribution insights for
                under $800 and was live the same day. No regrets.
              </blockquote>
              <div className="text-sm font-semibold text-purple-600">
                🚀 Same-day implementation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                How does the free trial work?
              </h3>
              <p className="text-gray-600">
                Start with a 30-day free trial on any plan. No credit card
                required. You get full access to all features during your trial
                period.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                What happens if I exceed my included usage?
              </h3>
              <p className="text-gray-600">
                You&#39;ll be charged our transparent usage rates: $0.30-0.50
                per number, $0.03-0.05 per minute, and $0.01-0.02 per SMS.
                Higher-tier plans get better rates.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes! Upgrade or downgrade your plan at any time. Changes take
                effect immediately, and we&#39;ll prorate any billing
                differences.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                Are there any setup fees or contracts?
              </h3>
              <p className="text-gray-600">
                No setup fees, no long-term contracts. Pay month-to-month or
                save 20% with annual billing. Cancel anytime with no penalties.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                Do you offer volume discounts?
              </h3>
              <p className="text-gray-600">
                Yes! Enterprise customers with 1,000+ numbers get custom volume
                pricing. Contact our sales team to discuss your specific needs.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                How does CallGauge AI compare to CallRail?
              </h3>
              <p className="text-gray-600">
                CallGauge AI offers 40-60% lower pricing, AI transcription
                included (vs extra cost), faster setup (5 minutes vs 30+
                minutes), and better per-minute rates. Plus we include advanced
                attribution models at lower plan levels.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                Can I migrate from my current call tracking platform?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer free migration assistance from CallRail,
                Invoca, CTM, and other platforms. Our team will help transfer
                your numbers, settings, and historical data with zero downtime.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">
                Why is CallGauge AI more affordable than Invoca?
              </h3>
              <p className="text-gray-600">
                Invoca focuses exclusively on enterprise clients with complex
                implementations. CallGauge AI uses modern cloud architecture and
                AI automation to deliver enterprise-grade features at a fraction
                of the cost, making advanced call tracking accessible to all
                business sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              How CallGauge AI Compares
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              See why thousands of businesses choose CallGauge AI over the
              competition
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="p-6 text-left font-bold">Platform</th>
                    <th className="p-6 text-center font-bold">Starter Plan</th>
                    <th className="p-6 text-center font-bold">Business Plan</th>
                    <th className="p-6 text-center font-bold">
                      Per Number Cost
                    </th>
                    <th className="p-6 text-center font-bold">
                      Per Minute Cost
                    </th>
                    <th className="p-6 text-center font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <tr
                      key={competitor.name}
                      className={
                        competitor.isRecommended
                          ? 'border-4 border-green-500 bg-green-50'
                          : 'border-b border-gray-200'
                      }
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 ${competitor.isRecommended ? 'bg-green-500' : 'bg-gray-400'} flex items-center justify-center rounded-full font-bold text-white`}
                          >
                            {competitor.logo}
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              {competitor.name}
                            </div>
                            {competitor.isRecommended && (
                              <div className="text-sm font-semibold text-green-600">
                                ⭐ BEST VALUE
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-bold text-gray-900">
                          {competitor.starter}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-bold text-gray-900">
                          {competitor.business}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div
                          className={`text-lg font-bold ${competitor.isRecommended ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {competitor.perNumber}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div
                          className={`text-lg font-bold ${competitor.isRecommended ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {competitor.perMinute}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {competitor.enterprise}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
              <DollarSign className="mx-auto mb-4 h-12 w-12 text-green-600" />
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
              <Zap className="mx-auto mb-4 h-12 w-12 text-blue-600" />
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
              <Users className="mx-auto mb-4 h-12 w-12 text-purple-600" />
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

      {/*<FeatureComparison />*/}
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Start Tracking Your Calls?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Join thousands of businesses using CallGauge AI to optimize their
            marketing ROI
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-colors duration-300 hover:bg-gray-100">
              Start Free 30-Day Trial
            </button>
            <button className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600">
              Schedule Demo
            </button>
          </div>
          <div className="mt-4 text-sm text-white/80">
            No credit card required • Full feature access • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
