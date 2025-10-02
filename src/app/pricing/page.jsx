import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import CompetitorComparison from '@/components/pricing/CompetitorComparison'
import CustomerSwitchTestimonials from '@/components/pricing/CustomerSwitchTestimonials'
import FaqSection from '@/components/pricing/FaqSection'
import FeatureComparison from '@/components/pricing/FeatureComparison'
import PricingCalculator from '@/components/pricing/PricingCalculator'
import PricingSection from '@/components/pricing/PricingSection'
import UsagePricingTransparency from '@/components/pricing/UsagePricingTransparency'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Pricing Plans | CallGauge AI Call Tracking & Analytics',
  description:
    'Compare CallGauge AI pricing plans for call tracking, analytics, and automation. Affordable monthly and yearly options to scale your business with smart call recording, reporting, and integrations',
}

function Header() {
  return (
    <div className="relative py-16">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="mx-auto max-w-5xl text-4xl md:text-5xl">
            Simple, Transparent Pricing. Backed by AI.
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-xl">
            Start tracking calls in minutes with pricing that scales as you
            grow. No hidden fees, no surprise charges, and no long term
            contracts. Get smarter automation and AI powered insights at the
            lowest cost in the industry.
          </Lead>
          <div className="my-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Start Free 30 Day Trial
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="px-8 py-3 text-lg font-semibold"
            >
              Schedule a Demo
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-medium sm:flex-row">
            <p>✅ No credit card required</p>
            <p>✅ Setup in less than 5 minutes</p>
            <p>✅ Cancel anytime</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FinalsCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
          <span className="mr-3 h-2 w-2 rounded-full bg-yellow-400"></span>
          <span className="text-sm font-medium">
            Don&apos;t Leave Your Marketing ROI on the Table
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
          Finally Know Which Ads Drive Revenue‑Generating Calls
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
          Stop wasting ad spend on campaigns that don’t convert. With CallGauge
          AI, track and attribute every call and finally see which ads deliver
          real ROI.
        </p>

        {/* CTAs */}
        <div className="my-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Start Your Free 14-Day Trial
          </Button>
          <Button
            variant="secondary"
            href="#"
            className="px-8 py-3 text-lg font-semibold text-white"
          >
            Schedule Executive Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: '247%', label: 'Avg ROI Increase' },
            { value: '5 min', label: 'Setup Time' },
            { value: '98%', label: 'Attribution Accuracy' },
            { value: '$0', label: 'Setup Cost' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-4">
              <div className="mb-1 text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8 text-sm text-blue-100">
          {[
            'No credit card required',
            'Setup in 5 minutes',
            'Cancel anytime',
            '100% money-back guarantee',
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

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingSection />
      <UsagePricingTransparency />
      <PricingCalculator />
      <FeatureComparison />
      <CustomerSwitchTestimonials />
      <FaqSection />
      <CompetitorComparison />
      <FinalsCTA />
      <Footer />
    </main>
  )
}
