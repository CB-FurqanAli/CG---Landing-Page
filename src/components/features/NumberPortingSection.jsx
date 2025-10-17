'use client'
import { Screenshot } from '@/components/screenshot'
import Link from 'next/link'

export default function NumberPortingSection() {
  const features = [
    {
      title: 'Voice or Voice + Messaging',
      desc: ' Choose whether to port just voice services or both voice and messaging, depending on your current setup.',
    },
    {
      title: 'Zero Downtime Transfers',
      desc: 'Maintain uninterrupted service during the case-studies process so your campaigns and client communications never miss a beat.',
    },
    {
      title: 'Self-Serve Port-In',
      desc: ' Submit numbers, provider information, and your Letter of Authorization (LOA) directly from within the app.',
      link: '#',
    },
  ]

  return (
    <section id="attribution" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Visualization */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden">
              <div>
                <Screenshot
                  width={1024}
                  height={820}
                  alt="Seamless Number Porting, Zero Interruptions"
                  src="/features/number-porting.png"
                  className="sm:max-w-[76rem]"
                />
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
