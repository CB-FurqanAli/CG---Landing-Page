import { Container } from '@/components/container'
import DniIntroduction from '@/components/features/dni-call/dni-Introduction'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Dynamic Number Insertion (DNI) Script Guide',
  description:
    'Step-by-step DNI script setup for WordPress, Wix, Webflow & more. Track calls by source with AI-powered accuracy from CallGauge AI.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Dynamic Number Insertion (DNI) Script Installation Guide — CallGauge
            AI
          </Heading>
          <h2 className="mt-10 text-xl font-semibold">
            Track Every Call’s Source with Precision Using AI-Powered Dynamic
            Number Insertion
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Want to know exactly which marketing channels are driving your
            inbound calls?{' '}
            <strong> CallGauge AI’s Dynamic Number Insertion (DNI) </strong>{' '}
            makes it easy. By embedding a lightweight{' '}
            <strong> JavaScript snippet </strong> into your website, you can
            dynamically swap static phone numbers with unique tracking numbers
            based on visitor traffic sources—giving you{' '}
            <strong> accurate, real-time attribution </strong> for every call.
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
      <DniIntroduction />
      <Footer />
    </main>
  )
}
