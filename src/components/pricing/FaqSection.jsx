'use client'

export default function FaqSection() {
  const faqs = [
    {
      q: 'How does the free trial work?',
      a: 'Start with a 14-day free trial on any plan. No credit card required. You get full access to all features during your trial period.',
    },
    {
      q: 'What happens if I exceed my included usage?',
      a: "You'll be charged our transparent usage rates: $0.30-0.50 per number, $0.03-0.05 per minute, and $0.01-0.02 per SMS. Higher-tier plans get better rates.",
    },
    {
      q: 'Can I change plans anytime?',
      a: "Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      q: 'Are there any setup fees or contracts?',
      a: 'No setup fees, no long-term contracts. Pay month-to-month or save 20% with annual billing. Cancel anytime with no penalties.',
    },
    {
      q: 'Do you offer volume discounts?',
      a: 'Yes! Enterprise customers with 1,000+ numbers get custom volume pricing. Contact our sales team to discuss your specific needs.',
    },
    {
      q: 'How does CallGauge AI compare to CallRail?',
      a: 'CallGauge AI offers 40-60% lower pricing, AI transcription included (vs extra cost), faster setup (5 minutes vs 30+ minutes), and better per-minute rates. Plus we include advanced attribution models at lower plan levels.',
    },
    {
      q: 'Can I migrate from my current call tracking platform?',
      a: 'Absolutely! We offer free migration assistance from CallRail, Invoca, CTM, and other platforms. Our team will help transfer your numbers, settings, and historical data with zero downtime.',
    },
    {
      q: 'Why is CallGauge AI more affordable than Invoca?',
      a: 'Invoca focuses exclusively on enterprise clients with complex implementations. CallGauge AI uses modern cloud architecture and AI automation to deliver enterprise-grade features at a fraction of the cost, making advanced call tracking accessible to all business sizes.',
    },
  ]

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our pricing
          </p>
        </div>

        {/* FAQ cards */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-semibold text-gray-900">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
