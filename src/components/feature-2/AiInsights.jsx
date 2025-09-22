'use client'
import Link from 'next/link'

export default function AiInsights2() {
  const features = [
    {
      title: 'Voice or Voice + Messaging',
      desc: ' Choose whether to port just voice services or both voice and messaging, depending on your current setup.',
    },
    {
      title: 'Zero Downtime Transfers',
      desc: 'Maintain uninterrupted service during the porting process so your campaigns and client communications never miss a beat.',
    },
    {
      title: 'Self-Serve Port-In',
      desc: ' Submit numbers, provider information, and your Letter of Authorization (LOA) directly from within the app.',
      link: '#',
    },
  ]

  const journey = [
    {
      iconBg: 'bg-blue-500',
      icon: 'P',
      title: 'Press 1 to Connect',
      subtitle: 'Stop robocalls before they reach your team.',
    },
    {
      connector: true,
    },
    {
      iconBg: 'bg-blue-600',
      icon: 'M',
      title: 'Missed Call Alerts',
      subtitle: ' Get instant SMS or email notifications with caller details.',
    },
    {
      connector: true,
    },
    {
      iconBg: 'bg-green-500',
      icon: '📞',
      title: 'Caller ID Masking',
      subtitle:
        'Show the tracking number as the caller ID for special routing needs.',
    },
  ]

  return (
    <section id="attribution" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Visualization */}
          <div className="order-2 lg:order-1">
            {/*<div className="rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg">*/}
            {/*  <h3 className="mb-6 text-xl font-bold text-gray-900">*/}
            {/*    Customer Journey Attribution*/}
            {/*  </h3>*/}

            {/*  <div className="space-y-4">*/}
            {/*    {journey.map((step, i) =>*/}
            {/*      step.connector ? (*/}
            {/*        <div key={i} className="flex justify-center">*/}
            {/*          <div className="h-6 w-0.5 bg-purple-300" />*/}
            {/*        </div>*/}
            {/*      ) : (*/}
            {/*        <div*/}
            {/*          key={i}*/}
            {/*          className="rounded-xl border border-purple-100 bg-white p-4 shadow-sm"*/}
            {/*        >*/}
            {/*          <div className="mb-2">*/}
            {/*            <div className="flex items-center space-x-3">*/}
            {/*              <div*/}
            {/*                className={`h-8 w-8 ${step.iconBg} flex items-center justify-center rounded-full`}*/}
            {/*              >*/}
            {/*                <span className="text-xs font-bold text-white">*/}
            {/*                  {step.icon}*/}
            {/*                </span>*/}
            {/*              </div>*/}
            {/*              <div>*/}
            {/*                <div className="font-medium text-gray-900">*/}
            {/*                  {step.title}*/}
            {/*                </div>*/}
            {/*                <div className="text-xs text-gray-500">*/}
            {/*                  {step.subtitle}*/}
            {/*                </div>*/}
            {/*              </div>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      ),*/}
            {/*    )}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 inline-flex items-center rounded-full bg-purple-100 px-6 py-3">
              <span className="font-bold text-purple-800">
                🎯 Number Porting
              </span>
            </div>

            <h2 className="mb-6 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Seamless Number Porting,{' '}
              <span className="bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Zero Interruptions
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Don’t lose momentum when switching platforms. With CallGauge AI’s
              number porting, you can move your existing phone numbers into the
              system without downtime, keeping your marketing and communications
              running smoothly.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      {feature.desc}
                    </p>
                    {feature.link && (
                      <Link
                        href={feature.link}
                        className="mt-2 inline-block font-bold text-blue-600 hover:underline"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/*<div className="mt-10">*/}
            {/*  <button className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-xl">*/}
            {/*    Explore Attribution Models*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
