import { Container } from '@/components/container'
import { CallWhisperingFaqs } from '@/components/features/call-whispering/call-whispering-faqs'
import CallWhisperingIntroduction from '@/components/features/call-whispering/call-whispering-Introduction'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Call Whispering with CallGauge AI',
  description:
    'Monitor hundreds or thousands of phone numbers without breaking the bank. Get local, toll-free, or vanity numbers with the industry’s most competitive pricing—perfect for agencies and businesses of all sizes.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Call Whispering with CallGauge AI
          </Heading>

          <h2 className="mt-10 text-xl leading-tight font-semibold">
            Equip Your Team with Instant Caller Insights Before Every
            Conversation
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Supercharge your team&#39;s efficiency with{' '}
            <strong> Call Whispering messages</strong>— a smart feature by
            <strong> CallGauge AI </strong> that provides real-time context
            about every incoming call. Give your team the information they need
            to{' '}
            <strong>
              {' '}
              personalize conversations and close more deals faster{' '}
            </strong>
            .
          </Lead>
          <h2 className="mt-20 text-2xl font-semibold md:text-3xl">
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
      <CallWhisperingIntroduction />
      <CallWhisperingFaqs />
      <Footer />
    </main>
  )
}
