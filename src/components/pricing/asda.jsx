'use client'

import { useState } from 'react'

const CallGaugePricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [numbers, setNumbers] = useState(10)
  const [minutes, setMinutes] = useState(1000)
  const [sms, setSms] = useState(200)

  const calculateCost = () => {
    let baseCost = 0
    let plan = 'Starter'

    if (numbers <= 5 && minutes <= 500) {
      baseCost = billingPeriod === 'monthly' ? 29 : 23
      plan = 'Starter'
    } else if (numbers <= 25 && minutes <= 2000) {
      baseCost = billingPeriod === 'monthly' ? 99 : 79
      plan = 'Business'
    } else if (numbers <= 100 && minutes <= 8000) {
      baseCost = billingPeriod === 'monthly' ? 299 : 239
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

    const totalCost = baseCost + numberCost + minuteCost + smsCost

    return { cost: Math.round(totalCost), plan }
  }

  const { cost, plan: recommendedPlan } = calculateCost()

  const plans = [
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
      additionalCost: '$0.50/number, $0.05/minute, $0.02/SMS',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses with multiple campaigns',
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      features: [
        '25 tracking numbers',
        '2,000 minutes included',
        'AI call summaries',
        'Advanced attribution',
        'CRM integrations',
        'Priority support',
      ],
      additionalCost: '$0.40/number, $0.04/minute, $0.015/SMS',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700',
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
      additionalCost: '$0.30/number, $0.03/minute, $0.01/SMS',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      features: [
        'Unlimited numbers & minutes',
        'Custom integrations',
        'SLA guarantees',
        'Dedicated account manager',
        '24/7 phone support',
        'On-premise deployment',
      ],
      additionalCost: 'Volume discounts start at 1,000+ numbers',
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800',
    },
  ]

  const competitors = [
    {
      name: 'CallGauge AI',
      logo: 'CG',
      isUs: true,
      starterPrice: billingPeriod === 'monthly' ? '$99/month' : '$79/month',
      businessPrice: billingPeriod === 'monthly' ? '$299/month' : '$239/month',
      perNumber: '$2.00',
      perMinute: '$0.03',
      enterprise: 'Custom',
    },
    {
      name: 'CallRail',
      logo: 'CR',
      starterPrice: '$165/month',
      businessPrice: '$395/month',
      perNumber: '$5.00',
      perMinute: '$0.05',
      enterprise: '$1,200+',
    },
    {
      name: 'Invoca',
      logo: 'IN',
      starterPrice: 'No starter plan',
      businessPrice: '$1,500+/month',
      perNumber: '$8.00+',
      perMinute: '$0.08+',
      enterprise: '$5,000+',
    },
    {
      name: 'CallTrackingMetrics',
      logo: 'CTM',
      starterPrice: '$139/month',
      businessPrice: '$349/month',
      perNumber: '$3.50',
      perMinute: '$0.04',
      enterprise: '$899+',
    },
  ]

  const features = [
    {
      name: 'AI Call Transcription',
      us: 'included',
      callrail: 'extra',
      invoca: 'included',
      ctm: 'basic',
    },
    {
      name: 'AI Call Summaries',
      us: 'advanced',
      callrail: 'none',
      invoca: 'basic',
      ctm: 'none',
    },
    {
      name: 'White-Label Portal',
      us: 'agency',
      callrail: 'none',
      invoca: 'enterprise',
      ctm: 'limited',
    },
    {
      name: 'Multi-Touch Attribution',
      us: 'advanced',
      callrail: 'basic',
      invoca: 'advanced',
      ctm: 'basic',
    },
    {
      name: 'Real-Time Alerts',
      us: 'custom',
      callrail: 'basic',
      invoca: 'advanced',
      ctm: 'standard',
    },
    {
      name: 'API Access',
      us: 'full',
      callrail: 'paid',
      invoca: 'enterprise',
      ctm: 'paid',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl font-medium text-white/90">
            Start tracking calls in minutes with pricing that scales with your
            business. No hidden fees, no surprise charges, no long-term
            contracts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['30-day free trial', 'No setup fees', 'Cancel anytime'].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex justify-center">
            <div className="flex items-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <button
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  billingPeriod === 'annual'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual{' '}
                <span className="ml-1 text-xs text-green-600">(Save 20%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-2 border-purple-500 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <div className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
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
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-black text-gray-900">
                          {plan.price}
                        </span>
                        {plan.name === 'Enterprise' && (
                          <div className="mt-2 text-sm text-gray-600">
                            Volume pricing available
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-black text-gray-900">
                          $
                          {billingPeriod === 'monthly'
                            ? plan.monthlyPrice
                            : plan.annualPrice}
                        </span>
                        <span className="text-lg text-gray-600">/month</span>
                        {billingPeriod === 'annual' && (
                          <div className="mt-1 text-sm text-green-600">
                            Billed annually
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="text-sm text-gray-700">
                    <strong>
                      {index === 0
                        ? 'Included:'
                        : `Everything in ${plans[index - 1]?.name}, plus:`}
                    </strong>
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                          ✓
                        </span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 text-xs text-gray-500">
                  Additional: {plan.additionalCost}
                </div>

                <button
                  className={`w-full rounded-xl py-3 font-semibold text-white transition-colors duration-300 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Pricing */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
              Transparent Usage Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No surprises. No hidden fees. Pay only for what you use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: '📞',
                title: 'Tracking Numbers',
                price: '$0.30 - $0.50',
                unit: 'per number per month',
                note: 'Local & toll-free available',
              },
              {
                icon: '⏱️',
                title: 'Call Minutes',
                price: '$0.03 - $0.05',
                unit: 'per minute',
                note: 'Bulk discounts available',
              },
              {
                icon: '💬',
                title: 'SMS Messages',
                price: '$0.01 - $0.02',
                unit: 'per message',
                note: 'Inbound & outbound',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-gray-50 p-6 text-center">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <div className="mb-2 text-2xl font-bold text-blue-600">
                  {item.price}
                </div>
                <div className="text-sm text-gray-600">{item.unit}</div>
                <div className="mt-2 text-xs text-gray-500">{item.note}</div>
              </div>
            ))}
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

      {/* Calculator */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
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
                  value={numbers}
                  onChange={(e) => setNumbers(parseInt(e.target.value) || 0)}
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
                  value={minutes}
                  onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
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
                  value={sms}
                  onChange={(e) => setSms(parseInt(e.target.value) || 0)}
                  min="0"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
              <div className="mb-2 text-lg">Estimated Monthly Cost</div>
              <div className="text-4xl font-black">${cost}</div>
              <div className="mt-2 text-sm opacity-90">
                Recommended Plan: <span>{recommendedPlan}</span>
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

      {/* Competitor Comparison */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
              How CallGauge AI Compares
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              See why thousands of businesses choose CallGauge AI over the
              competition
            </p>
          </div>

          <div className="mb-16 overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="p-6 text-left font-bold">Platform</th>
                    <th className="p-6 text-center font-bold">Starter Plan</th>
                    <th className="p-6 text-center font-bold">Business Plan</th>
                    <th className="p-6 text-center font-bold">Per Number</th>
                    <th className="p-6 text-center font-bold">Per Minute</th>
                    <th className="p-6 text-center font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, i) => (
                    <tr
                      key={i}
                      className={
                        comp.isUs
                          ? 'border-4 border-green-500 bg-green-50'
                          : 'border-b border-gray-200'
                      }
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-white ${
                              comp.isUs ? 'bg-green-500' : 'bg-gray-400'
                            }`}
                          >
                            {comp.isUs ? '✓' : comp.logo}
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">
                              {comp.name}
                            </div>
                            {comp.isUs && (
                              <div className="text-sm font-semibold text-green-600">
                                ⭐ BEST VALUE
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-bold text-gray-900">
                          {comp.starterPrice}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-bold text-gray-900">
                          {comp.businessPrice}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div
                          className={`text-lg font-bold ${comp.isUs ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {comp.perNumber}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div
                          className={`text-lg font-bold ${comp.isUs ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {comp.perMinute}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {comp.enterprise}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-extrabold">
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

export default CallGaugePricing
