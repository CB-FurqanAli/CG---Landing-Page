'use client'
import { useState } from 'react'

function Check() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[#10b981]">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  )
}

const plans = [
  {
    name: 'Starter',
    blurb: 'Perfect for small businesses testing call tracking',
    prices: { monthly: 29, annual: 23 },
    highlightsLabel: 'Included:',
    features: [
      '5 tracking numbers',
      '500 minutes included',
      'Call recording & transcription',
      'Basic reporting',
      'Email support',
    ],
    overage: 'Additional: $0.50/number, $0.05/minute, $0.02/SMS',
    cta: { label: 'Start Free Trial', variant: 'dark' },
  },
  {
    name: 'Business',
    blurb: 'Ideal for growing businesses with multiple campaigns',
    prices: { monthly: 99, annual: 79 },
    highlightsLabel: 'Everything in Starter, plus:',
    features: [
      '25 tracking numbers',
      '2,000 minutes included',
      'AI call summaries',
      'Advanced attribution',
      'CRM integrations',
      'Priority support',
    ],
    overage: 'Additional: $0.40/number, $0.04/minute, $0.015/SMS',
    cta: { label: 'Start Free Trial', variant: 'accent' },
    badge: 'Most Popular',
  },
  {
    name: 'Agency',
    blurb: 'Built for agencies managing multiple clients',
    prices: { monthly: 299, annual: 239 },
    highlightsLabel: 'Everything in Business, plus:',
    features: [
      '100 tracking numbers',
      '8,000 minutes included',
      'White-label client portal',
      'Multi-client management',
      'Custom reporting',
      'Dedicated support',
    ],
    overage: 'Additional: $0.30/number, $0.03/minute, $0.01/SMS',
    cta: { label: 'Start Free Trial', variant: 'dark' },
  },
  {
    name: 'Enterprise',
    blurb: 'Custom solutions for large organizations',
    // no prices => "Custom"
    highlightsLabel: 'Everything in Agency, plus:',
    features: [
      'Unlimited numbers & minutes',
      'Custom integrations',
      'SLA guarantees',
      'Dedicated account manager',
      '24/7 phone support',
      'On-premise deployment',
    ],
    overage: 'Volume discounts start at 1,000+ numbers',
    cta: { label: 'Contact Sales', variant: 'dark' },
  },
]

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly')

  const priceText = (plan) => {
    if (!plan.prices) return 'Custom'
    const v = billing === 'monthly' ? plan.prices.monthly : plan.prices.annual
    return `$${v}`
  }

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                billing === 'monthly'
                  ? 'bg-[#3b82f6] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all ${
                billing === 'annual'
                  ? 'bg-[#3b82f6] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Annual{' '}
              <span className="ml-1 text-xs text-[#10b981]">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const isPopular = Boolean(plan.badge)
            const isCustom = !plan.prices

            return (
              <article
                key={plan.name}
                className={[
                  'relative rounded-2xl bg-white p-8 transition-all',
                  // pricing-card-shadow
                  'shadow-[0_10px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]',
                  // most-popular
                  isPopular
                    ? 'border-2 border-[#8b5cf6] shadow-[0_20px_60px_rgba(139,92,246,0.2)]'
                    : 'border border-gray-100',
                ].join(' ')}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="rounded-full bg-[#8b5cf6] px-4 py-2 text-sm font-semibold text-white shadow">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <header className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600">{plan.blurb}</p>

                  <div className="min-h-[64px]">
                    {!isCustom ? (
                      <>
                        <div className="flex items-end justify-center gap-2">
                          <span className="text-4xl font-black text-gray-900">
                            {priceText(plan)}
                          </span>
                          <span className="pb-1 text-lg text-gray-600">
                            /month
                          </span>
                        </div>
                        {billing === 'annual' && (
                          <div className="mt-1 text-sm text-[#10b981]">
                            Billed annually
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-black text-gray-900">
                          Custom
                        </span>
                        <div className="mt-2 text-sm text-gray-600">
                          Volume pricing available
                        </div>
                      </>
                    )}
                  </div>
                </header>

                <div className="mb-8 space-y-4">
                  <p className="text-sm font-medium text-gray-800">
                    {plan.highlightsLabel}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-gray-800"
                      >
                        <Check />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.overage && (
                  <p className="mb-6 text-xs text-gray-500">{plan.overage}</p>
                )}

                <button
                  type="button"
                  className={[
                    'w-full rounded-xl py-3 text-sm font-semibold transition focus:ring-2 focus:ring-offset-2 focus:outline-none',
                    plan.cta.variant === 'accent'
                      ? 'bg-[#8b5cf6] text-white hover:brightness-110 focus:ring-[#8b5cf6]'
                      : plan.cta.variant === 'dark'
                        ? 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900'
                        : 'bg-[#3b82f6] text-white hover:brightness-110 focus:ring-[#3b82f6]',
                  ].join(' ')}
                >
                  {plan.cta.label}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
