'use client'
import Link from 'next/link'
export default function AttributionSection2() {
  const features = [
    {
      title: 'Attribution Models',
      desc: 'See the complete customer journey with first-touch, last-touch, linear, and multi-touch attribution, so you know which touch points actually drive conversions.',
      link: '#',
    },
    {
      title: 'ROI & ROAS Reporting',
      desc: 'Go beyond call counts. Track revenue, ROI, and ROAS at the campaign and channel level to prove marketing impact with confidence.',
      link: '#',
    },
    {
      title: 'Pay Per Call',
      desc: 'Turn calls into a revenue stream. With built-in pay-per-call billing, you can charge clients for qualified leads and track performance transparently.',
      link: 'features/pay-per-call',
    },
  ]

  const journey = [
    {
      iconBg: 'bg-blue-500',
      icon: 'G',
      title: 'Google Ads',
      subtitle: 'First Touch',
      attribution: '40%',
    },
    {
      connector: true,
    },
    {
      iconBg: 'bg-blue-600',
      icon: 'F',
      title: 'Facebook Retargeting',
      subtitle: 'Middle Touch',
      attribution: '30%',
    },
    {
      connector: true,
    },
    {
      iconBg: 'bg-green-500',
      icon: '📞',
      title: 'Phone Call',
      subtitle: 'Conversion Touch',
      attribution: '30%',
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
            {/*          <div className="mb-2 flex items-center justify-between">*/}
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
            {/*            <div className="text-right">*/}
            {/*              <div className="font-bold text-purple-600">*/}
            {/*                {step.attribution}*/}
            {/*              </div>*/}
            {/*              <div className="text-xs text-gray-500">*/}
            {/*                Attribution*/}
            {/*              </div>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      ),*/}
            {/*    )}*/}
            {/*  </div>*/}

            {/*  <div className="mt-6 border-t border-purple-200 pt-4">*/}
            {/*    <div className="flex items-center justify-between">*/}
            {/*      <span className="text-sm font-medium text-gray-700">*/}
            {/*        Total Conversion Value*/}
            {/*      </span>*/}
            {/*      <span className="text-lg font-bold text-green-600">*/}
            {/*        $2,450*/}
            {/*      </span>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 inline-flex items-center rounded-full bg-purple-100 px-6 py-3">
              <span className="font-bold text-purple-800">🎯 ATTRIBUTION</span>
            </div>

            <h2 className="mb-6 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Attribution & ROI{' '}
              <span className="bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Reporting
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Get clarity on the true impact of your marketing. CallGauge AI
              connects every call to the campaign, keyword, or channel that
              drove it, so you can measure performance with precision and prove
              ROI with confidence.
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
                    <Link
                      href={feature.link}
                      className="mt-2 inline-block font-bold text-purple-500 hover:underline"
                    >
                      Learn More →
                    </Link>
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
