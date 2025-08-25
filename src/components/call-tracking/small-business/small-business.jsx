import { Screenshot } from '@/components/screenshot'
import {
  Brain,
  DollarSign,
  FileText,
  PhoneCall,
  PhoneForwarded,
  Rocket,
  TrendingUp,
  User2,
  User2Icon,
  UserCheck,
} from 'lucide-react'

export default function SmallBusinessPage() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Call Tracking for Small Businesses – Powered by{' '}
          <span className="text-orange-600">AI</span>
        </h1>
        <h2 className="mx-auto mt-8 max-w-4xl text-xl font-semibold sm:text-2xl">
          Get More Customers, Track Marketing ROI, and Never Miss a Call Again
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          When you are a small business owner, every lead matters. You simply
          can’t afford to waste money on ads that don’t work or miss calls from
          potential customers. With CallGauge AI, you get more than just call
          tracking i.e. you get{' '}
          <strong>
            {' '}
            AI-powered insights, call management, and simple reporting{' '}
          </strong>{' '}
          that helps you grow your business with confidence.
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
          Why Small Businesses Choose CallGauge AI
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <FeatureCard
              number="1"
              title="Know Exactly Which Ads Work"
              desc="This is the time when you have to stop guessing where your calls come from. CallGauge AI tracks every call back to the ad, website, or campaign that generated it. This means you’ll know exactly which marketing campaign brings in paying customers and which is just draining out your budget."
            />
            <FeatureCard
              number="2"
              title=" Never Miss Another Opportunity"
              desc="These days, missed calls mean missed business. With call forwarding, voicemail-to-text, and instant notifications, CallGauge AI ensures you never actually miss a lead. With all these features you (or your team) can respond quickly and capture more leads."
            />
            <FeatureCard
              number="3"
              title="Impress Customers With a Professional Call Flow"
              desc="With our platform, even small businesses can sound big. Use  our custom greetings, call menus, and call routing to give every caller a polished and personalized experience, without needing a call center."
            />
            <FeatureCard
              number="4"
              title="Simplify Your Marketing Decisions"
              desc="With AI-powered reports, you’ll see exactly how many calls turned into real leads or sales. This makes it easy to decide where to spend more and where to cut back."
            />
            <FeatureCard
              number="5"
              title="Affordable Pricing Built for Growth "
              desc="Unlike other platforms that charge $3+ per number, CallGauge AI gives you call tracking phone  numbers for only $0.50 each—so you can track more ads, test new strategies, and grow without breaking the bank."
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
              <span className="text-indigo-600">Small Businesses</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Call Attribution',
                desc: 'See which ads and campaigns drive real calls',
                icon: PhoneCall,
              },
              {
                title: 'Voicemail-to-Text',
                desc: 'Quickly read messages on the go.',
                icon: FileText,
              },
              {
                title: 'Affordable Pricing',
                desc: 'Track more numbers at a fraction of the cost.',
                icon: DollarSign,
              },
              {
                title: 'Call Forwarding & Routing',
                desc: 'Never miss a customer call.',
                icon: PhoneForwarded,
              },
              {
                title: 'Custom Greetings & Menus',
                desc: 'Present a professional image.',
                icon: UserCheck,
              },
              {
                title: 'AI Call Insights',
                desc: ' Understand customer intent and lead quality.',
                icon: Brain,
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
              <span className="text-indigo-600">Small Businesses </span>
            </h2>
            <p className="max-w-xl leading-relaxed text-gray-600">
              With CallGauge AI, you don’t just get call tracking but you get a
              smarter way to grow your business:
            </p>
          </div>

          {/* Right Section - Cards */}
          <div className="grid grid-cols-2 gap-x-6">
            {[
              {
                step: '1',
                title: 'Spend Smarter on Ads',
                desc: 'Spend your money only on those ads that generate customers. ',
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
                title: 'Never Miss a Lead',
                desc: 'Capture every opportunity with our missed call alerts and smart routing. ',
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
              {
                step: '3',
                title: 'Professional Brand Image',
                desc: 'Look more professional with customized greetings and call flows. ',
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
                title: 'Big Insights, Small Business Price',
                desc: 'Get insights that used to be available only to big companies, now we them at small business prices. ',
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
                icon: <User2 className="h-10 w-10 text-blue-600" />,
                title: 'Home Service Providers ',
                desc: 'Plumbers, electricians, contractors, and more. ',
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: 'Local Healthcare Practices ',
                desc: 'Dentists, clinics, and wellness centers.',
              },
              {
                icon: <User2Icon className="h-10 w-10 text-blue-600" />,
                title: 'Restaurants & Hospitality',
                desc: 'Track calls from online ads and local listings.',
              },

              {
                icon: <Rocket className="h-10 w-10 text-blue-600" />,
                title: ' Any Local Business',
                desc: 'That depends on phone calls to generate sales.',
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
          Grow Smarter Without{' '}
          <span className="text-indigo-600">Complexity</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          You don’t need to have a big marketing team to take advantage of call
          tracking. With CallGauge AI, small businesses get easy-to-use,
          <strong> affordable tools powered by AI </strong> to win more
          customers and grow with confidence.
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
