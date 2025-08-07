import { Container } from '@/components/container'
import { ClientManagementFaqs } from '@/components/features/client-management/client-management-faqs'
import ClientManagementIntroduction from '@/components/features/client-management/client-management-Introduction'
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
    <div className="relative pt-24 pb-16">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Client Management Made Effortless
          </Heading>
          <h2 className="mt-10 text-xl font-semibold">
            With AI-Powered Call Tracking by CallGauge AI
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            CallGauge AI simplifies how you manage your clients and their
            communications, all from one intuitive dashboard. Our built-in
            client portal allows you to give your clients secure,{' '}
            <strong> self-serve access to their calls </strong>, texts, and
            voicemails — while you stay in full control.
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
      <ClientManagementIntroduction />
      <ClientManagementFaqs />
      <Footer />
    </main>
  )
}
