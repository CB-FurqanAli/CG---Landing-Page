'use client'
import { Button } from '@/components/button'
import { CaseStudiesFaq } from '@/components/case-studies/case-studies-faq'
import { Sparkles } from 'lucide-react'

export default function CaseStudiesFaqPage() {
  const features = [
    {
      text: ' Affordable Phone Numbers – Get local or toll-free numbers starting at just $0.50 per month.',
    },
    {
      text: ' Smart Call Flows – Customize greetings, Forward calls, enable multi-ring, or set up round-robin routing with ease',
    },
    {
      text: 'AI-Powered Voicemail & Call Tracking – Capture every call, voicemail and text with real-time analytics.',
    },
    {
      text: 'Automated Billing – Bill clients per call, per lead or as per duration with AI-driven accuracy.',
    },
    {
      text: 'Flexible Trials – Experience our platform with a $15 free credit, no card required.',
    },
  ]

  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="container mx-auto px-6 py-20 text-center lg:px-12">
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold sm:text-5xl">
          Seamlessly Port Your Phone Numbers to{' '}
          <span className="text-indigo-600">CallGauge AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Moving your numbers to CallGauge AI is simple and stress-free. Our
          team ensures a smooth transition so you can start tracking and
          managing calls with AI-powered insights right away.
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
            Watch a demo
          </Button>
        </div>
        {/* Footnote */}
        <p className="mt-4 text-sm font-medium text-red-500 italic">
          *No credit card needed
        </p>
      </div>

      {/* Features */}
      <div className="bg-gradient-to-br from-white to-indigo-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Explore More CallGauge AI Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="h-7 w-7 text-indigo-600" />
                  <p className="font-medium text-gray-700">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <CaseStudiesFaq />

      {/* CTA */}
      <div className="container mx-auto px-6 py-20 text-center lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          🔥 Ready to Port?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Switching to CallGauge AI isn’t just moving carriers—it’s upgrading to
          smarter call tracking with AI-powered insights and tools to boost your
          business.
        </p>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
          <p className="text-lg font-semibold text-gray-900">
            👉 Keep your numbers, gain AI power.Begin porting with CallGauge AI.
            <span className="block text-indigo-600">
              Sign up free and instantly get $15 to explore our platform
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
            Watch a demo
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
