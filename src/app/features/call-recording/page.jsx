import { Container } from '@/components/container'
import { CallRecordingFaqs } from '@/components/features/call-recording/call-recording-faqs'
import CallRecordingIntroduction from '@/components/features/call-recording/call-recording-Introduction'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Call Recording ',
  description:
    'Master your inbound calls with CallGauge’s advanced call flow tools. Build custom routing, automate tasks, and enhance every call experience effortlessly.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Call Recording
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Want to set up call recording for your business?
            <strong>Call Gauge AI </strong> is the solution to all your worries
            regarding call recording whether you are a sole operator or managing
            a big enterprise.
          </Lead>
          <div className="mt-10 gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Start for free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              With 14 days money back Guarantee!
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function CallFlows() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CallRecordingIntroduction />
      <div className="mt-12">
        <CallRecordingFaqs />
      </div>
      <Footer />
    </main>
  )
}
