import { Button } from '@/components/button'
import { Container } from '@/components/container'
import TrackingIntroduction from '@/components/features/tracking-Introduction/tracking-Introduction'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Call Tracking Numbers with AI Insights',
  description:
    'Track calls with AI-powered numbers from CallGauge AI. Attribute every call, keyword & campaign in real time. Start for $0.50 per number.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Call Tracking Numbers — Smart Call Analytics with CallGauge AI
          </Heading>

          <h2 className="mt-10 text-xl font-semibold">
            Track, Analyze and Optimize Every Phone Call Across All Your
            Marketing Channels
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Looking for a call tracking solution that scales with your business?
            <strong> CallGauge AI </strong> enables you to track{' '}
            <strong> unlimited phone numbers in minutes</strong> — at a fraction
            of the price of other popular call tracking platforms. Whether
            you’re running ads on Google, social media or offline campaigns,
            <strong>
              {' '}
              dynamic call tracking numbers will bridge the gap between your
              marketing spend and actual call conversions{' '}
            </strong>
            .
          </Lead>
          <h2 className="mt-20 text-2xl font-semibold md:text-3xl">
            Try Call Gauge Pro today
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            You will get $15 for free in your account to test our platform!
          </Lead>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Start for free
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="px-8 py-3 text-lg font-semibold"
            >
              Watch a demo
            </Button>
          </div>
          {/* Footnote */}
          <p className="mt-4 text-sm font-medium text-red-500 italic">
            *No credit card needed
          </p>
        </div>
      </Container>
    </div>
  )
}

function TrackingNumbersContent() {
  return (
    <section className="my-20">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/call-flow/call-tracking.png"
            alt="From Basic Call Tracking to Complete Marketing Attribution"
            className=""
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What Are Call Tracking Numbers?
          </h2>

          <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
            <p>
              <strong> Call tracking numbers </strong> are those unique phone
              numbers which are assigned to specific marketing campaigns,
              channels or assets. These numbers allow businesses to accurately
              measure which sources like Google Ads, Facebook, website or even
              print ads are generating the most inbound calls and qualified
              leads.
            </p>
            <p>
              When a customer dials a tracking number,{' '}
              <strong>
                {' '}
                CallGauge AI automatically attributes the call to its
                originating source{' '}
              </strong>
              , providing you with powerful insights into campaign performance.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-lg text-blue-600 italic">
              Want to setup call tracking number for your business now?
            </p>
            <p className="text-lg font-semibold text-red-600">
              Try Call Gauge Pro — It&#39;s Free!
            </p>
          </div>
        </div>
      </div>
    </section>
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
      <TrackingNumbersContent />
      <TrackingIntroduction />
      <Footer />
    </main>
  )
}
