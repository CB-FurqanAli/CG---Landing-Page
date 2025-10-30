'use client'

import { Button } from '@/components/button'

export default function CallToActionFeatures() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 sm:bg-linear-145">
      {/* Decorative Dots Pattern */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
          Turn Conversations Into Revenue with Confidence
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
          With CallGauge AI’s advanced features, attribution, AI insights, and
          real time reporting, you’ll finally see the true impact of your
          marketing.
        </p>

        {/* Buttons */}
        <div className="my-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/login" className="px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
          <Button
            variant="secondary"
            href="/demo"
            className="px-8 py-3 text-lg font-semibold text-white"
          >
            Schedule Demo
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 text-center text-white/80 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="glass-effect mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="font-semibold">Setup in 5 Minutes</div>
            <div className="text-sm opacity-75">
              Get tracking in minutes, not hours
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="glass-effect mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <span className="text-2xl">💳</span>
            </div>
            <div className="font-semibold">No Credit Card</div>
            <div className="text-sm opacity-75">
              Full trial access, no commitment
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="glass-effect mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="font-semibold">Expert Support 24/7</div>
            <div className="text-sm opacity-75">24/7 customer success team</div>
          </div>
        </div>
      </div>
    </section>
  )
}
