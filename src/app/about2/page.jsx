import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

import { Button } from '@/components/button'
import TeamSection from '@/components/teamsection'
import Image from 'next/image'
import img1 from '/public/company/1.jpg'
import img2 from '/public/company/2.jpg'
import img3 from '/public/company/3.jpg'
import img4 from '/public/company/4.webp'

export const metadata = {
  title: 'About CallGauge AI | AI-Powered Call Tracking & Analytics',
  description:
    'Discover how CallGauge AI helps marketers and agencies achieve upto 98% attribution accuracy with AI-powered call tracking, analytics, and real-time insights.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Building the Future of Marketing Clarity</Heading>
      <Lead className="mt-6 max-w-4xl text-lg">
        CallGauge AI is a call analytics and call tracking platform designed to
        give agencies and businesses complete Clear view which campaigns are
        genuinely delivering results. We track your incoming calls, match them
        to the campaigns that generated them, and deliver real time insights so
        you can invest confidently in what actually works.
      </Lead>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <section className="font-inter bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-7xl gap-12">
              {/* Mission Card */}
              <div className="transform rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-10 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our mission is to deliver clear, accurate, and decision ready
                  performance insights. We want marketers to make smarter
                  decisions backed by evidence not guesswork.
                </p>
              </div>

              {/* Vision Card */}
              <div className="transform rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-10 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  We envision a marketing landscape where clarity replaces
                  confusion and every decision is supported by real data not
                  assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={img1}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={img2}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={img3}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={img4}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-[#f5f5f3] py-16 lg:-mt-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <div>
              <p className="text-4xl font-semibold text-gray-900 lg:text-5xl">
                $<AnimatedNumber start={1} end={10} />M
              </p>
              <p className="mt-2 text-base text-gray-600">
                Annual average income is expected to reach and continue
                increasing by 2026.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-4xl font-semibold text-gray-900 lg:text-5xl">
                <AnimatedNumber start={4} end={15} />
                K+
              </p>
              <p className="mt-2 text-base text-gray-600">
                Our goal is to build trust with a growing number of businesses.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-4xl font-semibold text-gray-900 lg:text-5xl">
                <AnimatedNumber start={50} end={75} />
                M+
              </p>
              <p className="mt-2 text-base text-gray-600">
                Calls tracked and analyzed across campaigns
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <p className="text-4xl font-semibold text-gray-900 lg:text-5xl">
                <AnimatedNumber start={20} end={40} />
                K+
              </p>
              <p className="mt-2 text-base text-gray-600">
                Clients managed by agencies and businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function OurStorySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Our Story
          </h2>

          <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 md:p-12">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The idea for <span className="font-semibold">CallGauge AI</span>{' '}
              came after working closely with businesses that consistently
              invested in paid ads, SEO, and multiple campaigns but didn&#39;t
              have a reliable to track which channels were generating their
              phone leads.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Great campaigns were performing but they weren&apos;t getting the
              credit they deserved simply because the tracking wasn&apos;t
              there.
            </p>

            <div className="mb-8 rounded-xl bg-indigo-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                So we built a solution that:
              </h3>

              <div className="space-y-4">
                {[
                  'Tracks phone calls with accurate detail.',
                  'Connects calls to specific campaigns in real-time',
                  'Integrates smoothly without technical difficulty',
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg
                      className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Today, <span className="font-semibold">CallGauge AI</span> helps
              agencies and businesses every day by providing clarity,
              transparency, and measurable ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  // Cards: Why Businesses Choose CallGauge AI
  const benefits = [
    {
      title: 'Accurate Tracking',
      desc: 'See exactly which campaigns are driving your calls no estimations.',
      cardBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconWrap: 'bg-blue-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: 'Easy Integration',
      desc: 'Works seamlessly with your existing marketing systems and workflows.',
      cardBg: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconWrap: 'bg-purple-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      ),
    },
    {
      title: 'Real-Time Insights',
      desc: 'Live dashboards help you monitor performance moment by moment.',
      cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconWrap: 'bg-green-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
    {
      title: 'Built for Scale',
      desc: 'Scalable, client friendly, and designed for multi account workspaces.',
      cardBg: 'bg-gradient-to-br from-orange-50 to-red-50',
      iconWrap: 'bg-orange-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ]

  // Chips: Who We Serve
  const audiences = [
    {
      name: 'Marketing Agencies',
      iconWrap: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      name: 'Real Estate Teams',
      iconWrap: 'bg-purple-100',
      iconColor: 'text-purple-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      name: 'Service Based Businesses',
      iconWrap: 'bg-blue-100',
      iconColor: 'text-blue-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z"
        />
      ),
    },
    {
      name: 'Automotive & Dealerships',
      iconWrap: 'bg-green-100',
      iconColor: 'text-green-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
      ),
    },
    {
      name: 'Healthcare Practices',
      iconWrap: 'bg-red-100',
      iconColor: 'text-red-600',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },
    {
      name: 'Local & Regional Businesses',
      iconWrap: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
    },
  ]

  return (
    <>
      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-20 text-center text-4xl font-bold text-gray-900 md:text-5xl">
              Why Businesses Choose{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                CallGauge AI
              </span>
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`${b.cardBg} rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <div
                    className={`h-14 w-14 ${b.iconWrap} mb-6 flex items-center justify-center rounded-lg`}
                  >
                    <svg
                      className="h-7 w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {b.icon}
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
              Who We Serve
            </h2>
            <p className="mb-12 text-center text-xl text-gray-600">
              CallGauge AI is suitable for organizations that depend on phone
              calls as a primary lead source
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {audiences.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`h-12 w-12 ${a.iconWrap} mr-4 flex flex-shrink-0 items-center justify-center rounded-lg`}
                  >
                    <svg
                      className={`h-6 w-6 ${a.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {a.icon}
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    {a.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-xl font-medium text-gray-700">
              If calls important to your business, CallGauge AI is built for
              you.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function CTA() {
  return (
    <section className="mb-12 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 sm:bg-linear-145">
      {/* Decorative Dots Pattern */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
          Let&#39;s Bring Clarity to Your Performance
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
          Smart decisions begin with clear data. Clear data begins with
          CallGauge AI.
        </p>

        {/* Buttons */}
        <div className="">
          <p className="text-md my-6">
            Ready to see what&#39;s really working?
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/login" className="px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              href="/demo"
              className="px-8 py-3 text-lg font-semibold text-white"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
        {/* Bottom Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-blue-100">
          {[
            'No credit card required',
            'Cancel anytime',
            'Setup in 5 minutes',
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About2() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <OurStorySection />
      <WhyChooseUs />
      <TeamSection />
      <CTA />
      <Footer />
    </main>
  )
}
