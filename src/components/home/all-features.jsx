'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export function FeaturesSection() {
  const features = [
    'Clean USA & Canadian Numbers',
    'AI Powered Tracking & Analytics',
    'SMS & Call Forwarding',
    'Inbound Call Tracking',
    'Effortless Client Management',
    'Free Call Recording',
    'Call Whispering',
    'Missed Call Notifications',
    'Fully Automated Reporting System',
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
            We offer all the features you need
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            At the lowest possible prices — designed to scale with your
            business.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-orange-500" />
                <span className="text-base text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href={'/demo'}
              className="rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold shadow-md transition hover:bg-orange-600"
            >
              View Interactive Demo
            </Link>
            <p className="text-gray-400 italic">No credit card needed.</p>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
