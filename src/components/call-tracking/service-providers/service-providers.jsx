import { Screenshot } from '@/components/screenshot'
import {
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  FileText,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
export default function ServiceProvidersPage() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Call Tracking for Service Providers – Powered by{' '}
          <span className="text-orange-600">AI</span>
        </h1>
        <h2 className="mx-auto mt-8 max-w-3xl text-xl font-semibold sm:text-2xl">
          Book More Jobs, Track Marketing ROI and Never Miss a Customer Call
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          When you are a service provider, phone calls are the lifeline of your
          business. Every missed call could mean a lost job and every dollar
          spent on a wasted ad eats up your profit. With{' '}
          <strong> CallGauge AI </strong>, you get more than call tracking like
          you will get{' '}
          <strong> AI-powered insights, call management and automation </strong>
          , designed to help you to win more customers, stay organized and grow
          your business.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-orange-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-orange-700">
            Try CallGauge AI Free
          </button>
          <button className="rounded-lg border border-orange-600 px-6 py-3 font-medium text-orange-600 transition hover:bg-orange-50">
            View Demo
          </button>
        </div>
      </div>

      {/* Why Agencies Choose */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Service Providers Choose CallGauge AI
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <FeatureCard
              number="1"
              title="Track Which Ads Drive Real Jobs"
              desc="Stop wasting your hard earned money on ads that don’t bring in work. CallGauge AI connects every call back to the Google Ads, Facebook campaign, website, or directory listing that generated it. You’ll know exactly what’s paying off and what’s simply not. "
            />
            <FeatureCard
              number="2"
              title="Never Miss Another Job Opportunity"
              desc="In the service providing industry, a missed call often means a missed job. With our instant call forwarding, multi-ringing, and voicemail-to-text, you or your team can respond really fast and can secure more bookings. "
            />
            <FeatureCard
              number="3"
              title="Look Professional and Organized"
              desc="When things are managed properly, even a small team can sound like a big company. Use our custom greetings, call menus and call routing to present a polished, professional experience every time a customer calls. "
            />
            <FeatureCard
              number="4"
              title="Turn Calls Into Real Insights"
              desc="In today’s competitive world it’s not just about who called, it’s about why they called. With our AI-powered transcription and sentiment analysis, you can understand customer needs, spot new trends, and measure how many calls turn into paying jobs. "
            />
            <FeatureCard
              number="5"
              title="Affordable, Built for Growth "
              desc="Other platforms charge $3+ per number. With CallGauge AI, numbers start at just $0.50 each—so you can easily track more ads, capture even more leads, and grow without breaking your budget. "
            />
          </div>
          <div className="flex items-center justify-center">
            <Screenshot
              width={1116}
              height={686}
              src="/call-flow/service-providers.png"
              alt=""
              className="ml-16 sm:max-w-[76rem]"
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-100 py-16">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Key Features for Service Providers
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
              title: 'Call Attribution',
              desc: 'See which campaigns and listings are generating real customers.',
            },
            {
              icon: <FileText className="h-6 w-6 text-blue-600" />,
              title: ' Call Forwarding & Multi-Ring',
              desc: 'Ensure no job opportunity ever slips through.',
            },
            {
              icon: <Users className="h-6 w-6 text-blue-600" />,
              title: 'Voicemail-to-Text',
              desc: 'Read missed calls instantly and respond real faster.',
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
              title: ' Custom Greetings & Routing',
              desc: 'Build trust and authenticity with a professional caller experience. ',
            },
            {
              icon: <DollarSign className="h-6 w-6 text-blue-600" />,
              title: ' AI Call Insights',
              desc: 'Understand customer intent and call outcomes. ',
            },
            {
              icon: <Eye className="h-6 w-6 text-blue-600" />,
              title: ' Low-Cost Tracking Numbers',
              desc: 'Track more ads at just $0.50 per number.',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 shadow-md transition hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Advantage */}
      <div className="bg-gradient-to-b from-white to-blue-50 px-6 py-20 lg:px-16">
        {/* ROI Advantage */}
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            The ROI Advantage for Service Providers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            With CallGauge AI, you don’t just track calls, you can turn them
            into measurable growth:
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                text: 'Spend smarter by knowing which ads are actually driving jobs. ',
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                text: 'Capture every lead with our instant call routing and alerts. ',
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                text: 'Win your customer trust with a professional phone experience. ',
              },
              {
                icon: <DollarSign className="h-8 w-8 text-blue-600" />,
                text: 'Use our AI insights to close more jobs and grow your reputation real fast. ',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 text-left shadow-md transition hover:shadow-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Benefits */}
        <div className="mx-auto mt-28 max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Who Benefits the Most?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: 'Contractors & Trades',
                desc: 'Plumbers, electricians, roofers, HVAC, and more.',
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                title: 'Home Services ',
                desc: 'Cleaners, pest control, landscapers, painters.',
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: ' Personal Services ',
                desc: 'Salons, spas, fitness trainers.',
              },

              {
                icon: <Building2 className="h-10 w-10 text-blue-600" />,
                title: 'Healthcare Providers',
                desc: 'Dentists, chiropractors, wellness clinics.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 text-left shadow-md transition hover:shadow-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-gray-600">
            If your business depends on customer calls, CallGauge AI makes sure
            you never waste opportunities.{' '}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto my-20 max-w-7xl px-6 text-center lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
          Grow Smarter, Book <span className="text-indigo-600"> More Jobs</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          <strong> CallGauge AI </strong> helps service providers{' '}
          <strong>
            {' '}
            win more work, cut wasted ad spend, and deliver better customer
            experiences{' '}
          </strong>
          , all of this without any extra complexity. It’s simple, affordable,
          and built to keep your phone ringing but only with the right
          customers.
        </p>

        {/* Highlight Card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
          <p className="text-lg font-semibold text-gray-900">
            Try CallGauge AI Free Today
            <span className="block text-indigo-600">
              Get $15 free credit to test the platform. No credit card required.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-indigo-700"
          >
            Start for free
          </a>
          <a
            href="#"
            className="rounded-xl border border-indigo-600 px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
          >
            Watch a demo
          </a>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ number, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      {/* Number Circle */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
        {number}
      </div>

      {/* Text Block */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 leading-relaxed text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
