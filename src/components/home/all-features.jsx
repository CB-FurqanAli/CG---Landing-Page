import {
  BarChart,
  Bell,
  Bot,
  Headphones,
  MessageSquare,
  Mic,
  Phone,
  TrendingUp,
  Users,
} from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      name: 'Clean USA & Canadian Numbers',
      desc: 'Get verified local and toll-free numbers instantly.',
      icon: Phone,
    },
    {
      name: 'AI Powered Tracking & Analytics',
      desc: 'Capture insights with call transcription & AI summaries.',
      icon: Bot,
    },
    {
      name: 'SMS & Call Forwarding',
      desc: 'Route calls & texts seamlessly to your teams.',
      icon: MessageSquare,
    },
    {
      name: 'Inbound Call Tracking',
      desc: 'Know exactly which campaign drove the call.',
      icon: TrendingUp,
    },
    {
      name: 'Effortless Client Management',
      desc: 'White-label dashboards, billing, and reporting.',
      icon: Users,
    },
    {
      name: 'Free Call Recording',
      desc: 'Record & store calls securely without extra costs.',
      icon: Mic,
    },
    {
      name: 'Call Whispering',
      desc: 'Coach sales reps in real-time with call whisper.',
      icon: Headphones,
    },
    {
      name: 'Missed Call Notifications',
      desc: 'Never lose a lead with instant missed-call alerts.',
      icon: Bell,
    },
    {
      name: 'Fully automated reporting system',
      desc: 'Schedule reports & share insights effortlessly.',
      icon: BarChart,
    },
  ]

  return (
    <section className="relative mt-12 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          We offer all the features you need
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          At the lowest possible prices — designed to scale with your business.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.name}
            </h3>
            <p className="mt-2 text-sm text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <a
          href="#"
          className="rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-orange-600"
        >
          View Interactive Demo
        </a>
        <p className="text-md font-medium text-gray-500 italic">
          No credit card needed.
        </p>
      </div>
    </section>
  )
}
