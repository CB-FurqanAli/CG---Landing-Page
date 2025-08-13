import { Container } from '@/components/container'
import PayPerCallIntroduction from '@/components/features/pay-per-call/pay-per-call-Introduction'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Automated Pay Per Call Billing to Maximize ROI',
  description:
    'Maximize ROI with CallGauge AI. Automate billing for qualified calls, speed up payments, and eliminate manual invoicing — all in one platform.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Pay Per Call Billing
          </Heading>
          <h2 className="mt-10 text-xl font-semibold">
            Automated Invoicing for Qualified Calls – Powered by CallGauge AI
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Simplify your billing,{' '}
            <strong>
              {' '}
              maximize your revenue. With CallGauge AI’s pay-per–call{' '}
            </strong>{' '}
            invoicing feature you can focus on scaling your business while all
            the related tasks will be automatically handled.
          </Lead>
          <h2 className="mt-16 text-2xl font-semibold md:text-3xl">
            Try Call Gauge AI today
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            You will get $15 for free in your account to test our platform!
          </Lead>
          <div className="mt-10 gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Get Started Free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              *No credit card required
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function ScalableCallTrackingNumbers() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <PayPerCallIntroduction />
      <Footer />~
    </main>
  )
}
