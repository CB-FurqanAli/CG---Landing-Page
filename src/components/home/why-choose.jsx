import { Info, LogOut, Plus } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: <LogOut className="h-8 w-8 text-blue-500" />,
      title: '💸 Unbeatable Pricing',
      description:
        'Track numbers for just $0.50 each—while others charge up to $3.00.',
    },
    {
      icon: <Info className="h-8 w-8 text-blue-500" />,
      title: '⚡ Effortless Setup',
      description:
        'Start tracking calls in minutes with AI-powered automation.',
    },
    {
      icon: <Plus className="h-8 w-8 text-blue-500" />,
      title: '👥 Client Access & Billing',
      description:
        'Give clients their own dashboards and bill per qualified call.',
    },
  ]

  return (
    <section className="bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Why Choose CallGauge AI?
        </h2>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div>{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="w-[308px] text-sm text-gray-900">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
