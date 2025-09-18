import { Button } from '@/components/button'
import { Container } from '@/components/container'
import AiInsights2 from '@/components/feature-2/AiInsights'
import AnalyticsSection2 from '@/components/feature-2/AnalyticsSection'
import AttributionSection2 from '@/components/feature-2/AttributionSection'
import CallToActionFeatures2 from '@/components/feature-2/CallToActionFeatures'
import CallTrackingSuite2 from '@/components/feature-2/CallTrackingSuite'
import TrackingSection2 from '@/components/feature-2/TrackingSection'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'CallGauge AI Features – Smart Call Tracking & Automation',
  description:
    'Boost conversions with CallGauge AI. AI-powered call tracking, DNI, PPC, white labeling, voicemails—all from one affordable platform. Start free today!',
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
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="px-8 py-3 text-lg font-semibold"
            >
              Watch a Demo
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

export default function Features() {
  return (
    <main className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <GradientBackground />
      </div>
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CallTrackingSuite2 />
      <TrackingSection2 />

      <AttributionSection2 />

      <AiInsights2 />
      {/*<Integrations2 />*/}

      <AnalyticsSection2 />
      <CallToActionFeatures2 />
      <Footer />
    </main>
  )
}
