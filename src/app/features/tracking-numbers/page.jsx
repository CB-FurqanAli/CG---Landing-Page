import { Container } from '@/components/container'
import TrackingIntroduction from '@/components/features/tracking-Introduction/tracking-Introduction'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Scalable Call Tracking Numbers',
  description:
    'Monitor hundreds or thousands of phone numbers without breaking the bank. Get local, toll-free, or vanity numbers with the industry’s most competitive pricing—perfect for agencies and businesses of all sizes.',
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

function TrackingNumbersContent() {
  return (
    <section className="my-20">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="https://www.whatconverts.com/wp-content/uploads/2025/05/call-tracking-story-img.png"
            alt="From Basic Call Tracking to Complete Marketing Attribution"
            className=""
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
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
