import CallTracking from '@/components/asd'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { FeaturesSection } from '@/components/home/all-features'
import { TrackMoreNumbers } from '@/components/home/track-more-numbers'
import WhoShould from '@/components/home/who-should '
import WhyChoose from '@/components/home/why-choose'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Bot, PhoneCall, Users } from 'lucide-react'

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
        <div className="py-16 text-center md:py-24">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            AI-Powered Call Tracking That Supercharges Your Business
          </h1>

          {/* Subtitle / Supporting Text */}
          <div className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700 sm:text-xl">
            <p>
              With <strong>CallGauge AI</strong>, you can intelligently track
              every{' '}
              <strong>phone call, text message, web form, and live chat</strong>{' '}
              — all from a single, unified dashboard.
            </p>
            <p className="mt-4">
              Leverage the power of <strong>artificial intelligence</strong> to
              capture, analyze, and optimize every customer interaction.
            </p>
            <p className="mt-4">
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

function CallTrackingSuite() {
  return (
    <div className="my-20 bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[41px]">
          All-in-One AI Call Tracking Suite
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Smarter, faster, and more affordable than anything else.
        </p>
      </div>

      {/* Features Section */}
      <section className="container mx-auto grid gap-12 px-6 py-20 md:grid-cols-3">
        {/* Card 1 */}
        <Card className="rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="p-6">
            <PhoneCall className="mb-4 h-10 w-10 text-orange-500" />
            <h3 className="mb-2 text-xl font-semibold">
              AI Attribution & Call Intelligence
            </h3>
            <ul className="list-disc space-y-2 px-4 text-base text-gray-600">
              <li>Instantly identify where your calls come from?</li>
              <li>
                Use Dynamic Number Insertion (DNI) to connect campaigns to
                calls.
              </li>
              <li>AI-powered call transcription and summaries.</li>
              <li>Know which leads convert — and why?</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="p-6">
            <Bot className="mb-4 h-10 w-10 text-orange-500" />
            <h3 className="mb-2 text-xl font-semibold">
              Streamlined Call Operations
            </h3>
            <ul className="list-disc space-y-2 px-4 text-base text-gray-600">
              <li>
                Call Whisper, Call Recording, Voicemail, and SMS in one place.
              </li>
              <li>Automate call routing and follow-ups.</li>
              <li>Manage missed calls with instant alerts.</li>
              <li>Seamless AI transcription for every call.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="p-6">
            <Users className="mb-4 h-10 w-10 text-blue-500" />
            <h3 className="mb-2 text-xl font-semibold">
              Effortless Client Management
            </h3>
            <ul className="list-disc space-y-2 px-4 text-base text-gray-600">
              <li>
                Give clients real-time dashboards with white-label access.
              </li>
              <li>Automate client billing with our Pay-Per-Call model.</li>
              <li>Handle 10x more accounts without extra workload.</li>
              <li>Build trust with branded portals and reporting.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
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
        <CallTrackingSuite />
        <CallTracking />
        <FeaturesSection />
        <TrackMoreNumbers />
        <WhoShould />
        <WhyChoose />

        <FAQSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
