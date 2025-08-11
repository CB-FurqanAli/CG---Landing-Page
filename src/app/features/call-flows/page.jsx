import { Container } from '@/components/container'
import { CallFlowFaqs } from '@/components/features/call-flows/call-flow-faqs'
import CallFlowIntroduction from '@/components/features/call-flows/callflow-Introduction'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Call Flows by CallGauge AI – Smart Routing & Automation',
  description:
    'Build AI-powered call flows with DNI, call trees, voicemail, SMS, and spam blocking—streamline routing and boost conversions effortlessly',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Advanced Call Flows – Powered by Smart Automation
          </Heading>
          <h2 className="mt-8 text-xl font-medium md:text-2xl">
            Simplify how your business handles calls — with the intelligence of
            CallGauge AI
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            From routing and voicemails to automated texts and analytics, create
            seamless call journeys that boost responsiveness, lead conversion,
            and customer satisfaction.
          </Lead>
          <div className="mt-10 gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Get Started Free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              14-Day Money-Back Guarantee
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
      <CallFlowIntroduction />
      <CallFlowFaqs />
      <Footer />
    </main>
  )
}
