'use client'

export default function FeatureComparison() {
  const plans = ['Starter', 'Business', 'Agency', 'Enterprise']
  const highlightPlan = 'Business' // column highlight

  // If value === true -> ✓, false -> —, otherwise render text (e.g., "5", "Unlimited")
  const rows = [
    { feature: 'Tracking Numbers', values: ['5', '25', '100', 'Unlimited'] },
    {
      feature: 'Included Minutes',
      values: ['500', '2,000', '8,000', 'Unlimited'],
      zebra: true,
    },
    { feature: 'AI Call Transcription', values: [true, true, true, true] },
    {
      feature: 'CRM Integrations',
      values: [false, true, true, true],
      zebra: true,
    },
    { feature: 'White-Label Portal', values: [false, false, true, true] },
    {
      feature: '24/7 Phone Support',
      values: [false, false, false, true],
      zebra: true,
    },
  ]

  const isHighlight = (plan) => plan === highlightPlan

  const renderCell = (val, plan, extra = '') => {
    const base =
      'p-6 text-center ' + (isHighlight(plan) ? 'bg-purple-50 ' : '') + extra

    if (val === true) {
      return (
        <td className={base + ' text-green-600'}>
          <span aria-hidden="true">✓</span>
          <span className="sr-only">Included</span>
        </td>
      )
    }
    if (val === false) {
      return (
        <td className={base + ' text-gray-400'}>
          <span aria-hidden="true">—</span>
          <span className="sr-only">Not included</span>
        </td>
      )
    }
    return <td className={base}>{val}</td>
  }

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">
            Compare Plans
          </h2>
          <p className="text-lg text-gray-600">
            See what's included in each plan
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse overflow-hidden rounded-xl bg-white shadow-lg"
            aria-label="Compare plans"
          >
            <thead>
              <tr className="bg-gray-50">
                <th className="p-6 text-left font-semibold text-gray-900">
                  Features
                </th>
                {plans.map((p) => (
                  <th
                    key={p}
                    className={
                      'p-6 text-center font-semibold text-gray-900 ' +
                      (isHighlight(p) ? 'bg-purple-50' : '')
                    }
                    scope="col"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => {
                const zebra = row.zebra ? 'bg-gray-50' : ''
                return (
                  <tr
                    key={row.feature}
                    className={`border-t border-gray-200 ${zebra}`}
                  >
                    <th
                      scope="row"
                      className="p-6 text-left font-medium text-gray-900"
                    >
                      {row.feature}
                    </th>
                    {plans.map((plan, idx) =>
                      renderCell(row.values[idx], plan),
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
