import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import CallToActionHome from '@/components/home/CallToActionHome'
import CustomerSuccess from '@/components/home/CustomerSuccess'
import { FAQSection } from '@/components/home/FAQSection'
import Features from '@/components/home/features'
import FinalCTA from '@/components/home/FinalCTA'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: ' Call Tracking Made Simple – CallGauge AI',
  description:
    'Boost conversions with CallGauge AI. AI-powered call tracking, DNI, PPC, white labeling, voicemails—all from one affordable platform. Start free today!',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              White label CallGauge with your own URL ✨
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="py-20 text-center">
          <span className="font-medium">
            AI-Powered Call Tracking & Attribution
          </span>
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Finally Know Which Marketing Campaigns Drive Phone Calls
          </h1>

          {/* Subtitle / Supporting Text */}
          <div className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-700 sm:text-lg">
            <p>
              Stop wasting ad spend on campaigns that don’t convert. With
              CallGauge AI, track and attribute every call in less than 5
              minutes and unlock AI insights like transcriptions, sentiment and
              lead scoring to double down on the ads that actually deliver ROI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="my-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Sign up free
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="px-8 py-3 text-lg font-semibold"
            >
              Watch a demo
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-medium sm:flex-row">
            <p>✅ Setup in less than 5 minutes</p>
            <p>✅ No credit card required</p>
            <p>✅ Cancel anytime</p>
          </div>
          <div>
            <p>
              Live dashboard preview — see which campaigns drive calls,
              conversions, and ROI.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/*<Container className="mt-10">*/}
        {/*<LogoCloud />*/}
        {/*</Container>*/}
        <ProblemSection />
        <SolutionSection />
        <CallToActionHome />
        <Features />
        <CustomerSuccess />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
