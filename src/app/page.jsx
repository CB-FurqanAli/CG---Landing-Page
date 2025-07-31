import { Bullets } from '@/components/bullets'
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
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'CallGauge helps you maximize ROI with affordable, scalable call tracking for businesses and agencies.',
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
          <h1 className="font-display text-4xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[1] md:text-7xl/[1]">
            AI-Powered Call Tracking That Supercharge Your Business
          </h1>
          <div className="mx-auto mt-8 max-w-xl text-center text-xl/7 font-medium text-gray-950/75 sm:text-xl/8">
            <p>
              With <strong>CallGauge AI </strong>, you can intelligently track
              every{' '}
              <strong>
                phone call, text message, web form, and live chat{' '}
              </strong>{' '}
              — all from a single, unified dashboard.
            </p>
            <p>
              Leverage the power of <strong>artificial intelligence </strong> to
              capture, analyze, and optimize every customer interaction.
            </p>
            <p>
              Turn more leads into revenue and grow faster — all for just{' '}
              <strong>$0.50 per number </strong>, the most affordable rate in
              the industry.
            </p>
          </div>
          <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Sign up free</Button>
            <Button variant="secondary" href="#">
              Watch a demo
            </Button>
            {/*<Button variant="secondary" href="/pricing">*/}
            {/*  See pricing*/}
            {/*</Button>*/}
          </div>
          <p className="mt-3 text-sm font-medium text-red-500 italic">
            *No credit card needed
          </p>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-16">
        <Heading as="h2" className="max-w-3xl">
          Offering complete call tracking solution at industry-low pricing.
        </Heading>
        <Screenshot
          width={1216}
          height={786}
          // src="/screenshots/app.png" // Replace with actual CallGauge dashboard screenshot
          src="/screenshots/dummy2.png" // Replace with actual CallGauge dashboard screenshot
          className="mt-16 sm:max-w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <div className="grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <Bullets
          title="Call operations, handled"
          bullets="Call whisper & call recording."
          bullets1="SMS, voicemail and call management."
          bullets2="AI transcription & summaries."
          bullets3="All call-related operations streamlined."
          fade={['bottom']}
          className="bg-[#FDE0C1] max-lg:rounded-tr-4xl"
        />

        <Bullets
          title="Inbound Calls, Attributed"
          bullets="Identify the source of every phone call."
          bullets1="Uncover your best leads and amplify results."
          bullets2="Dynamic number insertion (DNI)"
          bullets3="Rout and record your phone calls seamlessly."
          fade={['bottom']}
          className="bg-[#DF80D9] max-lg:rounded-t-4xl"
        />
        <Bullets
          title="Manage Clients, Effortlessly"
          bullets="Bill your clients, per-call seamlessly."
          bullets1="Offer real-time access to clients."
          bullets2="Client invoicing, automated."
          bullets3="Hassle-free white labeling."
          fade={['bottom']}
          className="bg-[#FBCFC5] max-lg:rounded-tr-4xl"
        />
      </div>
    </Container>
  )
}

// function DarkBentoSection() {
//   return (
//     <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
//       <Container>
//         <Subheading dark>Client Management & Phone Operations</Subheading>
//         <Heading as="h3" dark className="mt-2 max-w-4xl">
//           Who should use Call Gauge Pro?
//         </Heading>
//         <p className="mt-4 text-lg text-white">
//           If you are in the need of call tracking and attribution, you have
//           found your savior.{' '}
//         </p>
//
//         <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//           <BentoCard
//             dark
//             eyebrow="Client Billing"
//             title="High volume businesses."
//             description="Cut your costs exponentially with our guaranteed low prices."
//             graphic={
//               // <div className="h-80 bg-[url(/screenshots/dummy2.png)] bg-[size:851px_344px] bg-no-repeat" />
//
//               <div className="relative h-80">
//                 <Image src="/screenshots/dummy2.png" fill alt="" />
//               </div>
//
//               // <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
//             }
//             fade={['top']}
//             className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="White Labeling"
//             title="Marketing agencies and SEO agencies."
//             description="Efficiently manage your clients and invoice them seamlessly."
//             graphic={<LogoTimeline />}
//             className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Phone Features"
//             title="Lead generation companies."
//             description="Flourish your lead-gen business to a higher level."
//             graphic={<LinkedAvatars />}
//             className="lg:col-span-2 lg:rounded-bl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="SMS & Voicemail"
//             title="Local businesses."
//             description="Experiment with more marketing strategies while keeping your costs minimum."
//             graphic={
//               // <div className="h-80 bg-[url(/screenshots/dummy2.png)] bg-[size:851px_344px] bg-no-repeat" />
//               <div className="relative h-80">
//                 <Image src="/screenshots/dummy2.png" fill alt="" />
//               </div>
//             }
//             fade={['top']}
//             className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
//           />
//         </div>
//
//         <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
//           <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl focus:ring-4 focus:ring-purple-500/30 focus:outline-none active:scale-95">
//             Start for free today
//           </button>
//           <button className="rounded-xl border border-slate-500 bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-slate-500 hover:to-slate-600 hover:shadow-xl focus:ring-4 focus:ring-slate-500/30 focus:outline-none active:scale-95">
//             Watch a demo
//           </button>
//         </div>
//         <p className="mt-4 text-sm font-medium text-red-400 italic">
//           *No credit card needed
//         </p>
//       </Container>
//     </div>
//   )
// }

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-10 sm:py-20 md:py-24 lg:py-24">
          <FeatureSection />
          <BentoSection />
        </div>
        <div>
          <TrackMoreNumbers />
        </div>
        <div>
          <WhoShould />
        </div>
        <div>
          <WhyChoose />
        </div>
        <div className="my-10">
          <AllFeatures />
        </div>
        {/*<DarkBentoSection />*/}
        <FAQSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
