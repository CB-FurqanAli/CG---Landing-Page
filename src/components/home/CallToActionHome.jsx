'use client'

import { Button } from '@/components/button'

export default function CallToActionHome() {
  return (
    <section className="bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-20 sm:bg-linear-145">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-[#C7A19E] px-6 py-2">
          <span className="mr-3 h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-sm font-medium text-white">
            Ready to Start Tracking Smarter?
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-bold lg:text-4xl">
          Stop Wasting Ad Spend. Start Maximizing ROI with AI Attribution.
        </h2>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-3xl text-lg lg:text-xl">
          Join businesses who are cutting wasted ad spend and optimizing with
          complete call attribution using CallGauge AI. Start seeing results in
          your first week.
        </p>

        {/* CTA Buttons */}
        <div className="my-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/login" className="px-8 py-3 text-lg font-semibold">
            Start Free Trial
          </Button>
          <Button
            variant="secondary"
            href="/demo#target-section"
            className="px-8 py-3 text-lg font-semibold"
          >
            Watch A Demo
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 font-medium sm:flex-row">
          <p>✅ No credit card required</p>
          <p>✅ Setup in less than 5 minutes</p>
          <p>✅ Cancel anytime</p>
        </div>
        {/* Stats */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 border-t border-white/20 pt-4 sm:grid-cols-3">
          {[
            { stat: '247%', desc: 'Avg ROI Increase' },
            { stat: '98%', desc: 'Attribution Accuracy' },
            { stat: '2.5K+', desc: 'Happy Customers' },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-2 text-3xl font-bold text-white">
                {item.stat}
              </div>
              <div className="text-sm text-blue-100">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
