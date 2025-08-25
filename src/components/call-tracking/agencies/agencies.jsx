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
export default function AgenciesPage() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Call Tracking for Agencies – Powered by{' '}
          <span className="text-orange-600">AI</span>
        </h1>
        <h2 className="mx-auto mt-8 max-w-3xl text-xl font-semibold sm:text-2xl">
          Scale Smarter, Prove ROI, and Strengthen Client Relationships with
          CallGauge AI.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          As an agency, your success depends on demonstrating real results. With
          CallGauge AI, you get more than call tracking that is{' '}
          <strong> AI-powered insights </strong> which prove marketing ROI,
          streamline client management, and help you deliver transparent
          reporting that keeps clients longer.
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
          Why Agencies Choose CallGauge AI
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <FeatureCard
              number="1"
              title="Attribute Every Call to the Right Campaign"
              desc="Know exactly which ads, keywords, and campaigns drive leads so you can scale what works and cut wasted spend."
            />
            <FeatureCard
              number="2"
              title="Provide Clients With Transparent Access"
              desc="Clients get a white‑labeled portal to view calls, texts, and voicemails anytime — no more endless update requests."
            />
            <FeatureCard
              number="3"
              title="Automate Billing With Pay‑Per‑Call"
              desc="Forget spreadsheets. Automate invoices and payments with flexible billing rules — per call, per duration, or per lead."
            />
            <FeatureCard
              number="4"
              title="Deliver Smarter Insights With AI"
              desc="Use AI transcription & sentiment analysis to uncover customer intent and prove the value of every call."
            />
            <FeatureCard
              number="5"
              title="Manage Multiple Clients With Ease"
              desc="Create sub‑accounts for each client with individual reporting, billing, and settings — scalable for 5 or 500 clients."
            />
          </div>
          <div className="flex items-center justify-center">
            <Screenshot
              width={1116}
              height={686}
              src="/call-flow/agencies-page.png"
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
            Key Features for Agencies
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
              title: 'Dynamic Number Insertion',
              desc: 'Track calls back to exact keywords and ads.',
            },
            {
              icon: <FileText className="h-6 w-6 text-blue-600" />,
              title: 'AI Call Transcription & Analysis',
              desc: 'Capture intent, sentiment, and lead quality.',
            },
            {
              icon: <Users className="h-6 w-6 text-blue-600" />,
              title: 'Multi-Client Sub-Accounts',
              desc: 'Manage clients separately while staying in control.',
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
              title: 'Customizable Reports',
              desc: 'White-label reports that highlight ROI you deliver.',
            },
            {
              icon: <DollarSign className="h-6 w-6 text-blue-600" />,
              title: 'Pay Per Call Billing',
              desc: 'Automated invoicing to improve revenue collection.',
            },
            {
              icon: <Eye className="h-6 w-6 text-blue-600" />,
              title: '“See What They See” Mode',
              desc: 'Assist clients instantly without sharing credentials.',
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
            The ROI Advantage
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Agencies that use CallGauge AI don’t just report on calls — they{' '}
            <span className="font-semibold text-blue-600">prove value.</span>
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                text: 'Boost client retention with transparent reporting.',
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                text: 'Show ROI in real time with accurate attribution.',
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                text: 'Automate tasks that used to take hours, freeing your team.',
              },
              {
                icon: <DollarSign className="h-8 w-8 text-blue-600" />,
                text: 'Turn calls into measurable outcomes that justify higher fees.',
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
            Who Benefits From CallGauge AI?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Designed to fit agencies of all sizes and models.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: 'Marketing Agencies',
                desc: 'Track which campaigns drive leads and scale them.',
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                title: 'Lead Gen Agencies',
                desc: 'Monetize calls smartly with built-in billing tools.',
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: 'Performance Marketers',
                desc: 'Optimize campaigns with real-time attribution.',
              },

              {
                icon: <Building2 className="h-10 w-10 text-blue-600" />,
                title: 'Multi-Location Agencies',
                desc: 'Manage multiple clients seamlessly under one platform.',
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto my-20 max-w-7xl px-6 text-center lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
          Start Growing <span className="text-indigo-600"> Smarter</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          CallGauge AI gives agencies a competitive edge by combining call
          tracking, client management, and AI-driven insights into one platform.
          You’ll deliver better results, improve retention, and prove ROI
          without extra manual work. Therefore, you will grow faster than ever
          before.
        </p>

        {/* Highlight Card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
          <p className="text-lg font-semibold text-gray-900">
            Experience call tracking freedom with
            <span className="block text-indigo-600">
              no hidden fees, no caps, and just $0.50 per number.
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
