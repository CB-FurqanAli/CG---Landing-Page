import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { FeaturesSection } from '@/components/home/all-features'
import CallGaugeTargetAudience from '@/components/home/asd'
import CallTracking from '@/components/home/CallTracking'
import { TrackMoreNumbers } from '@/components/home/track-more-numbers'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
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
        <div className="py-16 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            AI-Powered Call Tracking That Supercharges Your Business
          </h1>

          {/* Subtitle / Supporting Text */}
          <div className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-700 sm:text-lg">
            <p>
              With <strong>CallGauge AI</strong>, you can intelligently track
              every{' '}
              <strong>phone call, text message, web form, and live chat</strong>{' '}
              — all from a single, unified dashboard.
            </p>
            <p className="mt-2">
              Leverage the power of <strong>artificial intelligence</strong> to
              capture, analyze, and optimize every customer interaction.
            </p>
            <p className="mt-2">
              Turn more leads into revenue and grow faster — all for just{' '}
              <strong>$0.50 per number</strong>, the most affordable rate in the
              industry.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
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
          {/* Footnote */}
          <p className="mt-4 text-sm font-medium text-red-500 italic">
            *No credit card needed
          </p>
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
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <CallGaugeTargetAudience />
        <CallTracking />
        <FeaturesSection />
        <TrackMoreNumbers />
        {/*<WhoShould />*/}

        {/*<WhyChoose />*/}
        <FAQSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
