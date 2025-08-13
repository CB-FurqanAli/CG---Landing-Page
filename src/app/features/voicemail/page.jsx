import { Container } from '@/components/container'
import { VoiceMailFaqs } from '@/components/features/voicemali/voicemail-faqs'
import VoiceMailIntroduction from '@/components/features/voicemali/voicemail-Introduction'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'AI Voicemail Recording – Capture & Convert Missed Calls',
  description:
    'CallGauge AI turns missed calls into leads with smart voicemail, instant alerts, and organized follow-up tools. Try it free today.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Voicemail Recording with CallGauge AI
          </Heading>
          <h2 className="mt-10 text-xl font-semibold">
            Capture Every Missed Call, Convert Every Missed Opportunity
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            No business can answer every call every time. But with{' '}
            <strong> CallGauge AI’s Voicemail Recording feature </strong>,
            you’ll never lose a lead again. Seamlessly route unanswered calls to
            a professional voicemail greeting and follow up fast with automated
            notifications and AI-powered analytics.
          </Lead>
          <div className="mt-10 gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Start for free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              *14 days money back Guarantee!
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
      <VoiceMailIntroduction />
      <VoiceMailFaqs />
      <Footer />
    </main>
  )
}
