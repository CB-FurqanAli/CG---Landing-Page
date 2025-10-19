import { Button } from '@/components/button'
import { Container } from '@/components/container'
import AdvancedCallTracking from '@/components/features/AdvancedCallTracking'
import AnalyticsReports from '@/components/features/AnalyticsReports'
import CallToActionFeatures from '@/components/features/CallToActionFeatures'
import CallTrackingSuite from '@/components/features/CallTrackingSuite'
import NumberPortingSection from '@/components/features/NumberPortingSection'
import SecureAccessControl from '@/components/features/SecureAccessControl'
import SmartCallFlows from '@/components/features/SmartCallFlows'
import TranscriptionVoicemail from '@/components/features/TranscriptionVoicemail'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'AI Call Tracking & Attribution Software | CallGauge AI',
  description:
    'Boost conversions with CallGauge AI. AI-powered call tracking, DNI, PPC, white labeling, voicemails—all from one affordable platform.',
}

function HeroSection() {
  return (
    <div className="relative py-16">
      <Container>
        <div className="text-center">
          <div className="glass-effect mb-1 inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm">
            <span className="font-semibold">
              🚀 Advanced Call Tracking & Analytics
            </span>
          </div>
          <Heading as="h1" className="mx-auto max-w-5xl text-4xl md:text-5xl">
            AI-Powered Features That Redefine Call Tracking & Attribution
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-xl">
            CallGauge AI turns every call into actionable insights with advanced
            attribution, real-time analytics, and AI-powered reporting, so you
            can maximize ROI with confidence.
          </Lead>
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
        </div>
      </Container>
    </div>
  )
}
function CallToActionHome() {
  return (
    <section className="bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-20 sm:bg-linear-145">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-[#C7A19E] px-6 py-2">
          <span className="mr-3 h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-sm font-medium text-white">
            See the Difference Complete Attribution Makes
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-bold lg:text-4xl">
          Finally Prove the ROI of Every Marketing Campaign
        </h2>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-3xl text-lg lg:text-xl">
          With CallGauge AI, link every call to revenue and make smarter spend
          decisions with confidence.
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
      </div>
    </section>
  )
}

export default function Features() {
  return (
    <main className="overflow-hidden">
      <div>
        <GradientBackground />
      </div>
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CallTrackingSuite />
      <AdvancedCallTracking />

      <SmartCallFlows />
      <TranscriptionVoicemail />
      <CallToActionHome />
      <AnalyticsReports />
      <SecureAccessControl />

      <NumberPortingSection />
      <CallToActionFeatures />
      <Footer />
    </main>
  )
}
