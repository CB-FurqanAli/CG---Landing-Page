import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import AdditionalFeatures from '@/components/features/additional-features'
import AutomationsCards from '@/components/features/automations-cards'
import { default as CallFlowsCard } from '@/components/features/call-flows-card'
import CallTrackingCards from '@/components/features/call-tracking-cards'
import CoreFeatures from '@/components/features/core-features'
import DynamicNumberCard from '@/components/features/dynamic-number-card'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { LogoCluster } from '@/components/logo-cluster'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Features',
  description:
    'Discover CallGauge’s powerful call tracking features: affordable numbers, advanced call flows, voicemail tracking, analytics, and more—all at unbeatable prices.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Powerful Call Tracking, Simplified~
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg">
            CallGauge delivers enterprise-grade call tracking features at a
            fraction of the cost of competitors like CallRail. Streamline your
            workflow, gain deeper insights, and boost ROI—all in one platform.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <button className="flex items-center gap-2 rounded-xl border border-[#F0B100] bg-yellow-400 px-6 py-3 text-lg font-semibold text-black transition-colors duration-200 hover:bg-yellow-500">
              Start for free
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-3 text-lg font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]">
              Watch a demo
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Get Started Today</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Experience CallGauge Risk-Free
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to explore all features—no
            commitment required.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="#">
              Try CallGauge Now
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Cluster() {
  return (
    <div>
      <LogoCluster />
    </div>
  )
}
export default function Features() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />

      <div>
        <CallFlowsCard />
      </div>
      <div>
        <AutomationsCards />
      </div>
      <div>
        <DynamicNumberCard />
      </div>
      <div>
        <CallTrackingCards />
      </div>

      <CoreFeatures />
      <div className="">
        <div className="">
          <div>
            <BentoCard graphic={<LogoCluster />} className=" " />
          </div>
        </div>
      </div>
      <AdditionalFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
