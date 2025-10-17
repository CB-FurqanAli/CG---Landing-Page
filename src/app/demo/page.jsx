import { Button } from '@/components/button'
import { Container } from '@/components/container'
import FeaturesInAction from '@/components/demo/FeaturesInAction'
import HeroSection from '@/components/demo/hero-section'
import OptimizeROISectionDynamic from '@/components/demo/OptimizeROISection'
import VideoSection from '@/components/demo/video-section'
import WhatToExpectSection from '@/components/demo/WhatToExpectSection'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import ScrollToHash from '@/components/scrolltohash'

export const metadata = {
  title:
    'Call Tracking Demo | AI-Powered Call Analytics & Attribution by CallGauge',
  description:
    'See how CallGauge AI tracks every call, keyword, and campaign in real time. Watch our free interactive demo to explore smart call analytics, marketing attribution, and ROI optimization tools in action.',
}

function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
          Ready to Stop Wasting Ad Spend?
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
          Join marketing teams who are finally seeing which campaigns actually
          drive revenue.
        </p>

        {/* CTAs */}
        <div className="my-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Schedule Your Demo
          </Button>
          <Button
            variant="secondary"
            href="/login"
            className="px-8 py-3 text-lg font-semibold text-white"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: 'up to 98%', label: 'Attribution Accuracy' },
            { value: '<5 min', label: 'Average Setup Time' },
            { value: '5+', label: 'Native Integrations' },
            { value: '24/7', label: 'Customer Support' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-4">
              <div className="mb-1 text-2xl font-bold text-white">
                {stat.value === '<5 min' ? <span>&lt;5 min</span> : stat.value}
              </div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8 text-sm text-blue-100">
          {[
            'No credit card required',
            'Cancel anytime',
            'Setup in 5 minutes',
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Demo() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {/* 👇 add client behavior */}
      <ScrollToHash />
      <HeroSection />
      <div id="target-section">
        <VideoSection youtubeUrl="https://youtu.be/987ol7EyC6s?si=ecde7VpyohivJ6rA" />
      </div>
      <WhatToExpectSection />
      <FeaturesInAction />
      <OptimizeROISectionDynamic />
      <FinalCTA />
      <Footer />
    </main>
  )
}
