'use client'
import { useMemo, useState } from 'react'

export default function PricingCalculator() {
  // keep inputs as strings so the fields can be cleared while typing
  const [numbers, setNumbers] = useState('10')
  const [minutes, setMinutes] = useState('1000')
  const [sms, setSms] = useState('200')

  const fmt = (n) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)

  const toInt = (v) => {
    const n = parseInt(v, 10)
    return Number.isNaN(n) ? 0 : Math.max(0, n)
  }

  const { totalCost, plan } = useMemo(() => {
    const n = toInt(numbers)
    const m = toInt(minutes)
    const s = toInt(sms)

    // Base plan logic (same thresholds you shared)
    let baseCost = 0
    let recommended = 'Starter'
    if (n <= 5 && m <= 500) {
      baseCost = 29
      recommended = 'Starter'
    } else if (n <= 25 && m <= 2000) {
      baseCost = 99
      recommended = 'Business'
    } else if (n <= 100 && m <= 8000) {
      baseCost = 299
      recommended = 'Agency'
    } else {
      baseCost = 599
      recommended = 'Enterprise'
    }

    // Included usage per plan
    const includedNumbers =
      recommended === 'Starter'
        ? 5
        : recommended === 'Business'
          ? 25
          : recommended === 'Agency'
            ? 100
            : 999
    const includedMinutes =
      recommended === 'Starter'
        ? 500
        : recommended === 'Business'
          ? 2000
          : recommended === 'Agency'
            ? 8000
            : 999999

    // Overages (simplified, as provided)
    const extraNumbers = Math.max(0, n - includedNumbers)
    const extraMinutes = Math.max(0, m - includedMinutes)
    const numberCost = extraNumbers * 0.4
    const minuteCost = extraMinutes * 0.04
    const smsCost = s * 0.015

    const total = Math.round(baseCost + numberCost + minuteCost + smsCost)
    return { totalCost: total, plan: recommended }
  }, [numbers, minutes, sms])

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">
            Pricing Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Estimate your monthly costs based on your usage
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Inputs */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="numbers"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Tracking Numbers
              </label>
              <input
                id="numbers"
                inputMode="numeric"
                type="number"
                min={0}
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#3b82f6] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="minutes"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Monthly Minutes
              </label>
              <input
                id="minutes"
                inputMode="numeric"
                type="number"
                min={0}
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#3b82f6] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="sms"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Monthly SMS
              </label>
              <input
                id="sms"
                inputMode="numeric"
                type="number"
                min={0}
                value={sms}
                onChange={(e) => setSms(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#3b82f6] focus:outline-none"
              />
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] p-6 text-center text-white">
            <div className="mb-2 text-lg">Estimated Monthly Cost</div>
            <div className="text-4xl font-black" aria-live="polite">
              ${fmt(totalCost)}
            </div>
            <div className="mt-2 text-sm opacity-90">
              Recommended Plan: <span className="font-semibold">{plan}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <button
              type="button"
              className="rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
