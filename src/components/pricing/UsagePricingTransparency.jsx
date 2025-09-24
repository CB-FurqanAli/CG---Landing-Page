'use client'

export default function UsagePricingTransparency() {
  const items = [
    {
      icon: '📞',
      title: 'Tracking Numbers',
      price: '$0.30 - $0.50',
      sub: 'per number per month',
      note: 'Local & toll-free available',
    },
    {
      icon: '⏱️',
      title: 'Call Minutes',
      price: '$0.03 - $0.05',
      sub: 'per minute',
      note: 'Bulk discounts available',
    },
    {
      icon: '💬',
      title: 'SMS Messages',
      price: '$0.01 - $0.02',
      sub: 'per message',
      note: 'Inbound & outbound',
    },
  ]

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">
            Transparent Usage Pricing
          </h2>
          <p className="text-lg text-gray-600">
            No surprises. No hidden fees. Pay only for what you use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-gray-50 p-6 text-center"
            >
              <div className="mb-4 text-3xl" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <div className="mb-2 text-2xl font-bold text-[#3b82f6]">
                {item.price}
              </div>
              <div className="text-sm text-gray-600">{item.sub}</div>
              <div className="mt-2 text-xs text-gray-500">{item.note}</div>
            </div>
          ))}
        </div>

        {/* Volume note */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl" aria-hidden="true">
              💡
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Volume Discounts Available
              </h4>
              <p className="text-sm text-gray-600">
                Higher-tier plans include more included usage and lower per-unit
                costs. Enterprise customers get volume discounts starting at
                1,000+ numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
