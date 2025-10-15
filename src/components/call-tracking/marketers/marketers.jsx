import { Button } from '@/components/button'
import { Screenshot } from '@/components/screenshot'
import {
  FileAudio,
  FileText,
  Gauge,
  Link2,
  Megaphone,
  Rocket,
  Target,
  TrendingUp,
  User2Icon,
  UserCheck,
} from 'lucide-react'

export default function MarketersPage() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Call Tracking for Marketers – Powered by{' '}
          <span className="text-orange-600">AI</span>
        </h1>
        <h2 className="mx-auto mt-8 max-w-4xl text-xl font-semibold sm:text-2xl">
          Maximize Campaign ROI, Optimize Spend and Turn Every Call Into Data
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          When you are a marketer, you are always judged by your performance.
          That means you have to prove ROI, cut wasted spend, and scale what
          works best. With <strong> CallGauge AI </strong>, you get more than
          call tracking i.e.you unlock{' '}
          <strong>
            {' '}
            AI-powered attribution, customer insights, and automation{' '}
          </strong>{' '}
          designed to help marketers{' '}
          <strong> optimize campaigns and deliver measurable results. </strong>
        </p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Start for free
          </Button>
          <Button
            variant="secondary"
            href="/demo"
            className="px-8 py-3 text-lg font-semibold"
          >
            Watch A Demo
          </Button>
        </div>
        {/* Footnote */}
        <p className="mt-4 text-sm font-medium text-red-500 italic">
          *No credit card needed
        </p>
      </div>
      {/* Why Agencies Choose */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Marketers Choose CallGauge AI
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <FeatureCard
              number="1"
              title="Track Every Lead Back to Its Source "
              desc="Now you don’t have to second-guess your results ever again. CallGauge AI automatically attributes every call back to the ad, keyword, landing page, or campaign that generated it. You’ll know exactly which clicks drive real conversations and which simply don’t. "
            />
            <FeatureCard
              number="2"
              title="Optimize Campaigns in Real Time"
              desc="With instant attribution and AI-powered analytics, you can identify underperforming ads cut down you spend on them. While you can easily identify and double down on top-performing ones. Stop wasting spend on low-quality traffic and start scaling high-converting campaigns faster. "
            />
            <FeatureCard
              number="3"
              title="Get Customer Insights Beyond Clicks"
              desc="Now, in present times it’s not just about who called, it’s about why. CallGauge AI transcribes and analyzes every conversation to reveal information about customer intent, sentiment, and lead quality. These insights help you fine-tune your messaging, landing pages, and sales strategies"
            />
            <FeatureCard
              number="4"
              title="Simplify Reporting With AI"
              desc="4. Simplify Reporting With AI
                Now there will be no more messy spreadsheets or manual reports. Generate customizable, white-labeled reports that clearly show ROI. Share them with stakeholders to prove the value of your campaigns without putting any extra effort on your end. "
            />
            <FeatureCard
              number="5"
              title="Automate the Busywork"
              desc="From AI call scoring to lead qualification and integration with tools like Zapier, CallGauge AI eliminates repetitive tasks. That means you could  spend more time optimizing and less time managing data. "
            />
          </div>
          <div className="flex items-center justify-center">
            <Screenshot
              width={1116}
              height={686}
              src="/call-flow/marketers-page.png"
              alt=""
              className="ml-16 sm:max-w-[76rem]"
            />
          </div>
        </div>
      </div>
      {/* Key Features for Service Providers */}
      <div className="relative bg-gray-100 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Key Features for{' '}
              <span className="text-indigo-600">Service Providers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Powerful tools designed to help service-based businesses capture
              more leads, build trust, and never miss an opportunity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Dynamic Number Insertion (DNI)',
                desc: ' Attribute calls to exact ads and keywords.',
                icon: Megaphone,
              },
              {
                title: ' AI Transcription & Analysis',
                desc: 'Capture customer intent and sentiment. ',
                icon: FileAudio,
              },
              {
                title: ' Real-Time Attribution',
                desc: 'Know which campaigns drive real leads instantly.',
                icon: Gauge,
              },
              {
                title: ' White-Labeled Reporting',
                desc: 'Show ROI in reports branded with your logo.',
                icon: FileText,
              },
              {
                title: 'Lead Scoring Automation',
                desc: 'Quickly identify high-value leads. ',
                icon: UserCheck,
              },
              {
                title: 'CRM & Ad Platform Integrations',
                desc: ' Sync data with your existing marketing stack. ',
                icon: Link2,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ROI Advantage */}
      <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-24">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Left Section */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
              The ROI Advantage for{' '}
              <span className="text-indigo-600">Marketers</span>
            </h2>
            <p className="max-w-xl leading-relaxed text-gray-600">
              With CallGauge AI, marketers don’t just track calls — they
              optimize campaigns for maximum ROI.
            </p>
          </div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-2 gap-x-6">
            {[
              {
                step: '1',
                title: 'Reduce Wasted Ad Spend',
                desc: 'Reduce wasted ad expense by cutting poor-performing channels.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                ),
                className: 'mb-6',
              },
              {
                step: '2',
                title: 'Scale Winning Campaigns',
                desc: 'Scale campaigns that drive real phone leads.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                ),
                className: 'mt-6',
              },
              {
                step: '3',
                title: 'Prove ROI Easily',
                desc: 'Prove ROI to clients, stakeholders, or leadership teams.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                ),
                className: 'mb-6',
              },
              {
                step: '4',
                title: ' Sharpen Targeting',
                desc: 'Gain insights into customer conversations for sharper targeting.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                ),
                className: 'mt-6',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group rounded-3xl bg-white p-9 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl ${item.className}`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition-colors duration-500 group-hover:bg-purple-600 group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {item.step}. {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*Who Benefits From CallGauge AI?*/}

        <div className="mx-auto mt-32 max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Who Benefits the Most?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Target className="h-10 w-10 text-blue-600" />,
                title: 'Digital Marketers',
                desc: 'Attribute calls to campaigns for smarter optimization. ',
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: 'Performance Marketers',
                desc: 'Maximize ROI with real-time insights.',
              },
              {
                icon: <User2Icon className="h-10 w-10 text-blue-600" />,
                title: 'In-House Marketing Teams',
                desc: 'Prove results to leadership and secure more budget.',
              },

              {
                icon: <Rocket className="h-10 w-10 text-blue-600" />,
                title: 'Growth Marketers',
                desc: 'Turn customer calls into a powerful data source for scaling',
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
          Turn Calls Into Marketing{' '}
          <span className="text-indigo-600"> Intelligence</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          With CallGauge AI, every call becomes a data point you can optimize, a
          lead you can score, and a conversion you can prove.
        </p>

        {/* Highlight Card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
          <p className="text-lg font-semibold text-gray-900">
            Experience call tracking freedom with CallGauge AI
            <span className="block text-indigo-600">
              Sign Up Free and instantly get $15 to explore our platform
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Start for free
          </Button>
          <Button
            variant="secondary"
            href="/demo"
            className="px-8 py-3 text-lg font-semibold"
          >
            Watch A Demo
          </Button>
        </div>
        {/* Footnote */}
        <p className="mt-4 text-sm font-medium text-red-500 italic">
          *No credit card needed
        </p>
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
