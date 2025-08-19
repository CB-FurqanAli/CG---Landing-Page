import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import AllFeatures from '@/components/home/all-features'
import { TrackMoreNumbers } from '@/components/home/track-more-numbers'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'

import WhoShould from '@/components/home/who-should '
import WhyChoose from '@/components/home/why-choose'
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
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            All-in-One AI Call Tracking Suite
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            Smarter, faster, and more affordable than anything else.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="mt-12 space-y-10 divide-y divide-gray-200">
          {/* Section 1 */}
          <div className="grid gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-3 py-1 text-sm font-medium text-white shadow-sm">
                AI Attribution & Call Intelligence
              </span>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>
                  Instantly identify where your calls come from?
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>
                  Use Dynamic Number Insertion (DNI) to connect campaigns to
                  calls.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>
                  AI-powered call transcription and summaries.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>
                  Know which leads convert — and why?
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-[#fff1be] via-[#ee87cb] to-[#b060ff] p-1 shadow-lg">
              <div className="rounded-xl bg-white p-8">
                <img
                  src="https://www.whatconverts.com/wp-content/uploads/2021/07/call-tracking-numbers-hero-1000x700-1.jpg"
                  alt="AI Attribution & Call Intelligence"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="grid gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-last rounded-2xl bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] p-1 shadow-lg lg:order-first">
              <div className="rounded-xl bg-white p-8">
                <img
                  src="https://www.whatconverts.com/wp-content/uploads/2021/07/call-tracking-numbers-hero-1000x700-1.jpg"
                  alt="Call Operations"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#6366f1] px-3 py-1 text-sm font-medium text-white shadow-sm">
                Streamlined Call Operations
              </span>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>
                  Call Whisper, Call Recording, Voicemail, and SMS in one place.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Automate call routing and follow-ups.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Manage missed calls with instant alerts.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Seamless AI transcription for every call.
                </li>
              </ul>
            </div>
          </div>
          {/* Section 3 */}
          <div className="grid gap-12 pt-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#22c55e] to-[#15803d] px-3 py-1 text-sm font-medium text-white shadow-sm">
                Effortless Client Management
              </span>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Give clients real-time dashboards with white-label access.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Automate client billing with our Pay-Per-Call model.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Handle 10x more accounts without extra workload.
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    ✓
                  </span>{' '}
                  Build trust with branded portals and reporting.
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-[#fdf4ff] to-[#f3e8ff] p-1 shadow-lg">
              <div className="rounded-xl bg-white p-8">
                <img
                  src="https://www.whatconverts.com/wp-content/uploads/2024/07/1_Featured-Image-1024x717.jpg"
                  alt="Client Management"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

        <TrackMoreNumbers />
        <WhoShould />
        <WhyChoose />
        <AllFeatures />

        <FAQSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
